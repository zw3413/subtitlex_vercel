import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client"  
const prisma = new PrismaClient();
import Stripe from "stripe";
export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2023-08-16",
});

export async function getSubscription() {
    const session = await getServerSession(options);

    if (session) {
        const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

        const subscriptions = await stripe.subscriptions.list({
            customer :user?.stripe_customer_id
        })

        return subscriptions;
    }
    return false;
}

export async function createCheckoutLink_Weekly(customer) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: String(process.env.DOMAIN_NAME) + "/Member",
        cancel_url: String(process.env.DOMAIN_NAME)+"/Member",
        customer: customer,
        line_items: [
            {
                price: process.env.STRIPE_PRODUCT_WEEKLY_ID,
                quantity:1
                //price: 'price_1P12o6Lch9pwz6rlVLVCPysi'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export async function createCheckoutLink_Monthly(customer) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: String(process.env.DOMAIN_NAME) + "/Member",
        cancel_url: String(process.env.DOMAIN_NAME)+"/Member",
        customer: customer,
        line_items: [
            {
                price: process.env.STRIPE_PRODUCT_MONTHLY_ID,
                quantity:1
                //price: 'price_1P12o6Lch9pwz6rlVLVCPysi'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

// Generate Customer portal
export async function generateCustomerPortalLink(customerId) {
    try {
        
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: process.env.DOMAIN_NAME + "/Member", 
        });

        console.log()

        return portalSession.url;
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

export async function createCustomerIfNull() {
    const session = await getServerSession(options);
    console.log('createCustomerIfNull')
    console.log(session)
    if (session) {
        const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

        if (!user?.stripe_customer_id) {
            const customer = await stripe.customers.create({
                email:user?.email
            })
            console.log("stripe.customers.create")
            console.log(customer)
            await prisma.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    stripe_customer_id: customer.id
                }
            })
        }
        const user2 = await prisma.user.findFirst({ where: { email: session.user?.email } });
        return user2?.stripe_customer_id;
    }

}
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import Link from "next/link";


async function Feedback() {
  const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/Feedback");
  // }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });


  const hasSub = await hasSubscription();

  const checkout_link = await createCheckoutLink(user?.stripe_customer_id);

  return (
    <div className="max-w-4xl m-auto w-full px-4">
      <div className="flex flex-col">
        <p className="text-2xl font-medium">Welcome, {session?.user?.name}</p>
        <div className="py-4">
     
        </div>

        <div className="">
          {hasSub ? (
            <div className="p-6 round-md border-white-400 shadow-sm font-medium">
              Subscribed
            </div>
          ) : (
            <div className="p-6 round-md border-zinc-400 shadow-sm font-medium flex items-center gap-2">
              Free plan
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Member;

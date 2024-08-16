"use server"
import { getProviders } from "next-auth/react";
import SignInForm from "./SignInForm";
import { useTranslation } from "../../../i18n";

export default async function SignIn({params:{lng}}) {
  const  {t}  = await useTranslation(lng,"auth");

  const providers = await getProviders();
console.log(providers)
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md space-y-10 rounded-xl p-10 shadow-md">
        <h2 className="my-6 text-center text-3xl font-extrabold text-white">
          {t('Sign in to your account')}
        </h2>
        <SignInForm providers_str={JSON.stringify(providers)} lng={lng} />
      </div>
    </div>
  );
}
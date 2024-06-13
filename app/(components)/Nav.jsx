import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <nav className="flex justify-between items-center w-full px-10 py-4">
        {/* <div>SubtitleX</div> */}
        <div className="flex gap-8 text-lg  underline text-slate-400 ">
          <Link href="/Extension" className="hover:text-white">Extension</Link> 
          {/* <Link href="/Jable-Helper" className="hover:text-white">Jable-Helper</Link> */}
          {/* <Link href="/CreateUser">CreateUser</Link> */}
          {/* <Link href="/ClientMember">ClientMember</Link> */}
          <Link href="/Member" className="hover:text-white">Member</Link>
          <Link href="https://subtitlex.canny.io/" target="_blank" className="hover:text-white">
            Request Feature
          </Link>

          {/* <Link href="/Subscription">Subscription</Link> */}
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/" className="hover:text-white">
              Logout
            </Link>
          ) : (
            <Link href="/api/auth/signin?callbackUrl=/Member" className="hover:text-white">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

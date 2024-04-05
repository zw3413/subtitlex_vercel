import Link from "next/link"
import { getServerSession } from "next-auth"
import {options} from "../api/auth/[...nextauth]/options"

const Nav = async () => {
  const session = await getServerSession(options)
  return (
    <header className="bg-grey-600 text-grey-100"><nav className="flex justify-between items-center w-full px-10 py-4">
      {/* <div>SubtitleX</div> */}
      <div className="flex gap-10">
        {/* <Link href="/jable-helper">Jable-Helper</Link> */}
        {/* <Link href="/CreateUser">CreateUser</Link> */}
        {/* <Link href="/ClientMember">ClientMember</Link> */}
        <Link href="/Member">Member</Link>
        {/* <Link href="/Public">Public</Link> */}
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/jable-helper">Logout</Link>) : (
          <Link href="/api/auth/signin?callbackUrl=/jable-helper">Login</Link>
        )}
      </div>
    </nav></header>
  )
}

export default Nav
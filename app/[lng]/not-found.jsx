'use server'
import Link from 'next/link'

export default async function NotFound() {
    
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Return to <Link className='text-color-jable underline' href="/">Home Page</Link>
     {" "}
        or <Link className=' underline' href="/Member" >Feedback</Link> an issue.
      </p>
    </div>
  )
}
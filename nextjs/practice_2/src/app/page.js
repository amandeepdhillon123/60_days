"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router= useRouter();
  const navigate=(name)=>{
     router.push(name)
  }
  return (
  <main>
     <h1>Basic routing | Make New Page</h1>
     <Link href="/login"> GO to Link page</Link> <br /> <br />
     <Link href="/about"> GO to About page</Link> <br /> <br />

     {/* <button onClick={()=>router.push("/login")}>GO to Login page</button> <br /> <br />
     <button onClick={()=>router.push("/about")}>Go to About page</button> <br /> */}
  
        <button onClick={()=>navigate("/login")}>GO to Login page</button> <br /> <br />
       <button onClick={()=>navigate("/about")}>Go to About page</button> <br />
  
  </main>
  
  )
}

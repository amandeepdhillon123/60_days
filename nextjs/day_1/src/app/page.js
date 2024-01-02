"use client"
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {

  const[name, setName]= useState("amandeep")
  // let data= "ram";
  const apple=()=>{
    // alert("fruit")
    // alert(item)
    // data="bhsakweet"
    // console.log(data)
   setName("smay")

  }
  return (
    <main className={styles.main}>
     
      <h1> {name}</h1> 
       {/* <button onClick={()=> alert("hello next.js")}>click me</button> */}
       <button onClick={()=>apple()}>click me</button>
       {/* <button onClick={()=> apple("fruit")}>click me</button> */}
    </main>
  )
}



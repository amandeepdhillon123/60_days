import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="ram"/>
      <User name="shyam"/>
      <User name="sita"/>
      <User name="krishan"/>
      <User name="raamu"/>
      

      <h1>Amandeep Dhillon</h1>
       
      
    </main>
  )
}

const User=(props)=>{
   return(
    <div>
      <h1>{props.name}</h1>
    </div>
   )
}

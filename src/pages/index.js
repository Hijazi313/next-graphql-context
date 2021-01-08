import {useContext} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
  import {CountContext} from "../context/CountContext"

export default function Home() {
const  {count, countDecrement, countIncrement } = useContext(CountContext)  
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
        count = {count}
        <button onClick={countIncrement} >+</button>
        <button onClick={countDecrement} >-</button>

      </main>


    </>
  )
}

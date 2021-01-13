import {useContext} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
  import {CountContext} from "../context/CountContext"
import Landing from "./landing"
import { Button } from "@material-ui/core"

export default function Home() {
const  {count, countDecrement, countIncrement } = useContext(CountContext)  
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <Landing>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to Next.js!
        </h1>
        count = {count}
        <Button onClick={countIncrement} size="large" >+</Button>
        <Button onClick={countDecrement} size="large">-</Button>
        
      </main>
      </Landing>


    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from '../../components/Dashboard'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const router = useRouter()
  const {status, data: session} = useSession({
    required:true,
    onUnauthenticated(){
      router.push('/auth/signin');
    }
  })
  if(status === "loading")
  {
    return <Loader/>
  }

  console.log(session)
  return (
    <>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard/>
    </>
  )
}

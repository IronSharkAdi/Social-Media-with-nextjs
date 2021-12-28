import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';


const Home: NextPage = () => {
  const router = useRouter()
  useEffect (() => {
      if(!router.isReady) return 
      if(!localStorage.getItem("User")){
        router.push("register")
      }
  }, [router])
  return (
      <div className='h-screen bg-gray-100 overflow-hidden'>
          <Head>
              <title>Social Media</title>
          </Head>
            <Header/>
          <main className='flex'>
            <Sidebar/>
          </main>
      </div>
  )
}

export default Home

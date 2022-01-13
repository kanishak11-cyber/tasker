import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Avatars from '../components/Avatars'
import styles from '../styles/Home.module.css'
import Todo from '../components/Todo'
import { useMoralis } from 'react-moralis'
import { useWeb3React } from '@web3-react/core'
// import LoginMoralis from '../components/LoginMoralis'
import Login from '../components/Login'
// This is for Alan AI

export default function Home({logoutOnPress,username}) {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (e) {
      console.log(e)
    }

  }
  const { isAuthenticated, logout } = useMoralis();

  //  const isAuthenticated = false;
  if (!isAuthenticated) { <Login /> }

  return (

    <div className='w-full h-screen'>

      <Head>
        <title>NFTasker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='gradient-bg-welcome '>

        <NavBar />  
        <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
         
          <Avatars logoutOnPress />
        </div>
        <Todo />
      </div>
    </div>

  )
}

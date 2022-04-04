import React from 'react'
import Navbar from '../components/Navbar'
import Head from "next/head";

const chat = () => {

  return (
    <div>
        <Head>
            <title>Chat</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navbar />
    </div>
  )
}

export default chat
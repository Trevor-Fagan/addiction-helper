import React from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import Head from "next/head";

const profile = () => {
    const { user, error, isLoading } = useUser();
  
    if (user) {
        return(
        <div>
            <Head>
                <title>Profile</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <Chat />

            <div className="p-20">
                <img src={user.picture} className="rounded-full" />
                <p>{user.name}</p>
                <p>{user.email}</p>
                <a href="api/auth/logout">Logout</a>
            </div>
        </div>
        );
    }
}

export default profile
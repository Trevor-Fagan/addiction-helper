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
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <a href="api/auth/logout">
                    <svg style={{display: "inline-block"}} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg><span style={{display: "inline-block"}}>Logout</span>
                </a>
            </div>
        </div>
        );
    }
}

export default profile
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Navbar from '../components/Navbar.js';
import Chat from '../components/Chat.js';
import Head from "next/head";

export default () => {
 const { user, error, isLoading } = useUser();

 if (user) { // USER IS AUTHENTICATED
   return (
     <div>
       <Head>
        <title>AddictionHelper Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

       <Navbar />
       <Chat />
     </div>
   );
 } else { // USER NOT AUTHENTICATED
   return(
    <div>
      <Head>
        <title>AddictionHelper Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div class="navbar bg-base-100 absolute">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">AddictionHelper</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <a class="btn ml-5" href="/api/auth/login">Get started</a>
        </div>
      </div>

      <div className="hero min-h-screen" style={{backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Start Fresh</h1>
            <p className="mb-5"> "Research shows that when someone publicly shares their goals, they have around a 65% chance of success. However, having a specific accountability partner boosts that chance to 95%." -Signature Analytics</p>
            <a className="btn btn-primary" href="/api/auth/login">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
 }
};
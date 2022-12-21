import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { use, useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>HOMEPAGE</title>
      </Head>

      {session ? authorisedUser({ session }) : Guest()}
    </div>
  );
}

//guest component
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link legacyBehavior href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}
//authorised user component
function authorisedUser({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorised User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5> {session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm  bg-indigo-500 text-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link legacyBehavior href={"/profile"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-gray-50">Profile</a>
        </Link>
      </div>
    </main>
  );
}

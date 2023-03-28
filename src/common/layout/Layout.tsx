import React, { PropsWithChildren, useEffect, useState } from "react"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useMediaQuery } from "@mui/material"
import Footer from "./Footer"

export default function Layout({ children }: PropsWithChildren<{}>) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-full fit-full-h min-h-screen bg-app-default">
        <div className="w-full flex-1 fit-full-h">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

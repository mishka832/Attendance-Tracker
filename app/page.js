"use client"
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=> {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  },[])
  return (
   <div>
    <h2> Help me build!</h2>
    <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink>
   </div>
  );
}

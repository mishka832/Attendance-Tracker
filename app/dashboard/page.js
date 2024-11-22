"use client"
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes';

function dashboard() {
    const { setTheme } = useTheme()
    useEffect(()=>{
        setTheme('dark');

    },[])
    
  return (
    <div>dashboard</div>
  )
}

export default dashboard
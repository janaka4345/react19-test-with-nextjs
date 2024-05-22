'use client'
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  'use memo'
  console.log('page componnet renderd');

  const [num, setNum] = useState<number>(0)
  const first = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(first.current?.children);
    return () => {

    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* rerender check */}
      <Navbar />
      {num}
      <button onClick={() => setNum(prev => prev + 1)}>increment</button>
      <Menu ref={first} />
    </main>
  );
}

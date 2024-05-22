'use client'
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  'use memo'
  console.log('page componnet renderd');

  const [num, setNum] = useState<number>(0)
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Navbar />
      {num}
      <button onClick={() => setNum(prev => prev + 1)}>increment</button>
    </main>
  );
}

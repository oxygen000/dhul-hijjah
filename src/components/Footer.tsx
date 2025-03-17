import React from 'react'
import Image from "next/image";

function Footer() {
  return (
    <>
    <main className='bg-[#111633] w-full text-white '>
        <div>
        <Image src="/MosqueFooter.png" alt="Right Design" width={300} height={200} />
        </div>
        <div>
            <h1>Dhul Hijjah</h1>
        </div>
        <div>
        <h2>Quick Links</h2>
        </div>
        <div></div>
        <div></div>
    </main>
    </>
  )
}

export default Footer

'use client'
import Image from 'next/image'
import bsvCode from '../../../public/bsvcode.png'
export function Logo(props: any) {
  return (
    <div className='flex justify-start gap-2 items-center mt-1'  >
      <Image src={bsvCode} alt="desenvolvendo o futuro linha por linha" />
    </div>
  )
}

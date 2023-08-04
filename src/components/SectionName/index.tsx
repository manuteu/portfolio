import React from 'react'

interface SectionNameProps {
  name: string;
  color: string;
}


export default function SectionName({ name, color }: SectionNameProps) {
  return (
    <div className='max-w-[330px]'>
      <p className='text-left leading-none break-words uppercase text-[144px] font-bold' style={{color: color}}>{name}</p>
    </div>
  )
}

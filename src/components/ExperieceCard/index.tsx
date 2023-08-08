import React from 'react'

interface ExperienceProps {
  project: string;
  description: string;
  office: string;
  techs: string[];
  year: string;
}

export default function ExperienceCard({ project, description, office, techs, year }: ExperienceProps) {
  return (
    <div className='flex mb-5'>
      <div className='gap-8 flex mt-5 max-w-[82px]'>
        <span className='text-neutral-600 text-sm font-normal leading-tight min-w-[46px]'>{year}</span>
        <div className='w-1 h-5 bg-gradient-to-b from-lime-400 to-lime-500' />
      </div>
      <div className='flex max-w-[660px] p-4 min-h-[140px] bg-[#F5F5F5] border border-[#F0F0F0] rounded'>
        <div className='flex flex-col items-start w-3/5'>
          <h4 className='text-black text-lg font-bold leading-tight'>{project}</h4>
          <p className='w-4/5 text-sm font-normal mt-2 text-left text-neutral-600 leading-tight'>{description}</p>
        </div>
        <div className='flex flex-col items-start w-2/5'>
          <h4 className='text-lg font-bold'>{office}</h4>
          <div className='flex gap-2.5 flex-wrap mt-3'>
            {techs.map((item: string, index) => (
              <div key={index} className='inline-flex py-[5px] px-[10px] justify-center rounded bg-[#FFF]'>
                <p className='text-sm'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

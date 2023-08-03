import React from 'react'

interface ExperienceProps {
  project: string;
  description: string;
  office: string;
  techs: string[];
}

export default function ExperienceCard({ project, description, office, techs }: ExperienceProps) {
  return (
    <div className='flex max-w-[660px] h-[140px] bg-[#F5F5F5] border border-[#F0F0F0] rounded'>
      <div className='flex flex-col items-start w-2/3 mt-[18px] ml-[18px]'>
        <h4 className='text-lg font-bold '>{project}</h4>
        <p className='text-sm mt-2'>{description}</p>
      </div>
      <div className='flex flex-col items-start w-1/3 mt-[18px]'>
        <h4 className='text-lg font-bold'>{office}</h4>
        <div className='flex gap-2.5 mt-3'>
          {techs.map((item: string, index) => (
            <div key={index} className='inline-flex py-[5px] px-[10px] justify-center rounded bg-[#FFF]'>
              <p className='text-sm'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

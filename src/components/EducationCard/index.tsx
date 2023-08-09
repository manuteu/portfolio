import React from 'react'

interface ExperienceProps {
  type: string;
  course: string;
  university: string;
}

export default function EducationCard({ type, course, university }: ExperienceProps) {
  return (
    <div className="w-48 h-48 relative bg-neutral-950 rounded border border-black">
      <div className="flex flex-col items-start p-5 h-full">
        <span className="text-neutral-400 text-sm font-normal leading-tight">{type}</span>
        <span className="text-left text-white text-lg font-bold leading-normal mt-3">{course}</span>
        <span className="flex items-end h-full text-neutral-400 text-lg font-normal leading-tight">{university}</span>
      </div>
      <div className="w-1 h-5 -left-[5px] top-[54px] absolute bg-gradient-to-b from-lime-400 to-lime-500" />
    </div>
  )
}

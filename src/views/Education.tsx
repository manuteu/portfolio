import React from 'react'
import EducationCard from '../components/EducationCard'
import SectionName from '../components/SectionName'
import SelectIcon from '../icons'

export default function Education() {
  return (
    <section className='min-h-[960px] bg-[#141414]'>
      <div className='flex justify-between w-5/6 max-w-[1300px] m-auto pt-28'>
        <SectionName name="Formação" color="#000" />
        <div className='mx-10' />
        <div className='flex flex-col max-w-[660px] w-[660px]'>
          <div className="flex flex-row max-w-[550px] mb-12">
            <span className="text-left text-neutral-600 text-[#A3A3A3] text-2xl font-normal leading-loose">
              Minha primeira e única (por enquanto) experiência acadêmica foi o tecnólogo 🎓
              que fiz em ADS no UNICEUB. Além disso me mantenho sempre atualizado com cursos intensivos online.
            </span>
          </div>
          <div className='flex flex-wrap justify-between gap-5'>
            <EducationCard type='Bootcamp' course='Desenvolvedor Front End' university='IGTI' />
            <EducationCard type='Tecnólogo' course='Análise e Desenvolvimento de Sistemas' university='UNICEUB' />
            <EducationCard type='Colegial' course='Ensino Médio' university='CEAG' />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {SelectIcon('course')}
      </div>
      <div>
        <span className="text-neutral-400 text-sm font-bold leading-tight">CURSOS INTENSIVOS</span>
        <div className='flex justify-between'>
          <span className="text-white text-lg font-normal leading-tight">UX Design & UI Design</span>
          <span className="text-neutral-400 text-lg font-normal leading-tight">56h</span>
        </div>
        <div className='flex justify-between'>
          <div className="text-white text-lg font-normal leading-tight">Front End para Iniciantes</div>
          <span className="text-neutral-400 text-lg font-normal leading-tight">56h</span>
        </div>
      </div>
    </section>
  )
}

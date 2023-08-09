import React from 'react'
import EducationCard from '../components/EducationCard'
import Reveal from '../components/Reveal';
import SectionName from '../components/SectionName'
import SelectIcon from '../icons'
interface CourseTypes {
  course: string;
  duration: string;
}

interface LanguageTypes {
  idiom: string;
  level: string;
}

export default function Education() {

  const CourseRow = ({ course, duration }: CourseTypes) => (
    <Reveal>
      <div className='flex justify-between'>
        <span className="text-white text-lg font-normal leading-tight">{course}</span>
        <span className="text-neutral-400 text-lg font-normal leading-tight">{duration}</span>
      </div>
    </Reveal>
  )
  const LanguageRow = ({ idiom, level }: LanguageTypes) => (
    <Reveal>
      <div className='flex gap-2'>
        <span className="text-white text-lg font-normal leading-tight">{idiom}</span>
        <span className="text-neutral-400 text-lg font-normal leading-tight">/</span>
        <span className="text-neutral-400 text-lg font-normal leading-tight">{level}</span>
      </div>
    </Reveal>
  )

  return (
    <section id='education' className='min-h-[960px] bg-[#141414] py-28'>
      <div className='flex justify-between w-5/6 max-w-[1300px] m-auto '>
        <SectionName name="Formação" color="#000" />
        <div className='mx-10' />
        <div className='flex flex-col max-w-[660px] w-[660px]'>
          <div className="flex flex-row items-start max-w-[550px] mb-12">
            <Reveal styles='flex'>
              <span className="text-left text-neutral-600 text-[#A3A3A3] text-2xl font-normal leading-loose">
                Minha primeira e única (por enquanto) experiência acadêmica foi o <strong className='text-[#FFF]'>tecnólogo</strong>🎓
                que fiz em ADS no <strong className='text-[#FFF]'>UNICEUB</strong>. Além disso me mantenho sempre atualizado com cursos intensivos online.
              </span>
            </Reveal>
          </div>
          <Reveal>
            <div className='flex flex-wrap justify-between gap-5'>
              <EducationCard type='Colegial' course='Ensino Médio' university='CEAG' />
              <EducationCard type='Bootcamp' course='Desenvolvedor Front End' university='IGTI' />
              <EducationCard type='Tecnólogo' course='Análise e Desenvolvimento de Sistemas' university='UNICEUB' />
            </div>
          </Reveal>
          <div className='my-7' />
          <div className='flex flex-col relative gap-5'>
            <div className='flex items-center gap-4 absolute -left-10'>
              {SelectIcon('course')}
              <span className="text-neutral-400 text-sm font-bold leading-tight">CURSOS INTENSIVOS</span>
            </div>
            <div className='my-4' />
            <CourseRow course='Desenvolvedor Front End' duration='148h' />
            <CourseRow course='Web Design Completo' duration='44h' />
            <CourseRow course='Inovando com CSS' duration='26h' />
            <CourseRow course='CSS Grid Layout' duration='10h' />
            <CourseRow course='CSS Flexbox' duration='6h' />
            <CourseRow course='Introdução ao PHP' duration='6h' />
            <CourseRow course='HTML Avançado' duration='6h' />
            <CourseRow course='Como gerenciar o estado das aplicações com Redux' duration='2h' />
          </div>
          <div className='flex flex-col relative gap-5 mt-14'>
            <div className='flex items-center gap-4 absolute -left-10'>
              {SelectIcon('languages')}
              <span className="text-neutral-400 text-sm font-bold leading-tight">IDIOMAS</span>
            </div>
            <div className='my-4' />
            <LanguageRow idiom='Inglês' level='Intermediário' />
            <LanguageRow idiom='Português' level='Nativo' />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end'>
      </div>
    </section >
  )
}

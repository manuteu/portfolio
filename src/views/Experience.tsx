import React from 'react'
import ExperienceCard from '../components/ExperieceCard'
import Reveal from '../components/Reveal'
import SectionName from '../components/SectionName'

export default function Experience() {
  return (
    <section id="experience" className='flex justify-between w-5/6 max-w-[1300px] m-auto py-28 hiddenScroll'>
      <SectionName name="experiência" color="#E0E0E0" />
      <div className='flex flex-col'>
        <Reveal>
          <div className="flex items-start flex-row max-w-[550px] self-start mb-12">
            <div className='mx-10' />
            <span className="text-left text-neutral-600 text-2xl font-normal leading-loose">
              Desenvolvo de pequenos projetos até projetos de porte grande e de alta escalabilidade. Utilizando como principais ferramentas o <strong>ReactJS</strong> e <strong>VueJS</strong>.
            </span>
          </div>
        </Reveal>
        <ExperienceCard
          project='MoneyCloud - Wallet'
          description="Carteira digital de uma fintech, onde atuei desenvolvendo o front-end em formato Whitelabel, integrando API's, resolvendo bugs, criando prototipos, análise de requisitos e upload de apps na App Store e Play Store."
          office='Desenvolvedor Pleno'
          techs={['TS', 'REACT', 'REDUX', 'MATERIAL UI', 'CORDOVA', 'GIT', 'GITLAB']}
          year="2021-23"
        />
        <ExperienceCard
          project='MoneyCloud - Manager'
          description="Sistema de gerenciamente de uma fintech, desenvolvendo o front-end em formato Whitelabel, prototipando, integrando API's, resolvendo bugs e gerenciando CI/CD."
          office='Desenvolvedor Pleno'
          techs={['JS', 'VUE', 'VUEX', 'VUESAX', 'VUEXY', 'TAILWIND', 'GIT', 'GITLAB']}
          year="2021-23"
        />
        <ExperienceCard
          project='Cognitivy Spaces'
          description='Projeto de criptomoeda própria, participei desenvolvendo um SPA resposivo com design bastante desafiador.'
          office='Desenvolvedor Júnior'
          techs={['JS', 'TS', 'VUE', 'VUEX', 'TAILWIND', 'GIT', 'GITHUB']}
          year="2022"
        />
      </div>
    </section>
  )
}

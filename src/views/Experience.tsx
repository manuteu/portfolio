import React from 'react'
import ExperienceCard from '../components/ExperieceCard'
import SectionName from '../components/SectionName'

export default function Experience() {
  return (
    <section className='flex justify-between'>
      <SectionName name="experiência" color="#E0E0E0"/>
      <div className='flex flex-col items-end'>
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

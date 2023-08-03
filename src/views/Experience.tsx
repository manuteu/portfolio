import React from 'react'
import ExperienceCard from '../components/ExperieceCard'

export default function Experience() {
  return (
    <section>
      <ExperienceCard
        project='MoneyCloud'
        description='Trebalhei pra cacete'
        office='Desenvolvedor'
        techs={['JS','TS','REACT','VUE']}
      />
    </section>
  )
}

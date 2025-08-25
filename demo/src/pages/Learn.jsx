import React from 'react'
import Section1 from '../components/LearnComponent/Section1'
import Section2 from '../components/LearnComponent/Section2'

export default function Learn() {
  return (
    <div >
    <Section1/>
    <Section2 title="hasnaa" age="25" />
    <Section2 title="sara" />
    <Section2 title="ali" />
    <Section2 title="ahmed" />
    </div>
  )
}

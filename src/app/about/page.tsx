import React from 'react'
import Counter from './components/counter'
import ServerComp from './components/serverComp'

function About() {
  return (
    <>
      <div>About</div>
      {/* ServerComp is server component as child */}
      <Counter>
        <ServerComp />
      </Counter>
    </>

  )
}

export default About
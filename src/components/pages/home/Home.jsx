import React from 'react'
import Hero from './Hero'
import Center from './Center'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='w-full bg-[#EFEAE3]'>
      <Hero />
      <Center/>
      <Projects/>
    </div>
  )
}

export default Home

import React from 'react'

import AdvertSection from '../components/homePageComponents/AdvertSection'
import DecsriptionSection from '../components/homePageComponents/DecsriptionSection'
import TeamGroup from '../components/homePageComponents/TeamGroup'
import Articles from '../components/homePageComponents/Articles'
import SubscribeForm from '../components/homePageComponents/SubscribeForm'
import Booking from '../components/homePageComponents/Booking'

const Home = () => {
  return (
    <div className='content--wrapper'>
      <AdvertSection />
      <DecsriptionSection />
      <TeamGroup />
      <Articles />
      <SubscribeForm />
      <Booking />
    </div>
  )
}

export default Home
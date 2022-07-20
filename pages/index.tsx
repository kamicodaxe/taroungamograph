import type { NextPage } from 'next'
import CTA from '../components/CTA'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'
import OurWork from '../components/OurWork'

const Home: NextPage = () => {
  return (
    <Layout>
      <NavBar active="home" />
      <HomeHeader />
      <OurWork />
      <CTA />
      <Testimonials />
      <TrustedBy />
    </Layout>
  )
}

export default Home

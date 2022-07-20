import type { NextPage } from 'next'
import AboutCEO from '../components/AboutCEO'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

const Projects: NextPage = () => {
  return (
    <Layout>
      <NavBar active="A Propos" />
      <Header title="A Propos" />
      <AboutCEO />
    </Layout>
  )
}

export default Projects

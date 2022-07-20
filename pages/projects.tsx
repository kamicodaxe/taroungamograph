import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

const Projects: NextPage = () => {
  return (
    <Layout>
      <NavBar active="projets" />
      <Header title="Projets" />
      <section className="bg-black text-gray-100 py-16 space-y-12">
        {
          new Array(10).fill('hi').map(
            (v, i) => (
              <div key={v + i} className="container mx-auto flex flex-col md:flex-row lg:px-16">
                <div className="flex bg-white">
                  <Image src="https://source.unsplash.com/TlRQin0iwjE/1080x1920" alt='Image from unsplash' width={1280} height={720} className="object-cover" />
                </div>
                <div className="flex flex-col p-2 pb-4 md:pl-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Bogital</h3>
                  <p className="text-gray-500 text-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  </p>
                </div>
              </div>
            )
          )
        }
      </section>
    </Layout>
  )
}

export default Projects

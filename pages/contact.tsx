import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

// TODO: Add forms plugin
// npm install -D @tailwindcss/forms

// tailwind.config.js
// module.exports = {
//   theme: {
//     // ...
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     // ...
//   ],
// }

const Contact: NextPage = () => {
  return (
    <Layout>
      <NavBar active="contact" />
      <Header title="Contact Us" />
    </Layout>
  )
}

export default Contact

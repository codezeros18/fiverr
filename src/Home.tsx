import React from 'react'
import Landing from './pages/Landing'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Home: React.FC = () => {

    return (
        <div>
            <Navbar />
            <Landing />
            <Footer />
        </div>
    )
}

export default Home;
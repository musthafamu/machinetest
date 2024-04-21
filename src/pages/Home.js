import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main.js'
import Cyclecard from '../components/Cyclecard.js'
import Testimony from '../components/Testimony.js';
import Footer from '../components/Footer.js';
import Bestproduct from '../components/Bestproduct.js';
import Gallary from '../components/Gallary.js';
function Home() {
  return (
    <div>

 <Navbar/>
 <Main />
 <Cyclecard />
 <Testimony />
 <Bestproduct />
 <Gallary/>
 <Footer/>

    </div>
  )
}

export default Home
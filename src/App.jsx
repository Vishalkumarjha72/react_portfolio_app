import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SocialLInks from './components/SocialLInks'


function App() {

  const [menu, setMenu] = useState(false);
  


  return (
    


    <div >
      {
        menu
        ?<Navbar menu={menu} setMenu={setMenu}/>
        :<>
        <Navbar menu={menu} setMenu={setMenu}/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <SocialLInks/>
        
        </>
        
      }
      
      
    </div>
    
  )
}

export default App

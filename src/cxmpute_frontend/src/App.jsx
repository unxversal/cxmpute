import { useState, useRef } from 'react';
import { cxmpute_backend } from 'declarations/cxmpute_backend';
import Spiral from '../components/3dspiral/3dspiral';
import Overlay from '../components/overlay/overlay';
import Dashboard from '../components/dashboard/dashboard';
import Hero from '../components/hero/hero';
import Process from '../components/process/process';
import Architecture from '../components/architecture/architecture';
import Roadmap from '../components/roadmap/roadmap';
import Footer from '../components/footer/footer';

function App() {
  const [greeting, setGreeting] = useState('');
  const [dashboardOpen, setDashboardOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    cxmpute_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function toggleDashboard() {
    setDashboardOpen((prev) => !prev);
  }

  
  

  return (
    <main>

      {!dashboardOpen && 
      <>
        <div id="hero">
          <div id="spiralcontainer">
            <Spiral />
          </div>
          <div id="overlay"><Overlay /></div>
        </div>
        
        <Hero />

        <Process />
        <Architecture />
        <Roadmap />
        <Footer toggleDashboard={toggleDashboard}  />
      </>}

      {dashboardOpen && <Dashboard toggleDashboard={toggleDashboard} />}
      
      
      
      
      
      
    </main>
  );
}

export default App;
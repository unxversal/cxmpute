import { useState, useRef } from 'react';
import { cxmpute_backend } from 'declarations/cxmpute_backend';
import Spiral from '../components/3dspiral/3dspiral';
import Overlay from '../components/overlay/overlay';
import Dashboard from '../components/dashboard/dashboard';
import Hero from '../components/hero/hero';

function App() {
  const [greeting, setGreeting] = useState('');
  const [home, setHome] = useState(true);
  const [dashboardOpen, setDashboardOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    cxmpute_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function scrollToRightPage() {
    // Scroll horizontally to the right section (if your layout is using 200vw as width)
    window.scrollTo({
      left: window.innerWidth,  // Scroll to the right page (200vw width means one full screen shift)
      behavior: 'smooth'  // Smooth scroll effect
    });

    setHome(false);
  }

  function scrollToLeftPage() {
    // Scroll horizontally to the right section (if your layout is using 200vw as width)
    window.scrollTo({
      left: -window.innerWidth,  // Scroll to the right page (200vw width means one full screen shift)
      behavior: 'smooth'  // Smooth scroll effect
    });

    setHome(true);
  }

  function toggleDashboard() {
    setDashboardOpen((prev) => !prev);
  }

  
  

  return (
    <main>

      
        <div id="rightcontent">
          {!home && <button id="scrollButton2" onClick={() => scrollToLeftPage()}>《</button>}
          {!dashboardOpen && <Hero toggleDashboard={toggleDashboard}  />}
          {dashboardOpen && <Dashboard toggleDashboard={toggleDashboard} />}
        </div>
      
      
      
      
      
      
      
    </main>
  );
}

export default App;

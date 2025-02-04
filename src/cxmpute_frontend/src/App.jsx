import { useState } from 'react';
import { cxmpute_backend } from 'declarations/cxmpute_backend';
import Spiral from '../components/3dspiral/3dspiral';
import Overlay from '../components/overlay/overlay';

function App() {
  const [greeting, setGreeting] = useState('');
  const [home, setHome] = useState(true);

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
  }
  

  return (
    <main>

      <div id="left">

        <div id="spiralcontainer">
          <button id="scrollButton" onClick={() => scrollToRightPage()}>》</button>
          <Spiral />
        </div>

        {/* <div id="overlay">
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
          </form>
          <section id="greeting">{greeting}</section>
        </div> */}

        {home && <div id="overlay"><Overlay /></div>}

      </div>

      <div id="right">
        <div id="rightbalancer"></div>
        <div id="rightcontent">
          <h1>cxmpute</h1>
          <p>the decentralized backend for the web</p>
        </div>
      </div>
      
      
      
      
      
      
      
    </main>
  );
}

export default App;

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

  return (
    <main>

      <div id="left">

        <div id="spiralcontainer">
          <Spiral />
        </div>

        <div id="overlay">
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
          </form>
          <section id="greeting">{greeting}</section>
        </div>

        {home && <Overlay />}

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

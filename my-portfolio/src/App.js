import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Prashant Kumar - Software Developer</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            My name is Prashant, and I'm a passionate software developer.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus eros vitae neque vehicula, id lacinia quam fermentum.
          </p>
        </section>
        {/* Add more sections for projects, skills, etc. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

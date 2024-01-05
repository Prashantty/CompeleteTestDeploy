import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Prashant Kumar - Full Stack Developer</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi, I'm Prashant Kumar, a Full Stack Developer specializing in MERN stack. I'd my Master's in Computer Applications (MCA) at Galgotias University. My journey in the field of
            computer science began with a Bachelor's in Computer Application (BCA) from Patliputra University.
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          <div>
            <h3>SVAM International Inc. - Associate Software Engineer</h3>
            <p>
              <strong>Full-time:</strong> Oct 2023 - Present (4 months)
            </p>
            <p>
              <strong>Internship:</strong> Apr 2023 - Oct 2023 (7 months)
            </p>
            <p>Noida, Uttar Pradesh, India</p>
            <p>
              <strong>Skills:</strong> Node.js, MongoDB, Microsoft Azure, .NET Framework, AngularJS, Angular CLI,
              Angular Material, SQL, Microsoft SQL Server, Gitlab
            </p>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div>
            <h3>Galgotias University - MCA, Computer Science</h3>
            <p>Oct 2021 - May 2023</p>
            <p>Grade: 8.8 CGPA</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
          <div>
            <h3>Patliputra University - BCA, Computer Science</h3>
            <p>Aug 2018 - Sep 2021</p>
            <p>Grade: 74%</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
        </section>

        <section>
          <h2>Licenses & Certifications</h2>
          <div>
            <h3>AWS - Amazon Web Services</h3>
            <p>Issued Aug 2022</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
          <div>
            <h3>AWS - Amazon Web Services</h3>
            <p>Issued Jul 2022</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
            {/* Add more skills based on your profile */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react';

// import './App.css';
// import Header from './Components/HeaderComponent/HeaderComponent';
// import About from './Components/AboutComponents/AboutComponent';
// import Skills from './Components/SkillComponents/SkillComponent';

// import Projects from './Components/ProjectComponents/ProjectComponents';
// import Certifications from './Components/CertifyComponents/CertifyComponents';
// import Contact from './Components/ContactComponents/ContactComponent';

// const App = () => {
//   return (
//     <div className="App">
//      <Header></Header>
//       <main>
//        <About></About>
//        <Skills></Skills>
      
//        <Projects></Projects>
//        <Certifications></Certifications>
//        <Contact></Contact>

//       </main>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import Header from './Components/HeaderComponent/HeaderComponent';
import About from './Components/AboutComponents/AboutComponent';
import Skills from './Components/SkillComponents/SkillComponent';
import Projects from './Components/ProjectComponents/ProjectComponents';
import Certifications from './Components/CertifyComponents/CertifyComponents';
import Contact from './Components/ContactComponents/ContactComponent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import './SkillComponents.css'

import picture1 from '../../assets/c.png';
import picture2 from '../../assets/css.png';
import picture3 from '../../assets/e.png';
import picture4 from '../../assets/html.png';
import picture5 from '../../assets/java.png';
import picture6 from '../../assets/js.png';
import picture7 from '../../assets/m.jpg';
import picture8 from '../../assets/n.png';
import picture9 from '../../assets/o.png';
import picture10 from '../../assets/f.png';
import picture11 from '../../assets/p.png';
import picture12 from '../../assets/V.jpg';



const Skills = () => {
  return (
    <section id="skills">
      
      <h2>SKILLS</h2>
      <div className='images'>
       <img src={picture1} alt="logo"></img>
      <img src={picture2} alt="logo"></img>
       <img src={picture3} alt="logo "></img>
        <img src={picture4} alt="logo"></img>
        <img src={picture5} alt="logo "></img>
        <img src={picture6} alt="logo"></img>
        <img src={picture7} alt="logo "></img>
        <img src={picture8} alt="logo "></img>
        <img src={picture9} alt="logo "></img> 
        <br></br>
        
      </div>
      
      <div className='tools'>
        <h1>TOOLS  : </h1>
        <br></br>
      <img src={picture10}alt=""></img>
      <img src={picture11}alt=""></img>
      <img src={picture12}alt=""></img>
      </div>

    </section>
  );
};

export default Skills;

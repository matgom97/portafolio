// src/pages/HomeContainer.js

    import React from 'react';
    import Header from '../components/common/header';
    //import ProjectList from '../components/home/projectList';
    import SkillList from '../components/home/skillList';
    import Experience from '../components/home/experience';
    import Education from '../components/home/education';
    import Presentation from '../components/home/presentation';
    

    const HomeContainer = () => {
      return (
        <div >
          <Header />  
          <Presentation/>
          <SkillList />
          <Experience />
          <Education />
        </div>
      );
    };

    export default HomeContainer;

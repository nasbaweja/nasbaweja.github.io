import React from "react";
import {Col, Row} from "react-bootstrap";
import profileImage from "../images/nimer-singh.png";
function About() {
  return (
    // <div>
    //     <header className="App-header">
    //         <img src={profileImage} className="App-profile-photo" alt="profile" />
    //         <h1>Nimer A. Singh</h1>
    //         <p className="App-header-occupation">Security and Cloud Developer</p>
    //     </header>
    //     <section id="story" className="App-story">
    //         <p className="para-justify">I am a skilled strategist with a proven track record of successully mitigating risk and solving complex challenges with a focus on information security and privacy. My passion for technology began playing Captain Claw on my father's desktop. </p>
    //         <p className="para-justify">Following this passion, I did my bachelors in Computer and Communication Engineering at Manipal University Jaipur, where I honed my skills, learned a wide range of technologies, and discovered my talent for screating script based solutions. </p>
    //         <p className="para-justify">I've since worked at Shivoham Techno Services Pvt. Ltd., a New Delhi based start-up in the field of IoT and Automation where I was acting as a Project Lead in a multi-pronged role. I am ready to pivot when required, and able to quickly pick-up knowledge for the task at hand. My expertise in solving complex problems and thinking out of the box makes me a valuable asset to any team. </p>
    //         <p className="para-justify">Currently, I am a student in the Erasmus Mundus Programme for Security and Cloud Computing at Aalto University, Finland and Norwegian University of Science and Technology, Norway. </p>
    //     </section>
    // </div>
    <div class="App-header">
      <Row>
      <Col className="col-2 App-story">
        <img src={profileImage} className="App-profile-photo" alt="profile" />
        <div class="box-border flex relative flex-col shrink-0 mt-5 h-auto text-3xl font-medium text-left leading-[normal]">
          <h1>Hi, I am Nimer</h1>
        </div>
      </Col>
      <Col className="col-6 App-story">
        <div class="flex relative flex-col shrink-0 mt-1.5 h-auto leading-8 text-left max-sm:text-sm">
            <p className="para-justify">I am a skilled strategist with a proven track record of successully mitigating risk and solving complex challenges with a focus on information security and privacy. My passion for technology began playing Captain Claw on my father's desktop. </p>
            <p className="para-justify">Following this passion, I did my bachelors in Computer and Communication Engineering at Manipal University Jaipur, where I honed my skills, learned a wide range of technologies, and discovered my talent for screating script based solutions. </p>
            <p className="para-justify">I've since worked at Shivoham Techno Services Pvt. Ltd., a New Delhi based start-up in the field of IoT and Automation where I was acting as a Project Lead in a multi-pronged role. I am ready to pivot when required, and able to quickly pick-up knowledge for the task at hand. My expertise in solving complex problems and thinking out of the box makes me a valuable asset to any team. </p>
            <p className="para-justify">Currently, I am a student in the Erasmus Mundus Programme for Security and Cloud Computing at Aalto University, Finland and Norwegian University of Science and Technology, Norway. </p>
        </div>
      </Col>
    </Row>
    </div>
    )
  }
  
  export default About;
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import ShivohamLogo from '../images/Logos/Shivoham.png';
import AaltoLogo from '../images/Logos/Aalto.png';
import DellLogo from "../images/Logos/Dell.png";
import Mad116Logo from "../images/Logos/116.png";

function ExperiencePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Aalto University",
      logo: AaltoLogo,
      info: "Aalto University is a multidisciplinary science and art community in the fields of science, business, and art and design. The Aalto School of Science focuses on multitude of technologies, ranging from advanced energy solutions to neuroscience and software engineering.",
      title: "Research Assistant",
      position: "Full-Time",
      duration: "April 2023 - August 2023, January 2024 - Present",
      responsibilities: [
        "Designed and built an AI-assisted programming platform to enhance code quality and promote best practices which focus on personalized feedback as part of an ongoing PhD research project.", 
        "Developed scalable databases for improved performance, security, and maintenance.", 
        "Collaborated with cross-functional teams to design, develop, & implement a robust application, utilizing Svelte, JavaScript, Python, and introduced scalable grading systems for assignment submissions."
    ],
    },
    {
      id: 2,
      company: "Shivoham",
      logo: ShivohamLogo, // Replace with actual URL of the company's logo
      info: "Shivoham Techno Services is a provider of personalized solutions for IoT and Automation focusing on Industry 4.0 using a sustainable and environmentally friendly approach. The company focuses on energy and efficiency solutions for a better future.",
      title: "DevOps Engineer",
      position: "Full-Time",
      duration: "August 2020 - February 2022",
      responsibilities: [
        "Developed smart city electrical grid management applications and automation solutions for the hospitality industry, using Python, Javascript & and deploying them on Google Cloud.",
        "Implemented and maintained CI/CD pipelines to automate build, test and deployment of applications.",
        "Identified performance bottlenecks and optimized system performance through configuration tuning and infrastructure scaling while keeping security in mind.",
        "Led QA division to optimize resources, enhance processes, and deliver cost-effective solutions."
        ],
    },
    {
        id: 3,
        company: "Dell",
        logo: DellLogo, // Replace with actual URL of the company's logo
        info:"Dell technologies designs, develops, manufactures, markets, sells, and supports information technology infrastructure as well as software and cloud solutions",
        title: "Software Developer",
        position: "Intern",
        duration: 'January 2020 - May 2020',
        responsibilities: [
          "Analyzed the processes of Availability Command Center Team (ACC Team) to identify tasks for automation and implement them.",
          "Created dashboards for supply chain to reduce customer support response time.",
          "Instigated streamlining of all Supply Chain applications into a single application. "
          ],
      },
      {
        id: 4,
        company: "Dell",
        logo: DellLogo, // Replace with actual URL of the company's logo
        info: "Dell technologies designs, develops, manufactures, markets, sells, and supports information technology infrastructure as well as software and cloud solutions",
        title: "Software Developer",
        duration: 'May 2019 - July 2019',
        position: "Intern",
        responsibilities: [
          "Developed & deployed a Python based automated system for translating thousands of customer reviews in multiple languages on Dell website to English for the Customer Satisfaction Team (CSAT Team).",
          "Integrated new automated system with a machine learning model for sentiment analysis"
          ],
      },
      {
        id: 5,
        company: "MAD 116",
        logo: Mad116Logo, // Replace with actual URL of the company's logo
        info: "MAD 116 was a digital marketing firm and a production house. It was a one-stop solution for all digital marketing needs, including social media marketing, content creation, and website development.",
        title: "Operations - Digital Arts",
        position: "Full-Time",
        duration: 'November 2017 - May 2019',
        responsibilities: [
          "Client Acquisition",
          "Social Media Marketing for new and emerging Start-Ups as well as established incubator 'Startup Oasis' in Rajasthan, India.",
          "Designed infomercials for Marketing Team and Short Movie posters for the production house",
          "Undertook the tasks of writing, directing, and editing short films."
          ],
      }
      // {
      //   id: 6,
      //   company: "C.VOX Wearables",
      //   logo: DellLogo, // Replace with actual URL of the company's logo
      //   info: "Dell is",
      //   title: "Digital Marketing",
      //   position: "Intern",
      //   duration: 'May 2018 - July 2018',
      //   responsibilities: [
      //     "Developed & deployed a Python based automated system for translating thousands of customer reviews in multiple languages on Dell website to English for the Customer Satisfaction Team (CSAT Team).",
      //     "Integrated new automated system with a machine learning model for sentiment analysis"
      //     ],
      // },
    // Add more experiences as needed
  ];

  const handleMoreInfoClick = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  return (
    <div className="home-hero" style={{background:"linear-gradient(136deg, rgb(95, 44, 130), rgb(73, 160, 157)) 0% 0% / 1200% 1200%", height: '80vh', backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="heroContainer home-hero1" style={{ background: "rgba(0, 0, 0, 0.4)", height: '80vh'}}>
            <div className="experience-page">
            <Container>
                <h2 className="home-banner-heading heading2 whiteText">My Experiences</h2>
                <Row>
                {experiences.map((experience) => (
                    <Col key={experience.id}>
                        <Card className="mb-2 d-flex h-100">
                            <Card.Img src={experience.logo} alt={experience.company} variant="top" className="img-fluid p-3" style={{ height: '200px'}} />
                            <Card.Body className="d-flex flex-column">
                                <div className="flex-grow-1 text-center">
                                    <Card.Title className='mb-4 d-flex justify-content-center'>{experience.company}</Card.Title>
                                    <div>
                                      <Card.Subtitle className="mb-4 d-flex justify-content-center">{experience.title}</Card.Subtitle>
                                      <Card.Text className='mt-2 mb-2 d-flex justify-content-center'>{experience.position}</Card.Text>
                                      <Card.Text className='mt-2 mb-2 d-flex justify-content-center'>{experience.duration}</Card.Text>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button onClick={() => handleMoreInfoClick(experience)}>More Info</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <div style={{ height: '150px', width: '150px', padding: '10px' }}>
                      <img src={selectedExperience?.logo} alt={selectedExperience?.company} className="img-fluid modal-logo" style={{height:'150px'}}/>
                    </div>
                    <Modal.Title>{selectedExperience?.company}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p className='text-justify'>{selectedExperience?.info}</p>
                    <h5 className='mb-4'>{selectedExperience?.title}</h5>
                    {/* <p><strong>Company Info: </strong>{selectedExperience?.info}</p> */}
                    <p><strong>Position:</strong> {selectedExperience?.position}</p>
                    <p><strong>Duration:</strong> {selectedExperience?.duration}</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                      {selectedExperience?.responsibilities.map((responsibility, index) => (
                        <li key={index} className='text-justify'>{responsibility}</li>
                      ))}
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </Container>
            </div>
        </div>
    </div>
  );
}

export default ExperiencePage;

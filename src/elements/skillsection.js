import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import SourceImg from "../images/vappu.jpg";

class Skillsection extends React.Component {
     
    render() {
      return (
        <div className="home-hero" style={{background:"linear-gradient(136deg, rgb(95, 44, 130), rgb(73, 160, 157)) 0% 0% / 1200% 1200%", height: '80vh', backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className="heroContainer home-hero1" style={{ background: "rgba(0, 0, 0, 0.4)", height: '80vh'}}>
                <Container>
                    <div class="home-banner-heading heading2 whiteText">
                        <h2>Skills</h2>
                    </div>
                    <Row>
                        <Col>
                            <p className="home-banner-heading whiteText">
                                I have extensive experience with the following technologies and tools. I am always learning new things and I am excited to learn new things.
                            </p>
                            <Col style={{background:"#fff"}}>
                                <h4 style={{textAlign:"left", color:"#09203a"}} className="home-banner-heading heading3">Languages and Databases</h4>
                                <p style={{textAlign:"left"}}>
                                    <img src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="vectorlogo.zone" height="50" width="150" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="vectorlogo.zone" height="50" width="120" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="vectorlogo.zone" height="50" width="120"/>
                                    <img src="https://cdn.worldvectorlogo.com/logos/dart.svg" alt="upload.wikimedia.org" height="60" width="90" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/bash-1.svg" alt="vectorlogo.zone" height="70" width="130" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/mysql-3.svg" alt="vectorlogo.zone" height="70" width="130" />
                                    {/* <img src="https://cdn.worldvectorlogo.com/logos/bash-1.svg" alt="vectorlogo.zone" height="70" width="130" /> */}
                                    <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-horizontal.svg" alt="vectorlogo.zone" height="50" width="190" />
                                </p>
                            </Col>
                            <Col style={{background:"#fff"}}>
                                <h4 style={{textAlign:"left", color:"#09203a"}} className="home-banner-heading heading3">Frameworks</h4>
                                <p style={{textAlign:"left"}}>
                                    <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg" alt="vectorlogo.zone" />
                                    <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" alt="vectorlogo.zone" />
                                    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="vectorlogo.zone" />
                                    <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="vectorlogo.zone" />
                                    {/* <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg" alt="vectorlogo.zone" /> */}
                                    {/* <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg" alt="vectorlogo.zone" /> */}
                                    {/* <img src="https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg" alt="vectorlogo.zone" /> */}
                                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="upload.wikimedia.org" width="90" height="70" /> */}
                                    <img src="https://www.hyperledger.org/hubfs/Imported_Blog_Media/Hyperledger_Fabric_Logo_Color-1-1024x286.png" alt="vectorlogo.zone" height="40" width="130" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/ethereum.svg" alt="vectorlogo.zone" height="40" width="100"/>
                                </p>
                            </Col>
                            <Col style={{background:"#fff"}}>
                                <h4 style={{textAlign:"left", color:"#09203a"}} className="home-banner-heading heading3">Tools</h4>
                                <p style={{textAlign:"left"}}>
                                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="vectorlogo.zone" />
                                    {/* <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" alt="vectorlogo.zone" /> */}
                                    <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="vectorlogo.zone" />
                                    <img src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg" alt="vectorlogo.zone" />
                                    <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg" alt="vectorlogo.zone" />
                                    
                                </p>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
      );
    }
  }
  
export default Skillsection;
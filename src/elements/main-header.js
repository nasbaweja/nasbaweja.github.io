import SourceImg from '../images/vappu.jpg.png';
import Button from 'react-bootstrap/Button';
import Resume from "../content/NimerSingh_Resume.pdf";

const MainHeader = () => {
    return (
        <div className="home-hero" style={{backgroundImage: `url(${SourceImg})`, backgroundSize: "cover", backgroundPosition: "0% 20%", width: '100%'}}>
            <div className="heroContainer home-hero1" style={{ background: "rgba(0, 0, 0, 0.3)", height:"70vh"}}>
                    <div className="home-container1">
                        <h1 className="home-hero-heading heading1 whiteText">
                            Security and Cloud Developer
                        </h1>
                        <span className="home-hero-sub-heading bodyLarge whiteText">
                            <span>
                                <span>
                                    <span>Research Driven Technologist</span>
                                </span>
                            </span>
                        </span>
                        <span className="home-hero-sub-heading bodyLarge whiteText">
                            <span>
                                <span>
                                    <span>Alice and Bob? I know them personally, and they told me to tell you 'asjghd asdjhg deuwb uag'|</span>
                                </span>
                            </span>
                        </span>
                        {/* <div className="home-btn-group">
                            <button className="buttonFlat">Download Resume</button>
                            <button className="buttonFlat">FAQs</button>
                        </div> */}
                        <div className="home-btn-group">
                            <Button variant="light" className="home-btn-group" href={Resume} download="Nimer A. Singh Resume.pdf" target='_blank'>Download Resume</Button>
                            <Button variant="light" className="home-btn-group" onClick={()=> document.getElementById('home-faq').scrollIntoView()}>FAQs</Button>
                        </div>
                    </div>
                </div>
        </div>
    );
    }

export default MainHeader;
import { FaResearchgate, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Main2 = () => {
  return (
    <div>
      <div className="home-pricing"></div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Profile
          </h1>
          <span className="home-banner-sub-heading heading3">
          Skilled strategist with a proven track
                record of successfully mitigating risk and
                solving complex challenges with a focus
                on information security and privacy.
          </span>
          <span className="home-banner-sub-heading bodySmall">
          <div className="home-icon-group1 d-flex justify-content-center">
              <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/profile/Nimer-Singh-2" aria-label="searchengin">
                <FaResearchgate className="social-icon me-5" size={64}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/nasbaweja" aria-label="github">
                <FaGithub className="social-icon me-5" size={64}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pirate.sardar/" aria-label="instagram">
                <FaInstagram className="social-icon me-5" size={64}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nimer-amol-singh/" aria-label="linkedin">
                <FaLinkedin className="social-icon me-5" size={64}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/amolnimer" aria-label="twitter">
                <FaTwitter className="social-icon" size={64}/>
              </a>
            </div>
            </span>
        </div>
      </div>
    </div>
  );
}

export default Main2;
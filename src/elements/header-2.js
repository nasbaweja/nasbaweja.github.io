import FeatureCard from '../components/feature-card'

const Header2 = () => {
    return (
        <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <span className="overline whiteText">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading whiteText heading2">
                What makes Nimer tick?
              </h2>
              {/* <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      What makes Nimer tick?
                    </span>
                  </span>
                </span>
              </span> */}
            </div>
            <div className="home-container3 whiteText">
              <FeatureCard
                heading="Security Expertise"
                subHeading="Specialized in developing secure applications and implementing robust security measures."
              ></FeatureCard>
              <FeatureCard
                heading="Cloud Development"
                subHeading="Proficient in cloud technologies, including AWS, Azure, and Google Cloud Platform."
              ></FeatureCard>
              <FeatureCard
                heading="Experienced Professional"
                subHeading="Years of experience in developing software solutions for various industries."
              ></FeatureCard>
              <FeatureCard
                heading="Innovation Driven"
                subHeading="Driving technological advancement through research-backed innovation and out-of-the box solutions."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header2;
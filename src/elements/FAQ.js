import Question1 from "../components/question1";

const FAQ = () => {
    return (
        <div className="home-faq" id="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container4">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text48 heading2">Common questions</h2>
              <span className="home-text49 bodyLarge">
                <span>
                  Questions you might have about me
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container5">
              <Question1
                answer="Deadpool"
                question="Who is your favorite Superhero?"
              ></Question1>
              <Question1
                answer="Cereal, always!"
                question="Do you put Cereal first or Milk?"
              ></Question1>
              <Question1
                answer="42"
                question="What is the meaning of Life?"
              ></Question1>
              <Question1
                answer="Yes, who doesnt?"
                question="Do you like bread?"
              ></Question1>
              <Question1
                answer="No, I will not share that with you."
                question="Whats your social security number?"
              ></Question1>
              <Question1
                answer="No, this is Patrick."
                question="Finally, Is this the crusty crab?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FAQ;
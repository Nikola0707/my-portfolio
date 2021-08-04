import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="lets-connect-container">
      <div>
        <span className="text-like-html">{"<h2>"}</span>
        {/* <h2>Let's Connect </h2> */}
        <h2>Social Media </h2>
        <span className="text-like-html">{"</h2>"}</span>
      </div>
      <div className="quotes">
        <span className="text-like-html">{"<!-->"}</span>
        <p className="text-like-html">Your network is your net worth.</p>
        <p className="text-like-html">{"<-->"}</p>

        <span className="text-like-html">{"<!-->"}</span>
        <p className="text-like-html">
          Producing is nothing more than bringing all the elements together,
          connecting people.
        </p>
        <p className="text-like-html">{"<-->"}</p>

        <span className="text-like-html">{"<!-->"}</span>
        <p className="text-like-html">
          I Like To Connect To People In The Virtual World, Exchanging Thoughts
          And Ideas, When In The Physical World We Might Never Have The
          Opportunity to Cross Paths.
        </p>
        <span className="text-like-html">{"<-->"}</span>
      </div>
      <div className="social-icons-grid">
        <a href="https://github.com/Nikola0707" className="social-icon">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-ristoski/"
          className="social-icon"
        >
          <AiFillLinkedin />
        </a>
        <a href="mailto:ristoski.nikola@gmail.com" className="social-icon">
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

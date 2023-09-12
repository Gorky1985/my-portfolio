import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
// import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "300px 0px -300px 0px" });

  // const animation = useAnimation();

  useEffect(() => {
    const object = document.querySelector(".object");
    if (isInView) {
      object.classList.toggle("reveal");
    }
    if (!isInView) {
      object.classList.toggle("reveal");
    }
  }, [isInView]);

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: { type: "spring", duration: 1.5, bounce: 0.3 },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: "-100vw",
  //       threshold: 2,
  //     });
  //   }
  // }, [inView]);

  return (
    <div className="content justify text-grey padding-64" id="about">
      <h2 className="text-light-grey">My Name</h2>
      <hr style={{ width: "200px" }} className="opacity" />
      <p>
        Some text about me. Some text about me. I am lorem ipsum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="padding-16 text-light-grey">My Skills</h3>
      <p className="wide">Photography</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "28px", width: "95%" }}
        ></div>
      </div>
      <p className="wide">Web Design</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "28px", width: "85%" }}
        ></div>
      </div>
      <p className="wide">Photoshop</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "28px", width: "80%" }}
        ></div>
      </div>
      <br />

      <div className="row center padding-16 section light-grey">
        <div className="quarter section">
          <span className="xlarge">11+</span>
          <br />
          Partners
        </div>
        <div className="quarter section">
          <span className="xlarge">55+</span>
          <br />
          Projects Done
        </div>
        <div className="quarter section">
          <span className="xlarge">89+</span>
          <br />
          Happy Clients
        </div>
        <div className="quarter section">
          <span className="xlarge">150+</span>
          <br />
          Meetings
        </div>
      </div>

      <button className="button light-grey padding-large section">
        <span className="material-icons">file_download</span> Download Resume
      </button>

      <div className="bgimg-2">
        <div className="caption">Best choice for your project</div>
      </div>
      <h3 className="padding-16 text-light-grey">My Price</h3>
      <div ref={ref}>
        <motion.div
          className="row-padding object"
          style={{ margin: "0 -16px" }}
        >
          <div className="half margin-bottom">
            <ul className="ul white center opacity hover-opacity-off">
              <li className="dark-grey xlarge padding-32">Basic</li>
              <li className="padding-16">Web Design</li>
              <li className="padding-16">Photography</li>
              <li className="padding-16">5GB Storage</li>
              <li className="padding-16">Mail Support</li>
              <li className="padding-16">
                <h2>€ 10</h2>
                <span className="opacity">per month</span>
              </li>
              <li className="light-grey padding-24">
                <button className="button white padding-large hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>

          <div className="half">
            <ul className="ul white center opacity hover-opacity-off">
              <li className="dark-grey xlarge padding-32">Pro</li>
              <li className="padding-16">Web Design</li>
              <li className="padding-16">Photography</li>
              <li className="padding-16">50GB Storage</li>
              <li className="padding-16">Endless Support</li>
              <li className="padding-16">
                <h2>€ 25</h2>
                <span className="opacity">per month</span>
              </li>
              <li className="light-grey padding-24">
                <button className="button white padding-large hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <h3 className="padding-24 text-light-grey">My Reputation</h3>
      <img
        src="./assets/avatar_1.webp"
        alt="Avatar"
        className="left circle margin-right"
        style={{ width: "80px" }}
      />
      <p>
        <span className="large margin-right">John Doe.</span> CEO at Acme
        Corporation .
      </p>
      <p>Goran Cosic saved us from a web disaster.</p>
      <br />

      <img
        src="./assets/avatar_2.webp"
        alt="Avatar"
        className="left circle margin-right"
        style={{ width: "80px" }}
      />
      <p>
        <span className="large margin-right">Jessica Wright.</span> CEO at
        Soylent Corp
      </p>
      <p>No one is better than Goran Cosic.</p>
    </div>
  );
};

export default About;

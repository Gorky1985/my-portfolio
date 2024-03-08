import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
// import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1200px 0px 0px 0px" });

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
  function downloadResume() {
    // Get the URL of your resume file
    const resumeUrl = process.env.PUBLIC_URL + "/assets/Lebenslauf.pdf";

    // Create a dummy link element
    const link = document.createElement("a");
    // Set the href attribute to the URL of your resume file
    link.href = resumeUrl;
    // Set the download attribute to the desired file name
    link.download = "Lebenslauf.pdf";
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically trigger a click event on the link
    link.click();
    // Remove the link from the document body after download
    document.body.removeChild(link);
  }

  return (
    <div className="content justify text-grey padding-64" id="about">
      <h2 className="text-light-grey">Goran Cosic</h2>
      <hr style={{ width: "200px" }} className="opacity" />
      <p>
        Hello! I'm Goran, a passionate web developer and hobby photographer
        based in Vienna, originally from Croatia. As a married father of two
        wonderful children, I find joy in balancing my professional endeavors
        with family life. Seeking to advance my career in web development, I've
        built a portfolio to showcase my skills. I love crafting websites and
        blogs not only for their practical applications but also as a means to
        explore and learn more about the ever-evolving world of web
        technologies. When I'm not immersed in code, you can often find me
        behind the lens, capturing precious moments with my camera. My love for
        photography intertwines seamlessly with my passion for travel, as I seek
        inspiration from the diverse cultures and landscapes I encounter.
        Whether it's building innovative web solutions or embarking on new
        adventures, I thrive on the excitement of creating and exploring in both
        the digital and physical realms.
      </p>
      <h3 className="padding-16 text-light-grey padding-top-64">My Skills</h3>
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
          <span className="xlarge">2</span>
          <br />
          Projects in progress
        </div>
        <div className="quarter section">
          <span className="xlarge">10+</span>
          <br />
          Projects Done
        </div>
        <div className="quarter section">
          <span className="xlarge">4</span>
          <br />
          Projects planned
        </div>
        <div className="quarter section">
          <span className="xlarge">50+</span>
          <br />
          Online Courses completed
        </div>
      </div>

      <button
        className="button light-grey padding-large section margin-bottom-64"
        onClick={downloadResume}
      >
        <span className="material-icons">file_download</span> Download Resume
      </button>

      <div className="bgimg-2 margin-top-bottom ">
        <div className="caption">Optimal solution for your project</div>
      </div>
      <h3 className="padding-16 text-light-grey padding-top-64">
        My Tech Stack
      </h3>
      <div ref={ref} className="margin-top-bottom">
        <motion.div
          className="row-padding object reveal"
          style={{ margin: "0 -16px" }}
        >
          <div className="half margin-bottom">
            <ul className="ul white center opacity hover-opacity-off">
              <li className="dark-grey xlarge padding-32">Web</li>
              <li className="padding-16">HTML5</li>
              <li className="padding-16">CSS3</li>
              <li className="padding-16">JavaScript</li>
              <li className="padding-16">ReactJS</li>
              <li className="padding-16">NodeJS</li>
              <li className="padding-16">Firebase</li>
              <li className="padding-16">Google Cloud</li>
              <li className="padding-16">
                <p>others ...</p>
              </li>
              <li className="light-grey padding-24">
                <a
                  href="#contact"
                  className="button white padding-large hover-black"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>

          <div className="half">
            <ul className="ul white center opacity hover-opacity-off">
              <li className="dark-grey xlarge padding-32">Photo</li>
              <li className="padding-16">Nikon Cameras</li>
              <li className="padding-16">Nikon Lenses</li>
              <li className="padding-16">Flash Units</li>
              <li className="padding-16">Studio Set</li>
              <li className="padding-16">Large Size Printing</li>
              <li className="padding-16">Adobe Photoshop</li>
              <li className="padding-16">Adobe Camera Raw</li>

              <li className="padding-16">
                <p>others ...</p>
              </li>
              <li className="light-grey padding-24">
                <a
                  href="#contact"
                  className="button white padding-large hover-black"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <h3 className="padding-24 text-light-grey padding-top-64">
        My Recent Projects
      </h3>
      <a
        href="https://explore-adria.ew.r.appspot.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/explore_adria.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">Explore Adria.</span>Join me on
        this visual and narrative exploration.
      </p>
      <p>An example for a small full stack blog.</p>
      <br />

      <a
        href="https://gallery-app-ed9f3.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/gallery_app.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">Gallery App.</span> Upload your
        favourite photographs.
      </p>
      <p>An example of a gallery powered by ReactJS and Firebase.</p>
      <br />

      <a
        href="https://gorky1985.github.io/SuperM-ReactJS/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/SuperM.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">SuperM.</span> A lovely Online
        Shop.
      </p>
      <p>An example of an online shop coupled with Stripe.</p>
      <br />
      <a
        href="https://gorky1985.github.io/Food-App/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/foodapp.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">Food Tracker App.</span> Calculate
        and track your calorie intake.
      </p>
      <p>An example of Food Tracker App built with Vanilla JavaScript.</p>
      <br />
      <a
        href="https://my-travel-blog-d2179.ew.r.appspot.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/travel_blog.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">Travel Blog.</span>Exploring the
        world with my family.
      </p>
      <p>An example for a small full stack blog.</p>
      <br />
      <a href="https://rios.hr/" target="_blank" rel="noreferrer">
        <img
          src="./assets/rioshr.webp"
          alt="Avatar"
          className="left circle margin-right"
          style={{ width: "80px" }}
        />
      </a>
      <p>
        <span className="large margin-right">RIOS.</span>Association for Early
        Intervention in Childhood.
      </p>
      <p>Collaborator in creating a website.</p>
    </div>
  );
};

export default Main;

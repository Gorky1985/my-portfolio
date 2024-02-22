import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookF,
  faGithub,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="content padding-64 text-grey xlarge">
      <ul className="list-inline">
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/mag-goran-cosic/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/goran.cosic.71"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/Gorky1985"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.flickr.com/photos/94000386@N05/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFlickr} />
          </a>
        </li>
      </ul>
      <p className="medium">
        Powered by{" "}
        <a href="#home" className="hover-text-green">
          Goran Cosic Photography
        </a>
      </p>
    </footer>
  );
};

export default Footer;

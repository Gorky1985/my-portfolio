const Footer = () => {
  return (
    <footer className="content padding-64 text-grey xlarge">
      {/* <img
        src="./assets/face.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "13px" }}
      />
      <img
        src="./assets/insta.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./assets/pinterest.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./assets/twitter.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./assets/linkedin.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      /> */}
      <ul className="list-inline">
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/mag-goran-cosic/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-stack fa-lg">
              <i className="fas  fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/goran.cosic.71"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-stack fa-lg">
              <i className="fas  fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/Gorky1985"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-stack fa-lg">
              <i className="fas  fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.flickr.com/photos/94000386@N05/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-stack fa-lg">
              <i className="fas  fa-stack-2x"></i>
              <i className="fab fa-flickr fa-stack-1x fa-inverse"></i>
            </span>
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

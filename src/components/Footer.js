const Footer = () => {
  return (
    <footer className="content padding-64 text-grey xlarge">
      <img
        src="./face.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "13px" }}
      />
      <img
        src="./insta.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./pinterest.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./twitter.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
      <img
        src="./linkedin.png"
        alt="facebook"
        className="hover-opacity"
        style={{ width: "25px", marginRight: "10px" }}
      />
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

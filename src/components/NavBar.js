const NavBar = () => {
  return (
    <>
      <nav className="sidebar small bar-block hide-small center">
        <img src="../../assets/goran_avatar.webp" alt="" />
        <a href="#home" className="bar-item black button padding-large">
          <span className="xxlarge material-icons">home</span>
          <p>HOME</p>
        </a>
        <a href="#about" className="bar-item hover-black button padding-large">
          <span className="xxlarge material-icons">person</span>
          <p>ABOUT</p>
        </a>
        <a
          href="#gallery"
          className="bar-item hover-black button padding-large"
        >
          <span className="xxlarge material-icons">collections</span>
          <p>GALLERY</p>
        </a>
        <a
          href="#contact"
          className="bar-item hover-black button padding-large"
        >
          <span className="xxlarge material-icons">email</span>
          <p>CONTACT</p>
        </a>
      </nav>

      <div className="top hide-large hide-medium" id="myNavbar">
        <div className="bar black opacity hover-opacity-off center small">
          <a href="#home" className="bar-item button">
            HOME
          </a>
          <a href="#about" className="bar-item button">
            ABOUT
          </a>
          <a href="#gallery" className="bar-item button">
            PHOTOS
          </a>
          <a href="#contact" className="bar-item button">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

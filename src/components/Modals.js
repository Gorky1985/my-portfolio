const Modals = ({ image, handleClose, handleChange }) => {
  return (
    <div className="modal" id="myModal">
      <article className="modal-content">
        <a
          href="#close"
          aria-label="Close"
          className="close"
          onClick={handleClose}
        >
          <span class="close">&times;</span>
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#222" }}>{image.name}</h1>
          <img
            style={{ width: "100%" }}
            src={`./assets/${image.big}.webp`}
            alt={image.alt}
          />
          <div className="slider-buttons">
            <a
              href="/#"
              class="previous round"
              onClick={() => {
                handleChange(Number(image.id) - 1);
              }}
            >
              &#8249;
            </a>
            <a
              href="/#"
              class="next round"
              onClick={() => {
                handleChange(Number(image.id) + 1);
              }}
            >
              &#8250;
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modals;

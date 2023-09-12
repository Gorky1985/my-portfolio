const GalleryGrid = ({ galleryItem, onChoice }) => {
  return (
    <div className="padding-64 content" id="photos">
      <div className="bgimg-3">
        <div className="caption">Beauty of life</div>
      </div>
      <h2
        id="gallery"
        style={{ marginTop: "15px", paddingTop: "16px" }}
        className="text-light-grey"
      >
        My Photos
      </h2>
      <hr style={{ width: "200px" }} className="opacity" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {galleryItem.map((image) => (
          <a
            href="./#"
            onClick={() => {
              onChoice(image);
            }}
            key={image.id}
            className="tooltip"
          >
            <span className="tooltiptext">{image.alt}</span>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={`./assets/${image.thumb}.webp`}
              alt={image.alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;

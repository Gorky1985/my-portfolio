const Gallery = () => {
  return (
    <div className="padding-64 content" id="photos">
      <div className="bgimg-3">
        <div className="caption">Beauty of life</div>
      </div>
      <h2 className="text-light-grey">My Photos</h2>
      <hr style={{ width: "200px" }} className="opacity" />

      <div className="row-padding" style={{ margin: "0 -16px" }}>
        <div className="half">
          <img src="./drop.webp" alt="" style={{ width: "100%" }} />
          <img src="./strawberry.webp" alt="" style={{ width: "100%" }} />
          <img src="./horses.webp" alt="" style={{ width: "100%" }} />
        </div>

        <div className="half">
          <img src="./bench.webp" alt="" style={{ width: "100%" }} />
          <img src="./rose.webp" alt="" style={{ width: "100%" }} />
          <img src="./ruins.webp" alt="" style={{ width: "100%" }} />
          <img src="./cup.webp" alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

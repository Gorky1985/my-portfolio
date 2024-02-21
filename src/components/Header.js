import WaveLine from "./WaveLine";

const Header = () => {
  return (
    <header className="container padding-32 center black" id="home">
      <div className="bgimg-1">
        <div className="waveline">
          <WaveLine />
        </div>

        <div className="caption">
          <h1 className="jumbo">
            <span className="hide-small">I'm</span> <span> Goran </span>{" "}
            <span> Cosic</span>
          </h1>

          <p>
            <span>Photographer</span> <span> and</span> <span> Web</span>{" "}
            <span> Developer.</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

// ***********************************************   ORIGINAL   *******************************************************************
// const Header = () => {
//   return (
//     <header className="container padding-32 center black" id="home">
//       <h1 className="jumbo">
//         <span className="hide-small">I'm</span> Goran Cosic.
//       </h1>
//       <p>Photographer and Web Designer.</p>
//       <img src="./assets/man_smoke.jpg" alt="boy" />
//     </header>
//   );
// };

// export default Header;

import background from "../data/pattern-bg-desktop.png";

const bgContainer = {
  position: "absolute",
  zIndex: "-1",
  left: "0",
  right: "0",
};

const bgImg = {
  margin: "0",
  overflow: "hidden",
};

const Pattern = () => {
  return (
    <div style={bgContainer}>
      <img src={background} alt="background-image" style={bgImg} />
    </div>
  );
};

export default Pattern;

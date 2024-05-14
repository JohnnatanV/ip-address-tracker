import background from "./assets/pattern-bg-desktop.png";

const Pattern = () => {
  return (
    <div className="bg-container">
      <img src={background} alt="background-image" className="bg-img" />
    </div>
  );
};

export default Pattern;

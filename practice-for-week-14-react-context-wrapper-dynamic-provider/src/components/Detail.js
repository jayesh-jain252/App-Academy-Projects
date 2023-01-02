import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
  const { name, element, traits } = sign;

  return (
    <div className="details">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        alt=""
      />
      <h2>{name}</h2>
      <h4>Element: {element}</h4>
      <h4>Traits: {traits}</h4>
    </div>
  );
};

export default Detail;

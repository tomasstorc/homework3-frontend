import { useContext } from "react";
import { ColorContext } from "../context/colorSchema.context";

const ColorSchemaChanger = () => {
  const { setColor, colorSchema } = useContext(ColorContext);
  const handleChange = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ backgroundColor: colorSchema }}>
      Change color
      <select name="color" onChange={handleChange}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
    </div>
  );
};

export default ColorSchemaChanger;

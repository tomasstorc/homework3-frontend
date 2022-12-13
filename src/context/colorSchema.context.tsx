import { createContext, useState } from "react";

export const ColorContext = createContext({
  colorSchema: "blue",
  setColor: (color: string) => {},
});

const ColorProvider = ({ children }: any) => {
  const setColor = (color: string) => {
    console.log(color);

    setColorSchema(color);
  };
  const [colorSchema, setColorSchema] = useState<any>("blue");
  const value = { colorSchema, setColor };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;

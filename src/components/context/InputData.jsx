import React, { createContext, useEffect, useState } from "react";

export const InputsContext = createContext();

const InputsProvider = ({ children }) => {
    const [data, setData] = useState({
        name: null,
        phone: null,
        country: null,
        purchace: null,
        office: null,
    });   
    console.log(data)

  return (
    <InputsContext.Provider value={{ data, setData }}>
      {children}
    </InputsContext.Provider>
  );
};

export default InputsProvider;

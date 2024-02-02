import React,{createContext, useContext, useEffect, useState} from 'react';
import {useWindowDimensions, Dimensions as dim, Dimensions} from 'react-native';

export const DimensionContext = createContext();
export const useDimensionContext = () => useContext(DimensionContext);

export const DimensionContextProvider = ({children}) => {
  const dimensions = useWindowDimensions();
  const initheight = dim.get('window').height;
  const initwidth = dim.get('window').width;

  const [windowWidth, setWindowWidth] = useState(initwidth);
  const [windowHeight, setWindowHeight] = useState(initheight);

  const [isPortrait, setisPortrait] = useState(false);

  const checkisPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    setisPortrait(checkisPortrait());
    Dimensions.addEventListener('change', () => {
      setisPortrait(checkisPortrait());
    })
  }, [])
  

  useEffect(() => {
    setItem();
  }, [dimensions]);

  const setItem = () => {
    const {height,width} = dimensions;
    setWindowHeight(height);
    setWindowWidth(width);
  };

  return (
    <DimensionContext.Provider
      value={{
        windowHeight,
        windowWidth,
        isPortrait,
      }}>
      {children}
    </DimensionContext.Provider>
  );
};
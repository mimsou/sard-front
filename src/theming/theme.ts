import {
    createPalette,
    createTheme,
    Theme,
  } from '@lifeomic/chroma-react/styles';
  import { Overrides } from '@lifeomic/chroma-react/styles/overrides';
  
 
  export const overrides = (theme: Theme): Overrides => ({
    ChromaButton: {
      root: {
        background: 'red',
      },
      outlined: {
        border: '1px solid red',
      },
    },
  });
  
  export const palette = createPalette({
    primary: {
      main: '#02bff1',
    },
  });
  
  export const theme = createTheme({
    overrides,
    palette,
  });
import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
      borderRadius: string;
  
      colors: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
      };
      text: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
      }
    }
  }
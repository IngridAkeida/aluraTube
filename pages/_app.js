import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {

  const ThemeActive = {};


  return (
    <ThemeProvider theme={ThemeActive}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp;
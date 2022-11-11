import React from "react";
import StyledSwitch from './styled-components';
import { ColorModeContext } from "./ColorMode";

function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext);
  console.log("contexto dentro do DarkMode", contexto);

  return (
      <StyledSwitch>
          <input id="darkmode" type="checkbox" onChange={() => {
              console.log("mudou o state");
              contexto.toggleMode();
          }} />
          <label
              htmlFor="darkmode"
              className="darkmode-switch"
          >
              <span>🌙</span>
              <span>☀️</span>
          </label>
      </StyledSwitch>
  )
}

export default DarkModeSwitch;
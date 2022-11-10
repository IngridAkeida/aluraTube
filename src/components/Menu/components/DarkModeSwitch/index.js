import React from "react";
import StyledSwitch from './styled-components';
import { ColorModeContext } from "./ColorMode";

function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext);

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
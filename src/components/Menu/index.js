import StyledMenu from "./styled_component";
import Logo from './Logo';
import Search from './components/Search/';
import DarkModeSwitch from './components/DarkModeSwitch'



function Menu({valorDoFiltro, setValorDoFiltro}) {
  return (
    <StyledMenu>
      <div>
        <Logo/>
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
      <DarkModeSwitch/>
    </StyledMenu>
    
  );
}

export default Menu;


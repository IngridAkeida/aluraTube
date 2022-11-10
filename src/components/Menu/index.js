import StyledMenu from "./styled_component";
import Logo from './Logo';
import Search from './components/Search/';



function Menu({valorDoFiltro, setValorDoFiltro}) {
  return (
    <StyledMenu>
      <div>
        <Logo/>
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
    </StyledMenu>
  );
}

export default Menu;


import StyledMenu from "./styled_component";
import Logo from './Logo';
import Search from './components/Search/';



function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo/>
      </div>
      <Search/>
    </StyledMenu>
  );
}

export default Menu;


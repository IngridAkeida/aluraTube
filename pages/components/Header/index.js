import StyledHeader from './styled_compenents';
import config from '../../../config.json';

function Header() {

  return (
    <StyledHeader>
      <img className='user-banner'/>

      <section className='user-info'>
        <img className='user-perfil'src={`https://github.com/${config.github}.png`}/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>  

    </StyledHeader>
  );
}

export default Header;
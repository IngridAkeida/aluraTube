//import Header from './components/Header/index';


import Menu from './components/Menu';
import Timeline from './components/Timeline';
import config from '../config.json';

import styled from 'styled-components';
import { CSSReset } from './components/CSSreset';


function HomePage() {

  //const msg = 'Bem vindo de volta!';

  /*const bgIndex = { 
    backgroundColor: '#254658', 
    color:'#fff',
  };*/

  /*const bgHeader = { 
    backgroundColor: '#ccc', 
    color:'#000',
  };*/

  //console.log(config.playlists);


  return (
    <>
      <CSSReset />
      <div>
      {/*<div style={bgIndex}>{msg}</div>
      <div style={bgHeader}>*/}
  
        <Menu/>
        <Header/>
        <Timeline lists={config.playlists}/>

      </div>
    </>
  );
}

export default HomePage;

// bloco header

const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/*<img src='banner'/>*/}

      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`}/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>  

    </StyledHeader>
  );
}

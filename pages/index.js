import Header from './components/Header/index';
import Menu from './components/Menu/index';
import Timeline from './components/Timeline/index';
import config from '../config.json';
import styled from 'styled-components';

function HomePage() {

  const msg = 'Bem vindo de volta!';

  const bgIndex = { 
    backgroundColor: '#254658', 
    color:'#fff',
  };
  return (
    <>
      <div style={bgIndex}>{msg}</div>
      <div>
        <Header/>
        <Timeline/>
        <Menu/>
        <Menu2/>
        <Header2/>
        <Timeline2/>
      </div>
    </>
  );
}

export default HomePage

//ou posso fazer assim

function Menu2() {
  return (
    <div>
      Menu2
    </div>
  );
}

// bloco header

const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header2() {
  return (
    <StyledHeader>
      {/*<img src='banner'/>*/}

      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`}/>
        <h2>{config.name}</h2>
        {config.job}
      </section>  
      
    </StyledHeader>
  );
}

function Timeline2() {
  return (
    <div>
      Timeline2
    </div>
  );
}


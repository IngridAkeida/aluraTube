import Header from './components/Header/index';
import Menu from './components/Menu/index';
import Timeline from './components/Timeline/index';
import config from '../config.json'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';


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

function Header2() {
  return (
    <div>
      <img src='banner'/>
      <img src={`https://github.com/${config.github}.png`}/>
      {config.name}
      {config.job}
    </div>
  );
}

function Timeline2() {
  return (
    <div>
      Timeline2
    </div>
  );
}


import Header from './components/Header';
import Menu from './components/Menu';
import Timeline from './components/Timeline';

import config from '../config.json';

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


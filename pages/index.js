import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import config from '../config.json';

import { CSSReset } from '../src/components/CSSreset';


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

  const valorDoFiltro = 'frost';


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


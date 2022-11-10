import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import React from 'react';

import config from '../config.json';




function HomePage() {

  //const msg = 'Bem vindo de volta!';

  /*const bgIndex = { 
    backgroundColor: '#254658', 
    color:'#fff',
  };*/

  //console.log(config.playlists);

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");



  return (
    <>
      
      <div>
      {/*<div style={bgIndex}>{msg}</div>
      <div style={bgHeader}>*/}
  
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header/>
        <Timeline lists={config.playlists} searchValue={valorDoFiltro}/>

      </div>
    </>
  );
}

export default HomePage;


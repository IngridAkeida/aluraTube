import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import React from 'react';

import config from '../config.json';

import { createClient } from '@supabase/supabase-js';



// supabase

const PROJECT_URL = 'https://fvlloyphzereqksbztrw.supabase.co';
const PROJECT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bGxveXBoemVyZXFrc2J6dHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNDA3MzcsImV4cCI6MTk4MzkxNjczN30.b4i1YlX062UZxiEQMxltF5rAnbbLfHnc2Bi538f5xdQ';

const supabase = createClient(PROJECT_URL, PROJECT_KEY);
console.log(supabase.from('video').insert());




function HomePage() {

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  supabase.from('video')
          .select('*')
          .then((dados) => {
    
            console.log(dados.data);
  })


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


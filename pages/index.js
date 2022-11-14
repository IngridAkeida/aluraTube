import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import { videoService } from "../src/services/videoService"; 
import config from '../config.json';

import React, { useEffect } from 'react';

import { createClient } from '@supabase/supabase-js';

function HomePage() {

  const service = videoService();

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylists] = React.useState({});


  React,useEffect(() =>{

    supabase.from('video')
          .select('*')
          .then((dados) => {
    
            console.log(dados.data);

            const novasPlaylists = {...playlists};

            dados.data.forEach((video) =>{
              if(!novasPlaylists[video.playlist]){
                novasPlaylists[video.playlist] = [];
              }
              novasPlaylists[video.playlist].push(video);
            })
            setPlaylists(novasPlaylists);
            //playlists[dados.data.playlist].push()
    }); 
  }, []);

  return (
    <>
      
      <div style={{
        display:"flex",
        flexDirection:"column",
        flex:1,
        //backgroundColor: "red",
      }}>
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


import React from 'react';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import { videoService } from "../src/Services/videoService"; 

export default function HomePage() {

  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylists] = React.useState({});

  React.useEffect(() => {
    service
        .getAllVideos()
        .then((dados) => {
            console.log(dados.data);
            // Forma imutavel
            const novasPlaylists = {};
            dados.data.forEach((video) => {
                if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                novasPlaylists[video.playlist] = [
                    video,
                    ...novasPlaylists[video.playlist],
                ];
            });

            setPlaylists(novasPlaylists);
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
        <Timeline lists={playlists} searchValue={valorDoFiltro}/>

      </div>
    </>
  );
}


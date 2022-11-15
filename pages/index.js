import React from 'react';

import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

import { videoService } from '../src/Services/videoService';


export default function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylists] = React.useState({});

  React.useEffect(() => {
    service.getAllVideos()
           .then((dados) => {
            console.log(dados);
            const novasPlaylists = {...playlists};
            dados.data?.forEach(video => {

                if(!novasPlaylists[video.playlist]) 
                novasPlaylists[video.playlist] = [];
                novasPlaylists[video.playlist].push(video);
            
            })
          setPlaylists(novasPlaylists);
        });
  }, []);

  return (
    <>
      
      <div style={{
        display:"flex",
        flexDirection:"column",
        flex:1,
      }}>
       
        <Menu 
          valorDoFiltro={valorDoFiltro} 
          setValorDoFiltro={setValorDoFiltro} 
        />

        <Header/>
        
        <Timeline 
          playlists={playlists} 
          searchValue={valorDoFiltro}
        />
      
      </div>
    </>
  );
}




//import Header from './components/Header/index';
//import Timeline from './components/Timeline/index';

import Menu from './components/Menu/styled_component';
import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from './components/CSSreset';

function HomePage() {

  const msg = 'Bem vindo de volta!';

  const bgIndex = { 
    backgroundColor: '#254658', 
    color:'#fff',
  };

  const bgHeader = { 
    backgroundColor: '#ccc', 
    color:'#000',
  };

  //console.log(config.playlists);


  return (
    <>
      <CSSReset/>
      <div style={bgIndex}>{msg}</div>
      <div style={bgHeader}>
  
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


// bloco timeline

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

function Timeline(props) {
  //console.log("dentro do componente", props.lists);
  const playlistNames = Object.keys(props.lists);

  return (
    <StyledTimeline>

      {playlistNames.map((playlistName)=>{
        
        const videos = props.lists[playlistName];
        //console.log(videos);

        return /*"Item atual" no caso playlistName*/(
          
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video)=>{
                return (
                  <a href={video.url}>
                    <img src={video.thumb}/>
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        );
        
      })}

    </StyledTimeline>
  );
}

/* SOBRE FUNCTIONS OU ARROW FUNCTIONS 
{playlistNames.map((playlistName)=>{...
ou
{playlistNames.map(function(playlistName){...
  MESMO RESULTADO
*/
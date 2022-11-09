import Header from './components/Header/index';
import Menu from './components/Menu/index';
import Timeline from './components/Timeline/index';
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
        <Header/>
        <Timeline/>
        <Menu/>
        <Menu2/>
        <Header2/>
        <Timeline2 lists={config.playlists}/>
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
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>  

    </StyledHeader>
  );
}

function Timeline2(props) {
  //console.log("dentro do componente", props.lists);
  const playlistNames = Object.keys(props.lists);

  return (
    <div>

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

    </div>
  );
}

/* SOBRE FUNCTIONS OU ARROW FUNCTIONS 
{playlistNames.map((playlistName)=>{...
ou
{playlistNames.map(function(playlistName){...
  MESMO RESULTADO
*/
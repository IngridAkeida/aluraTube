import StyledTimeline from './styled_component';


function Timeline({ searchValue, ...props }) {
  
  //console.log("dentro do componente", props.lists);
  
  const playlistNames = Object.keys(props.lists);

  return (
    <StyledTimeline>

      {playlistNames.map((playlistName)=>{
        
        const videos = props.lists[playlistName];
        //console.log(videos);
        return (
          
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {

                const titleNormalized = video.title.toLowerCase();

                const searchValueNormalized = searchValue.toLowerCase();

                return titleNormalized.includes(searchValueNormalized);
              }).map((video)=>{
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

export default Timeline;

/* SOBRE FUNCTIONS OU ARROW FUNCTIONS 
{playlistNames.map((playlistName)=>{...
ou
{playlistNames.map(function(playlistName){...
  MESMO RESULTADO
*/
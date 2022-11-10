import StyledSearch from './styled_component';

function Search(){
  
  return(
    <StyledSearch>
      <input type='text'onChange={()=>{
        console.log('Digitou algo')
      }}/>
      <button> Lupa </button>
    </StyledSearch>
  );
}

export default Search;
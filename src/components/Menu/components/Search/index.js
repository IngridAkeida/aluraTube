import React from 'react';
import StyledSearch from './styled_component';

function Search(){
  
  const [valorDaBusca, setValorDaBusca] = React.useState('Frost');



  console.log('Search', valorDaBusca)
  return(
    <StyledSearch>
      <input type='text'onChange={(e)=>{
        console.log('Digitou algo')
        setValorDaBusca(e.target.value)
      }}/>
      <button>
       Lupa 
      </button>
    </StyledSearch>
  );
}

export default Search;
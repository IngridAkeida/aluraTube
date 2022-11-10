import React from 'react';
import StyledSearch from './styled_component';

function Search({valorDoFiltro, setValorDoFiltro}){
  
  //const [valorDaBusca, setValorDaBusca] = React.useState('Frost');

  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;



  //console.log('Search', valorDaBusca)
  return(
    <StyledSearch>
      <input type='text' onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button>
        🔎
      </button>
    </StyledSearch>
  );
}

export default Search;
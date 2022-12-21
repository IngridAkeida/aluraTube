import React from 'react';
import StyledSearch from './styled_component';

import { FaSearch } from "react-icons/fa";

function Search({valorDoFiltro, setValorDoFiltro}){

  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;



  //console.log('Search', valorDaBusca)
  return(
    <StyledSearch>
      <input type='text' onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button>
        <FaSearch/>
      </button>
    </StyledSearch>
  );
}

export default Search;
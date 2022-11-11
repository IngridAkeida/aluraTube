import React from 'react';
import { StyledRegisterVideo } from './styled_components';

function RegisterVideo(){
  // deixar o form visível 
  const [formVisivel, setFormVisivel] = React.useState(false);

  // preencher os campos de título e url 

  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');


  
    return(
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel 
      ? (
      <form >
        <div>
          <button className='close-modal' onClick={() => setFormVisivel(false)}>
            X
          </button>
        
          <input placeholder='tirulo do video'/>
          <input placeholder='URL'/>
          <button type='submit'>
            Cadastrar
          </button>
        </div>
      </form>
      ): 
      false}
    </StyledRegisterVideo>

  )
}

export default RegisterVideo;
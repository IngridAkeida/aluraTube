import React from 'react';
import { StyledRegisterVideo } from './styled_components';

function RegisterVideo(){
  // deixar o form visível 
  const [formVisivel, setFormVisivel] = React.useState(false);

  // preencher os campos de título e url 

  const [values, setValues] = React.useState({titulo:"", url:""});

    return(
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel 
      ? (
      <form onSubmit={(evento) => {
        evento.preventDefault();
      }}>
        <div>

          <button 
          className='close-modal' 
          onClick={() => setFormVisivel(false)}
          >
            X
          </button>

          <input 
            placeholder='tirulo do video' 
            value={values.titulo} 
            onChange={(evento) => {
              const value = evento.target.value;
              console.log(value);
              setValues({
                ...values,
                titulo: value,
              });
            }} 
          />
          <input 
            placeholder='URL' 
            value={values.url}
            onChange={(evento) => {
              const value = evento.target.value;
              console.log(value);
              setValues({
                ...values,
                url: value,
              });
            }}
          />
          <button type='submit' >
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
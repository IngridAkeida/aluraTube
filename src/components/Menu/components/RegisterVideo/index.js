import { ContrastDimensions } from '@styled-icons/foundation/Contrast';
import React from 'react';
import { StyledRegisterVideo } from './styled_components';


function useForm(propsDoFrom){


  // preencher os campos de título e url 

  const [values, setValues] = React.useState(propsDoFrom.initialValues);


  return{
    values, 
  };
}

function RegisterVideo(){

  // deixar o form visível 
  const [formVisivel, setFormVisivel] = React.useState(false);

  const formRegister = useForm({
    initialValues: {titulo:"Suuuper vídeo", url:"Youtubiu"}
  });

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
            value={formRegister.values.titulo} 
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
            value={formRegister.values.url}
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
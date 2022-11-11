import React from 'react';
import { StyledRegisterVideo } from './styled_components';


function useForm(propsDoFrom){


  // preencher os campos de título e url 

  const [values, setValues] = React.useState(propsDoFrom.initialValues);


  return{
    values, 
    handlechange:
      (evento) => {
        const value = evento.target.value;
        const name = evento.target.name
        setValues({
          ...values,
          [name]: value,
        });
      },
      clearForm(){
        setValues({});
      }
  };
}

function RegisterVideo(){

  // deixar o form visível 
  const [formVisivel, setFormVisivel] = React.useState(false);

  const formRegister = useForm({
    initialValues: {titulo:"", url:""}
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

        // fechar aba 
        setFormVisivel(false);
        
        //limpar form 
        formRegister.clearForm();
      }}>
        <div>

          <button 
          type='button'
          className='close-modal' 
          onClick={() => setFormVisivel(false)}
          >
            X
          </button>

          <input 
            placeholder='titulo do video' 
            name='titulo'
            value={formRegister.values.titulo} 
            onChange={formRegister.handlechange}
          />
          <input 
            placeholder='URL' 
            name='url'
            value={formRegister.values.url}
            onChange={formRegister.handlechange}
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
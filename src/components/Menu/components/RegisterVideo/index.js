import React from 'react';
import { StyledRegisterVideo } from './styled_components';
import { createClient } from '@supabase/supabase-js';

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

// supabase

const PROJECT_URL = 'https://fvlloyphzereqksbztrw.supabase.co';
const PROJECT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bGxveXBoemVyZXFrc2J6dHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNDA3MzcsImV4cCI6MTk4MzkxNjczN30.b4i1YlX062UZxiEQMxltF5rAnbbLfHnc2Bi538f5xdQ';

const supabase = createClient(PROJECT_URL, PROJECT_KEY);
console.log(supabase.from('video').insert());

// recuperar a Thumb

function getThambnail(url){
  return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}

/*function getVideoId(url){
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");

  if(ampersandPosition !== -1){
    return videoId.substring( 0, ampersandPosition);
  }

  return videoId;

}*/

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

        //inserindo dados
        supabase.from('video').insert({
          title: formRegister.values.titulo ,
          url: formRegister.values.url,
          thumb: getThambnail(formRegister.values.url),
          playlist:"jogos",
        })
        .then((oqueveio) => {
          console.log(oqueveio);
        })
        .catch((err) => {
          console.log(err);
        })

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
            placeholder='Titulo do video' 
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
import { StyledRegisterVideo } from './styled_components';

function RegisterVideo(){
  // falta o botäo 
  //modal
  // form
  // precisamos controlar o state
    return(
    <StyledRegisterVideo>
      <button className='add-video'>
        +
      </button>
      <form>
        <div>
          <button className='close-modal'>
            X
          </button>
        
          <input placeholder='tirulo do video'/>
          <input placeholder='URL'/>
          <button type='submit'>
            Cadastrar
          </button>
        </div>
      </form>
    </StyledRegisterVideo>

  )
}

export default RegisterVideo;
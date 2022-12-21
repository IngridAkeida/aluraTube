import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .user-banner{
    position: absolute;
    width: 100%;
    height: 230px;
    left: 0px;
    top: 56px;
    background-color: #ccc;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBw_VAe_gm6iUTDRXol00oBqdII2Yzd_zlA&usqp=CAU);
    background-repeat: no-repeat;
    background-size: 100%;
    filter: blur(5px);
  }
  
  .user-perfil{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid red 1px;
  }
  .user-info{
    margin-top: 280px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  
`;

export default StyledHeader;
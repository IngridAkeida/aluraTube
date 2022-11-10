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
    background-image: url(https://marketplace.canva.com/EAENvjvVCss/1/0/1600w/canva-corporate-professional-linkedin-banner-b_h10Jq8DkA.jpg);
  }
  
  .user-perfil{
    width: 80px;
    height: 80px;
    border-radius: 50%;
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
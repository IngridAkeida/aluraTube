import styled from "styled-components";


const StyledVideoPlayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px;
    flex: 1;
    div {
        width: 50%;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        padding: 20px;
        border-radius: 20px;
    }
    .title {
        padding: 10px;
        width: 896px;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        border-radius:10px;
    }
    iframe {
        border-radius: 20px;
        border: none;
        margin-bottom: 5px;
    }
    .backButton{
        color: ${({ theme }) => theme.textColorBase};
        margin: 20px;
    }
`;

export default StyledVideoPlayer;
import styled from "styled-components";

export const StyledMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 75%;
  overflow-y: scroll;
  padding: 1rem 0 1rem 0;
  margin-bottom: 1rem;
`;

export const StyledMessage = styled.div`
  padding: 1rem;
  background-color: var(--color-gray2);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const StyledChatInformation = styled.div`
display: flex;
align-items: center;
gap: 1rem;
justify-content:space-between ;
flex-wrap: wrap;

  .chatInfo {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-gray2);
    padding: 1rem;
    height: 9rem;
    max-width: 20rem;
    gap: 1rem;

    label {
      font-size: 1.2rem;
    }

    input[type="text"] {
      background-color: var(--color-white);
      height: 2rem;
      padding: 0.5rem;
      font-size: 1.2rem;
    }

    .selectSex {
      display: flex;
      justify-content: left;
      gap: 2rem;

    .male{
        svg{
            color: blue;
        }
        &:hover{
            background-color: #bccefb;
        }
    }

    .female{
        svg{
            color: #ff0044;
        }
        &:hover{
            background-color: #ffa7b6;
        }
    }

    .maleChecked{
        background-color: #bccefb; 
        }
    
    .femaleChecked {
        background-color: #ffa7b6;
    }

      button {
        background-color: var(--color-gray2);
        padding: 0.2rem 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

    
        svg {
          font-size: 2rem;
          position: relative;
          color: var(--color-black);
        }

      }
    }
  }


  .chatMessage{
    width: 70%;
    height: 9rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;

    textarea{
        width: 90%;
        height: 100%;
        padding: 1rem;
        resize: none;
        background-color: var(--color-gray2);
        font-size: 1.2rem;
    }

    button{
        background-color: var(--color-primary);
        color: var(--color-black);
        font-size: 2.2rem;
        width: 4rem ;
        height: 100%;
    }
  }
`;
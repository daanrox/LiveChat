import { useEffect, useRef, useState } from "react";
import {
  StyledMessageContainer,
  StyledMessage,
  StyledChatInformation,
} from "./styles";
import { IoMdMale, IoMdFemale, IoMdSend,  } from "react-icons/io";

export const Message = () => {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [checkGenderSelected, setCheckGenderSelected] = useState<string | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      const { current: messageContainer } = messageContainerRef;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  };


  const buttonSex = (gender: string) => {
    if (checkGenderSelected === gender) {
      setCheckGenderSelected(null);
    } else {
      setCheckGenderSelected(gender);
    }
  };
  return (
    <>
      <StyledMessageContainer ref={messageContainerRef}>
        <StyledMessage>
          <h3>Roberta</h3>
          <p>Oi, tudo bem com você?</p>
        </StyledMessage>

        <StyledMessage>
          <h3>Daanrox</h3>
          <p>Estou ótimo, e você?</p>
        </StyledMessage>
      </StyledMessageContainer>
      <StyledChatInformation>
      <div className="chatInfo">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" />
          <div className="selectSex">
            <button
              className={`male ${checkGenderSelected === "male" ? "maleChecked" : ""}`}
              onClick={() => buttonSex("male")}
            >
              <IoMdMale />
            </button>
            <button
              className={`female ${checkGenderSelected === "female" ? "femaleChecked" : ""}`}
              onClick={() => buttonSex("female")}
            >
              <IoMdFemale />
            </button>
          </div>
        </div>

        <div className="chatMessage">
            <textarea  placeholder="Digite sua mensagem"></textarea>
            <button><IoMdSend/></button>
        </div>
      </StyledChatInformation>


    </>
  );
};

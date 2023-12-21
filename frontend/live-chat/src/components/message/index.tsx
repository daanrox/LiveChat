import { useEffect, useRef, useState } from "react";
import {
  StyledMessageContainer,
  StyledMessage,
  StyledChatInformation,
} from "./styles";
import { IoMdMale, IoMdFemale, IoMdSend,  } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

interface IMessage{
  nickName: string,
  gender: string,
  message: string
}


export const Message = () => {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [talkMessages, setTalkMessages] = useState<IMessage[]>([])
  const [nickName, setNickName] = useState<string | null>(null);
  const [checkGenderSelected, setCheckgenderSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);


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
      setCheckgenderSelected(gender);
  };

  const submitMessage = () =>{
    const messageData: IMessage = {
      nickName: nickName!,
      gender: checkGenderSelected!,
      message: message!,
    }

    console.log(messageData)
  }

  
  return (
    <>
      <StyledMessageContainer ref={messageContainerRef}>

        { talkMessages.map((message)=>{
          return(
            <StyledMessage key={uuidv4()}>
              <h3>{message.nickName}</h3>
              <p>{message.message}</p>
            </StyledMessage>
          )
        })

        }
      </StyledMessageContainer>
      <StyledChatInformation>
      <div className="chatInfo">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" onChange={(e)=>{setNickName(e.target.value)}}/>
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
            <textarea  placeholder="Digite sua mensagem" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button onClick={()=>{
              if(nickName && message){
                submitMessage()
              }
            }}><IoMdSend/></button>
        </div>
      </StyledChatInformation>


    </>
  );
};

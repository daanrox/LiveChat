import { useEffect, useRef, useState } from "react";
import {
  StyledMessageContainer,
  StyledMessage,
  StyledChatInformation,
} from "./styles";
import { IoMdMale, IoMdFemale, IoMdSend } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { io, Socket } from 'socket.io-client';


interface IMessage{
  nickName: string,
  gender: string,
  message: string,
  date: string,
}


export const Message = () => {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [talkMessages, setTalkMessages] = useState<IMessage[]>([])
  const [nickName, setNickName] = useState<string | null>(null);
  const [checkGenderSelected, setCheckgenderSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);


  useEffect(() => {
    socketRef.current = io('https://livechat-8a7m.onrender.com');

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.on('message', (message: IMessage) => {
      setTalkMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socketRef.current?.off('message');
    };
  }, []);


  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      const { current: messageContainer } = messageContainerRef;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  };


  const getCurrentDateTime = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const buttonSex = (gender: string) => {
    setCheckgenderSelected(gender);
  };

  const submitMessage = () => {
    const messageData: IMessage = {
      nickName: nickName!,
      gender: checkGenderSelected!,
      message: message!,
      date: getCurrentDateTime()
    }

    if (socketRef.current) {
      socketRef.current.emit('message', messageData);
    }
  }
  
  return (
    <>
      <StyledMessageContainer ref={messageContainerRef}>

        { talkMessages.map((message)=>{
          return(
            <StyledMessage key={uuidv4()} color={message.gender}>
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
            <textarea  placeholder="Digite sua mensagem" value={message || ''} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button onClick={()=>{
              if(nickName && message){
                submitMessage()
                setMessage('')
                
              }
            }}><IoMdSend/></button>
        </div>
      </StyledChatInformation>


    </>
  );
};

import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const initialAction = () => {
    const message = createClientMessage("Got it");
    updateState(message);
    const botMessage = createChatBotMessage("Pick a slot !", {
      widget: "DatePicker",
    });
    updateState(botMessage);
  };

  const dateAction = (date) => {
    const message = createClientMessage(date);
    
    updateState(message);

    const botMessage= createChatBotMessage(" Enter your Name");
    updateState(botMessage,"name");
  };
  const ageHandler = () =>{

    const botMessage= createChatBotMessage(" Enter your age");
    updateState(botMessage,"age")
  }

  const counter = () => {
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        widget: "Counter",
      }
    );
    updateState(botMessage);
  }
  
  const updateState = (message, checker) => {
    setState((prev) => {
      
        return {
          ...prev,
          messages: [...prev.messages.map((ele)=>{
            if (ele.widget){
              console.log(ele,"pop")
              return {...ele,widget: " "}
  
            }
            return {
             ...ele,
             
            }
          }),message],
          checker
        }
      });
  };

  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            dateAction,
            ageHandler,
            counter
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

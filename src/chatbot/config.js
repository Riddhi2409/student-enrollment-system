import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from '../components/StartBtn';
import DatePicker from '../components/DatePicker';
import Counter from '../components/Counter';

const config = {
  initialMessages: [createChatBotMessage(`- Hello, Welcome to student info system!`,{
    widget: 'startBtn',
    
  })
],
  widgets: [
    {
        widgetName: "startBtn",
        widgetFunc: (props) => <StartBtn {...props} />,
        delay: 10000
    },
    {
      widgetName: "DatePicker",
      widgetFunc: (props) => <DatePicker {...props}/>
    },
    {
      widgetName: "Counter",
      widgetFunc: (props) => <Counter {...props} />
    }
  ]
};

export default config;
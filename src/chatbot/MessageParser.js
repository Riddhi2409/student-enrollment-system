import React from 'react';
import { useDispatch } from 'react-redux';
import { addName ,addAge} from '../store/slice';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const dispatch=useDispatch()
  const parse = (message) => {
    if (checker == "name"){
      dispatch(addName(message));
      actions.ageHandler();
    }
    if (checker == "age"){
      dispatch(addAge(message));
      actions.counter();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
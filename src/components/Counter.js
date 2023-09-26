import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Counter() {
    const [counter,setCounter]=useState(5);
    const [counterArr,setCounterArr] = useState([5])
    const navigate = useNavigate();

    useEffect(()=>{
        counter > 0 && setTimeout(()=>{
        setCounter(counter-1)
        setCounterArr([...counterArr,counter-1])
        }
        ,1000)
        if(counter === 0){
           navigate('/detail')
        }
      },[counter,navigate])

  return (
    <div className='flex flex-row gap-1 justify-center'>
        {
            counterArr.map((couter)=>(
                <h1 key={`${couter}`}>{couter}....</h1>
            ))
        }
    </div>
  )
}

export default Counter

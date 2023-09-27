import { useEffect, useState } from "react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import {addSlot} from '../store/slice'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const getMonthName = (month) => {
  switch (month) {
    case 0:
      return "JAN";
    case 1:
      return "FEB";
    case 2:
      return "MAR";
    case 3:
      return "APR";
    case 4:
      return "MAY";
    case 5:
      return "JUNE";
    case 6:
      return "JULY";
    case 7:
      return "AUG";
    case 8:
      return "SEP";
    case 9:
      return "OCT";
    case 10:
      return "NOV";
    case 11:
      return "DEC";
  }
};

const getDayName = (day) => {
  switch (day) {
    case 0:
      return "SUN";
    case 1:
      return "MON";
    case 2:
      return "TUE";
    case 3:
      return "WED";
    case 4:
      return "THUR";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
  }
};

function DatePicker(props) {
  const dateArray = [];
  for (let i = 1; i <= 6; i++) {
    const dates = new Date();
    dates.setDate(dates.getDate() + i);
    dateArray.push(
      dates.getDate() +
        " " +
        getMonthName(dates.getMonth()) +
        " " +
        getDayName(dates.getDay())
    );
  }

  const morning = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"];
  const noon = ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [element,setElement] = useState("")

  if (date && time) {
   setElement(date + " " + time )
   setDate("");
   setTime("");
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    if (element){
        dispatch(addSlot(element));
        props.actions.dateAction(element);
        setElement("")
    }
  },[element])

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4 justify-center px-1">
      <Carousel responsive={responsive} className="px-1">
        
        {dateArray.map((dates, index) => {
          const daa = dates.split(" ");
          console.log()
          
          return (
            <div
              className={`${date==dates ? "bg-sky-200 " : " bg-white "}flex flex-col items-center text-black hover:bg-sky-200 p-2 rounded-xl font-mono shadow-md w-fit`}
              key={index}
              onClick={() => setDate(dates)}
            >
              <h1 className=" text-cyan-700">
                {daa[0]} {daa[1]}
              </h1>
              <h1 className=" text-sm">{daa[2]}</h1>
            </div>
          );
        })}
      </Carousel>
      <h1>Morning</h1>
      <div className="flex flex-row gap-1 text-sm">
        {morning.map((dates, index) => {
          return (
            <div
              className={`${time==dates ? "bg-sky-200 " : " bg-white "} text-black hover:bg-sky-200 px-1 py-2 rounded-xl font-mono shadow-md w-fit`}
              key={`${index} morning text-sm`}
              onClick={() => setTime(dates)}
            >
              <h1>{dates}</h1>
            </div>
          );
        })}
      </div>

      <h1>Noon</h1>
      <div className="flex flex-row gap-1 text-sm">
        {noon.map((dates, index) => {
          return (
            <div
            className="text-black bg-white hover:bg-sky-200 px-1 py-2 rounded-xl font-mono shadow-md w-fit"
            key={`${index} morning text-sm`}
            onClick={() => setTime(dates)}
          >
            <h1>{dates}</h1>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default DatePicker;

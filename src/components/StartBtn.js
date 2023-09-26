import React from 'react'


export default function StartBtn(props) {

    const initialAction = () => {
        
        props.actions.initialAction();
    }

    return (
        <div>
            <button className=' bg-sky-100 rounded-xl px-[0.5rem] py-[1rem] hover:text-black hover:bg-sky-200 border-2 ml-[3rem] ' onClick={initialAction} >Got it</button>
        </div >
    )
}
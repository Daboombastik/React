import React, {useState} from 'react';

interface IEventListener {
    input: string,
    button: string
}

function EventListener(props: IEventListener) {
    const[value, setValue] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        setValue('')
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>{props.button}</button>
            <div draggable onDrag={dragHandler}></div>
        </div>
    );
}

export default EventListener;
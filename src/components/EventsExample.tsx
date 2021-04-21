import React, { FC, useRef, useState } from "react"

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDarg, setIsDarg] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setValue(target)
    };
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValue('');
        console.log(inputRef.current?.value);
        
    }
    const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        setIsDarg(false)
    }
    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDarg(false)
    }
    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDarg(true)
    }
    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder='Guided element'/>
            <input type="text" ref={inputRef} placeholder='Unguided element'/>
            <button onClick={clickHandler}>Send</button>
            <div style = {{display:'flex'}}>
                <div onDrag={dragHandler}
                    draggable
                    style={{ width: 200, height: 200, backgroundColor: 'lightgray', marginRight: '15px' }}
                ></div>
                <div onDrop={dropHandler}
                    onDragLeave={leaveHandler}
                    onDragOver = {dragWithPreventHandler}
                    style={{ width: 200, height: 200, backgroundColor:isDarg?'lightgreen':'lightgray' }}
                ></div>
            </div>
        </div>
    )
}

export default EventsExample
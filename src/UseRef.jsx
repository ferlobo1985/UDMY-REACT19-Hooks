import { useRef } from "react"

const UseRefComponent = () => {
    const textInput = useRef();
    const triggerHandler = () => {
        console.log(textInput)
    }

    return(
        <>
            <h1>form:</h1>
            <input type="text" ref={textInput}/>
            <button onClick={triggerHandler}>
                Trigger
            </button>
        </>
    )
}

export default UseRefComponent;
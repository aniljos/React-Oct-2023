import {useState, useRef} from 'react';

function Counter(props){

    const [counter, setCounter]  = useState(props.value); 
    const inputRef = useRef(null);  

    function inc(){
        console.log("inc invoked..")
        //props.value++;  This is read-only
        setCounter(counter + 1);
        
    }

    function decr(){
        console.log("decr invoked..")
        //props.value--;  This is read-only
        setCounter(counter - 1);
    }

    function handleChange(evt){

        console.log("handleChange", evt);
        const value = evt.target.value;
        if(value){
            setCounter(Number(value))
        }
        else{
            setCounter(0);
        }
        
    }

    function handleUpdate(){

        const value = inputRef.current.value;
        if(value){
            setCounter(Number(value));
        }
        
    }
    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                {/* controlled input */}
                Count: <input type="number" value={counter} onChange={handleChange}/>
            </div>

            <div>
                {/* uncontrolled input */}
                Update Count: <input ref={inputRef} type='number'/>
                &nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default Counter;
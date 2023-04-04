import { useState } from "react";

function ArrCounter(){
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [...prevArr, "+" ])
    }

    function Addminus(){
    setArr(prevArr => [...prevArr, "-" ] )
    }

    function Reset(){
        setArr([])
    }

    return (
        <div>
            <button onClick={Reset}></button>
            <button onClick={Addminus} >-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </div>
    );  
}


export default ArrCounter;
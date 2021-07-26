
import { useState } from "react";

function Examples() {

    const [ isActive, setActive ] = useState("false"); 

    const handleToggle = () => {
        console.log(useState)
        setActive(!isActive); 
    };
    

    return (
        <div className="examples">
            <form action="">
                <label for="wealth">wealth</label>
                <input onClick={handleToggle} type="checkbox" id="wealth" name="wealth"></input> 
                <label for="happiness">Happiness</label>
                <input onClick={handleToggle} type="checkbox" id="happiness" name="happiness"></input>
                <label for="love">Love</label>
                <input onClick={handleToggle} type="checkbox" id="love" name="love"></input>
                <label for="health">Health</label>
                <input onClick={handleToggle} type="checkbox" id="health" name="health"></input>     
            </form>

            <ul>
                <li className={isActive ? "item" : null}>Money</li>
                <li className={isActive ? "item" : null}>Love</li>
                <li className="item">Happiness</li>
                <li className="item">Health</li>
            </ul>
        </div>
    )
}


export default Examples
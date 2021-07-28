function Examples(props) {

    return (
        <div className="examples">
            <button onClick={(e) => {props.handleUserSelectionToggle(e.target.value)}} type="checkbox" 
            id="wealth" 
            name="wealth"
            value= "I have wealth">Wealth</button>
            <button onClick={() => {props.handleUserSelectionToggle("happiness")}}  type="checkbox" id="happiness" name="happiness">Happiness</button>
            <button onClick={() => {props.handleUserSelectionToggle("love")}}  type="checkbox" id="love" name="love">Love</button>
            <button onClick={() => {props.handleUserSelectionToggle("health")}}  type="checkbox" id="health" name="health">Health</button>

        </div>
    )
}

export default Examples

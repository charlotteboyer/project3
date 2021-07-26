function Examples(props) {

    return (
        <div className="examples">
            <form action="">
                <label htmlFor="wealth">wealth</label>
                <input 
                onClick={(e) => {props.handleUserSelectionToggle(e.target.value)}} type="checkbox" 
                id="wealth" 
                name="wealth"
                value= "I have wealth"/>
                <label htmlFor="happiness">Happiness</label>
                <input onClick={() => {props.handleUserSelectionToggle("happiness")}}  type="checkbox" id="happiness" name="happiness"/>
                <label htmlFor="love">Love</label>
                <input onClick={() => {props.handleUserSelectionToggle("love")}}  type="checkbox" id="love" name="love"/>
                <label htmlFor="health">Health</label>
                <input onClick={() => {props.handleUserSelectionToggle("health")}}  type="checkbox" id="health" name="health"/>    
            </form>

        </div>
    )
}


export default Examples
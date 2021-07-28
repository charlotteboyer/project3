import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faDollarSign, faHeart, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const wealthIcon = <FontAwesomeIcon icon={faDollarSign} />
const happyIcon = <FontAwesomeIcon icon={faSmile} />
const loveIcon = <FontAwesomeIcon icon={faHeart} />
const healthIcon = <FontAwesomeIcon icon={faPlusSquare} />

function Examples(props) {

    return (
        <div className="examples">
            <h3>Choose from one of the below affirmations</h3>
            <button onClick={(e) => {props.handleUserSelectionToggle(e.target.value)}} type="checkbox" 
            id="wealth" 
            name="wealth"
            value= "I have wealth">{wealthIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("happiness")}}  type="checkbox" id="happiness" name="happiness">{happyIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("love")}}  type="checkbox" id="love" name="love">{loveIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("health")}}  type="checkbox" id="health" name="health">{healthIcon}</button>

        </div>
    )
}

export default Examples

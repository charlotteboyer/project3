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
            <button onClick={(e) => {props.handleUserSelectionToggle(`I have an abundance of wealth. Money flows to me in unexpected ways.`)}} type="checkbox" 
            id="wealth" 
            name="wealth"
            >{wealthIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("I choose happiness. Feeling joy is my birthright")}}  type="checkbox" id="happiness" name="happiness">{happyIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("My heart is prepared to recieve love. I welcome love with open arms")}}  type="checkbox" id="love" name="love">{loveIcon}</button>
            <button onClick={() => {props.handleUserSelectionToggle("I attract health and vitality. My body is strong and prosperous")}}  type="checkbox" id="health" name="health">{healthIcon}</button>

        </div>
    )
}

export default Examples

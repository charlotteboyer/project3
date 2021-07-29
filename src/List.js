import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTrain } from '@fortawesome/free-solid-svg-icons'

const xIcon = <FontAwesomeIcon icon={faTimes} />
const trainIcon = <FontAwesomeIcon icon={faTrain} />

const List= (props) => {
    return (
        <ul>
          {
            props.manifestations.map((manifestObj) => {
              return (
                <li key={manifestObj.key}>
                  <span className="trainIcon">{trainIcon}</span>
                  {manifestObj.contentBlurb} 
                  <span>
                    <span className="sr-only">delete here</span>
                    <button onClick={() => props.handleDelete(manifestObj.key)}>{xIcon}</button>
                  </span>
                </li>             
              )
            }) 
          
           }
        </ul>
    )

}

export default List 
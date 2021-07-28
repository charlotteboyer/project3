
const Form = (props) => {
return(
    <form action="submit" onSubmit={props.handleSubmit}>
        <label htmlFor="usersManifestation">add your own manifestation here</label>
        <input type="text" 
        placeholder="I am .... I have ... I choose... I attract"
        onChange={props.handleChange}
      //controlled input react updates the input 
        value={props.userInput}
        required
        />
        <button>manifest!</button>
    </form>
    )
}


export default Form 
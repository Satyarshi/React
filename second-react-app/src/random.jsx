function NumberGenerator(){
    let number = Math.random()*100
    return <h2 style = {{'background-color': '#776691'}}>Random no. is {Math.floor(number)}</h2> //if we want to use inline style in jsx then we have to use double curly braces {{}}
}
export default NumberGenerator;
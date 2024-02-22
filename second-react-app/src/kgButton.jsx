function KgButton(){// since it is a jsx file therefore first letter should be capital therefore if we write k instead of K then it will not work properly
    let name = "future"
    let myname = () =>{
        return "Satyarshi Shukla"
    }
    return <h3>Hello this is {name} speaking . I am {myname()}</h3>
    // using {} we can embed any JS expression directly within JSX. This includes variables,function calls, and more

}
export default KgButton;
const defaultState={
    num:20
}
let reducer = (state = defaultState)=>{
    return JSON.parse(JSON.stringify(state))
}
export default reducer()
// test2

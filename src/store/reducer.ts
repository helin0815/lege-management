import {valueOf} from "@typescript-eslint/eslint-plugin";
import handleNum from "@/store/NumStatus";
const defaultState = {
    // num: NumStatus.state.num
    ...handleNum.state // 解构的方式
}
let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "add1":
            handleNum.actions.add1(newState)
            break
        case "add2":
            handleNum.actions.add2(newState, action)
            break
        default:
            break
    }
    return newState
}
export default reducer
// test2

import {useSelector, useDispatch} from "react-redux"
import {Button} from "antd";
import store from "@/store";

type RootState = ReturnType<typeof store.getState>

const View = () => {
    // 获取仓库数据
    const {num} = useSelector((state: RootState) => ({
        num: state.num
    }))
    const dispatch = useDispatch()
    const changeNum = () => {
        dispatch({type: 'add1'})
    }
    return (
        <div className="home">
            <p>page1</p>
            <p>{num}</p>
            <Button onClick={changeNum}>按钮</Button>
        </div>
    )
}
export default View

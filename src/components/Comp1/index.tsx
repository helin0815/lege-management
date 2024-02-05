// import "./comp1.module.scss"  // 这样是全局引入，会影响到其他组件，不能这么写
// 模块化引入
import styles from "./comp1.module.scss"

function Comp1(){
    return <div className={styles.box}>
        <p>这是comp的内容</p>
    </div>
}
export default Comp1

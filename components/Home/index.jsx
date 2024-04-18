import style from "./index.module.css"
import qr from "../../images/image-qr-code.png"

const Home =()=>{
    return(
        <div className={style.mainCont}>
          <img src={qr} alt={""}/>
        </div>
    )
}
export default Home;
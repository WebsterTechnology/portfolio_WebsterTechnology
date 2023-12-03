import { username } from "../../../data/user"
import bannerImg from "../../../assets/banner-img.png";
import styles from "./style.module.css"

export const BannerSection = ()=>{
    return (
        <section className={styles.banner}>
            <div className="container">
                <section className={styles.sectionText}>
                    <span className="label">{username}</span>
					<h1 className="title1">Welcome to my portfolio</h1>
					<p className="paragraph">check my LinkedIn</p>
					<button className="btn" onClick={()=>location.replace('https://www.linkedin.com/in/webster-technology-school-a3751b278/')} >know more</button>
                </section>
                <img src={bannerImg}/>
            </div>
        </section>
    )
}
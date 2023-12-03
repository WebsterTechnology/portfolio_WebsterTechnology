import whats from "../../assets/whatsapp-icon.png" 
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"
import styles from "./styles.module.css"
//footerr
export const Footer = ()=>{
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                <div>
                    <h2 className="title2">Contact</h2>
                    <div className={styles.imgs}>
                        <img src={whats} alt="whatsapp" onClick={()=>location.replace('https://web.whatsapp.com/')} />
                        <img src={linkedin} alt="linkedin" onClick={()=>location.replace('https://www.linkedin.com/in/webster-technology-school-a3751b278/')} />
                        <img src={github} alt="github" onClick={()=>location.replace('https://github.com/WebsterTechnology/projectWebster')}/>
                    </div>
                </div>
                <span className='paragraph'>All copyrights reserved - WSL</span>
            </div>
        </footer>
    )
}
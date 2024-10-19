import { Fragment } from "react";
import discord from "../../assets/about/Discord.svg"
import email from "../../assets/about/Email.svg"

const Contact = () => {
    return(
        
        <Fragment>
            <div className="contact-card-landing border-2 border-slate-500 px-4 py-4" style={{width : ""}}>
                <h3>Message Me Here </h3>
                <div className="contact-list mt-4">
                    <a href="https://discord.gg/vMuNx2JN" className="discord-link hover:opacity-100 opacity-70 flex items-center my-2" style={{gap : "8px"}}>
                        <img src={discord} />
                        <div className="discord-name">barman.ayush</div>
                    </a>
                    <a href="mailto:barmanayush2980@gmail.com" className="email-link hover:opacity-100 opacity-70 flex items-center my-2" style={{gap : "8px"}}>
                        <img src={email} />
                        <div className="email-name">barmanayush2980@gmail.com</div>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;
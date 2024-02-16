import '../Styles/Footer.css'

import IconFacebook from "../Icons/IconFacebook.png"
import IconInstagram from "../Icons/IconInstagram.png"
import IconTwitterX from "../Icons/IconTwitterX.png"
import IconWhatsapp from "../Icons/IconWhatsapp.png"
import IconTiktok from "../Icons/IconTiktok.png"
import IconPinterest from "../Icons/IconPinterest.png"

import mascota from "../Imgs/Mascota.png"

export function Footer () {
    return(
        <div className="footer">
            <div className="redes">
                <h3 className="titRedes">Contactanos</h3>
                <div className="redesSociales">
                    <div className="bloque1">
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon iconFB' src={ IconFacebook } alt="" />
                                <h3>Facebook</h3>
                            </a>
                        </div>
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon' src={ IconInstagram } alt="" />
                                <h3>Instagram</h3>
                            </a> 
                        </div>
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon' src={ IconTwitterX } alt="" />
                                <h3>X / Twitter</h3>
                            </a>   
                        </div>
                    </div>
                    <div className="bloque2">
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon' src={ IconWhatsapp } alt="" />
                                <h3>WhatsApp</h3>
                            </a>
                        </div>
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon' src={ IconTiktok } alt="" />
                                <h3>Tiktok</h3>
                            </a>
                        </div>
                        <div className="RedSocial">
                            <a href="#">
                                <img className='icon' src={ IconPinterest } alt="" />
                                <h3>Pinterest</h3>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="visitaGaleria"></div>
                    <div className="mascotaFooter"></div>
            </div>
            <div className="mascota">
                <img className="mscImg" src={ mascota } alt="" />
            </div>
        </div>
            
    )
}
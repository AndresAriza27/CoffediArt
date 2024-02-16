import '../Styles/Jumbotron.css'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export function Jumbotron () {
    return (
        <div className="Jumbotron">
            <div className="logoJ">
                {/* <img src="https://i.ibb.co/9th00hD/LOGOFINALPNG.png" alt="logo" /> */}
            </div>
            <div className="TituloLemaMascota">
                <div className="TituloLema">
                    <div className="Tit">
                        <motion.h1 initial="hidden" whileInView="visible" viewport={{once: true}}
                        transition={{duration:1}} variants={{ 
                            visible: {opacity:1, scale: 1}, hidden: {opacity:0, scale:0.5}
                         }} className='TituloJumbotron'>Coffee di Art</motion.h1>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{once: true}}
                        transition={{duration:1, delay:1}} variants={{
                            visible: {opacity:1, scale: 1}, hidden: {opacity:0, scale:0.5}
                        }}className='LemaJumbotron'>Mira la vida con color</motion.h2>
                    </div>
                </div>
                {/* <div className="mascota">
                    <img src="https://www.dzoom.org.es/wp-content/uploads/2011/04/fotos-mascotas-animal-perro-consejos-fotografiar-810x540.jpg" alt="Mascota" />
                </div> */}
            </div>
            <div className="conBox">
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true}}
                transition={{duration: 1, delay: 1}} variants={{
                    visible: {opacity: 1, width:'80%'}, hidden:{opacity:1, width:'0%'}
                }} 
                className="box"></motion.div>
            </div>
        </div>
    )
}
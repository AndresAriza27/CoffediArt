import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import '../Styles/Carrousel.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export function Carrousel () {

    const slide_image1 = "https://i.ibb.co/Xp170T9/Pintura-Paisaje-Cascada.png"
    const slide_image2 = "https://i.ibb.co/Y82Y9Xp/Pintura-Paisaje-Con-Chica.png"
    const slide_image3 = "https://i.ibb.co/M5b4tfr/Dibujo-Mujer-Sin-Pelo.png"
    const slide_image4 = "https://i.ibb.co/JjqLYCm/Vitral-One-Piece.png"
    const slide_image5 = "https://i.ibb.co/Z25WkRR/Dibujo-Retrato-Chico.png"
    const slide_image6 = "https://i.ibb.co/n1Q6ppZ/Dibujo-Bocetos-Cara2.png"

    return (
        <div className="carrousel"> 
            <div className="parrafoBienvenida">
                <motion.h3 initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} viewport={{once: true}}
                transition={{duration:1, delay:2}}className='parrafoB'>
                    ¡Bienvenidos a Coffee Di Art! Somos una empresa de arte dirigida por una joven 
                    colombiana apasionada por el arte. Ofrecemos una amplia variedad de servicios artísticos 
                    para todo público, desde pinturas y dibujos hasta camisetas pintadas, vitrales y regalos 
                    hechos a mano. Nos enorgullece ofrecer servicios personalizados y de alta calidad para cada 
                    cliente. En Coffee Di Art, creemos que el arte es una forma de expresión y una manera de 
                    conectar con el mundo que nos rodea. Nuestro objetivo es ayudar a nuestros clientes a 
                    encontrar su voz artística y a crear piezas únicas que reflejen su personalidad y estilo. 
                    ¡Gracias por considerar Coffee Di Art para tus necesidades artísticas!</motion.h3>
            </div>
            <div className="tituloCarrousel">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{once: true}}
                transition={{duration:2, delay: 2}} variants={{ 
                visible: {opacity:1, scale: 1}, hidden: {opacity:0, scale:0.5, border:'0px solid black'}
                }} className='TituloJumbotron'>¡Mira nuestros últimos proyectos!</motion.h2>
            </div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} autoplay={{delay: 2000, disableOnInteraction: false,}}
            slidesPerView={'auto'} coverflowEffect={{rotate:50, stretch:0, depth:100, modifier:1, scale:1}}
            pagination={{el:'.swiper-pagination', clickable:true}} modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} 
            navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev', clickable:true}} className='swiper-container'>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image1} alt="" /></SwiperSlide>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image2} alt="" /></SwiperSlide>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image3} alt="" /></SwiperSlide>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image4} alt="" /></SwiperSlide>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image5} alt="" /></SwiperSlide>
                <SwiperSlide style={{width: 'fit-content'}}><img src={slide_image6} alt="" /></SwiperSlide>
                <div className="slider-controler">
                    <div className='swiper-button-next'></div>
                    <div div className='swiper-button-prev'></div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}
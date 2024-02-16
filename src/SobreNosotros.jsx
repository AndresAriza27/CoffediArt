import './Styles/Fondo.css'
import { Footer } from "./Components/Footer";
import './Styles/SobreNosotros.css'

export function SobreNosotros () {
    return (
        <div className="Home">
            <div className="about">
                <div className="tituloAbout"><h1>Sobre Nosotros</h1></div>
                <h3>¡Hola!🤗 Soy Sara, Bienvenido a Coffee di Art</h3>
                <p>Para nosotros, tu estilo es importante. Deja de ver la vida en blanco y negro y dale un poco de color, dale armonía y sentimiento y descubre el placer de un sinfín de posibilidades.</p>
                <div className="mision">
                    <h2 className='titMision'>Misión</h2>
                    <ul >
                        <li className="listMision">
                            <p>Ofrecer a nuestros clientes productos y servicios artísticos de calidad, que se adapten a sus necesidades y expectativas, utilizando diferentes técnicas y materiales, con un enfoque sostenible y socialmente responsable.</p>
                        </li>
                        <li className="listMision">
                            <p>Dibujar, pintar y hacer arte con el propósito de generar valor y belleza, tanto para nuestros clientes como para la sociedad, utilizando nuestra experiencia, talento y creatividad.</p>
                        </li>
                        <li className="listMision">
                            <p>Ser una empresa de arte que se distinga por su profesionalismo, innovación y diversidad, que contribuya al crecimiento y la difusión de la cultura artística en Colombia y en el mundo.</p>
                        </li>
                    </ul>
                </div>
                <div className="vision">
                    <h2 className='titVision'>Visión</h2>
                    <ul>
                        <li className="listMision"><p>Ser una empresa líder en el mercado del arte en Colombia, ofreciendo productos y servicios de alta calidad, innovación y creatividad, que reflejen la identidad y la cultura de nuestro país.</p></li>
                        <li className="listMision"><p>Inspirar y transformar el mundo con el arte, brindando soluciones personalizadas y originales a nuestros clientes, que expresen su personalidad y sus emociones.</p></li>
                        <li className="listMision"><p>Crear arte con pasión y compromiso, buscando la excelencia y la satisfacción de nuestros clientes, así como el desarrollo personal y profesional de nuestro equipo.</p></li>
                    </ul>
                </div>
                <div className="inicio">
                    <h2>Nuestra Historia</h2>
                    <p>Abrimos 12 de enero de 2023</p>
                    <p> Empezamos con una breve dificultad que vimos en nuestro entorno, la simple razon de que nuestros clientes necesitaban realizar algunos proyectos como tarea de colegio. Breves trabajos que empezamos a realizar, 
                        poco a poco abarcar una selección de clientes, hasta llegar a crear nuestra empresa en base a esta problematica.</p>
                    <p>Queremos llegar a formar nuestra propia sucursal y seguir realizando nuestros trabajos</p> 
                    <p>Te ofrecemos dibujos a lapiz (blanco y negro o a color),  murales, pinturas con diferentes medidas y en diferentes superficies según tu petición y pintamos tu ropa según tu preferencia</p>
                </div>
                <div className="mascotaTxt">
                    <h2>Nuestra Mascota</h2>
                    <p>¡¡Tenemos nuestra mascota!! Nos gustaria presentarte a coffee es nuestra artista estrella. Te ayudará con cualquier información que necesites...</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
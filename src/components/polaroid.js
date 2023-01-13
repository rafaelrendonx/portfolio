import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'
import p5 from '../assets/images/p5.png'

const links = [
    {
        imagen: p1,
        link: 'https://rafaelrendonx.github.io/P1-Visita-Hermosillo/',
        nombre: 'Visita Hermosillo'
    },
    {
        imagen: p2,
        link: 'https://rafaelrendonx.github.io/P2-Lista-de-Supermercado/',
        nombre: 'Lista de Supermercado'
    },
    {
        imagen: p3,
        link: 'https://rafaelrendonx.github.io/P3-Dashboard-Clima/',
        nombre: 'Clima App'
    },
    {
        imagen: p4,
        link: 'https://sensational-brioche-cef076.netlify.app/',
        nombre: 'Asadero Uno'
    },
    {
        imagen: p5,
        link: 'https://gym-backend.vercel.app/',
        nombre: 'Gym Zone'
    },
]


export default function Polaroid() {
    return (
        <>
            <h1 className='display-4 fw-bold lh-1 py-3 text-center text-white bg-black' id='Projects'>Projects</h1>
            <div className="py-4 row wrapper">

                {links.map((link) => {
                    return (
                        <div className="col-6 item">

                            <div className="polaroid border">
                                <img src={link.imagen} target="_blank" className='border'/>
                                <a className='caption' href={link.link}>{link.nombre}</a>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}
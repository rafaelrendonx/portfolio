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
            <h1 className='text-white bg-black text-center p-3'>Proyectos</h1>
            <div className="wrapper">

                {links.map((link) => {
                    return (
                        <div className="item">

                            <div className="polaroid border">
                                <img src={link.imagen} target="_blank" href={link.link} className='border'/> <a target="_blank" href={link.link}></a>
                                <div className="">{link.nombre}</div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}
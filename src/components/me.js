import me from '../assets/images/yo.jpg'

export default function Me() {
    return (
        <>
            <h1 className='text-white bg-black text-center p-3'>Yo</h1>
            <div className='container py-4'>

                <div className='row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                    
                    <div className='col-5 item p-4 d-flex flex-column position-static h-100 p-5 bg-light rounded-3'>
                        <h6 className=''>
                            Rafael Rendon. 33 Años.
                            <br />
                            <br />
                            Hermosillo, Sonora, México.
                            <br />
                            <br />
                            Ing. en Electrónica.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            Desarrollador Jr FullStack.
                        </h6>
                    </div>

                    <div className="col-7 text-center bg-black item">
                        
                            <div className="polaroid rounded-1">
                                <img className='' src={me} width='100%' height='80%'/>
                            
                            
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}
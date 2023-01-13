import me from '../assets/images/yo.jpg'

export default function Me() {
    return (
        <>
            <h1 className='display-4 fw-bold lh-1 py-3 text-center text-white bg-black' id='Me'>Me</h1>
            <div className='container py-4'>

                <div className='row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>

                    <div className='col-8 item p-4 d-flex flex-column position-static h-100 p-5 bg-black rounded-3 border'>
                        <div className='tarjeta typewriter'>
                            <h6 className='variable'>Name: </h6>
                            <h6 className='data'> Rafael Rendon</h6>
                        </div>
                        <br />
                        <div className='tarjeta typewriter'>
                            <h6 className='variable'>Position: </h6>
                            <h6 className='data'> Jr. Full Stack Developer</h6>
                        </div>
                        <br />
                        <div className='tarjeta typewriter'>
                            <h6 className='variable'>Education:</h6>
                            <h6 className='data'> Electronic Engineering</h6>
                        </div>
                        <br />
                        <div className='tarjeta typewriter'>
                            <h6 className='variable'>Location:</h6>
                            <h6 className='data'> Hermosillo, Sonora, México.</h6>
                        </div>
                        <br />
                        <div className='tarjeta typewriter'>
                            <h6 className='variable'>Skills:</h6>
                            <h6 className='data'> React | NodeJs | Express | MongoDB </h6>
                        </div>
                        <br />
                    </div>

                    <div className="col-4 text-center bg-black item">

                        <div className="polaroid rounded-1">
                            <img className='' src={me} width='100%' height='80%' />


                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}
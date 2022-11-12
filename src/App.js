import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import p1 from './assets/images/p1.png'
import p2 from './assets/images/p2.png'
import p3 from './assets/images/p3.png'
import p4 from './assets/images/p4.png'
import p5 from './assets/images/p5.png'

import { Content, Sidebar } from "rsuite";
import "rsuite/dist/rsuite.min.css";




function GridExample() {
  return (


    <div class="row row-cols-1 row-cols-md-2 g-4">

      <div class="col">
        <div class="card">
          <img src={p1} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <a class="card-text" href='https://rafaelrendonx.github.io/P1-Visita-Hermosillo/'>Visita Hermosillo</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={p2} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <a class="card-text" href='https://rafaelrendonx.github.io/P2-Lista-de-Supermercado/proyecto2.html?classId=f50f3cfb-9708-40ee-8da9-e04854046f8c&assignmentId=2437f90d-eb26-46fe-b7e8-bdd5c1c4b8e5&submissionId=59e2d619-96dd-f25f-2013-253edf13892b'>
              Lista de Supermercado</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={p3} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <a class="card-text" href='https://rafaelrendonx.github.io/P3-Dashboard-Clima/'>Clima App</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={p4} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <a class="card-text" href='https://sensational-brioche-cef076.netlify.app/'>Asadero Uno</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={p5} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <a class="card-text" href='https://gym-backend.vercel.app/'>Gym Zone</a>
          </div>
        </div>
      </div>

    </div>


  );
}


function AutoLayoutExample() {
  return (

    <div>

      <Row className='container-fluid text-center'>
        <Col className='custom-nav'>
          <h1>Rafael Rendon</h1>
        </Col>
      </Row>

      <Sidebar className='col-4 container-fluid lado-izquierdo'>
        <p style={{ color: "white" }}>
          <p class="card-text">Mi Github</p>
          <p class="card-text">Mi LinkedIn</p>
          <p class="card-text">Mi Instagram</p>
        </p>

      </Sidebar>


      <Content className='lado-derecho'>

        <GridExample />


      </Content>

    </div>
  );
}






function App() {

  return (
    <>

      <AutoLayoutExample />
    </>
  );
}

export default App;

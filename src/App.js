import JumbotronComp from './components/jumbotron';
import Parallax from './components/parallax';
import Polaroid from './components/polaroid';
import Me from './components/me';
import Sidebar from './components/sidebar';

function App() {

  return (
    <>
      <Sidebar />
      <JumbotronComp />
      <Parallax />
      <Me />
      <Parallax />
      <Polaroid />

      <Parallax />
    </>
  );
}

export default App;

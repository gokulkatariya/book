
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Category from './Components/Category';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Image1 from './Components/Images/lalchand.jpeg';
import Image2 from './Components/Images/gokul.jpeg';
import Image3 from './Components/Images/laxman.jpeg';
import Image4 from './Components/Images/jhabar.jpeg';
import Example from './Components/Example';
function App() {
  return (
    <>
    <Example/>
      <Navbar />
      {/* <Homepage /> */}
      <div className="container my-5">
        <h2>Featured Book -</h2>
        <div className="row">
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2>Reviaw -</h2>
        <div className="row">
          <div className="col-md-3">
            <About image={Image1} name={'Lalchand'} text={'CEO'} />
          </div>
          <div className="col-md-3">
            <About image={Image2} name={'Gokul Kumar'}  text={'Manager'} />
          </div>
          <div className="col-md-3">
            <About image={Image3} name={'Laxman Kumar'}  text={'Artist'} />
          </div>
          <div className="col-md-3">
            <About  image={Image4} name={'Jhabar Mal'}  text={'Artist'} />
          </div>
        </div>
      </div>
      <div className="container-fluild mx-5">
        <h2 className=" my-5">Support -</h2>
        <Contactus />
      </div>
        <Footer />
    </>
  );
}

export default App;

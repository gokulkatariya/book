
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
import gita1 from './Components/Images/gita.jpg';
import ramayan1 from './Components/Images/Ramayan.jpg';
import mahabharat1 from './Components/Images/mahabharat.jpg';
import hanuman1 from './Components/Images/hanuman.jpg';
import kabirdas1 from './Components/Images/kabirdas.jpg';
import tulsidas1 from './Components/Images/Tulsidas.jpg';
import shyambaba1 from './Components/Images/shyambaba.jpg';
import shiv1 from './Components/Images/shiv.jpg';
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <div className="container my-5">
        <h2>Featured Book -</h2>
        <div className="row">
          <div className="col-md-3">
            <Category image={gita1}  name={'Bhagvat Gita'}/>
          </div>
          <div className="col-md-3">
            <Category image={ramayan1} name={'Ramayan'}/>
          </div>
          <div className="col-md-3">
            <Category image={mahabharat1} name={'Mahabharat'}/>
          </div>
          <div className="col-md-3">
            <Category image={hanuman1} name={'Hanuma Chalisa'}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Category image={kabirdas1} name={'Sant Kabir Das'}/>
          </div>
          <div className="col-md-3">
            <Category image={tulsidas1} name={'Sant Tulsi Das'}/>
          </div>
          <div className="col-md-3">
            <Category image={shyambaba1} name={'Shyam Baba'} />
          </div>
          <div className="col-md-3">
            <Category image={shiv1} name={'Shiv'}/>
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

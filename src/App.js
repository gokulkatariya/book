
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
            <Category image={gita1}  name={'Bhagvat Gita'} link={'https://vedpuran.files.wordpress.com/2012/03/unencrypted-geeta.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={ramayan1} name={'Ramayan'} link={'https://bestmotivationalstoryhindi.files.wordpress.com/2023/07/valmiki-ramayana-only-hindi.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={mahabharat1} name={'Mahabharat'} link={'https://vedpuran.files.wordpress.com/2021/03/mahabhart-gorkhpur.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={hanuman1} name={'Hanuma Chalisa'} link={'https://www.hindutemplealbany.org/wp-content/uploads/2016/08/Sri_Hanuman_Chalisa_Hindi.pdf'}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Category image={kabirdas1} name={'Sant Kabir Das'} link={'https://upload.wikimedia.org/wikipedia/commons/9/99/903_Verses_of_Kabir_in_Hindi_Kabir_ke_dohe.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={tulsidas1} name={'Sant Tulsi Das'} link={'https://ia803109.us.archive.org/26/items/tulsidaskedoheinhindi/%E0%A4%97%E0%A5%8B%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%AE%E0%A5%80%20%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%B8%E0%A5%80%E0%A4%A6%E0%A4%BE%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%A6%E0%A5%8B%E0%A4%B9%E0%A5%87.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={shyambaba1} name={'Shyam Baba'} link={'https://pdfinbox.com/wp-content/uploads/2023/04/Khatu-Shyam-Chalisa.pdf'}/>
          </div>
          <div className="col-md-3">
            <Category image={shiv1} name={'Shiv'} link={'https://thakurbhimsingh.com/wp-content/uploads/2019/03/shiv-ji-ki-amar-katha-edition1.pdf'}/>
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

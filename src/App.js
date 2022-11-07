import './styles.css';
import Nav from './components/Nav';
import ReactRouter from './components/ReactRouter';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="Header">
        <div className="Name"><a href="./">krishi sharma</a></div>
        <Nav/>
      </div>
      <ReactRouter/>
      <Footer/>
    </>  
  );
}

export default App;

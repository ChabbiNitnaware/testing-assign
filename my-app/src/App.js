import './App.css';
import Sideb from './components/Sideb';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2 col-sm-12 d-md-block bg-light  sidebar">
              <Sideb />
            </div>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 col-sm-8 ">
              <Dashboard />
            </div>
          </div>
      </div>
    </>
  );
}

export default App;

import Sideb from './Sideb';
import Dashboard from './Dashboard';

function Home() {
    return(
           <div className="container-fluid">
                <div className="row">
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <Sideb />
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Dashboard />
                </main>
                </div>
            </div>
       
    )
}
export default Home;
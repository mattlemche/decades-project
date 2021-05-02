import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import About from './components/About/About';
import Video from './components/Video/Video';
import Profiles from './components/Profiles/Profiles';
import NextLocation from './components/NextLocation/NextLocation';
import Footer from './components/Footer/Footer';
import Supporters from './pages/Supporters';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact render={(routeprops) => {
            return (
              <>
                  <MainHeader />
                  <main className="main">
                    <About />
                    <Video />
                    <Profiles />
                    <NextLocation />
                  </main>
                  <Footer />
              </>
            )
          }} />
      <Route path='/supporters' component={Supporters} />

      </Switch>
      

      
    </Router>
  );
}

export default App;

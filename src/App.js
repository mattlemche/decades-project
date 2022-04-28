import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MainHeader from './components/MainHeader/MainHeader';
import TempHeader from './components/TempHeader/TempHeader';
import About from './components/About/About';
import Video from './components/Video/Video';
import Profiles from './components/Profiles/Profiles';
import NextLocation from './components/NextLocation/NextLocation';
import NextLocationAlt from './components/NextLocationAlt/NextLocationAlt';
import Footer from './components/Footer/Footer';
import Supporters from './pages/Supporters';
import Donation from './components/Donation/Donation';

function App() {

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth()
  const currentHour = new Date().getHours();

  console.log({currentDay, currentMonth, currentHour});

  const headerDisplay = () => {
    if (currentMonth === 3 && currentDay === 28 && currentHour > 0) {
      return (
        <TempHeader />
      );
    } else {
      return (
        <MainHeader />
      );
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Switch>
      <Route path='/' exact render={(routeprops) => {
            return (
              <>
                  {headerDisplay()}
                  <main className="main">
                    <About />
                    <Video />
                    <Profiles />
                    <NextLocation />
                    <NextLocationAlt />
                    <Donation/>
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

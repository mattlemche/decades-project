import './App.scss';
import DecadesClock from './components/DecadesClock/DecadesClock';
import profiles from './data';

function App() {
  return (
    <div className="App">
      <header className="header">
        <DecadesClock />
      </header>
      <main className="main">

        <section className="section">
          <h3 className="heading-3">What is the Decades Project?</h3>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
        </section>
        
        <section className="section">
          <h3 className="heading-3">
              Watch Episode One
          </h3>
          <div className="i-frame"><iframe title='decades-ep-1' src='https://vimeo.com/showcase/8423191/embed' allowFullScreen frameBorder='0'></iframe></div>

        </section>
        <section className="section">
          <h3 className="heading-3">
            Who is Behind the Decades Project?
          </h3>
          <div className="columns">
            {
              profiles.map((profile, i) => {
                return (
                  <div key={i} className="column">
                    <p>
                      {profile.firstName}
                    </p>
                    <p>
                      {profile.lastName}
                    </p>
                  </div>
                );
              })
            }
          </div>
        </section>
      </main>
      <footer className="footer">
        <h4 className="heading-4">
          Contact
        </h4>
      </footer>
    </div>
  );
}

export default App;

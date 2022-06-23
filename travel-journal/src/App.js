import './index.css';
import Header from './Components/Header';
import data from './data';
import Location from './Components/Location';

function App() {
  const places = data.map(place => {
    return (
      <Location
      key={place.id}
      location={place}
      />
    )
  })
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <section className='location-list'>
        {places}
        </section>
        
      </div>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='row'>
          <div id="warzone" className='col'>
            <div className='counterCard'>
              <div className='cardBody'></div>
                <div id="card-header">Warzone Victories</div>
                <div id='body'>
                  <div class="waviy">
                    <p>Victories</p>
                    <span style={{'--i':1}}>2</span>
                    <span style={{'--i':2}}>1</span>
  

                  </div>
                </div>
                
            </div>
          </div>
          <div id="fallguys" className='col'>
          <div className='counterCard'>
              <div className='cardBody'></div>
                <div id="card-header-fall">Fall Guys Victories</div>
                <div id='body'>
                  <div class="waviy">
                    <p>Victories</p>
                    <span style={{'--i':1}}>2</span>
                    <span style={{'--i':2}}>1</span>
  

                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

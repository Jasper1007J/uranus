import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div class="container">
        <div class="header">
           <button className='head'><NavLink className='Navlink' to='https://www.dextools.io/app/en/solana/pair-explorer/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?t=1710687592062'>$URANUS WEB</NavLink></button>
        </div>
        <div class="main">
           <ul>
           <li className='list'>Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on <span class="date">Saturday, January 27</span>, then retrogrades again on <span class="date">Sunday, September 1</span>.This suggests ongoing evolution in your home life and personal growth.
          <div className='image-group g1'>
          <img className='image' src={require('./img1.png')} alt='img' />
          <img className='image' src={require('./img9.png')} alt='img' />
          </div>
           
           </li>

            <li className='list'>Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
            <div className='image-group g2'>
          <img className='image' src={require('./img8.png')} alt='img' />
          <img className='image' src={require('./img7.png')} alt='img' />
          </div>
            </li>
            
            
            <li className='list'>In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, <span class="date">we are slowly moving into a new age, from Pisces to Aquarius</span>.
            <div className='image-group g2'>
          <img className='image' src={require('./img6.png')} alt='img' />
          <img className='image' src={require('./img5.png')} alt='img' />
          </div>
          </li>
            <li className='list'>Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.
            <div className='image-group g2'>
          <img className='image' src={require('./img10.png')} alt='img' />
          <img className='image' src={require('./img2.png')} alt='img' />
          </div>
          </li>
          <li className='list'>
            <div className='content'>
            <li>Everyone Loves to Pump Uranus more then they like when Uranus Dumps.</li>
            <li>The liquidity injections just keep coming into Uranus.</li>
            <li>Don’t pass gas (it’s gonna be giant)</li>
              <li>Hold onto Uranus!</li>
              <li>Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus.</li>
            </div>
          </li>

          <li className='list last'>
          <label style={{textTransform:'uppercase'}}>In Crypto We Trust, But In Uranus, We Believe!</label>
          <div> <img className='image' src={require('./img11.png')} alt='img' /></div>
          </li>
          <li className='list youtube'>
          <iframe width="60%" height="400px" title="Video Player" src="https://www.youtube.com/embed/gI7qfHuLQ6Q" frameborder="0" allowfullscreen></iframe>
          </li>
           </ul>
        </div>
    </div>
    </div>
  );
}

export default App;

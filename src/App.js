
import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';

function App() {
  let [randomColor, setColor] = useState('');
  let generaterandomColor = () => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
    setColor(color);
    //document.getElementById('container').style.background=randomColor;
   // document.getElementById('container').style.opacity=.1;
  }
  let shades = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7];

  return (

    <div className='container' id="container"
    style={{
      backgroundColor: {randomColor},
    }}   >

     
      <h1> Color Palette Generator</h1>

      <button className='query-btn' onClick={generaterandomColor} value="generate"> generate</button>
      <div className='box-container'>

        {
          shades.map((e) => {
           return <ColorBox color={randomColor} shade={e} ></ColorBox>

          })

        }
      </div>

     
      
      </div>

      


  );

}

export default App;

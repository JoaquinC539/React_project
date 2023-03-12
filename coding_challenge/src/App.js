import {useState} from 'react';
import './index.css';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';
function App() {
  const [color,setColor]=useState('');
  const[hexValue,setHexValue]=useState('')
  const [isDarkText,setIsDarkText]=useState(true);
  return (
    <div className='container'>
    <ColorBox color={color} hexValue={hexValue} isDarkText={isDarkText}/>
    <ColorInput color={color} setColor={setColor} setHexValue={setHexValue} 
    isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>

    

  );
}

export default App;

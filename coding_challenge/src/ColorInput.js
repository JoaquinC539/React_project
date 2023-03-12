import './index.css';
import colorNames from 'colornames';
const ColorInput=({color,setColor,setHexValue,isDarkText,setIsDarkText})=>{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input  className="colorInput"type="text" placeholder="Add color name" role='searchbox' value={color} required
        onChange={(e)=>{
            setColor(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        />
        <button type='button' onClick={()=>setIsDarkText(!isDarkText)}>Change color of the text</button>
        </form>
        
    )
}
export default ColorInput;
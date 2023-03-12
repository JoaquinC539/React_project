import './App.css';
const ColorInput=({color,setColor})=>{
    return(
        <input  className="colorInput"type="text" placeholder="Put a color" role='searchbox' value={color}
        onChange={(e)=>setColor(e.target.value)}
        />
    )
}
export default ColorInput;
import './index.css'
const ColorBox=({color,hexValue,isDarkText})=>{
    return (
        <div>
        <div className="box" style={{
            backgroundColor:color,
            color: isDarkText?"#000":"#FFF"
            }} >
        <p>{color?color:"Empty Value"}</p>
        <p>{hexValue?hexValue:null}</p>
      </div>
        </div>
    )
}
export default ColorBox
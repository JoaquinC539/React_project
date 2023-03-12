import './App.css'
const ColorBox=({color})=>{
    return (
        <div>
        <div className="box" style={{background:color}} >
        <p>{color}</p>
      </div>
        </div>
    )
}
export default ColorBox
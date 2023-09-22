import { useState, useEffect } from "react"

function App() {
  const [enabled,setEnabled] = useState(false)

  useEffect(() => {
  console.log('efecto ', {enabled})
}, [enabled])
  return (
    <main>
      <div style = {{
        postion:'absolute',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)'
      }}>

      </div>
      <button
        onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App

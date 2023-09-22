import { useState, useEffect } from "react"

const FollowMouse = () => {
  const [enabled,setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0 , y:0 })

  useEffect(() => {
    
    const handleMove = (event) => {
      const {clientX, clientY} = event  
      setPosition({x:clientX, y:clientY})
    }
    
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // función que permite limpiar las suscripciones a eventos (de lo contrario addEvent no se cierra)
    // Se ejecuta cuando el componente se desmonta y cuando cambian las dependencias
    return () => { // limpieza de suscripción
      window.removeEventListener('pointermove', handleMove)
      }
  }, [enabled])
  return (
    <>
      <div style = {{
        position:'absolute',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse
      </button>
    </main>
  )
}

export default App

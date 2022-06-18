import { useNavigate }from 'react-router-dom';

export default function Tablero() {
  const navegar = useNavigate();
  const handleClick = ()=>{
    navegar('/inicio')
  }

  return (
    <div>
      <h1>Tablero</h1>
      <button
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  )
}

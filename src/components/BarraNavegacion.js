import { NavLink } from 'react-router-dom';
import '../styles/BarraNavegacion.css';
import '../styles/General.css'

export default function BarraNavegacion() {
  return (
    <div className='contenedor-brn'>
      <div className='barra-links'>
        <NavLink to='/inicio'>Inicio</NavLink>
      </div>
      <div className='barra-links'>
        <NavLink to='/usuario' >Usuario</NavLink>
      </div>
      <div className='barra-links'>
        <NavLink to='/nosotros'>Nosotros</NavLink>
      </div>
    </div>  
  );
}

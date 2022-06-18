import { NavLink } from 'react-router-dom';
import '../styles/BarraNavegacion.css';
import '../styles/General.css'

export default function BarraNavegacion() {
  return (
    <div className='contenedor-brn'>
      <div className='barra-links'>
        <NavLink 
          to='/inicio'
          className={( {isActive} ) => isActive ? 'active' : 'no-active'}
        >Inicio</NavLink>
      </div>
      <div className='barra-links'>
        <NavLink 
          to='/usuario'
          className={( {isActive} ) => isActive ? 'active' : 'no-active'}
        >Usuario</NavLink>
      </div>
      <div className='barra-links'>
        <NavLink
          className={( {isActive} ) => isActive ? 'active' : 'no-active'}
          to='/nosotros'
        >Nosotros</NavLink>
      </div>
    </div>  
  );
}

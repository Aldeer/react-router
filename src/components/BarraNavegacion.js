import { NavLink } from 'react-router-dom';

export default function BarraNavegacion() {
  return (
    <div>
      <div>
        <NavLink to='/inicio'>Inicio</NavLink>
      </div>
      <div>
        <NavLink to='/usuarios' >Usuarios</NavLink>
      </div>
      <div>
        <NavLink to='/nosotros'>Nosotros</NavLink>
      </div>
    </div>  
  );
}

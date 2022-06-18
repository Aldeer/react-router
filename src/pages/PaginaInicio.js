import { Link } from 'react-router-dom';

const usuario = 10;
export default function PaginaInicio() {
  return (
    <div className="contenedor">
      <h1>Esto es una etiqueta Link</h1>
      <div>
        <Link to={`/usuario/${usuario}`}>Usuario</Link>
      </div>
    </div>
  )
}

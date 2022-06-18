import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPaginaNoEncontrada from './pages/ErrorPaginaNoEncontrada'
import PaginaInicio from './pages/PaginaInicio'
import PaginaNosotros from './pages/PaginaNosotros'
import PaginaUsuarios from './pages/PaginaUsuarios'
import BarraNavegacion from './components/BarraNavegacion';


export default function App() {
  return (
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route path='/inicio' element={<PaginaInicio />} />
          <Route path='/usuarios' element={<PaginaUsuarios />} />
          <Route path='/nosotros' element={<PaginaNosotros />} />
          <Route path='*' element={<ErrorPaginaNoEncontrada />} />
        </Routes>
      </BrowserRouter>
  )
}

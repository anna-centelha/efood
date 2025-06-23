import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Carrinho from './pages/Carrinho'
import Confirmacao from './pages/Confirmacao'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/carrinho" element={<Carrinho />} />
    <Route path="/confirmacao" element={<Confirmacao />} />
  </Routes>
)

export default AppRoutes

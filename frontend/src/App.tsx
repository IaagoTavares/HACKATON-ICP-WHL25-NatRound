import React, { useState } from 'react'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import Votacoes from './pages/Votacoes'
import Financeiro from './pages/Financeiro'
import Documentos from './pages/Documentos'

type Page = 'dashboard' | 'votacoes' | 'financeiro' | 'documentos'

export default function App() {
  const [page, setPage] = useState<Page>('dashboard')

  return (
    <div className="app">
      <header className="header">
        <h1>DAO do Condomínio</h1>
        <p className="subtitle">Transparência • Voto • Prestação de contas</p>
      </header>

      <Nav current={page} onNavigate={setPage} />

      <main className="content">
        {page === 'dashboard' && <Dashboard />}
        {page === 'votacoes' && <Votacoes />}
        {page === 'financeiro' && <Financeiro />}
        {page === 'documentos' && <Documentos />}
      </main>

      <footer className="footer">
        <small>Template ICP • 4 canisters (frontend + governance + treasury + records)</small>
      </footer>
    </div>
  )
}

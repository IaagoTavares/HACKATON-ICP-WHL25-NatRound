import React from 'react'

export default function Dashboard() {
  return (
    <section>
      <h2>Visão Geral</h2>
      <div className="grid">
        <div className="card">
          <h3>Próxima assembleia</h3>
          <p>20/09/2025 às 19:30</p>
        </div>
        <div className="card">
          <h3>Propostas abertas</h3>
          <p>2</p>
        </div>
        <div className="card">
          <h3>Saldo (mock)</h3>
          <p>R$ 1.250,00</p>
        </div>
      </div>
    </section>
  )
}

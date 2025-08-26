import React, { useState } from 'react'

type Proposal = { id: number; titulo: string; desc: string; votosSim: number; votosNao: number }
const initial: Proposal[] = [
  { id: 1, titulo: 'Troca do porteiro', desc: 'Avaliar substituição por portaria remota', votosSim: 12, votosNao: 5 },
  { id: 2, titulo: 'Pintura da fachada', desc: 'Orçamento aprovado de R$ 40 mil', votosSim: 8, votosNao: 4 },
]

export default function Votacoes() {
  const [propostas, setPropostas] = useState(initial)

  function votar(id: number, sim: boolean) {
    setPropostas(prev =>
      prev.map(p =>
        p.id === id ? { ...p, votosSim: p.votosSim + (sim ? 1 : 0), votosNao: p.votosNao + (!sim ? 1 : 0) } : p
      )
    )
  }

  return (
    <section>
      <h2>Votações (mock local)</h2>
      <ul className="list">
        {propostas.map(p => (
          <li className="item" key={p.id}>
            <div className="item-head">
              <strong>{p.titulo}</strong>
              <span className="badge">ID {p.id}</span>
            </div>
            <p className="muted">{p.desc}</p>
            <div className="row">
              <button onClick={() => votar(p.id, true)}>Votar SIM</button>
              <button onClick={() => votar(p.id, false)} className="ghost">Votar NÃO</button>
              <span className="spacer" />
              <span>Sim: {p.votosSim}</span>
              <span>Não: {p.votosNao}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

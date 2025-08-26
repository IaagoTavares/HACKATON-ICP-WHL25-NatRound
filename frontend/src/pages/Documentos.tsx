import React, { useState } from 'react'

type Doc = { id: number; titulo: string; conteudo: string }
const seed: Doc[] = [
  { id: 1, titulo: 'Ata 2025-08-20', conteudo: 'Abertura, pauta, deliberações...' },
  { id: 2, titulo: 'Regulamento Interno v1', conteudo: 'Regras de convivência...' },
]

export default function Documentos() {
  const [docs, setDocs] = useState(seed)
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novoConteudo, setNovoConteudo] = useState('')

  function adicionar() {
    if (!novoTitulo.trim()) return
    const id = (docs.at(-1)?.id ?? 0) + 1
    setDocs(prev => [...prev, { id, titulo: novoTitulo.trim(), conteudo: novoConteudo.trim() }])
    setNovoTitulo(''); setNovoConteudo('')
  }

  return (
    <section>
      <h2>Documentos & Atas (mock local)</h2>
      <div className="card">
        <label>Título</label>
        <input value={novoTitulo} onChange={e => setNovoTitulo(e.target.value)} placeholder="Ex.: Ata 2025-09-20" />
        <label>Conteúdo</label>
        <textarea value={novoConteudo} onChange={e => setNovoConteudo(e.target.value)} placeholder="Resumo/Texto..." />
        <button onClick={adicionar}>Adicionar documento</button>
      </div>

      <ul className="list">
        {docs.map(d => (
          <li key={d.id} className="item">
            <div className="item-head">
              <strong>{d.titulo}</strong>
              <span className="badge">ID {d.id}</span>
            </div>
            <pre className="pre">{d.conteudo}</pre>
          </li>
        ))}
      </ul>
    </section>
  )
}

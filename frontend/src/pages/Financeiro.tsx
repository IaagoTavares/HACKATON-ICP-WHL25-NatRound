import React, { useMemo, useState } from 'react'

type Lancamento = { id: number; data: string; tipo: 'entrada' | 'saída'; descricao: string; valor: number }
const seed: Lancamento[] = [
  { id: 1, data: '2025-08-01', tipo: 'entrada', descricao: 'Condomínio Apto 12', valor: 850.00 },
  { id: 2, data: '2025-08-03', tipo: 'saída', descricao: 'Limpeza', valor: 180.00 },
  { id: 3, data: '2025-08-05', tipo: 'saída', descricao: 'Elevador - manutenção', valor: 420.00 },
  { id: 4, data: '2025-08-10', tipo: 'entrada', descricao: 'Condomínio Apto 34', valor: 850.00 },
]

export default function Financeiro() {
  const [itens, setItens] = useState(seed)
  const saldo = useMemo(() => itens.reduce((acc, i) => acc + (i.tipo === 'entrada' ? i.valor : -i.valor), 0), [itens])

  function adicionar(tipo: 'entrada'|'saída') {
    const descricao = prompt('Descrição:') || ''
    const valor = Number(prompt('Valor (ex: 100.50):') || 0)
    const id = (itens.at(-1)?.id ?? 0) + 1
    const data = new Date().toISOString().slice(0,10)
    setItens(prev => [...prev, { id, data, tipo, descricao, valor }])
  }

  return (
    <section>
      <h2>Financeiro (mock local)</h2>
      <div className="row">
        <button onClick={() => adicionar('entrada')}>Adicionar entrada</button>
        <button className="ghost" onClick={() => adicionar('saída')}>Adicionar saída</button>
        <span className="spacer" />
        <strong>Saldo: R$ {saldo.toFixed(2)}</strong>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th><th>Data</th><th>Tipo</th><th>Descrição</th><th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(i => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.data}</td>
              <td>{i.tipo}</td>
              <td>{i.descricao}</td>
              <td>R$ {i.valor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

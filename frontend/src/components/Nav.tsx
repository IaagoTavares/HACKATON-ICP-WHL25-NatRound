import React from 'react'

type Props = {
  current: 'dashboard' | 'votacoes' | 'financeiro' | 'documentos'
  onNavigate: (p: Props['current']) => void
}

const tabs: { key: Props['current']; label: string }[] = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'votacoes', label: 'Votações' },
  { key: 'financeiro', label: 'Financeiro' },
  { key: 'documentos', label: 'Documentos' },
]

export default function Nav({ current, onNavigate }: Props) {
  return (
    <nav className="nav">
      {tabs.map(t => (
        <button
          key={t.key}
          className={['tab', current === t.key ? 'active' : ''].join(' ')}
          onClick={() => onNavigate(t.key)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}

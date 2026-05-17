import React, { useState } from 'react'

function App() {
  const [expressao, setExpressao] = useState('')
  const [resultado, setResultado] = useState('')

  const adicionar = (v) => setExpressao(expressao + v)
  const limpar = () => { setExpressao(''); setResultado('') }
  const apagar = () => setExpressao(expressao.slice(0, -1))

  const calcular = () => {
    try {
      let operacao = expressao.replace(/×/g, '*').replace(/÷/g, '/')
      const res = eval(operacao)
      setResultado(Number.isInteger(res) ? res : res.toFixed(2))
    } catch {
      setResultado('Erro')
    }
  }

  const btnStyle = (bg = '#3c4043', cor = '#e8eaed') => ({
    padding: '20px 0',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: bg,
    color: cor,
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold'
  })

  const laranja = '#ff9800'
  const vermelho = '#d93025'

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ color: '#ffffff', marginBottom: '20px', fontWeight: 'bold' }}>Calculadora</h1>

      <div style={{ width: '320px', backgroundColor: '#2d2d2d', borderRadius: '16px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        
        {/* VISOR */}
        <div style={{ height: '90px', textAlign: 'right', padding: '15px', backgroundColor: '#000', borderRadius: '10px', marginBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold' }}>{expressao || ' '}</div>
          <div style={{ color: laranja, fontSize: '34px', fontWeight: 'bold' }}>{resultado || (expressao === '' ? '0' : '')}</div>
        </div>

        {/* TECLADO BÁSICO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <button style={btnStyle(vermelho, '#fff')} onClick={limpar}>AC</button>
          <button style={btnStyle('#555')} onClick={apagar}>⌫</button>
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('÷')}>÷</button>
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('×')}>×</button>

          {[7, 8, 9].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('-')}>-</button>

          {[4, 5, 6].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('+')}>+</button>

          {[1, 2, 3].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={{ ...btnStyle(laranja, '#000'), gridRow: 'span 2' }} onClick={calcular}>=</button>

          <button style={{ ...btnStyle('#1e1e1e'), gridColumn: 'span 2' }} onClick={() => adicionar('0')}>0</button>
          <button style={btnStyle('#1e1e1e')} onClick={() => adicionar('.')}>.</button>
        </div>
      </div>
    </div>
  )
}

export default App
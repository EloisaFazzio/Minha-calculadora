import React, { useState } from 'react'

function App() {
  const [expressao, setExpressao] = useState('')
  const [resultado, setResultado] = useState('')

  const adicionar = (v) => setExpressao(expressao + v)
  const limpar = () => { setExpressao(''); setResultado('') }
  const apagar = () => setExpressao(expressao.slice(0, -1))

  const calcular = () => {
    try {
      let operacao = expressao
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**')

      const res = eval(operacao)
      setResultado(Number.isInteger(res) ? res : res.toFixed(6))
    } catch {
      setResultado('Erro')
    }
  }

  const btnStyle = (bg = '#3c4043', cor = '#e8eaed') => ({
    padding: '18px 0',
    fontSize: '15px',
    cursor: 'pointer',
    backgroundColor: bg,
    color: cor,
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700', // Todos os textos dos botões em negrito
    transition: 'opacity 0.2s'
  })

  const laranja = '#ff9800'
  const vermelho = '#d93025'
  const darkFundo = '#1a1a1a'
  const darkPainel = '#2d2d2d'

  return (
    <div style={{ backgroundColor: darkFundo, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
      <h1 style={{ color: '#ffffff', marginBottom: '25px', fontWeight: 'bold', fontSize: '32px' }}>
        Calculadora Científica
      </h1>

      <div style={{ width: '420px', backgroundColor: darkPainel, borderRadius: '16px', padding: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
        
        {/* VISOR OTIMIZADO */}
        <div style={{ height: '110px', textAlign: 'right', padding: '15px', backgroundColor: '#000000', borderRadius: '10px', marginBottom: '20px', border: '1px solid #444', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Números que você digita: Branco e Negrito */}
          <div style={{ color: '#ffffff', fontSize: '18px', minHeight: '22px', fontWeight: 'bold', letterSpacing: '1px' }}>
            {expressao || ' '}
          </div>
          {/* Resultado: Laranja e bem visível */}
          <div style={{ color: laranja, fontSize: '38px', fontWeight: 'bold', marginTop: '5px' }}>
            {resultado || (expressao === '' ? '0' : '')}
          </div>
        </div>

        {/* TECLADO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
          
          <button style={btnStyle()} onClick={() => adicionar('sin(')}>sin</button>
          <button style={btnStyle()} onClick={() => adicionar('cos(')}>cos</button>
          <button style={btnStyle()} onClick={() => adicionar('tan(')}>tan</button>
          <button style={btnStyle()} onClick={() => adicionar('log(')}>log</button>
          <button style={btnStyle()} onClick={() => adicionar('ln(')}>ln</button>

          <button style={btnStyle()} onClick={() => adicionar('√(')}>√</button>
          <button style={btnStyle()} onClick={() => adicionar('^')}>xʸ</button>
          <button style={btnStyle()} onClick={() => adicionar('π')}>π</button>
          <button style={btnStyle()} onClick={() => adicionar('e')}>e</button>
          
          {/* BOTÃO AC EM VERMELHO */}
          <button style={btnStyle(vermelho, '#fff')} onClick={limpar}>AC</button>

          {[7, 8, 9].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={btnStyle('#555')} onClick={() => adicionar('(')}>(</button>
          <button style={btnStyle('#555')} onClick={() => adicionar(')')}>)</button>

          {[4, 5, 6].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('÷')}>÷</button>
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('×')}>×</button>

          {[1, 2, 3].map(n => <button key={n} style={btnStyle('#1e1e1e')} onClick={() => adicionar(n.toString())}>{n}</button>)}
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('-')}>−</button>
          <button style={btnStyle(laranja, '#000')} onClick={() => adicionar('+')}>+</button>

          <button style={btnStyle('#1e1e1e')} onClick={() => adicionar('0')}>0</button>
          <button style={btnStyle('#1e1e1e')} onClick={() => adicionar('.')}>.</button>
          <button style={btnStyle('#555')} onClick={apagar}>⌫</button>
          <button style={{ ...btnStyle(laranja, '#000'), gridColumn: 'span 2' }} onClick={calcular}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
import logo from './assets/tzatziki-logo.png'
import './App.css'

function App() {
  return (
    <div className="tzatziki">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">Ineksen tzatziki</h1>
      <ul className="recipe">
        <li>Turkkilaista juguu 0,5 L</li>
        <li>Kurkku 1 kpl (purista ku raastettu)</li>
        <li>Valkosipen kynsi</li>
        <li>Oliiviöljyy tilkka</li>
        <li>Suolaa</li>
        <li>Mustapippurii</li>
      </ul>
    </div>
  )
}

export default App

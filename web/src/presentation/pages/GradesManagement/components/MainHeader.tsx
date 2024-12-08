import Styles from './main-header-styles.module.scss'

export function MainHeader() {
  return (
    <div className={Styles.mainHeaderWrap}>
      <h2>Gerenciamento de notas</h2>
      <div>
        <select>
          <option value="turma1">Turma A</option>
        </select>
        <select>
          <option value="modulo1">Modulo 1</option>
        </select>
        <select>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  )
}
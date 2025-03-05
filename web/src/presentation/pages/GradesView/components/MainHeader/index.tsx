import Styles from './main-header-styles.module.scss'

export function MainHeader() {
  return (
    <div className={Styles.mainHeaderWrap}>
      <h2>Notas</h2>
      <div className={Styles.filterDatesWrap}>
        <select id="moduleSelect">
          <option value="teste">modulo 1</option>
          <option value="teste">modulo 2</option>
          <option value="teste">modulo 3</option>
          <option value="teste">modulo 4</option>
        </select>
      </div>
    </div>
  )
}
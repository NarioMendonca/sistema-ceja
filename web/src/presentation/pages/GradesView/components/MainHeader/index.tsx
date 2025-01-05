import Styles from './main-header-styles.module.scss'

export function MainHeader() {
  return (
    <div className={Styles.mainHeaderWrap}>
      <h2>Notas</h2>
      <div className={Styles.filterDatesWrap}>
        <select name="" id="">
          <option value="teste">teste</option>
        </select>
      </div>
    </div>
  )
}
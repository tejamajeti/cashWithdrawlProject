import './index.css'

const DenominationItem = props => {
  const {value, onClickingBtn} = props
  const clickBtn = () => {
    onClickingBtn(value)
  }
  return (
    <li>
      <button type="button" className="cash-btn" onClick={clickBtn}>
        {' '}
        {value}{' '}
      </button>
    </li>
  )
}

export default DenominationItem

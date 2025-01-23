import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickingBtn = value => {
    const {amount} = this.state
    this.setState({amount: amount - value})
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="name-card">
            <p className="s-para"> S </p>
            <h1 className="sarah-heading"> Sarah Williams </h1>
          </div>
          <div className="balance-card">
            <p className="balance-text"> Your Balance </p>
            <div>
              <p className="balance"> {amount} </p>
              <p className="rupee-text"> In Rupees </p>
            </div>
          </div>
          <p className="withdraw"> Withdraw </p>
          <p className="sum-text"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="btns-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                value={eachItem.value}
                onClickingBtn={this.onClickingBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

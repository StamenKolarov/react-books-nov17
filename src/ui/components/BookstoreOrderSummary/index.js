import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

class BookstoreOrderSummary extends React.Component {
    render(){
        return (
            <div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="content">
                            <div className="header">Order Summary</div>
                            <div className="ui divider"></div>
                            <div className="extra">
                                <div className="ui label">Titles: {this.props.totalTitles}</div>
                                <div className="ui label">Items: {this.props.totalItems}</div>
                                <div className="ui label">Amount: <Currency quantity={this.props.totalAmount} currency="EUR" /></div>
                            </div>
                            <div className="ui divider"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Currency.PropTypes = {
    quantity: PropTypes.number
}
Currency.defaultProps = {
    quantity: 100
}

export default BookstoreOrderSummary;
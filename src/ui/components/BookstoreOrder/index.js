import React from 'react';
import PropTypes from 'prop-types';
import BookstoreOrderSummary from './../BookstoreOrderSummary';
import BookstoreOrderList from './../BookstoreOrderList';

class BookstoreOrder extends React.Component {
    render(){
        if (this.props.orders && this.props.orders.length > 0) {
            let totalTitles = this.props.orders.length
            const orders = this.props.orders.map((order) => (
                    <BookstoreOrderList
                        key={order.id}
                        id={order.id}
                        bookid={order.bookid}
                        image={order.image}
                        title={order.title}
                        author={order.author}
                        price={order.price}
                        quantity={order.quantity}
                        onDeleteClickCallback={this.props.onDeleteClickCallback}
                    />
                )
            );
            return (
                <div className="ui divided items segment">
                    <div>
                        <BookstoreOrderSummary
                            totalTitles={totalTitles}
                            totalItems={this.props.totalItems}
                            totalAmount={this.props.totalAmount}
                        />
                    </div>
                    <div>
                        {orders}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ui divided items segment">
                    <div>
                        <div className="ui divided items">
                            <div className="item">
                                <div className="content">
                                    <a className="header">Order Summary</a>
                                    <div className="meta"><span className="cinema">Total titles: 0</span></div>
                                    <div className="meta"><span className="cinema">Total items: 0</span></div>
                                    <div className="meta"><span className="cinema">Total amount: 0.00 EUR</span></div>
                                    <div className="description"><p></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        No items
                    </div>
                </div>
            )
        }
    }
}

BookstoreOrderSummary.PropTypes = {
    totalTitles: PropTypes.number,
    totalItems: PropTypes.number
}
BookstoreOrderSummary.defaultProps = {
    totalTitles: 0,
    totalItems: 0
}

export default BookstoreOrder;
import React from 'react';
import BookstoreOrderListItem from './../BookstoreOrderListItem';

class BookstoreOrderList extends React.Component {
    render(){
        return (
            <div>
                <div className="ui divided items segment">
                    <BookstoreOrderListItem
                        id={this.props.id}
                        bookid={this.props.bookid}
                        image={this.props.image}
                        title={this.props.title}
                        author={this.props.author}
                        price={this.props.price}
                        quantity={this.props.quantity}
                        onDeleteClickCallback={this.props.onDeleteClickCallback}
                    />
                </div>
            </div>
        );
    }
}

export default BookstoreOrderList;
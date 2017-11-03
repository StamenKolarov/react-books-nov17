import React from 'react';

class BookstoreOrderListItem extends React.Component {
    onDeleteClick = () => {
        this.props.onDeleteClickCallback(this.props.id);
    }
    render(){
        return (
            <div>
                <div className="ui divided items segment">
                    <div className="item">
                        <div className="ui tiny image">
                            <img alt={this.props.title} src={this.props.image} height="30" width="30" />
                        </div>
                        <div className="content">
                            <span className="cinema">{this.props.title}</span>
                            <div className="meta">
                                <span className="cinema">By {this.props.author}</span>
                            </div>
                            <div className="extra">
                                <div className="ui right floated mini button" onClick={this.onDeleteClick}>
                                    Delete
                                    <i className="right chevron icon"></i>
                                </div>
                                <div className="ui label">Qty: {this.props.quantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookstoreOrderListItem;
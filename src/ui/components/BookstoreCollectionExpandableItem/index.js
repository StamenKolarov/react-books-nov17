import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

class BookstoreCollectionExpandableItem extends React.Component {
    onBuyClick = () => {this.props.onBuyClickCallback(this.props.id);}
    onInfoClick = () => {this.props.callbackInfoClick(this.props.extra);}
    render(){
        return (
            <div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="image">
                            <img alt={this.props.title} src={this.props.image} height="45" width="45" />
                        </div>
                        <div className="content">
                            <a className="header">{this.props.title}</a>
                            <div className="meta">
                                <span className="cinema">{this.props.subTitle}</span>
                            </div>
                            <div className="meta">
                                <span className="cinema">By {this.props.author}</span>
                            </div>
                            <div className="description">
                                <p>{this.props.shortDesc}</p>
                            </div>
                            <div className="description">
                                <p>&nbsp;</p>
                            </div>
                            <div className="extra">
                                <button className="ui right floated button" onClick={this.onBuyClick}>Buy</button>
                                <button className="ui right floated button" onClick={this.onInfoClick}>Info</button>
                                <div className="ui label">Price: <Currency quantity={this.props.price} currency="EUR" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Currency.PropTypes = {quantity: PropTypes.number}
Currency.defaultProps = {quantity: 100}
export default BookstoreCollectionExpandableItem;
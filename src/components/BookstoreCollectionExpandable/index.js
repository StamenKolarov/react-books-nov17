import React from 'react';
import BookstoreCollectionExpandableItem from './../BookstoreCollectionExpandableItem';
import BookstoreCollectionExpandableItemExtra from './../BookstoreCollectionExpandableItemExtra';

class BookstoreCollectionExpandable extends React.Component {
    constructor() {
        super();
        this.state = {extra:null};
    }
    onInfoClick = (bookExtra) => {
        if (bookExtra === true) {
            this.setState({extra:false})
        } else {
            this.setState({extra:true})
        }
    }
    render(){
        if (this.state.extra === true) {
            return (
                <div className="ui divided items segment">
                    <BookstoreCollectionExpandableItem
                        key={this.props.id}
                        id={this.props.id}
                        image={this.props.image}
                        title={this.props.title}
                        author={this.props.author}
                        subTitle={this.props.subTitle}
                        shortDesc={this.props.shortDesc}
                        price={this.props.price}
                        extra={this.state.extra}
                        onBuyClickCallback={this.props.onBuyClickCallback}
                        callbackInfoClick={this.onInfoClick}
                    />
                    <BookstoreCollectionExpandableItemExtra
                        id={this.props.id}
                        publisher={this.props.publisher}
                        longDesc={this.props.longDesc}
                        cover={this.props.cover}
                        language={this.props.language}
                        isbn={this.props.isbn}
                    />
                </div>
            );
        } else {
            return (
                <div className="ui divided items segment">
                    <BookstoreCollectionExpandableItem
                        key={this.props.id}
                        id={this.props.id}
                        image={this.props.image}
                        title={this.props.title}
                        author={this.props.author}
                        subTitle={this.props.subTitle}
                        shortDesc={this.props.shortDesc}
                        price={this.props.price}
                        extra={this.state.extra}
                        onBuyClickCallback={this.props.onBuyClickCallback}
                        callbackInfoClick={this.onInfoClick}
                    />
                </div>
            );
        }
    }
}

export default BookstoreCollectionExpandable;
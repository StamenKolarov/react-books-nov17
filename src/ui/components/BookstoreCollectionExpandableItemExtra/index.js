import React from 'react';

class BookstoreCollectionExpandableItemExtra extends React.Component {
    render(){
        return (
            <div>
                <div className="ui divider"></div>
                <div className="item">
                    <div className="content">
                        <span className="header"><b>Publisher:</b> {this.props.publisher}</span>
                        <div className="meta">
                            <span className="cinema">{this.props.longDesc}<br/><br/></span>
                        </div>
                        <div className="extra">
                            <div className="ui label">Cover: {this.props.cover}</div>
                            <div className="ui label">Language: {this.props.language}</div>
                            <div className="ui label">ISBN-10: {this.props.isbn}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookstoreCollectionExpandableItemExtra;
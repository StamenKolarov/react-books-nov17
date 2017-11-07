import React from 'react';
import BookstoreCollectionExpandable from './../BookstoreCollectionExpandable';

class BookstoreCollection extends React.Component {
    render(){
        const books = this.props.books.map((book) => (
            <BookstoreCollectionExpandable
                key={book.id}
                id={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                subTitle={book.subTitle}
                shortDesc={book.shortDesc}
                price={book.price}
                publisher={book.publisher}
                longDesc={book.longDesc}
                cover={book.cover}
                language={book.language}
                isbn={book.isbn}
                onBuyClickCallback={this.props.onBuyClickCallback}
            />
            )
        );
        return (
            <div className="ui divided items segment">
                <div>
                    {books}
                </div>
            </div>
        );
    }
}

export default BookstoreCollection;
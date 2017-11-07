import React from 'react';
import './index.css';
import BookstoreCollection from './../BookstoreCollection';
import BookstoreOrder from './../BookstoreOrder';
import books from './../../../books.json';
import orders from './../../../orders.json';

class Bookstore extends React.Component {
    state = {books,orders,orderTotalItems:3,newBuyCandidate:[],newBuyCandidateObject:[],dataToState:[]}
    onBuyClick = (bookId) => {
        // NEW ORDER ITEM FROM BOOKS IN CASE NOT PRESENT
        // ALSO RETURNS UNDEFINED ARRAYS
        const newBuyCandidate = this.state.books.map((book) => {
            if (book.id === bookId) {
                return Object.assign({}, {
                    id:this.state.orders.length + 1,
                    bookid:book.id,
                    image:book.image,
                    title:book.title,
                    author:book.author,
                    price:book.price,
                    quantity:1,
                })
            }
        })

        // SELECT ARRAY THAT MATCHES BUY BOOK ID
        const newBuyCandidateObject = newBuyCandidate.slice(bookId-1,bookId);

        // LOOP THROUGH ORDERS, CHECK AGAINST BOOK EXISTS
        // IF SAME BOOK, INCREMENT QUANTITY
        // ELSE JUST RETURN SAME DATA
        const newBuyData = this.state.orders.map((order) => {
            if (order.bookid === bookId) {
                return Object.assign({}, {
                    id:order.id,
                    bookid:order.bookid,
                    image:order.image,
                    title:order.title,
                    author:order.author,
                    price:order.price,
                    quantity:order.quantity + 1,
                })
            } else {
                return Object.assign({}, {
                    id:order.id,
                    bookid:order.id,
                    image:order.image,
                    title:order.title,
                    author:order.author,
                    price:order.price,
                    quantity:order.quantity,
                })
            }
        })

        // MERGE OLD/UPDATED DATA WITH NEW ORDER ITEM
        let dataToState = Object.assign([],newBuyData,newBuyCandidateObject)

        this.setState({
            orders: newBuyData,                                   //
            //newBuyCandidate: newBuyCandidate,                   //
            //newBuyCandidateObject: newBuyCandidateObject,       //
            dataToState: dataToState,                             // REPLACES EXIST WITH BUY
            //orderTotalItems: this.state.orderTotalItems + 1,    //
        })
    }
    onDeleteClick = (orderId) => {
        const newDeleteDataDecrement = this.state.orders.map((order) => {
            if (order.quantity > 0) {
                if (order.id === orderId && order.quantity > 1) {
                    return Object.assign({}, {
                        id:order.id,
                        bookid:order.bookid,
                        image:order.image,
                        title:order.title,
                        author:order.author,
                        price:order.price,
                        quantity:order.quantity - 1,
                    })
                } else {
                    return Object.assign({}, {
                        id:order.id,
                        bookid:order.id,
                        image:order.image,
                        title:order.title,
                        author:order.author,
                        price:order.price,
                        quantity:order.quantity,
                    })
                }
            }
        })
        this.setState({
            orders:newDeleteDataDecrement,
            orderTotalItems: this.state.orderTotalItems - 1,
        });
    }
    render(){
        return (
            <div className="Bookstore">
                <div className="Bookstore-intro">
                    <table className="ui table">
                        <thead>
                        <tr><th className="ten wide">Book Collection</th>
                            <th className="six wide">Order</th>
                        </tr></thead>
                        <tbody>
                        <tr>
                            <td className="ten wide ui segment">
                                <BookstoreCollection
                                    books={this.state.books}
                                    onBuyClickCallback={this.onBuyClick}
                                />
                            </td>
                            <td className="six wide ui segment">
                                <BookstoreOrder
                                    orders={this.state.orders}
                                    orderTotalItems={this.state.orderTotalItems}
                                    onDeleteClickCallback={this.onDeleteClick}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Bookstore;
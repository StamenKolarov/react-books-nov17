import React from 'react';
import './index.css';
import BookstoreCollection from './../BookstoreCollection';
import BookstoreOrder from './../BookstoreOrder';
import books from './../../../books.json';
import orders from './../../../orders.json';

class Bookstore extends React.Component {
    state = {
        books,
        orders,
        totalItems:3,
        totalAmount:0,
        newDeleteData:[],
    }
    componentDidMount = () => {
        let totalAmount = 0;
        this.state.orders.map((order) => {
            totalAmount = totalAmount + (order.price * order.quantity)
        })
        this.setState({
            totalAmount:totalAmount,
        })
    }
    onBuyClick = (bookId) => {
        let newBuyCandidateAmount = 0;
        const newBuyCandidate = this.state.books.map((book) => {
            if (book.id === bookId) {
                newBuyCandidateAmount = newBuyCandidateAmount + book.price
                return Object.assign({}, {
                    key:this.state.orders.length + 1,
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
        const newBuyCandidateObject = newBuyCandidate.slice(bookId-1,bookId);
        let isNewBook = true;
        let totalAmount = 0;
        const newBuyData = this.state.orders.map((order) => {
            if (order.bookid === bookId) {
                isNewBook = false
                totalAmount = totalAmount + (order.price * order.quantity) + order.price
                return Object.assign({}, {
                    key:order.id,
                    id:order.id,
                    bookid:order.bookid,
                    image:order.image,
                    title:order.title,
                    author:order.author,
                    price:order.price,
                    quantity:order.quantity + 1,
                })
            } else {
                totalAmount = totalAmount + (order.price * order.quantity)
                return Object.assign({}, {
                    key:order.id,
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
        if (isNewBook === true) {
            this.setState({
                orders: newBuyData.concat(newBuyCandidateObject),
                totalItems: this.state.totalItems + 1,
                totalAmount:totalAmount + newBuyCandidateAmount,
            })
        } else {
            this.setState({
                orders: newBuyData,
                totalItems: this.state.totalItems + 1,
                totalAmount:totalAmount,
            })
        }
    }
    onDeleteClick = (orderId) => {
        let totalAmount = 0;
        const samebooks = this.state.orders.filter((order) => order.id === orderId && order.quantity > 1);
        const sameBook = samebooks.map((samebook) => {
            totalAmount = samebook.price * (samebook.quantity - 1)
            return Object.assign({}, {
                key:samebook.id,
                id:samebook.id,
                bookid:samebook.bookid,
                image:samebook.image,
                title:samebook.title,
                author:samebook.author,
                price:samebook.price,
                quantity:samebook.quantity - 1,
            })
        });
        const notsamebooks = this.state.orders.filter((order) => order.id !== orderId);
        const notSameBook = notsamebooks.map((notsamebook) => {
            totalAmount = totalAmount + (notsamebook.price * notsamebook.quantity)
            return Object.assign({}, {
                key:notsamebook.id,
                id:notsamebook.id,
                bookid:notsamebook.id,
                image:notsamebook.image,
                title:notsamebook.title,
                author:notsamebook.author,
                price:notsamebook.price,
                quantity:notsamebook.quantity,
            })
        });
        const newDeleteData = sameBook.concat(notSameBook);
        if (newDeleteData.length > 0) {
            this.setState(() => {
                return {
                    orders:newDeleteData,
                    newDeleteData:newDeleteData,
                    totalItems: this.state.totalItems - 1,
                    totalAmount:totalAmount,
                };
            });
        } else {
            this.setState(() => {
                return {
                    orders:[],
                    newDeleteData:[],
                    totalItems: 0,
                    totalAmount:0,
                };
            });
        }
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
                                    totalItems={this.state.totalItems}
                                    totalAmount={this.state.totalAmount}
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
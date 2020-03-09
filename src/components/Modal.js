import React from 'react'

class Modal extends React.Component {
    state = {
        inView: false,
        books: [],
    }
    


    render(){
        const modalBooks = this.props.modalBooks;
        console.log(modalBooks);
        console.log(this.state.books);
        return (
            <div className="modal">
                
            </div>
        )
    }
}

export default Modal
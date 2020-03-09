import React from 'react'
import axios from 'axios'
import BookList from './BookList'

class SearchBook extends React.Component {
    state = {
        inputValue: '',
        books:[],
    }
    
    onInputChange = (event)=>{
        this.setState( {inputValue: event.target.value} );
        console.log(event.target.value)
    }

    getBooks = (event) => {
        event.preventDefault();
        //console.log(this.state.inputValue)
        let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.inputValue +':keyes&maxResults=4';
        //console.log(api);
        axios
            .get(api)
            .then(res => {
                const books = res.data.items;
                this.setState({books});
                console.log(this.state.books);
            })
            .catch((error) => {
                console.log(error);
            })
        this.setState( {inputValue:''} );
        //console.log(this.state.inputValue);
     } 

    render(){
        //const books = this.props.books;
        return (
            <div className="search-form">
                <form onSubmit= {this.getBooks}>
                    <input onChange= {this.onInputChange} value= {this.state.inputValue} placeholder="Wpisz tytuł ksiązki"/>
                    <button type="submit">Wyszukaj</button>
                 </form>
                 <BookList books={this.state.books}/>
            </div>
        )
   } 
}

export default SearchBook
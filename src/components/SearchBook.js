import React from 'react'
import axios from 'axios'

class SearchBook extends React.Component {
    state = {
        inputValue: '',
    }
    
    onInputChange = (event)=>{
        this.setState({inputValue: event.target.value});
        console.log(event.target.value)
    }

    getBooks() {
        let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.inputValue;
        //console.log(api);
        axios
            .get(api)
            .then(res => {
                const books = res.data;
                console.log(books);
            })
            .catch((error) => {
                console.log(error);
            })
     } 

    render(){
        return (
            <div>
                <form onSubmit= {this.getBooks}>
                    <input onChange= {this.onInputChange} placeholder="Wpisz tytuł ksiązki"/>
                    <button type="submit">Wyszukaj</button>
                 </form>
            </div>
        )
   } 
}

export default SearchBook
import { Component } from 'react';
import imgOne from './snowflake.png';


export class Wish extends Component {
state = {
userInput: '',
wishList: [],
img: imgOne
}

inputChange(e) {
this.setState({
    userInput: e
})
}

addItem(input) {
    if (input === '') {
    alert('Please fill in the field!')   
    }
    let listArray = this.state.wishList;
    listArray.push(input);
    this.setState({wishList: listArray, userInput: ''})
}

deleteItem() {
    let listArray = this.state.wishList;
    listArray = [];
    this.setState({
        wishList: listArray
    })
   
}

crossedWord(e) {
    const li = e.target;
    li.classList.toggle('crossed');  
 }

onFormSubmit(e) {
    e.preventDefault();
}

render() {
return(
    <div className="container">
        <form onSubmit={this.onFormSubmit}>
    <input type="text"
    placeholder="I want to..."
    onChange = {(e) => {this.inputChange(e.target.value)}}
    value = {this.state.userInput}/>
    

    <button onClick = {() => {this.addItem(this.state.userInput)}}>Add</button>
   
    <ul>
        {this.state.wishList.map((item, index) => 
        (<li onClick={this.crossedWord} key={index}> <img src={this.state.img} width="40px" alt="check"/> {item}</li>))
        }
    </ul>
    
    <button className='delete' onClick = {() => this.deleteItem()}>Delete</button>

    </form> 
    </div>
)
}
}

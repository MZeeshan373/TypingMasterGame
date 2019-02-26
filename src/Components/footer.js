import React, { Component } from 'react'; 
import {connect} from 'react-redux'
// import {connect} from 'react-redux';
// import add from '../action';

class Footer extends Component {
b=()=>{
    this.props.dispatch({type:"book",payload:"NewBook"});
}
    render(){
        return(
            <nav className="main-nav">
                <ul>
                    <button onClick={this.b}>submit</button>
                    { this.props.books.map((val,ind)=>{
                        return <li key={ind}>{val}</li>
                    })
                    }
                </ul>
            </nav>
        );
    }
}
const mapStateToProps=(store)=>{
    return {
        books: store.bookReducer
    }
}
export default connect (mapStateToProps)(Footer)
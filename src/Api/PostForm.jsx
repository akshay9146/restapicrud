import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

 class PostForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            body:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((response)=>{
            console.log(response)
            
        })
        }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
     render(){
         return(
             
             <div>
                 
                 <h3 style={{textAlign:'center'}}>
                     Add Posts here!

                 </h3>
                 <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
<label>
    title:
</label>
<span style={{backgroundColor:'GrayText'}}>
    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
</span>
<br/>

<label>
    Post:
</label>
<span style={{backgroundColor:'GrayText'}}>
    <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/>
</span><br/>
<span>
    <button type="submit">Add post</button> <i><Link to="/">Get posts list</Link></i>
</span>
                 </form>
             </div>
              
         )
     }
 }
 export default PostForm
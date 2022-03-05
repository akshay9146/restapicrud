import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
class PostList extends Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            this.setState({posts:response.data})
        })
    }
    handleDelete=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response)
        })
    }
    handleUpdate=(id)=>{
        const da={title:'sam',body:'fghjkl'}
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,da)
        .then((response)=>{
            console.log(response)
            // this.setState({posts:response.data})
        })
    }
    render(){
        return(
           
            <div>
                <h3 style={{textAlign:'center'}}>Posts details   <i><Link to="/PostForm">Add posts</Link></i></h3>
                
                <table border="1px">
                <thead style={{backgroundColor:'ActiveCaption'}}>
                    <tr>
                    
                        <th>title</th>
                        <th>post</th>
                        <th>Action</th>
                        <th>Edit</th>
                    
                    </tr>
                    </thead>
                    {
                        this.state.posts.map((post)=>(
                            <tbody style={{backgroundColor:'ButtonHighlight'}} key={post.id}>
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button onClick={()=>this.handleDelete(post.id)}>Delete post</button></td>
                                <td><button onClick={()=>this.handleUpdate(post.id)}>Update post</button></td>
                          
                            </tr>
                            </tbody>
                        ))
                    }
                </table>
                
                
            </div>
            
        )
    }
}
export default PostList
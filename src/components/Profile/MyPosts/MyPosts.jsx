import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text});
        props.dispatch(action);
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCounter}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
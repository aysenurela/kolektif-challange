import React from 'react';
import './App.css';
import { posts } from './data/posts'
import { comments } from './data/comments'

class App extends React.Component {
  render () { 
    const _posts = posts
    const _comments = comments
      return (
        <div className="mainContainer">
          {_posts.map((post)=>{
            const {
              userId,
              id,
              title,
              body
            } = post
            return (
              <div key={id} className="postContainer">
                <div className="user_title_container">
                  <div className="user"> {`user_${userId}`} </div>
                  <div className="postTitle">{title}</div>
                </div>  
                <div className="postBody">{body}</div>
                <div>
                  {
                    _comments.map((comment)=>{
                      if (comment.postId === id) {
                        return (
                          <div key={comment.id} className="comment">
                            <div>{comment.body}</div>
                            <div className="comment_user_information">
                              <div>{comment.name}</div>
                              <div>{comment.email}</div>
                            </div>
                          </div>
                        )
                      }
                    })
                  }
                </div>
              </div>
            )
          })
          }
        </div>
    )
  }
}

export default App;

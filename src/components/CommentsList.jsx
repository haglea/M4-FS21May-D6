import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from "./SingleComment";

const CommentsList = ({comments}) => {    
        return (                      
            <ListGroup>                
                { comments.map((comment) => 
                <SingleComment comment={comment} key={comment._id} /> )
                }                
            </ListGroup>            
        );
}

export default CommentsList;
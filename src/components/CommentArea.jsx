import React, { Component } from 'react';
import CommentsList from "./CommentsList";

class CommentArea extends Component {   

    state = {
        comments: [ ]
    }

    componentDidMount = async () => {
        this.fetchBook() 
    }

    fetchBook = async () => {

        try {
            
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" 
            + this.props.asin, {
                headers: {
                "Content-Type": "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmMwMGIzNTgxNzAwMTVjMjI3NDkiLCJpYXQiOjE2MjUwNTgzMDQsImV4cCI6MTYyNjI2NzkwNH0.Ibc--VACzfbnbVnmlo0H7tPvvmxWZW_tKIx3RWPsOSE",
             }
            });
            const data = await response.json();
            if(response.ok) {
                this.setState({
                comments: data
            })
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('COMPONENTDIDUPDATE')
    if (prevProps.asin !== this.props.asin
    ) {
            this.fetchMovie()
        }
    }

    myClickHandler = () => {
        console.log(this.setState)
    }

    render () {
        return (
            <div onClick={this.myClickHandler}> 
            { this.state.comments &&         
             <CommentsList comments={this.state.comments} />
            } 
            </div>
        );
    }
           
}

export default CommentArea;
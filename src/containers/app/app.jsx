import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Jumbotron, Container, Row, } from 'react-bootstrap'
import './app.css'
import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';
import {addComment, deleteComment} from '../../redux/actions'

class App extends Component {

    static propsTypes = {
        comments: PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    componentDidMount () {

    }

   
    render() {
        const {comments, addComment, deleteComment}=this.props
        return (
            <div>
                <Jumbotron fluid>
                    <Container className="Header">
                        <h1>React bootstrap</h1>
                        <p>
                            React comment Practice
                        </p>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row>
                        <CommentAdd addComment={addComment}></CommentAdd>
                        <CommentList comments={comments} deleteComment={deleteComment}></CommentList>
                    </Row>
                </Container>
 
            </div>
        )
    }
}


export default connect(
    state => ({comments:state}),//state is the array of comment
    {addComment, deleteComment}
)(App)
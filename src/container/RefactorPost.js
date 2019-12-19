import React, {Component, Fragment} from 'react';
import axiosApi from "../axios-api";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class RefactorPost extends Component {

    state = {
        title: '',
        message: '',
        post: null,
    };

    getCurrentPostLink = () => {
        const id = this.props.match.params.id;
        return '/posts/' + id + '.json';
    };

    // noinspection JSCheckFunctionSignatures
    async componentDidMount() {
        const response = await axiosApi.get(this.getCurrentPostLink());
        this.setState({post: response.data})
    };

    valueHandler = e => this.setState({[e.target.name]: e.target.value});

    refactorSubmitHandler = async (e) => {
        e.preventDefault();
        const editPosts = {
            date: new Date(),
            title: this.state.title,
            message: this.state.message
        };
        await axiosApi.put(this.getCurrentPostLink(), editPosts);
        this.props.history.push('/');
    };

    render() {
        console.log(this.state);
        return this.state.post && (
            <div>
                <Fragment>
                    <h1>Refactor post</h1>
                    <Form onSubmit={this.refactorSubmitHandler}>
                        <FormGroup>
                            <Label for="Title">Title:</Label>
                            <Input type="text" name="title" id="title" placeholder="Enter post title"
                                   defaultValue={this.state.post.title} onChange={this.valueHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message:</Label>
                            <Input type="textarea" name="message" id="message" placeholder="Enter post message"
                                   defaultValue={this.state.post.message} onChange={this.valueHandler}/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Fragment>
            </div>
        );
    }
}

export default RefactorPost;
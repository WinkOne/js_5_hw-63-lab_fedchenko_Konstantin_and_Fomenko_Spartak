import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axiosApi from "../axios-api";
import Spinner from "../components/UI/Spinner/Spinner";

class NewPost extends Component {
    state={
        title: '',
        message: '',
        loading: false
    };
    valueHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();

        const newPosts = {
            date: new Date(),
            title: this.state.title,
            message: this.state.message
        };
        this.setState({loading: true});
        await axiosApi.post('/posts.json', newPosts);
        this.props.history.push('/');
        this.setState({loading: false});
    };

    render() {
        let addPage = (
            <Fragment>
                <h1>New posts</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="Title">Title:</Label>
                        <Input type="text" name="title" id="title" placeholder="Enter post title" value={this.state.title} onChange={this.valueHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input type="textarea" name="message" id="message" placeholder="Enter post message" value={this.state.message} onChange={this.valueHandler} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Fragment>
        );
        if (this.state.loading) {
            addPage = <Spinner/>
        }
        return (
            <div>
                {addPage}
            </div>
        );
    }
}

export default NewPost;
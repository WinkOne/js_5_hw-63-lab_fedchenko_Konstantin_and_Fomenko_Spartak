import React, {Component} from 'react';
import axiosApi from "../axios-api";
import moment from "moment";
import {Button, Card, CardTitle} from "reactstrap";



class SinglePost extends Component {
    state = {
        post: null,
    };

    getCurrentPostLink = () => {
        const id = this.props.match.params.id;
        return '/posts/' + id + '.json';
    };
    currentPostLink = () => {
        const id = this.props.match.params.id;
        this.props.history.push("/posts/" + id + "/edit")
    };
    // noinspection JSCheckFunctionSignatures
    async componentDidMount() {
        const response = await axiosApi.get(this.getCurrentPostLink());
        this.setState({post: response.data})
    };

    deletePost = async () => {
        await axiosApi.delete(this.getCurrentPostLink());
        this.props.history.replace('/')
    };


    render() {
        return this.state.post && (
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <span>{moment(this.state.post.date).format('Y-M-D H:mm:ss')}</span>
                    <CardTitle>{this.state.post.title}</CardTitle>
                    <p>{this.state.post.message}</p>
                    <div>
                        <Button style={{margin: '10px' }} onClick={this.deletePost} color="danger">Delete</Button>
                        <Button style={{margin: '10px' }} onClick={this.currentPostLink} color="success">Refactor</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default SinglePost;
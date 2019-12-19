import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Card, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import moment from "moment";


class Home extends Component {
    state = {
        posts: [],
    };

   // noinspection JSCheckFunctionSignatures
    async componentDidMount() {
       const response = await axiosApi.get('/posts.json');

       if (response.data) {
           this.setState({posts: response.data})
       }
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.posts).map(id =>(
                    <Card key={id} body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: '10px' }}>
                        <span>{moment(this.state.posts[id].date).format('Y-M-D H:mm:ss')}</span>
                        <CardTitle>{this.state.posts[id].title}</CardTitle>
                        <div>
                            <Button tag={Link} to={"/post/" + id}>View post</Button>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Home;
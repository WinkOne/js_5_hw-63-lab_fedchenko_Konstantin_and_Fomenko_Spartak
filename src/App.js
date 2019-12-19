import React, {Fragment} from 'react';
import './App.css'
import {Container} from "reactstrap";
import Navigation from "./components/UI/Navigation/Navigation";
import {Route, Switch} from "react-router";
import Home from "./container/Home";
import NewPost from "./container/NewPost";
import SinglePost from "./container/SinglePost";
import RefactorPost from "./container/RefactorPost";
import AboutUs from "./container/AboutUs";
import Contact from "./container/Contact";

function App() {
    return (
        <Fragment>
            <Navigation/>
            <Container>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/aboutUs"} exact component={AboutUs}/>
                    <Route path={"/contact"} exact component={Contact}/>
                    <Route path={"/posts/new"} component={NewPost}/>
                    <Route path={"/post/:id"} component={SinglePost}/>
                    <Route path={"/posts/:id/edit"} component={RefactorPost}/>
                    <Route render={() => <h1>Not Fount</h1>}/>
                </Switch>
            </Container>
        </Fragment>

    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Travel from "./components/Travel";
import Blog from "./components/Blog";
import Books from "./components/Books";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
    return (
    <div className="body">
        <Router>
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/travel" exact component={Travel} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/books" exact component={Books} />
            <Route path="/projects" exact component={Projects} />
            <Footer/>
        </Router>
    </div>
    );
};

export default App;
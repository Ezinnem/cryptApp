import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typograpghy, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Homepage />
                                </Route>
                                <Route exact path="/exchanges">
                                    <Exchanges />
                                </Route>
                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies />
                                </Route>
                                <Route exact path="/crypto/:coinId">
                                    <CryptoDetails />
                                </Route>
                                <Route exact path="/news">
                                    <News />
                                </Route>
                            </Switch>
                        </Router>
                        
                    </div>
                </Layout>

            </div>
            <div className="footer">

            </div>
            
        </div>
    )
}

export default App
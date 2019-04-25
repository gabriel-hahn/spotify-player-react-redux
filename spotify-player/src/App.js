import React, { Component, Fragment } from "react";

import { GlobalStyle } from "./styles/global";

import Sidebar from "./components/Sidebar";

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Sidebar />
            </Fragment>
        );
    }
}

export default App;

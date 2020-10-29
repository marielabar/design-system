import React from "react";
import ReactDOM from "react-dom";
import { BasicModal } from "./components";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <BasicModal></BasicModal>
        <GlobalStyle></GlobalStyle>
    </div>
)

ReactDOM.render(<App />, document.querySelector("#root")); 
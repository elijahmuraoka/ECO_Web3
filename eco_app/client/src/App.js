import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import "./styles/App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validCodes: "",
        };
    }

    // INITIAL DATABASE RETRIEVAL AND SETUP

    async connectAPI() {
        const url = "http://localhost:5000/get";
        await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to retrieve data properly.");
                } else {
                    return response.json();
                }
            })
            // .then((data) => {
            //     loadHTMLTable(data["data"]);
            // })
            .catch((err) => {
                console.log(err.message);
            });
    }

    getValidCodes() {}

    render() {
        return (
            <main>
                <script defer src="./scripts.js"></script>
                <Header />
                <Body />
                <div id="overlay"></div>
            </main>
        );
    }
}

export default App;

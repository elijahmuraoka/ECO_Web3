import React from "react";

class EarnForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
        };
    }

    handleCodeChange = (e) => {
        this.setState({
            code: e.target.value,
        });
    };

    handleSubmission = (e) => {
        if (this.state.code !== "") {
            alert("A code was submitted: " + this.state.code);
            console.log("Current Code:" + this.state.code);
        }

    };

    render() {
        return (
            <form className="earn-form" action ='/getValidCode' method='POST'>
                <input
                    type="input"
                    placeholder="Enter code here"
                    onChange={this.handleCodeChange}
                    value={this.state.code}
                    required
                ></input>
                <button type="submit" onClick={this.handleSubmission}>
                    Earn Tokens
                </button>
            </form>
        );
    }
}

export default EarnForm;

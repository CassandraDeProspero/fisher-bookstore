import React, { Component } from "react";
import { AuthorDisplay } from "./AuthorDisplay";
import "./Authors.css";


export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    firstName: "Emily",
                    LastName: "Dickinson"
                },
                {
                    id: 2,
                    FirstName: "William",
                    LastName: "Shakespeare"
                },
                {
                    id: 3,
                    FirstName: "Leo",
                    LastName: "Tolstoy"
                },
                {
                    id: 4,
                    FirstName: "Oscar",
                    LastName: "Wilde"
                },
                {
                    id: 5,
                    FirstName: "John",
                    LastName: "Donne"
                },
                {
                    id: 6,
                    FirstName: "Sarah",
                    LastName: "Williams"
                },
                {
                    id: 7,
                    FirstName: "Rudyard",
                    LastName: "Kipling"
                },
                {
                    id: 8,
                    FirstName: "John",
                    LastName: "Keats"
                }
            ]
        };
    } 
render () {
    return (
        <div className="Authors">
            <div className="lander">
                <AuthorDisplay authors={this.state.authors} />
            </div>
        </div>
    );
}
}
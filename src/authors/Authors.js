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
                    FirstName: "Domain Driven Design",
                    LastName: "Eric Evans"
                },
                {
                    id: 2,
                    FirstName: "Accelerate",
                    LastName: "Nicole Forsgren"
                },
                {
                    id: 3,
                    FirstName: "The Nickel Boys",
                    LastName: "Colson Whitehead"
                },
                {
                    id: 4,
                    FirstName: "Gingerbread",
                    LastName: "Helen Oyeyemi"
                },
                {
                    id: 5,
                    FirstName: "Nothing to See Here",
                    LastName: "Kevin Wilson"
                },
                {
                    id: 6,
                    FirstName: "The Old Drift",
                    LastName: "Namwali Serpell"
                },
                {
                    id: 7,
                    FirstName: "Women Talking",
                    LastName: "Miriam Toews"
                },
                {
                    id: 8,
                    FirstName: "The Dutch House",
                    LastName: "Ann Patchett"
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
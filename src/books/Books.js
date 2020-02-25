import React from "react";
import "./Books.css";

export default function Books() {
    return (
        <div className="Books">
            <div className="lander">
                <h1>Books</h1>
            </div>
        </div>
    );
}

constructor(props) {
    super(props);
    this.state = {
        books: [
            {
                id: 1,
                title: "Domain Driven Design",
                author: "Eric Evans",
                isbn: "978-0321125217"
            },
            {
                id: 2,
                title: "Accelerate",
                author: "Nicole Forsgren",
                isbn: "978-1942788331"
            }
        ]
    };
}
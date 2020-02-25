import React from "react";
import "./Books.css";

export default class Books extends Component {
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
                },
                {
                    id: 3,
                    title: "The Nickel Boys",
                    author: "Colson Whitehead",
                    isbn: "978-3861900365"
                },
                {
                    id: 4,
                    title: "Gingerbread",
                    author: "Helen Oyeyemi",
                    isbn: "978-2973309163"
                },
                {
                    id: 5,
                    title: "Nothing to See Here",
                    author: "Kevin Wilson",
                    isbn: "978-1739733202"
                },
                {
                    id: 6,
                    title: "The Old Drift",
                    author: "Namwali Serpell",
                    isbn: "978-1120973857"
                },
                {
                    id: 7,
                    title: "Women Talking",
                    author: "Miriam Toews",
                    isbn: "978-1128720979"
                },
                {
                    id: 8,
                    title: "The Dutch House",
                    author: "Ann Patchett",
                    isbn: "978-1000938710"
                }
            ]
        };
    } 
render () {
    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
}
}
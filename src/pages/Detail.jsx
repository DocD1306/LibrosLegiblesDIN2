import { useParams, Link, useNavigate } from "react-router-dom";
import books from "../data/books.js";

function Detail(){

    const {id} = useParams();
    const navigate = useNavigate();

    const book = books.find( book => book.id === id);

    return(
        <h1>Detail Page</h1>
    )
}
export default Detail
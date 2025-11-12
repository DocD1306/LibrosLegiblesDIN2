import books from "./data/books.js"
import Book from "./Book.jsx"

function Catalogue(){

    /*
    
    */
    return (
        <>
            <h1 className="heading_h1">Catálogo de libros</h1>
            <section className="catalogue w-full">
                {
                    books.map( book =>
                        <Book title={book.title} image={book.image}/>
                    )
                }
            </section>
        </>
    )

}

export default Catalogue
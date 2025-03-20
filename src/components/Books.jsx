function ListOfBooks({books}) {
    return (
        <ul className='books'>
            {books.map((book) => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <img src={book.image}></img>
                    <p>{book.genero}</p>
                </li>
            ))}
        </ul>
    )
    
}

function NoBooksResults() {
    return <p>No hay libros disponibles</p>
}

export function Books({books}) {
    const hasBooks = books?.length > 0

    return (
        <div>
            {hasBooks ? <ListOfBooks books={books} /> : <NoBooksResults/>}
        </div>
    )
}
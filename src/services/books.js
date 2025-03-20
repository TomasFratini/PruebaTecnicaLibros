import libros from '../data/libros.json'


export const getBooks = async () => {
    

    try {
        const books = libros.library
        
        return books?.map((book) => ({     
            id: book.book.ISBN,
            title: book.book.title,
            image: book.book.cover,
            pages: book.book.pages,
            genero: book.book.genre
            
        }))
        
    } catch (error) {
        throw new Error('Error al obtener los libros', error)
    }
}
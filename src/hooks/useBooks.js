

import { useState } from "react"
import { getBooks } from "../services/books"

export function useBooks () {
    const [books, seBbooks] = useState([])
    const [loading, setLoading] = useState(false)

    const ShowBooks = async () => {
        try {
            setLoading(true)
            const newBooks = await getBooks()
            seBbooks(newBooks)
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    }


    return { books, loading, ShowBooks }
}
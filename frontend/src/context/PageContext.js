import React, { createContext, useState, useContext, useEffect } from "react"

const PageContext = createContext()

export const usePage = () => useContext(PageContext)

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageIndex, setIndex] = useState(1)

    useEffect(() => {
        setIndex(currentPage + 1)
    }, [currentPage])

    return (
        <PageContext.Provider
            value={{ currentPage, setCurrentPage, pageIndex, setIndex }}
        >
            {children}
        </PageContext.Provider>
    )
}

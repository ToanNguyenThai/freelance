import React from 'react'
import { useState } from 'react'
import List from '../List/List'
import Search from '../Search/Search'
export default function MainLayout() {
    const [navbar, setNavbar] = useState(false)
    const [result, setResult] = useState('')
    const renderWithResult = (value) => {

        setResult(value)
    }
    const openNavbar = (value) => {
        setNavbar(value)
    }
    const closeNavbar = (value, searchValue) => {
        setNavbar(value)
        setResult(searchValue)
    }
    if (navbar) {
        return (
            <Search closeNavbar={closeNavbar} getResult={renderWithResult}></Search>
        )
    }

    else {

        return (
            <List openNavbar={openNavbar} result={result}></List>
        )
    }
}

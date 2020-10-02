import { useState } from "react"
import React from 'react'



const EvsAndIntp = () => {


    const [value, setValue] = useState<string>('')
    const [header, setHeader] = useState<string>('')

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        setHeader(header + '<h1>' + value + '</h1>')
        setValue('')
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        // ...
        const newValue = event.target.value;

        setValue(newValue)

    }


    const input = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label>Dodaj heda</label>
                <input type='text' onChange={handleInput} value={value}></input>
                <button>Dodaj Heda</button>
            </form>

        )
    }


    function createMarkup() { return { __html: header }; };






    return (
        <div style={{ minHeight: '600px' }}>
            {input()}
            <div dangerouslySetInnerHTML={createMarkup()} />

        </div>
    )
}

export default EvsAndIntp
import Dropdown from "./Dropdown"
import React, { useState } from 'react'

const options = [
    {
        label: 'the Color Red',
        value: 'red'
    }, {
        label: 'the Color Green',
        value: 'green'
    },
    {
        label: 'the Color Blue',
        value: 'blue'
    }
];


const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Dropdown
                options={options}
                onSelectedChange={setSelected}
                selected={selected}
            />
        </div>
    )
}


export default App
import {useState, useEffect} from "react";
import './SortingVisualizer.css';
import {Button, IconButton} from "@mui/material";
import ArrayDisplayed from "./ArrayDisplayer/ArrayDisplayed";
import SortingButtons from "./SortingButtons/SortingButtons";
import RefreshIcon from "@mui/icons-material/Refresh"

const barStyle = `
    width: 15px;
    display: inline-block;
    margin: 0 1px;
    background-color: skyblue;
`

const SortingVisualizer = () => {
    const [array, setArray] = useState(resetArr())

    const resetState = () => {
        let arrayBars = document.getElementsByClassName('array-bar')
        for (let bar of arrayBars) bar.style = barStyle
        setArray(resetArr())
    }


    return (
        <div className="container">
            <SortingButtons array={array}/>
            <IconButton className="reset-button" onClick={() => resetState()}>
                <RefreshIcon/>
            </IconButton>
            <ArrayDisplayed array={array}/>
        </div>
    )
}

function resetArr() {
    const array = []
    for (let i = 0; i < 50; i++) {
        array.push(randomInt(5, 700))
    }
    return array;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export default SortingVisualizer;
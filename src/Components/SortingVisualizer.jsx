import React from "react";
import {useState} from "react";
import './SortingVisualizer.css';
import {Icon, IconButton} from "@mui/material";
import {makeStyles} from "@mui/styles"
import ArrayDisplayed from "./ArrayDisplayer/ArrayDisplayed";
import SortingButtons from "./SortingButtons/SortingButtons";
import RefreshIcon from "@mui/icons-material/Refresh"
import clsx from "clsx";

const barStyle = `
    width: 15px;
    display: inline-block;
    margin: 0 1px;
    background-color: skyblue;
`

const useStyles = makeStyles((theme) => ({
    refresh: {
        marginTop: "20px",
        cursor: "pointer",
        margin: "auto",
        "&.spin": {
            animation: "$spin 1s 1",
            // pointerEvents:'none'
        }
    },
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    }
}));


const SortingVisualizer = () => {
    const [array, setArray] = useState(resetArr())
    const [spin, setSpin] = useState(false)
    const classes = useStyles()

    const resetState = () => {
        let arrayBars = document.getElementsByClassName('array-bar')
        for (let bar of arrayBars) bar.style = barStyle
        setArray(resetArr())
    }

    const resetAnimation = () => {
        resetState()

        // animation
        setSpin(true);
        setTimeout(() => {
            setSpin(false);
        }, 1000);
    }


    return (
        <div className="container">
            <div className={"top-bar"}>
                <SortingButtons array={array}/>
                <IconButton className={clsx({
                    [classes.refresh]: true,
                    spin: spin
                })} onClick={resetAnimation} spin={360}>
                    <RefreshIcon/>
                </IconButton>
            </div>
            <ArrayDisplayed array={array}/>
        </div>
    )
}

function Refresh() {
    const [array, setArray] = useState(resetArr())
    const [spin, setSpin] = React.useState(false);
    const classes = useStyles();

    const refreshCanvas = () => {
        console.log(array)
        // Refresh bars
        let arrayBars = document.getElementsByClassName('array-bar')
        for (let bar of arrayBars) bar.style = barStyle
        setArray(resetArr())

        // Start animation for 1 s
        setSpin(true);
        setTimeout(() => {
            setSpin(false);
        }, 1000);
    };

    return (
        <IconButton
            className={clsx({
                [classes.refresh]: true,
                spin: spin
            })}
            onClick={refreshCanvas}
            spin={360}
        >
            <RefreshIcon/>
        </IconButton>
    );
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
// import React, {useState} from "react";
// import clsx from "clsx";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import {IconButton} from "@mui/material";
// import {makeStyles} from "@mui/styles";
//
// const barStyle = `
//     width: 15px;
//     display: inline-block;
//     margin: 0 1px;
//     background-color: skyblue;
// `
//
// const useStyles = makeStyles((theme) => ({
//     refresh: {
//         marginRight: "10px",
//         marginTop: "20px",
//         cursor: "pointer",
//         margin: "auto",
//         "&.spin": {
//             animation: "$spin 1s 1",
//             // pointerEvents:'none'
//         }
//     },
//     "@keyframes spin": {
//         "0%": {
//             transform: "rotate(0deg)"
//         },
//         "100%": {
//             transform: "rotate(360deg)"
//         }
//     }
// }));
//
// export const ResetButton = (arrayS) => {
//     const [array, setArray] = useState(arrayS)
//     const [spin, setSpin] = useState(false)
//     const classes = useStyles()
//
//     const resetState = () => {
//         let arrayBars = document.getElementsByClassName('array-bar')
//         for (let bar of arrayBars) bar.style = barStyle
//         setArray(resetArr())
//     }
//
//     const resetAnimation = () => {
//         resetState()
//
//         // animation
//         setSpin(true);
//         setTimeout(() => {
//             setSpin(false);
//         }, 1000);
//     }
//
//     return(
//         <IconButton className={clsx({
//             [classes.refresh]: true,
//             spin: spin
//         })} onClick={resetAnimation} spin={360}>
//             <RefreshIcon/>
//         </IconButton>
//     )
// }
//
// export function resetArr() {
//     const array = []
//     for (let i = 0; i < 50; i++) {
//         array.push(randomInt(5, 700))
//     }
//     return array;
// }
//
// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }


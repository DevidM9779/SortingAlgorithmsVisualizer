import {Button} from "@mui/material";
import getBubbleSortAnimations from "../../Helpers/Sorting-Algos/bubbleSort";
import getInsertionSortAnimations from "../../Helpers/Sorting-Algos/insertionSort";
import getSelectionSortAnimations from "../../Helpers/Sorting-Algos/selectionSort";

const PRIMARY_COLOR = "skyblue"
const SECONDARY_COLOR = "coral"
const SORTED_COLOR = "green"
const ANIMATION_SPEED_MS = 10


const animationsHandler = (animations) => {
    let colorChanged = false
    for (let i = 0; i<animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        // Animation for comparing two bars
        if (animations[i].length === 2) {
            const [index1, index2] = animations[i]
            const bar1Style = arrayBars[index1].style
            const bar2Style = arrayBars[index2].style
            const color = colorChanged ? PRIMARY_COLOR : SECONDARY_COLOR
            colorChanged = !colorChanged
            setTimeout(() => {
                bar1Style.backgroundColor = color;
                bar2Style.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS)

            // Animation for swapping two bars
        } else if (animations[i].length === 4) {
            const [index1, index2, height1, height2] = animations[i]
            const bar1style = arrayBars[index1].style
            const bar2style = arrayBars[index2].style

            setTimeout(() => {
                bar1style.height = `${height2}px`
                bar2style.height = `${height1}px`
            }, i * ANIMATION_SPEED_MS)

            // Animation for marking down sorted bars
        } else {
            // sorted bar
            console.log(arrayBars[i])
            const [index] = animations[i]
            const color = SORTED_COLOR
            const barStyle = arrayBars[index].style

            setTimeout(() => {
                barStyle.backgroundColor = color
            }, i * ANIMATION_SPEED_MS)
        }
    }
}

const bubbleSort = (array) => {
    const animations = getBubbleSortAnimations(array)
    animationsHandler(animations)
}

const insertionSort = (array) => {
    const animations = getInsertionSortAnimations(array)
    animationsHandler(animations)
}

const selectionSort = (array) => {
    const animations = getSelectionSortAnimations(array)
    console.log(animations)
    animationsHandler(animations)
}



const SortingButtons = ({array}) => {

    return(
        <div className="sorting-buttons-container">
            <Button className="sorting-button" variant="contained" onClick={() => bubbleSort(array)}>Bubble Sort</Button>
            <Button className="sorting-button" variant="contained" onClick={() => insertionSort(array)}>Insertion Sort</Button>
            <Button className="sorting-button" variant="contained" onClick={() => selectionSort(array)}>Selection Sort</Button>
        </div>
    )

}

export default SortingButtons;
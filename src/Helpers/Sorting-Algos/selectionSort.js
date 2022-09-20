/*
def selectionSort(array):
    index = 0
    while index<len(array)-1:
        min = index
        for i in range(index, len(array)):
            if array[i] < array[min]: min = i

        # swap vals
        array[index], array[min] = array[min], array[index]

        index += 1

    return array
 */

const selectionSort = (array, animations) => {
    let index = 0
    while (index < array.length-1) {
        let min = index
        for (let i = index+1; i<array.length; i++) {
            animations.push([min, i])   // change colors of bars being compared
            if (array[i] < array[min]) {
                animations.push([min, i])   // change colors back to normal
                min = i
            } else {
                animations.push([min, i])   // change colors back to normal
            }
        }

        animations.push([min, index])   // mark the two values that are going to be swapped

        // swap vals
        animations.push([min, index, array[min], array[index]]) // animation of swap
        let temp = array[min]
        array[min] = array[index]
        array[index] = temp

        // Add second animation of the comparison
        // Changes the color back to normal
        animations.push([min, index])


        animations.push([index]) // change color of sorted val
        index++
    }
    animations.push([index])
}

export default function getSelectionSortAnimations(array) {
    const animations = []
    if (array.length <= 1) return array
    selectionSort(array, animations)
    return animations;
}
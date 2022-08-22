
const ArrayDisplayed = ({array}) => {
    return (
        <div className="array-container">
            {
                array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}
                    ></div>
                ))
            }
        </div>
    )
}

export default ArrayDisplayed;
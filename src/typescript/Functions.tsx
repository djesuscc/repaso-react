
export const Functions = () => {

    const sum = (a: number, b: number):number => {
        return a * b;
    }

    return (
        <>
            <h3>Functions</h3>
            <span>The result is: { sum(44, 16) } </span>
        </>
    )
}

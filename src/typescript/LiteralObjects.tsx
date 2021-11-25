
interface Person {
    name: string,
    age: number,
    address: Address,
}

interface Address {
    country: string,
    number: number,
}

export const LiteralObjects = () => {
    const person: Person = {
        name: 'Daniel',
        age: 31,
        address: {
            country: 'Mexico',
            number: 116
        }
    }
    return (
        <div>
            <h3>Literal Objects</h3>
            <code>
                <pre>
                    { JSON.stringify(person, null, 2) }
                </pre>
            </code>
        </div>
    )
}

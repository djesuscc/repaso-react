
export const BasicTypes = () => {
    
    const name: string = 'Daniel';
    const age: number = 31;
    const isActive: boolean = true;
    const powers: string[] = ['Fly', 'Breathe underwater'];
    
    return (
        <>
            <h3>Basic Types</h3>
            { name } - { age } - { isActive ? 'Active' : 'Inactive' }
            <br />
            { powers.join(', ') }
        </>
    )
}

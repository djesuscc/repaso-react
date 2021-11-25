import { useState } from "react";

export const useCounter = ( init:number = 0 ) => {
    const [count, setCount] = useState(init);

    const accumulate = (number: number):void => {
        setCount(count + number);
    }

    return {
        count,
        accumulate,
    }
}

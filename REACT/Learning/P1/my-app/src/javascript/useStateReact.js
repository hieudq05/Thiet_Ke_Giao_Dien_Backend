import { useState } from "react";

/* export default function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return <button onClick={handleClick}>Click! ({count})</button>;
}
 */

export default function MyButton({ count, onClickEvent }) {
    return <button onClick={onClickEvent}>Click ({count})</button>;
}

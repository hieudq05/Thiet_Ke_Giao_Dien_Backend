export default function HandleClick() {
    function handleClick() {
        alert("Button clicked");
    }

    return <button onClick={handleClick}>Click me!</button>;
}

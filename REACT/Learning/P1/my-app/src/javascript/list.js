const products = [
    { id: 1, name: 'Apples', price: 2.00 },
    { id: 2, name: 'Bananas', price: 1.50 },
    { id: 3, name: 'Cherries', price: 3.00 },
    { id: 4, name: 'Dates', price: 4.00 },
    ];

const List = () => {
    const list = products.map((product) => (
        <li key={product.id}>
            {product.name} - {product.price}
        </li>
    ));
    return <ul>{list}</ul>;
}

export default List;
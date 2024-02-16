import '../Styles/Products.css'

export function Products ({products}) {
    return (
        <main className='products'>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <div className="img_wrap">
                            <img 
                                src={product.thumbnail}
                                alt={product.description}
                                className="img_img"
                            />
                            <div className="img_description">
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className='titCir'>
                            <div className={`circle ${product.available === "Si" ? "green" : "red"}`}></div>
                            <strong>{product.title}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
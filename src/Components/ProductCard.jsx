import React from 'react';

function ProductCard({ data, items, setItems }) {

    const handleAddToCart = (it) => {
        if (items?.some(i => i?.id === it?.id)) {
            let d = items?.filter(i => i?.id !== it?.id);
            setItems(d)
        } else {
            setItems([...items, it])
        }
    };

    return (
        <>
            {data?.map((product, index) => {
                return (
                    <div class="col mb-5" key={index}>
                        <div class="card h-100">
                            {product.sale ? (<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>) : (<></>)}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{product.product}</h5>
                                    {product.rating ? (<div className='d-flex justify-content-center small text-warning mb-2 '>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>) : (<></>)}
                                    {product.offer ? (<><span className="text-muted text-decoration-line-through">{product.oldrate}</span><span>&nbsp; {product.rate}</span></>) :
                                        (<span>{product.rate}</span>)}
                                </div>
                            </div>

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {product.option === 1 ? (<div className="text-center"><a className='btn btn-outline-dark mt-auto'>View options</a></div>) :
                                    (<div className="text-center">
                                        <a className={`btn ${items?.some(i => i?.id === product?.id) ? "btn-outline-danger" : "btn-outline-dark"} mt-auto`}
                                            onClick={() => handleAddToCart(product)}>
                                            {items?.some(i => i?.id === product?.id) ? "Remove from Card" : "Add to Card"}</a></div>)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ProductCard;

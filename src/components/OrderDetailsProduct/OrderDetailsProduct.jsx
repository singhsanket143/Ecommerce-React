function OrderDetailsProduct() {
    return (
        <div className="order-details-product d-flex flex-row">
            <div className="order-details-product-img d-flex">
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
            </div>
            <div className="order-details-product-data d-flex flex-column">
                <div>Mens Casual Premium Slim Fit T-Shirts </div>
                <div>123</div>
            </div>
            <div className="order-details-product-actions d-flex flex-column">
                <div className="order-details-product-quantity">
                    <div className="fw-bold">Quantity</div>
                    <div className="form-group">
                        <select className="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <button className="order-details-product-remove btn btn-danger">Remove</button>
            </div>
        </div>
    )
}

export default OrderDetailsProduct;
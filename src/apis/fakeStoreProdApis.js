export function getAllCategories() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;
}

export function getAllProducts() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`;
}

export function getAllProductsByCategory(category) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`;
}

export function getProduct(id) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`;
}

export function signup() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`;
}

export function sigin() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`;
}

export function getCartByUser(userId) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${userId}`;
}

export function addProductToUserCart() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts`;
} 

export function updateProductInCart() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/updateProduct`;
} 
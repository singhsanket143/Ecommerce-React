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
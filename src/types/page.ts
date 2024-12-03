export interface ProductData {
    id: number;
    name: string;
    price: number;
    images: string[];
}



// ============= AUTH ===============
interface SignIn {
    phone_number: string,
    password: string
}
interface SignUp extends SignIn {
    first_name: string,
    last_name: string,
    email: string
}
export interface AuthCheck {
    sign_in: (data: SignIn) => Promise<any>,
    sign_up: (data: SignUp) => Promise<any>
}
// export interface LikesRequest {
//     favourites: (data: LikesType) => Promise<any>
// }

// // ============= LIKES ==============
// export interface LikesType extends ProductData {
//     product_id?: number,
//     user_id?: number
// }
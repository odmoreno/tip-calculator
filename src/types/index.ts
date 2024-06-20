export type MenuItem = {
	id: number
	name: string
	price: number
}

export type OrderItem = MenuItem & {
	quantity: number
}

//export interface CartItem extends Guitar {
//export type CartItem = Guitar &{
//export type cartItem = Pick <Guitar, 'id'| 'name' | 'price' > & {
//quantity: number
//}

//export type GuitarID = Guitar['id']

//export type cartItem = Omit <Guitar, 'id'| 'name' | 'price' > & {
//    quantity: number
//}

import OrderItem from "./order-item";

export class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[] = [];
    private _total: number;
    constructor(id: string, custumerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = custumerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    validate(): boolean {
        if (this._id.length === 0) throw new Error("Id is required!");

        if (this._customerId.length === 0)
            throw new Error("CustomerId is required!");

        if (this._items.length === 0)
            throw new Error("Item qtd must be greater than 0!");

        const checkQuantity = this._items.some((item) => item.quantity <= 0);
        if (checkQuantity) throw new Error("Quantity must be greater than 0");

        return true;
    }

    total(): number {
        return this._items.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }
}

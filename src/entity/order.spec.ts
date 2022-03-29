import { Order } from "./order";
import OrderItem from "./order-item";

describe("Order Unit Test", () => {
    it("should throw error when id is empty", () => {
        expect(() => new Order("", "123", [])).toThrowError("Id is required!");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => new Order("123", "", [])).toThrowError(
            "CustomerId is required!"
        );
    });

    it("should throw error when Items is Empty", () => {
        expect(() => new Order("123", "123", [],)).toThrowError(
            "Item qtd must be greater than 0"
        );
    });

    it("should calculator total orders", () => {
        const items = new OrderItem("1", "item 1", 10, "p1", 2);
        const items2 = new OrderItem("2", "item 2", 20, "p2", 2);
        const order = new Order("123", "234", [items, items2]);
        expect(order.total()).toBe(60);
    });

    it("should throw error if the item quantity is less or equal zero", () => {
        expect(() => {
            const items2 = new OrderItem("2", "item 2", 20, "p2", 0);
            const order = new Order("123", "234", [items2]);
        }).toThrowError("Quantity must be greater than 0");
    });
});

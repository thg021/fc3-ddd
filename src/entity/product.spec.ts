import Product from "./product";

describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "123", 100);
        }).toThrowError("Id is required!");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 100);
        }).toThrowError("Name is required!");
    });

    it("should throw error when price is less than 0", () => {
        expect(() => {
            const product = new Product("123", "123", -1);
        }).toThrowError("Price must be greater than zero");
    });

    it("should change name", () => {
        const product = new Product("123", "Product 1", 100);
        product.changeName("Product 1");
        expect(product.name).toBe("Product 1");
    });

    it("should change price", () => {
        const product = new Product("123", "Product 1", 100);
        product.changePrice(120);
        expect(product.price).toBe(120);
    });

    it("should throw error change price for zero", () => {
        const product = new Product("123", "Product 1", 100);

        expect(() => {
            product.changePrice(-1);
        }).toThrowError("Price must be greater than zero");
    });
});

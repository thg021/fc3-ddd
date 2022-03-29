import Address from "./andress";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required!");
    });

    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "Test");
        }).toThrowError("Id is required!");
    });

    it("should change name", () => {
        //arrange
        const customer = new Customer("123", "test");
        //act
        const name = "test_valid";
        customer.changeName(name);
        //assert
        expect(customer.name).toBe(name);
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "test");

        const address = new Address("1", 123, "1", "1");
        customer.address = address;
        customer.activate();
        expect(customer.isActive()).toBeTruthy();
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "test");
        customer.deactivate();
        expect(customer.isActive()).toBeFalsy();
    });

    it("should throw error when activate customer without address", () => {
        const customer = new Customer("123", "test");
        expect(() => customer.activate()).toThrowError(
            "Address is required to activate a customer"
        );
    });
});

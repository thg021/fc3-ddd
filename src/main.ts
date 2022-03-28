import Address from "./entity/andress";
import Customer from "./entity/customer";
import { Order } from "./entity/order";
import OrderItem from "./entity/order-item";

let customer = new Customer("123", "Thiago");
const address = new Address(
  "estrada dos fernandes",
  2000,
  "08664005",
  "Suzano"
);

customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);
const items = [item1, item2];
const order = new Order("1", customer._id, items);
const total = order.total();

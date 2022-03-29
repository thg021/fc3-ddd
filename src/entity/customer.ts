//Sempre vai auto validar

import Address from "./andress";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required!");
        }

        if (this._id.length === 0) {
            throw new Error("Id is required!");
        }
    }

    //Um regra especifica que o sistema tem para alterar o nome.
    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required to activate a customer");
        }

        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    isActive() {
        return this._active;
    }

    set address(address: Address) {
        this._address = address;
    }

    get name() {
        return this._name;
    }
}

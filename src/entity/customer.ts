//Sempre vai auto validar

import Address from "./andress";

export default class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  //alteração da propriedade sem expressividade, estar aqui por estar
  public set name(v: string) {
    this._name = v;
  }

  //Um regra especifica que o sistema tem para alterar o nome.
  changeName(name: string) {
    this._name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set andress(address: Address) {
    this._address = address;
  }
}

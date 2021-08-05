"use strict";

const PREMIUM_COEFICIENT = 1.25;

class Worker {
  constructor(name, lastName, workDays, paymentPerDay, deserveBonus) {
    this.name = name;
    this.lastName = lastName;
    this.workDays = workDays;
    this.paymentPerDay = paymentPerDay;
    this.deserveBonus = deserveBonus;
  }

  set name(text) {
    if (typeof text !== "string") {
      throw new TypeError("Invalid type");
    }
    if (text.trim() === "") {
      throw new Error("Name must not to be empty");
    }

    this._name = text;
  }

  get name() {
    return this._name;
  }

  set lastName(text) {
    if (typeof text !== "string") {
      throw new TypeError("Invalid type");
    }
    if (text.trim() === "") {
      throw new Error("Last Name must not to be empty");
    }

    this._lastname = text;
  }

  get lastName() {
    return this._lastname;
  }

  set workDays(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (numb <= 0) {
      throw new Eror("Number of working days cannot be less then 1");
    }

    this._workDays = numb;
  }

  get workDays() {
    return this._workDays;
  }

  set paymentPerDay(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (numb <= 0) {
      throw new RangeError("Payment have to be more then 0");
    }

    return (this._paymentPerDay = numb);
  }


  set deserveBonus(bool) {
   if (typeof bool !== 'boolean') {
     throw new TypeError('Invalid type')
   }

   this._deserveBonus = bool;
  }

  get deserveBonus() {
    return this._deserveBonus;
  }


  get paymentPerDay() {
    return this._paymentPerDay;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  getSalary() {

    if (this._deserveBonus) {
      return this.workDays * this.paymentPerDay * PREMIUM_COEFICIENT;
    }

    return this.workDays * this.paymentPerDay;
  }
}


const ivan = new Worker('Ivan', 'Ivanov', 12, 1000, false);


class GrandParent {
  constructor() {}

  async kaboom() {
    throw(new Error("kaboom"))
  }
}

class Parent extends GrandParent {
  constructor() { super() }

  async method(badsad) {

    try {
      if (badsad) {
        //the promise needs to be returned within this try/catch for the catch to fire the error.
        //would love feedback if this wasn't correct.
        await this.kaboom()
      }
    } catch(err) {
      console.error("caught it -", err.message)
    }

  }
}

class Child extends Parent {
  constructor() { super() }
}

const c = new Child()
c.method(true)

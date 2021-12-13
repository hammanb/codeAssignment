

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
        //if the idea is to keep the grandparent "kaboom" async, then:
        //the try will only catch the "throw" if we make "method" async, so the try waits for kaboom to execute.
        //The code executes as I expect it is supposed to, but please let me know if there was a more "correct" answer, as
        //I was not able to find much docs on async / await and inheritence
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



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
        //if the idea is to keep the grandparent async, then parent also needs to be async, and the async grandparent needs to be called with await. 
        //child is not expecting anything returned, and neither is the initial call at line 35, so no promise needs to be created. 
        //I am not entirely comfortable with my understanding of async / await with inheritance, and having trouble finding a docs that confirm my understanding
        //The code executes as I expect it to. Please let me know if there was a more "correct" answer. 
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

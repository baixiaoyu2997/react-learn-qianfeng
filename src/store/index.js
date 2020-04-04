import { observable, computed, action } from "mobx";

class Counter {
  name = "Counter App";
  @observable count = 100;
  @computed get doubleCount() {
    return this.count * 2;
  }
  @action increment = () => {
    this.count += 1;
  };
  @action decrement = () => {
    this.count -= 1;
  };
}

const couterStore = new Counter();

export default couterStore;

import { action, computed, observable } from "mobx";

interface ICounterStore {
  count: number;
  doubleCount: number;
  increment: () => void;
  decrement: () => void;
}

class CounterStore<T = ICounterStore> {
  @observable
  count = 0;

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}

export default new CounterStore();

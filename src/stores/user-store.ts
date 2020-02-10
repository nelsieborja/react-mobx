import { observable } from "mobx";

interface IUserStore {
  name: string;
  job: string;
}

class UserStore<T = IUserStore> {
  @observable
  name = "";

  @observable
  job = "";
}

export default new UserStore();

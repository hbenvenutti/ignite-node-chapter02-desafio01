import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;
  admin: boolean;

  constructor(){
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }

}

export { User };

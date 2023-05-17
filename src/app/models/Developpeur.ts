import { Skill } from "./Skill";

export class Developpeur {
    constructor(
      public lastname: string,
      public firstName: string,
      public age: number,
      public gender: string,
      public bio: string,
      public skills: Skill[],
    ) {}
  }
  
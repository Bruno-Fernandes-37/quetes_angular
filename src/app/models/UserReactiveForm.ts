export class UserReactiveForm {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public streetNumber: string,
    public streetName: string,
    public postcode: string,
    public city: string,
  ) {}
}

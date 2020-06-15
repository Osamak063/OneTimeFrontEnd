export class User{
    Name: string;
    CompanyName : string;
    ContactNumber :string;
    EmailAddress : string;
    ShipmentsPerWeek : number;
    CnicNumber : string;
    Address : string;
    AccountNumber : string;
    WebsiteUrl :string; 
}


export class RegisterUser extends User{
    ProductTypeId : number;
} 

export class UserRequest extends User{
    Id : number;
    ProductType : string;
}
export class Order {
    ConsigneeName : string;
    ConsigneeContactNumber : string;
    CityId : number;
    Address : string;
    OrderId : string;
    NumberOfProducts : number;
    ProductTypeId : number;
    BookingDate : Date;
    SpecialInstructions : string;
    Weight : number;
    CashOnDelivery : number;
    ClientPersonalId : number; 
}

export class GetOrder extends Order {
    Id : number;
    TrackingId : number;
    OrderStatusId : number;
}

export class DisplayOrder {
    ConsigneeName : string;
    Address : string;
    CashOnDelivery : string;
    OrderStatusDesc : string;
}
export class SchoolParent {
    userAppId!: number;
    userName!: String;
    submitDetails!: String;
    status!: String;
    student!: Student[];
}
export class Student {
    registerId!: number;
    parentName!: String;
    studentName!: String;
    address!: String;
    state!: String;
    country!: String;
    city!: String;
    zipCode!: number;
    primaryContactPerson!: String;
    primaryContactPersonMobileNo!: number;
    seconderyContactPerson!: String;
    secondoryContactPersonMobileNo!: number;
    createdBy!: String;
    circular!: Circular[];
}
export class Circular {
}
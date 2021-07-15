export class EmployeeDetail {
  employeeID: number;
  employeeName: string = "";
  address: string;
  roleID: number;
  salary: number;
  joinDate: string;
  projectID: number;

  constructor() {
    this.employeeID = 0;
    this.address = "";
    this.roleID = 0;
    this.salary = 0;
    this.joinDate = "";
    this.projectID = 0;
  }

}

export type Student = {
    
  fname: string;
  "m-name": string;
  lname: string;
  email: string;
  contact: string;
  address: string;
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
    
};

export type StudentsResponse = {
  students: Student[];
  message:string
};
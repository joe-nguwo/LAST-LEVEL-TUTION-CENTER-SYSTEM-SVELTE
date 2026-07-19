export const ROUTES = {
 login: "/api/v1/admin/auth/login",
 register:  "/api/v1/admin/auth/register",
 // Dashboard Stats 
 dashBoardStats:"/api/v1/admin/auth/dashStats",
 // students
 addStudent:"/api/v1/admin/auth/student"

};

export type APIRoute = keyof typeof ROUTES;

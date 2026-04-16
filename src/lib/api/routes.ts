export const ROUTES = {
 login: "/api/v1/admin/auth/login",
 register:  "/api/v1/admin/auth/register",
};

export type APIRoute = keyof typeof ROUTES;

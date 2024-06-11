export const httpConstants = {
    API: "http://localhost:5168/",
    employee: {
        GET_ALL: "GetEmployees/",
        GET_BY_ID: "GetEmployee/",
        CREATE: "CreateEmployee",
        UPDATE: "UpdateEmployee/",
        DELETE: "DeleteEmployee/"
    },
    role: {
        GET_ALL: "GetAllRoles",
        GET_BY_ID: "GetRole/",
        GET_ALL_OPTIONS: "GetRolesAsOptions/",
        CREATE: "CreateRole",
        UPDATE: "UpdateRole/",
        DELETE: "DeleteById/",
        GET_ASSIGNED_EMPLOYEES: "GetAssignedEmployees/"
    },
    departments: {
        GET: "GetDepartments/"
    },
    location: {
        GET: "GetLocations/"
    },
    project: {
        GET: "GetProjects/"
    },
    jobTitle: {
        GET: "GetJobtitles/"
    }
}
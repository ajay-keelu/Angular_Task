import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee directory/employee/employee.component';
import { AddEmployeeComponent } from './pages/employee directory/add-employee/add-employee.component';
import { RoleComponent } from './pages/role directory/role/role.component';
import { AddRoleComponent } from './pages/role directory/add-role/add-role.component';
import { ViewEmployeeComponent } from './pages/employee directory/view-employee/view-employee.component';
import { ShowAssignedEmployeesComponent } from './pages/role directory/show-assigned-employees/show-assigned-employees.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'employee',
        children: [
            {
                path: '',
                component: EmployeeComponent,
            },
            {
                path: 'add-employee',
                component: AddEmployeeComponent
            },
            {
                path: ':id',
                children: [
                    {
                        path: 'view',
                        component: ViewEmployeeComponent
                    },
                    {
                        path: 'edit',
                        component: AddEmployeeComponent
                    }
                ]
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    },
    {
        path: 'role',
        children: [
            {
                path: '',
                component: RoleComponent,
            },
            {
                path: 'add-role',
                component: AddRoleComponent
            },
            {
                path: ':id',
                children: [
                    {
                        path: 'employee',
                        component: ShowAssignedEmployeesComponent
                    },
                    {
                        path: 'edit',
                        component: AddRoleComponent
                    }
                ]
            }, {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
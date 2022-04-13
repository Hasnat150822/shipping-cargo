import { Routes } from "@angular/router";
import { DashboardComponent } from "../layouts/dashboard/dashboard.component";
import { MainComponent } from "../layouts/main/main.component";

const routes:Routes = [{
    path:'', component:MainComponent, children:[
        {
            path:'qout', loadChildren:()=>import('../pages/pages.module').then(m=>m.PagesModule)
        },
        {
            path:'', component:DashboardComponent, data:{
                title:'Dashboard',
                iconFileName:'home'
            }
        }
    ]
}]

export default routes;
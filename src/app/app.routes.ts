import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'Products',
        loadComponent:()=> import('./products/products.component').then(m=>m.ProductsComponent)
    },
    {
        path:'',
        loadComponent:()=> import('./products/pages/basics-page/basics-page.component').then(m=>m.BasicsPageComponent)
    },
    {
        path:'Uncommon',
        loadComponent:()=> import('./products/pages/uncommon-page/uncommon-page.component').then(m=>m.UncommonPageComponent)
    },
    {
        path:'Numbers',
        loadComponent:()=> import('./products/pages/numbers-page/numbers-page.component').then(m=>m.NumbersPageComponent)
    },
    {
        path:'custom',
        loadComponent:()=> import('./products/pages/order/order.component').then(m=>m.OrderComponent)
    },
    {
        path:'**',
        redirectTo:''
    }
];

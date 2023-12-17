import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    // {
    //     path: 'mf-app-component',
    //     loadChildren: () => import('mf-1st-app/routes').then(m => m.routes)
    // },
    // {
    //     path: 'mf-app-component',
    //     loadChildren: () => import('mf-1st-app/app-component').then(m => m.AppComponent)
    // },
    // {
    //     path: 'mf-first-component',
    //     loadChildren: () => import('mf-1st-app/first-module').then(m => m.FirstModuleModule)
    // },
    {
        path: 'mf-first-module',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'mf-1st-app',
            exposedModule: './first-module'
        })
        .then(m => m.FirstModuleModule)
    }
];

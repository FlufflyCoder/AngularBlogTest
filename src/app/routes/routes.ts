import { LayoutComponent } from '../layout/layout.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthComponent } from './user/auth/auth.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule' }
        ]
    },

    { path: 'login', component: AuthComponent },
    { path: 'register', component: RegisterComponent },

    // Not found
    { path: '**', redirectTo: 'home' }

];

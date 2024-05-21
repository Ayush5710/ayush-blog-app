import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'category/:categoryName/:id', component: SingleCategoryComponent},
    {path: 'post/:postId', component: SinglePostComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'termsandconditions', component: TermsConditionsComponent}
];

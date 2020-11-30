import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsTableComponent } from './CascadingDropdownList/details-table/details-table.component';
import { DropdownListComponent } from './CascadingDropdownList/dropdown-list/dropdown-list.component';
import { AboutUsComponent } from './routerEvent/about-us/about-us.component';
import { ContactUsComponent } from './routerEvent/contact-us/contact-us.component';
import { HomeComponent } from './routerEvent/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'about', component: AboutUsComponent}

];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes,{enableTracing:true})
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

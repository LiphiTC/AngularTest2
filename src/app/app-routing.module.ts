import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterUserComponent } from './register/register.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  
  { path: '**', component: HomeComponent },

  //{ path: '404', component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

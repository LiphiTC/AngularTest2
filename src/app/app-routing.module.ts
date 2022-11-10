import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterUserComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: PostsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterUserComponent },
  //{ path: '404', component : NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

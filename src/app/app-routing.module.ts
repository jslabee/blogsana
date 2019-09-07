import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {BlogdetailsComponent} from './components/blogdetails/blogdetails.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {CreateblogComponent} from './components/createblog/createblog.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {LoginComponent} from './components/login/login.component';
import {EditblogComponent} from './components/editblog/editblog.component';
import {DeleteblogComponent} from './components/deleteblog/deleteblog.component';
import {OmeniComponent} from './components/omeni/omeni.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import{AngularFireAuthModule, AngularFireAuth}from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {imageuploader} from './components/imageuploader/imageuploader.component'

import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path: 'imageupload', pathMatch: 'full', component: imageuploader },
  {path:'',component:IndexComponent},
  {path:'blogs/detail/:id',component:BlogdetailsComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'blogs/createblog',component:CreateblogComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'blogs/edit/:id',component:EditblogComponent, canActivate:[AuthGuard]},
  {path:'blogs/delete/:id',component:DeleteblogComponent, canActivate:[AuthGuard]},
  {path:'omeni',component:OmeniComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  
  imports: [  RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFireStorageModule],
    providers:[AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService}from '../app/services/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { DeleteblogComponent } from './components/deleteblog/deleteblog.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { IndexComponent } from './components/index/index.component';
import { OmeniComponent } from './components/omeni/omeni.component';
import { DropZoneDirective } from './drop-zone.directive';


import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FileSizePipe } from './file-size.pipe';
import { imageuploader} from './components/imageuploader/imageuploader.component';
@NgModule({
  declarations: [
    DropZoneDirective,
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    CreateblogComponent,
    DeleteblogComponent,
    BlogdetailsComponent,
    EditblogComponent,
    LoginComponent,
    NotfoundComponent,
    IndexComponent,
    OmeniComponent,
    imageuploader,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
     AngularEditorModule ,
    //  AngularFireModule.initializeApp(environment),
     AngularFirestoreModule,
     AngularFireAuthModule,
     AngularFireStorageModule,  
       FormsModule  ,

  ],
  providers: [AngularFirestore,AuthService],
  bootstrap: [AppComponent]
   
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {Blog} from '../../Models/Blog';
import{BlogService} from '../../services/blog.service';
import {Router} from '@angular/router';

import { imageuploader } from '../imageuploader/imageuploader.component';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  task: any;
  downloadURL: any;
  [x: string]: any;
   blog: Blog ={

    naslov: '',
    povzetek: '',
    povzetekSlika: '',
    vsebinaBloga: ''

}
  htmlContent = '';

  constructor(
    // private _flashMessagesService: FlashMessagesService,
    private imageuploader: imageuploader,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
      }
      displayCounter($event) {
        console.log($event + " lep pozdrav iz create component");
        
        this.blog.povzetekSlika = $event
    }
  onSubmit(value:Blog){
    this.blogService.newBlog(this.blog);
     this.router.navigate(['/']);
         this.flashMessage.show('Client updated', {
        cssClass: 'alert-success', timeout: 4000
      });
    //  this.blog.povzetekSlika= this.imageuploader.downloadURL.subscribe().toString();
  // console.log(this.blog.povzetekSlika)
  //   console.log();
  }
  
  config: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: 'string',
      defaultFontName: 'times-new-roman',
      defaultFontSize: '9',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'https://us-central1-blogsana-249409.cloudfunctions.net/uploadFile',
    sanitize: true,
    toolbarPosition: "top",
  };
  

}

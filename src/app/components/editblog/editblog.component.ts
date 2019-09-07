import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Blog } from '../../Models/Blog';


@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  id: string;
  blog: Blog ={
    naslov: '',
    povzetek: '',
    povzetekSlika: '',
    vsebinaBloga: ''

}

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
  
      // Get id from url
      this.id = this.route.snapshot.params['id'];
      // Get blog
      this.blogService.getBlog(this.id).subscribe(client => this.blog = client);
    
  }
  onSubmit({value, valid}: {value: Blog, valid: boolean}) {
    if(!valid) {
      // this.flashMessage.show('Please fill out the form correctly', {
      //   cssClass: 'alert-danger', timeout: 4000
      // });
    } else {
      // Add id to client
      value.id = this.id;
      // Update client
      this.blogService.updateBlog(value);
      // this.flashMessage.show('Client updated', {
      //   cssClass: 'alert-success', timeout: 4000
      // });
      this.router.navigate(['/client/'+this.id]);
    }
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

















import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service'
import{Router,ActivatedRoute,Params} from '@angular/router'

import{Blog} from '../../Models/Blog';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  id:string;
blog: Blog;
  constructor(
  private blogService: BlogService,
  private router: Router,
  private route: ActivatedRoute,
   //private flashMessage: Flash

  
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.blogService.getBlog(this.id).subscribe(blog=>{
      this.blog = blog;
      console.log(this.blog);
    })
  }

  onDeleteClick() { 
    if(confirm('Are you sure?')) {
      this.blogService.deleteBlog(this.blog);
      // this.flashMessage.show('Client removed', {
      //   cssClass: 'alert-success', timeout: 4000
      // });
      this.router.navigate(['/']);
    }
  }

}

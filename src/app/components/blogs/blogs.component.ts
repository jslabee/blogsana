import { Component, OnInit } from '@angular/core';
import{BlogService} from '../../services/blog.service';
import{Blog} from '../../Models/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[]; 

  constructor(private blogservice : BlogService) { }

  ngOnInit() {
    this.blogservice.GetBlogs().subscribe(blogs => {
      this.blogs = blogs;
    })
  }

}

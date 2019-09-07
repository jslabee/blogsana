import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {Blog} from '../Models/Blog'
import { templateJitUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BlogCollection: AngularFirestoreCollection<Blog>;
  BlogDoc: AngularFirestoreDocument<Blog>;
  Blogs: Observable<Blog[]>
  Blog: Observable <Blog>
  constructor(private afs: AngularFirestore) { 
    this.BlogCollection = this.afs.collection('blog')
  }
  GetBlogs(): Observable<Blog[]>{
    this.Blogs = this.BlogCollection.snapshotChanges()
    .pipe(
      map(changes =>{
        return changes.map(action =>{
          const data = action.payload.doc.data() as Blog;
          const id = action.payload.doc.id;
          data.id = id;
          console.log()
          return data;
      });
      
  
      } )
    )

    return this.Blogs
  }
  newBlog(blog: Blog){
    this.BlogCollection.add(blog)
  }
  getBlog(id:string): Observable<Blog>{
    this.BlogDoc = this.afs.doc<Blog>(`blog/${id}`)
    this.Blog = this.BlogDoc.snapshotChanges().pipe(map (action =>{
      if (action.payload.exists === false ){
        return null;
      }else{
const data = action.payload.data() as Blog;
data.id = action.payload.id;
return data;
       }
    }
     ))
     return this.Blog;
  }
  deleteBlog(blog: Blog) {
    this.BlogDoc = this.afs.doc(`blog/${blog.id}`);
    this.BlogDoc.delete();
  }
  updateBlog(blog: Blog) {
    this.BlogDoc = this.afs.doc(`blog/${blog.id}`);
    this.BlogDoc.update(blog);
  }
}

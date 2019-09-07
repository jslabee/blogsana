

import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'imageuploader',
  templateUrl: './imageuploader.component.html',
  styleUrls: ['./imageuploader.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class imageuploader {
  @Input('url') url: string;
  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  @Output() valueChange = new EventEmitter<string>();
  downloadURL: string;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()
    //file ref
    
  
    


    // The file's download URL
 this.task.snapshotChanges().pipe(
      finalize(() => {
        this.storage.ref(path).getDownloadURL().subscribe(url => {
         this.downloadURL = url;
          console.log(this.downloadURL);
          this.valueChanged() // <-- do what ever you want with the url..
        });
      })
    ).subscribe();
   //this.downloadURL= this.storage.ref(path).getMetadata().getDownloadURL(); 
  //this.snapshot.pipe(finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())).subscribe();
 


//     let userToken = firebase.auth().currentUser()
    
    // this.downloadURL = fileRef.getDownloadURL(); 
    
  }
  // https://firebasestorage.googleapis.com/v0/b/blogsana-249409.appspot.com/o/test%2F1566314291516_IMG_1298.jpg%3Falt%3Dmedia%26token%3D5c199fe7-9445-43a3-8410-c648f440ad2b
  // https://firebasestorage.googleapis.com/v0/b/blogsana-249409.appspot.com/o/test%2F1566312979012_IMG_1298.jpg?alt=media&token=5c199fe7-9445-43a3-8410-c648f440ad2b
  // https://firebasestorage.googleapis.com/v0/b/blogsana-249409.appspot.com/o/test/1566314291516_IMG_1298.jpg?alt=media&token=5c199fe7-9445-43a3-8410-c648f440ad2b
  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  valueChanged() { // You can give any function name
    console.log(this.downloadURL); 
    this.valueChange.emit(this.downloadURL);
  
}

}
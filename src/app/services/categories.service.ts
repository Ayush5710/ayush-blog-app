import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore) { }

  loadData(){
    //uptil snapshotChanges to get all data from categories collection
    //ahead we have to capute data
    //snapshotchanges returns alot of data and we do not need it all
    //with the help of pipe we create a new observable which consists of data and id i.e. what we need
    return this.afs.collection('categories').snapshotChanges().pipe(
      map((actions: any) => {
        return actions.map((a: any)=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data};
        })
      })
    )
  }

}

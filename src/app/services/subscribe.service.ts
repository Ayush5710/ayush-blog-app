import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from '../models/subscription';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private afs: AngularFirestore, private toast: ToastrService) { }

  addSubscriber(subData: Subscription){
    this.afs.collection("subscribers").add(subData).then(() => this.toast.success('subscription succesful!'))
  }

  checkSub(email: string){
    return this.afs.collection("subscribers", ref => ref.where('email', '==', email)).get()
  }
}

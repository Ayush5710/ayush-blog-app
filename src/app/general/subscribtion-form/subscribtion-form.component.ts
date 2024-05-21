import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from '../../models/subscription';
import { SubscribeService } from '../../services/subscribe.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-subscribtion-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './subscribtion-form.component.html',
  styleUrl: './subscribtion-form.component.css'
})
export class SubscribtionFormComponent {
  subscribeForm !: any;
  

  constructor(private fb: FormBuilder, private subscribeService: SubscribeService, private toast: ToastrService){
    this.subscribeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get fc(){
    return this.subscribeForm.controls;
  }

  onSubmit(subscribeFormValue: Subscription){
    const subData: Subscription = {
      name: subscribeFormValue.name,
      email: subscribeFormValue.email
    }

    this.subscribeService.checkSub(subData.email).subscribe(val => {
      if(!val.empty){
        this.toast.warning("You have already subscribed with this email address")
      }else{
        this.subscribeService.addSubscriber(subData);
        this.subscribeForm.reset();
      }
    });
  
  }
}

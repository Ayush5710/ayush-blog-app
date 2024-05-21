import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideToastr(),provideAnimations(), importProvidersFrom([
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule,
    AngularFireAuthModule,
     AngularFireStorageModule,
     ReactiveFormsModule,
     NgModel
    ])]
};

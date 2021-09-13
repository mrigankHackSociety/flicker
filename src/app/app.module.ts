import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  UserImageSearchComponent
} from './Components/user-image-search/user-image-search.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatChipsModule
} from '@angular/material/chips';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import {
  ErrorInterceptor
} from './interceptor/error.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UserImageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

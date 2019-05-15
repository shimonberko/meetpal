import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { OfferActivityComponent } from './offer-activity/offer-activity.component';
import { SearchActivityComponent } from './search-activity/search-activity.component';


// import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostsComponent,
    LoginComponent,
    ChooseComponent,
    OfferActivityComponent,
    SearchActivityComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'signup', component: ContactFormComponent},
      {path: 'choose', component: ChooseComponent},
      {path: 'searchAct', component: SearchActivityComponent},
      {path: 'offerAct', component: OfferActivityComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositoryCreateComponent } from './repository-create/repository-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FollowersComponent,
    RepositoriesComponent,
    RepositoryCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

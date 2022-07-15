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
import { RepositoriesFiltersComponent } from './repositories-filters/repositories-filters.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FollowersComponent,
    RepositoriesComponent,
    RepositoryCreateComponent,
    RepositoriesFiltersComponent,
    HeaderComponent,
    NotFoundComponent,
    UserInfoComponent
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

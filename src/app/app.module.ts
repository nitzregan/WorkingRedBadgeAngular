import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GetProfileComponent } from './components/profile/get-profile/get-profile.component';
import { GetProfileByTeamComponent } from './components/profile/get-profile-by-team/get-profile-by-team.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component';
import { TeamMessagingCreateComponent } from './components/team-messaging/team-messaging-create/team-messaging-create.component';
import { TeamMessagingDeleteComponent } from './components/team-messaging/team-messaging-delete/team-messaging-delete.component';
import { TeamMessagingDetailComponent } from './components/team-messaging/team-messaging-detail/team-messaging-detail.component';
import { TeamMessagingIndexComponent } from './components/team-messaging/team-messaging-index/team-messaging-index.component';
import { TeamMessagingUpdateComponent } from './components/team-messaging/team-messaging-update/team-messaging-update.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';
import { LoginComponent } from './components/login/login.component';
import { CommentsCreateComponent } from './components/comments/comments-create/comments-create.component';
import { CommentsDeleteComponent } from './components/comments/comments-delete/comments-delete.component';
import { CommentsDetailComponent } from './components/comments/comments-detail/comments-detail.component';
import { CommentsIndexComponent } from './components/comments/comments-index/comments-index.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventIndexComponent } from './components/event/event-index/event-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    GetProfileComponent,
    GetProfileByTeamComponent,
    ProfileEditComponent,
    ProfileIndexComponent,
    TeamMessagingCreateComponent,
    TeamMessagingDeleteComponent,
    TeamMessagingDetailComponent,
    TeamMessagingIndexComponent,
    TeamMessagingUpdateComponent,
    TeamCreateComponent,
    TeamDeleteComponent,
    TeamDetailComponent,
    TeamIndexComponent,
    TeamUpdateComponent,
    LoginComponent,
    CommentsCreateComponent,
    CommentsDeleteComponent,
    CommentsDetailComponent,
    CommentsIndexComponent,
    CalendarComponent,
    EventCreateComponent,
    EventDeleteComponent,
    EventDetailComponent,
    EventEditComponent,
    EventIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

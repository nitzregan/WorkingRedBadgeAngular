import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatNativeDateModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';

import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TeamService } from './services/team.service';
import { TeamMessagingService } from './services/team-messaging.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CalendarComponent } from './components/calendar/calendar.component';
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
import { TeamAddplayerComponent } from './components/team/team-addplayer/team-addplayer.component';
import { TeamRemoveplayerComponent } from './components/team/team-removeplayer/team-removeplayer.component';
import { TeamUseridComponent } from './components/team/team-userid/team-userid.component';
import { LoginComponent } from './components/login/login.component';
import { CommentsCreateComponent } from './components/comments/comments-create/comments-create.component';
import { CommentsDeleteComponent } from './components/comments/comments-delete/comments-delete.component';
import { CommentsDetailComponent } from './components/comments/comments-detail/comments-detail.component';
import { CommentsIndexComponent } from './components/comments/comments-index/comments-index.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { SplashComponent } from './components/splash/splash.component';


const routes = [
  { path: 'splash', component: SplashComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'calendar/:TeamID', component: CalendarComponent },
  { path: 'teammessages/:TeamID', component: TeamMessagingIndexComponent },
  { path: 'teammessages/create/:TeamID', component: TeamMessagingCreateComponent },
  { path: 'teammessages/detail/:MessageID', component: TeamMessagingDetailComponent },
  { path: 'teammessages/update/:MessageID', component: TeamMessagingUpdateComponent },
  { path: 'teammessages/delete/:MessageID', component: TeamMessagingDeleteComponent },
  { path: 'team', component: TeamIndexComponent },
  { path: 'team/create/:ProfileID', component: TeamCreateComponent },
  { path: 'team/detail/:TeamID', component: TeamDetailComponent },
  { path: 'team/update/:TeamID', component: TeamUpdateComponent },
  { path: 'team/delete/:TeamID', component: TeamDeleteComponent },

  { path: 'team/userid/:UserID', component: TeamUseridComponent },
  { path: 'team/addplayer/:ProfileID', component: TeamAddplayerComponent },
  { path: 'team/removeplayer/:ProfileID', component: TeamRemoveplayerComponent },

  { path: 'comments/:ProfileID', component: CommentsIndexComponent },
  { path: 'comments/create/:ProfileID', component: CommentsCreateComponent },
  { path: 'comments/delete/:CommentID', component: CommentsDeleteComponent },

  { path: 'event', component: EventIndexComponent },
  { path: 'event/create/:TeamID', component: EventCreateComponent },
  { path: 'event/detail/:EventID/:TeamID', component: EventDetailComponent },
  { path: 'event/edit', component: EventEditComponent },
  { path: 'event/delete/:EventID', component: EventCreateComponent },
  
  { path: 'profile/index/:TeamID', component: ProfileIndexComponent },
  { path: 'profile', component: ProfileEditComponent },
  { path: 'profile/get/:TeamID', component: GetProfileByTeamComponent },
  { path: 'profile/get-profile/:UserID', component: GetProfileComponent },
  { path: 'profile/roster/:TeamID', component: GetProfileByTeamComponent },
  { path: '**', component: SplashComponent },
  // { path: '**', component: RegistrationComponent }, 
];

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
    EventIndexComponent,
    TeamAddplayerComponent,
    TeamRemoveplayerComponent,
    TeamUseridComponent,
    FooterComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    FullCalendarModule,
    MatExpansionModule
  ],
  providers: [AuthService, EventService, TeamMessagingService, ProfileService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }

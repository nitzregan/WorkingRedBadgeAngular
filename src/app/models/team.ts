import { Profile } from '../models/profile';
import { Event } from '../models/event';

export interface Team {
    UserID?: number;
    TeamID?: number;
    ProfileID?: number;
    TeamName: string;
    Roster: Array<Profile>;
    TeamEvents: Array<Event>;
}

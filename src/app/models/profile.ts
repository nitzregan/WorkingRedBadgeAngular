import { Team } from '../models/team';
import { Comments } from '../models/comments';

export interface Profile {
    UserID?: number;
    ProfileID?: number;
    FirstName: string;
    LastName: string;
    Birthday?: Date;
    Email: string;
    PhoneNumber: string;
    OtherInfo: string;
    AthleteUsername: string;
    ParentUsername: string;
    MyTeams: Array<Team>;
    Comments: Array<Comments>;
    CreatedUtc?: Date;
}
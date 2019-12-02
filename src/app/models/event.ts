export interface Event {
    UserID?: number;
    EventID?: number;
    TeamID?: number;
    Title?: string;
    Content?: string;
    AllDayEvent?: boolean;
    Start?: Date;
    End?: Date;
}
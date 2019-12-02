export interface TeamMessaging {
    UserID?: number;
    MessageID?: number;
    TeamID?: number;
    Title: string;
    Content: string;
    FileName?: string;
    FileContent?: Array<string>;
    CreatedUtc?: Date;
    Modifiedutc?: Date;
    Roster?: Array<string>;
    File: File;
}
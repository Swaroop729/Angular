import { IIncidents} from '../src/Interfaces/Incidents'


export class Incident implements IIncidents{
    Id: number;
    IncidentId: string;
    Percentage: number;
    Comment: string;
    ApplicationName: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    ResolutionDate: Date;

}
import {Patient} from '../models/patient';

const patients: Patient[]=[
    {id:1, name: 'John Doe', dob: '1990-01-01', gender: 'Male'}, 
    {id:2, name: 'Jane Doe', dob: '1990-02-02', gender: 'Female'},
    
]

export const resolvers = {
    Query: {
        patients: (): Patient[]=> patients, 
        patient: (_:any, {id}:{id:number}): Patient | undefined => patients.find((p)=>p.id===id),},
    }
}

/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAppointmentInput {
    exampleField?: Nullable<number>;
}

export class UpdateAppointmentInput {
    id: number;
}

export class CreateDoctorInput {
    name: string;
    crm: string;
    specialtiesIds: number[];
}

export class Data {
    name?: Nullable<string>;
    crm?: Nullable<string>;
    specialties?: Nullable<Nullable<number>[]>;
    startHour?: Nullable<Date>;
    endHour?: Nullable<Date>;
    doctor?: Nullable<number[]>;
    doctors?: Nullable<Nullable<string>[]>;
}

export class Where {
    id?: Nullable<number>;
}

export class UpdateDoctorInput {
    doctorId?: Nullable<number>;
    specialtiesIds?: Nullable<Nullable<number>[]>;
    data?: Nullable<Data>;
    opType?: Nullable<string>;
}

export class CreatePatientInput {
    exampleField?: Nullable<number>;
}

export class UpdatePatientInput {
    id: number;
}

export class CreateScheduleInput {
    doctorId?: Nullable<number>;
    data?: Nullable<Data>;
}

export class UpdateScheduleInput {
    id: number;
}

export class CreateSpecialtyInput {
    name: string;
    doctors?: Nullable<string[]>;
}

export class UpdateSpecialtyInput {
    where?: Nullable<Where>;
    data?: Nullable<Data>;
}

export class MyType {
    created?: Nullable<Date>;
}

export class Appointment {
    doctorId?: Nullable<number>;
}

export abstract class IQuery {
    abstract appointments(): Nullable<Appointment>[] | Promise<Nullable<Appointment>[]>;

    abstract appointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract doctors(): Nullable<Doctor>[] | Promise<Nullable<Doctor>[]>;

    abstract doctor(id: number): Nullable<Doctor> | Promise<Nullable<Doctor>>;

    abstract patients(): Nullable<Patient>[] | Promise<Nullable<Patient>[]>;

    abstract patient(id: number): Nullable<Patient> | Promise<Nullable<Patient>>;

    abstract schedules(): Nullable<Schedule>[] | Promise<Nullable<Schedule>[]>;

    abstract schedule(id: number): Nullable<Schedule> | Promise<Nullable<Schedule>>;

    abstract specialties(): Nullable<Specialty>[] | Promise<Nullable<Specialty>[]>;

    abstract specialty(id: number): Nullable<Specialty> | Promise<Nullable<Specialty>>;
}

export abstract class IMutation {
    abstract createAppointment(createAppointmentInput: CreateAppointmentInput): Appointment | Promise<Appointment>;

    abstract updateAppointment(updateAppointmentInput: UpdateAppointmentInput): Appointment | Promise<Appointment>;

    abstract removeAppointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract createDoctor(createDoctorInput: CreateDoctorInput): Doctor | Promise<Doctor>;

    abstract updateDoctor(updateDoctorInput: UpdateDoctorInput): Doctor | Promise<Doctor>;

    abstract removeDoctor(id: number): Nullable<Doctor> | Promise<Nullable<Doctor>>;

    abstract createPatient(createPatientInput: CreatePatientInput): Patient | Promise<Patient>;

    abstract updatePatient(updatePatientInput: UpdatePatientInput): Patient | Promise<Patient>;

    abstract removePatient(id: number): Nullable<Patient> | Promise<Nullable<Patient>>;

    abstract createSchedule(createScheduleInput: CreateScheduleInput): Schedule | Promise<Schedule>;

    abstract updateSchedule(updateScheduleInput: UpdateScheduleInput): Schedule | Promise<Schedule>;

    abstract removeSchedule(id: number): Nullable<Schedule> | Promise<Nullable<Schedule>>;

    abstract createSpecialty(createSpecialtyInput: CreateSpecialtyInput): Specialty | Promise<Specialty>;

    abstract updateSpecialty(updateSpecialtyInput: UpdateSpecialtyInput): Specialty | Promise<Specialty>;

    abstract removeSpecialty(id: number): Nullable<Specialty> | Promise<Nullable<Specialty>>;
}

export class Doctor {
    id: number;
    name: string;
    crm: string;
    specialties?: Nullable<Specialty[]>;
}

export class Specialty {
    id: number;
    name: string;
    doctors?: Nullable<Doctor[]>;
}

export class Patient {
    exampleField?: Nullable<number>;
}

export class Schedule {
    startHour?: Nullable<Date>;
    endHour?: Nullable<Date>;
    doctorId?: Nullable<number>;
}

type Nullable<T> = T | null;

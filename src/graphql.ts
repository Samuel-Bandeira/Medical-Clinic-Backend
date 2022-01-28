
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateSpecialtyInput {
    exampleField?: Nullable<number>;
}

export class UpdateSpecialtyInput {
    id: number;
}

export class Specialty {
    id: number;
    name: string;
    doctors?: Nullable<Doctor[]>;
}

export class Doctor {
    id: number;
    name: string;
    crm: string;
    specialties?: Nullable<Specialty[]>;
}

export abstract class IQuery {
    abstract specialties(): Nullable<Specialty>[] | Promise<Nullable<Specialty>[]>;

    abstract specialty(id: number): Nullable<Specialty> | Promise<Nullable<Specialty>>;
}

export abstract class IMutation {
    abstract createSpecialty(createSpecialtyInput: CreateSpecialtyInput): Specialty | Promise<Specialty>;

    abstract updateSpecialty(updateSpecialtyInput: UpdateSpecialtyInput): Specialty | Promise<Specialty>;

    abstract removeSpecialty(id: number): Nullable<Specialty> | Promise<Nullable<Specialty>>;
}

type Nullable<T> = T | null;

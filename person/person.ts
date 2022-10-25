import { Column } from "typeorm";

export class Person {
    @Column()
    name: string;

    @Column()
    subname: string;
}
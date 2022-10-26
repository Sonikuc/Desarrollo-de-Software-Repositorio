import { Column } from "typeorm";

export class Person {
    @Column()
    name: string;

    @Column()
    subname: string;

    constructor(name:string,subname:string){

        this.name = name;
        this.subname = subname;
    }

    getName():string{

        return this.name;
    }

    setName(name:string):void{

        this.name = name;
    }

    getSubname():string{

        return this.subname;
    }

    setSubname(subname:string):void{

        this.subname = subname
    }
}
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuscriptionService } from '../services/suscription.service';

@Controller('suscription')
export class SuscriptionController {
    constructor(
        private suscriptionservice: SuscriptionService
    ){}


    @Post('/create/student/:id_s/course/:id_c')
    createOneSuscription(@Param('id_s') id_s: number, @Param('id_c') id_c: number){
        return this.suscriptionservice.createSuscription(id_s, id_c);
    }

    @Delete('/delete/student/:id_s/course/:id_c')
    deleteSuscription (@Param('id_s') id_s: number, @Param('id_c') id_c: number){
        return this.suscriptionservice.deleteSuscription(id_c,id_s);
    }


}

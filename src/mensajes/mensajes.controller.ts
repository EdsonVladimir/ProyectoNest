import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { get } from 'http';

@Controller('mensajes')
export class MensajesController {

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto){
        return 'Mensaje creado';
    }

    @Get()
    getAll() {
        return 'lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto) {
        return 'mensaje actualizado';
    }

    @Delete(':id')
    delete() {
        return 'mensaje eliminado';
    }
}

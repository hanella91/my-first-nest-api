import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';


@Controller('cats')
export class CatsController {
    //Dependency Injection
    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    //Route parameters
    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id)
        return `This action retruns a #${id} cat`;
    }

    @Get('docs')
    @Redirect('http://nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'http://docs.nestjs.com/v5/' };
        }
    }
}


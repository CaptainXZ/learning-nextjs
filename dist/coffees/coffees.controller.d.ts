import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(): import("./entities/coffee.entity").Coffee[];
    findOne(id: string): import("./entities/coffee.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): any;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): void;
    remove(id: string): void;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './Dtos/createUser.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>){}
  
  async findAllUsers():Promise<User[]>{
    return await this.userRepo.find()
  }
  
  async findOne(id: number) :Promise<User | null>{
    return await this.userRepo.findOne({where:{id: id}})
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user)
  }

  async updateUser(id:number,updateUserDto: UpdateUserDto) {
return this.userRepo.update(id,updateUserDto)
  }

  async deleteUser(id:number): Promise<void>{
    await this.userRepo.delete(id)
  }
}

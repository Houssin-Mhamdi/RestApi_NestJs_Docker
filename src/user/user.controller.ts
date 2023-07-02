import { Body, Controller, Get, Param, Post,Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './Dtos/createUser.dto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,private readonly commentService:CommentService){}
    
    @Get()
    findAll() {
      return this.userService.findAllUsers();
    }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id/comment')
  findUserComment(@Param('id') id:string){
    return this.commentService.findUserComment(id)
  }

  @Put(":id")
  updateUser(@Param('id') id:number ,@Body() updateUserDto: UpdateUserDto){
    return this.userService.updateUser(id,updateUserDto)
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { User } from 'src/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers: [UserService,CommentService]
})
export class UserModule {}

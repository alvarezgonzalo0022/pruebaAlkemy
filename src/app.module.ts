import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, DogsModule, PostsModule, UsersModule],
})
export class AppModule {}

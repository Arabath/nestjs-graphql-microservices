import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostResolver } from './post.resolver';
import { UsersResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [PostsService, PostResolver, UsersResolver],
})
export class PostsModule {}

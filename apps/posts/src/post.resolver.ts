import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { PostsService } from "./posts.service";
import { Post } from "./entities/post.entity";
import { CreatePostInput } from "./dto/create-post.input";
import { User } from "./entities/user.entity";
import { CurrentUser } from "./current-user.decorator";

@Resolver(() => Post) 
export class PostResolver {
    constructor(private readonly postsService: PostsService) {}

    @Mutation(() => Post)
    createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
        return this.postsService.create(createPostInput);
    }
}
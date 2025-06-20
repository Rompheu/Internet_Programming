import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  idCard: string;

  @Field()
  class: string;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attendance {
  @Field()
  session: string;

  @Field()
  status: 'P' | 'AP' | 'L' | 'A';

  @Field(() => Int)
  student_id: number;

  @Field()
  marker: string;
}

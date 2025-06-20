import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAttendanceInput {
  @Field()
  session: string;

  @Field()
  status: 'P' | 'AP' | 'L' | 'A';

  @Field(() => Int)
  student_id: number;

  @Field()
  marker: string;
}

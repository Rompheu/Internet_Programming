import { Resolver, Mutation, Args, Int, Query } from '@nestjs/graphql';
import { AttendanceService } from './attendance.service';
import { Attendance } from './attendance.entity';
import { CreateAttendanceInput } from './attendance.input';
import { StudentService } from '../student/student.service';

@Resolver(() => Attendance)
export class AttendanceResolver {
  constructor(
    private attendanceService: AttendanceService,
    private studentService: StudentService,
  ) {}

  @Mutation(() => Attendance)
  markAttendance(@Args('input') input: CreateAttendanceInput) {
    return this.attendanceService.mark(input);
  }

  @Mutation(() => Boolean)
  removeAttendance(
    @Args('student_id', { type: () => Int }) student_id: number,
    @Args('session') session: string,
  ) {
    return this.attendanceService.remove(student_id, session);
  }

  @Query(() => Int)
  countAttendanceByClass(@Args('className') className: string) {
    const students = this.studentService.findByClass(className);
    return this.attendanceService.countByClassName(className, students);
  }

  @Query(() => Int)
  countAttendanceByStudentId(
    @Args('student_id', { type: () => Int }) id: number,
  ) {
    return this.attendanceService.countByStudentId(id);
  }
}

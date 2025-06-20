import { Injectable } from '@nestjs/common';
import { Attendance } from './attendance.entity';

@Injectable()
export class AttendanceService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  private attendances: Attendance[] = [];

  mark(input: Attendance): Attendance {
    this.attendances.push(input);
    return input;
  }

  remove(student_id: number, session: string): boolean {
    const index = this.attendances.findIndex(
      (a) => a.student_id === student_id && a.session === session,
    );
    if (index === -1) return false;
    this.attendances.splice(index, 1);
    return true;
  }

  countByClassName(className: string, studentList: { id: number }[]) {
    const ids = studentList.map((s) => s.id);
    return this.attendances.filter((a) => ids.includes(a.student_id)).length;
  }

  countByStudentId(id: number) {
    return this.attendances.filter((a) => a.student_id === id).length;
  }
}

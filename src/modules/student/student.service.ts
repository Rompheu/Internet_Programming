import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  private students: Student[] = [];
  private idCounter = 1;

  create(input): Student {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const student: Student = { id: this.idCounter++, ...input };
    this.students.push(student);
    return student;
  }

  remove(id: number): boolean {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) return false;
    this.students.splice(index, 1);
    return true;
  }

  update(id: number, input): Student | null {
    const student = this.students.find((s) => s.id === id);
    if (!student) return null;
    Object.assign(student, input);
    return student;
  }

  findByClass(className: string): Student[] {
    return this.students.filter((s) => s.class === className);
  }

  findAll(): Student[] {
    return this.students;
  }

  findById(id: number): Student | undefined {
    return this.students.find((s) => s.id === id);
  }
}

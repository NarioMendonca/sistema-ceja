import { TeacherData } from "@/models";
import { Class } from "@/models/Class";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { ClassTeacher } from "prisma/seeds/repositories";

export function createClasses(count: number = 10) {
  return Array.from({ length: count })
    .map(() => ({
      id: randomUUID(),
      name: `Turma ${faker.string.alpha({ length: 3 }).toUpperCase()}${faker.number.int({ min: 10, max: 99 })}`
    }))
}

export function createTeacherClass(classes: Class[], teachers: any[], minTeachers = 1, maxTeachers = 2) {
  if (!classes.length) {
    throw new Error('no class exists')
  }

  if (!teachers.length) {
    throw new Error('no teachers exists')
  }

  const classTeacherData: ClassTeacher[] = []
  const existingPairs = new Set<string>()
  classes.forEach((classItem) => {
    const sortedTeachers = faker.helpers.arrayElements(teachers, { min: minTeachers, max: maxTeachers })

    sortedTeachers.forEach((teacher) => {
      const pairKey = `${teacher.id}-${classItem.id}`
      if (!existingPairs.has(pairKey)) {
        existingPairs.add(pairKey)
        classTeacherData.push({
          id: randomUUID(),
          teacher_id: teacher.id,
          class_id: classItem.id
        })
      }
    })
  })
  return classTeacherData
}
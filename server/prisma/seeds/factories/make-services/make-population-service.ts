import { UsersRepository } from "prisma/seeds/repositories"
import { ClassesRepository } from "prisma/seeds/repositories/classesRepository"
import { PopulationService } from "prisma/seeds/services/population-service"

export function makePopulationService() {
  const usersRepository = new UsersRepository()
  const classesRepository = new ClassesRepository()
  const populationService = new PopulationService(usersRepository, classesRepository)

  return populationService
}
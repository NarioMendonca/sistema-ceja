import { prisma } from "@/lib/prisma";
import { makePopulationService } from "./factories/make-services/make-population-service";

async function populateDB() {
  const populationService = makePopulationService()

  await prisma.$connect()

  try {
    await populationService.createUsers()
    await populationService.createClassesWithTeachers()
    console.log('Populate all tables with sucess!')
  } catch (err) {
    console.error('Populate tables error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

populateDB()
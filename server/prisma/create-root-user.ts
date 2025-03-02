import 'module-alias/register'
import { prisma } from "@/lib/prisma"

const createRootUser = async () => {
  await prisma.$connect()
  await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      name: 'rogerAdmin',
      password_hash: '$2a$06$I9l.g2bMeNSHQ8jby62HU.djA7DH1niIw/m2YNWzRAup310v7DpaW',
      role: 'ADMIN',
    }
  })
  await prisma.$disconnect()
}

createRootUser()
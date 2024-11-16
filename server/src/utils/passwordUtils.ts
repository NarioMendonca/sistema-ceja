import { hash } from 'bcryptjs'

export function generateRandomPassword(): string {
	const randomString = Math.random().toString(36).slice(-8)
	return randomString
}

export async function createPasswordHash(password: string): Promise<string> {
	const hashSalt = 6
	const passwordHash = await hash(password, hashSalt)

	return passwordHash
}

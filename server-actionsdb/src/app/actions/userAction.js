'use server'

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getUsers() {
    return await prisma.user.findMany({ orderBy: { id: "desc" } })
}
export async function addUser(name, email) {
    await prisma.user.create({
        data: {
            name, email
        }
    })
    revalidatePath('/')
}
export async function updateUser(id, name, email) {
    await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name, email
        }
    })
    revalidatePath('/')
}
export async function deleteUser(id) {
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })
    revalidatePath('/')
}
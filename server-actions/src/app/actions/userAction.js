'use server'

import { redirect } from "next/navigation"

export async function CreateUser(formData) {
    redirect(`/success?name=${encodeURIComponent(formData.get("name"))}&email=${encodeURIComponent(formData.get("email"))}`);

}
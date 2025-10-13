'use server'

import { redirect } from "next/navigation"

export async function CreateUser(data) {
    console.log(data)
    //todo: db operation, save data to the database, redirect to success page
    console.log(data.get('name'),data.get('email'))
    redirect('/success')
    // return {
    //     data: data,
    //     success: true,
    //     message: 'Data Saved successfully'
    // }
}
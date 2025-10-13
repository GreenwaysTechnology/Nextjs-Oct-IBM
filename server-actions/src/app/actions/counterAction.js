'use server'


let counter = 0
export async function increment() {
    // return counter++ //Promise.resolve(counter)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(counter++)
        },5000)
    })
}
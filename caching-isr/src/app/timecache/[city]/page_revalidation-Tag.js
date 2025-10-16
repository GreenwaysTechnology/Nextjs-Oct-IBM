//route segment options
export const fetchCache = 'force-cache'

export async function getTime() {
    // const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const url = 'http://localhost:8080/api/timezone/Asia/Kolkata'
    //cache is enabled by option, 
    const response = await fetch(url, {
        next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data
}
export default async function TimeCachePage() {
    const data = await getTime()
    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}
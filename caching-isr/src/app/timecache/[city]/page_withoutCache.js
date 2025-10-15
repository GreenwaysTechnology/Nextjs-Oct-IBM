
export async function getTime(){
    const url ='https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //no cache is enabled by default, 
    const response = await fetch(url)
    const data = await response.json()
    return data 
}
export default async function TimeCachePage(){
    const data = await getTime()
    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}
import Counter from "@/app/counter/components/Counter";

export default function CounterPage() {
    console.log('Counter Server Page')
    return <>
        <h1>Counter Page</h1>
        <Counter initalValue={10}/>
    </>
}
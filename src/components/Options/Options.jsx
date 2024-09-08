export default function Options({callback, hasFeedback, reset}) {
    return (
        <>
        <button onClick={()=>{callback('good')}}>good</button>
        <button onClick={()=>{callback('neutral')}}>neutral</button>
        <button onClick={()=>{callback('bad')}}>bad</button>
        {hasFeedback && (
                <button onClick={reset}>reset</button>
        )}
        </>
    )
}
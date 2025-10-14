
export default function GameLayout(props) {

    return <div id="GameLayout" className="m-20">
        {/* Game Page */}
        {props.children}
        {/* Teams and Player Page */}
        {props.team}
        {props.player}
    </div>
}
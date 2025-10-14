export default function PanelLayout(props) {

    const isAdmin = true 
    return <div id="PanelLayout" className="m-30">
        {/* Panel Page */}
        {props.children}
        {/* Conditional Rendering */}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}
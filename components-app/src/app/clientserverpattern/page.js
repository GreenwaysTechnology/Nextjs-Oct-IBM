import Client from "@/app/clientserverpattern/components/Client";
import Server from "@/app/clientserverpattern/components/Server"

export default function ClientServerPage() {
    return <div>
        {/* <Client/> */}
        <Client>
            {/* pass server component as prop */}
            <Server />
        </Client>
    </div>
}
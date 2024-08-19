import { Others, You } from "../elements";
import ParticipantToggle from "../elements/ParticipantsToggle";
import { useSelector } from "react-redux";


export default function ParticipantScreen() {
    const members = useSelector(state => state.participant.value)
    
    return <section className="w-full h-full bg-white flex flex-col gap-2 px-12 py-10 box-border">
        <ParticipantToggle participants={members}/>

        <div className="w-full h-full flex gap-5">
            <Others bg={members[0].video} name={members[0].name}/>
            <You bg={members[1].video}/>
        </div>
    </section>
}
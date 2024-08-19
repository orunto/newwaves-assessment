import { MeetingInfo, ParticipantCount, Record } from "../elements";
import styles from '../../styles/compounds.module.scss'
export default function Header() {
    return <nav className="flex flex-row py-6 px-14 box-border w-full justify-between"> 
        <MeetingInfo />

        <div className="flex items-center gap-2">
            <Record />
            <ParticipantCount count={5} />
        </div>
    </nav>
}
import { ReactComponent as ParticipantsIcon } from '../../assets/participants.svg'
import styles from '../../styles/elements.module.scss'

export default function ParticipantCount(props) {
    return <button className="flex items-center gap-2 rounded-xl border-2 w-max px-3 py-2 text-base font-semibold box-border max-h-12">
        <ParticipantsIcon/>
        {
            props.count
        }
    </button>
}
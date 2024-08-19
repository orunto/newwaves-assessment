import { ReactComponent as ParticipantsIcon } from '../../assets/participants.svg'


export default function ParticipantCount(props) {
    return <button className="flex items-center gap-2 rounded-xl border-2 w-max px-3 py-2 text-base font-semibold">
        <ParticipantsIcon/>
        {
            props.count
        }
    </button>
}
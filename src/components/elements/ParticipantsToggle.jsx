import { ReactComponent as ToggleIcon } from '../../assets/toggle-mic.svg'
import styles from '../../styles/elements.module.scss'
export default function ParticipantToggle (props) {
    return <div id={styles['participantstoggle']} className='flex items-center gap-2 mx-auto'>
        {
            props.participants.map((members, i) => (
                <button id={styles[members.id]} className='flex gap-2 items-center rounded-full' key={i}>
                    <img src={members.img} alt={members.name} />
                    <span>{members.name}</span>
                    <ToggleIcon/>
                </button>
            ))
        }
    </div>
}
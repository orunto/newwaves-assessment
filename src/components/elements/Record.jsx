import { ReactComponent as RecordIcon } from '../../assets/Record.svg'

export default function Record () {
    return <button className='flex items-center gap-2 rounded-xl border-2 w-max px-3 py-2 text-base font-semibold'>
        <RecordIcon/> Start Recording
    </button>
}
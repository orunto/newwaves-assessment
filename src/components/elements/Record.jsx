import { ReactComponent as RecordIcon } from '../../assets/Record.svg'

export default function Record () {
    return <button className='flex items-center gap-2 rounded-xl border-2 w-max px-3 py-2 text-base font-semibold box-border max-h-12'>
        <RecordIcon/> Start Recording
    </button>
}
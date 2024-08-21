import { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/Search.svg'
import { ReactComponent as DropdownIcon } from '../../assets/Down.svg'

import { useSelector, useDispatch } from 'react-redux'
import { dialog } from '../../lib/DialogState'
export default function ChatToggle() {
    const [keyword, setKeyword] = useState("")
    const dropdown = useSelector(state => state.dialog.value)
    const dispatch = useDispatch()
    const participants = [
        'Akanji joseph (Host)',
        'Samuel Odejinmi',
        'Femi Williams',
        'Konn3ct Ai'
    ]
    return <>

        <button onClick={() => dispatch(dialog())} className='flex items-center gap-2 p-2 rounded-lg border-white border text-white text-xs font-normal'>Everyone <DropdownIcon /></button>

        {
            dropdown && (
                <fieldset className='flex self-end absolute flex-col top-16 left-24 w-64 p-2 rounded'>
                    <div className='flex items-center pl-4'>
                        <div className='flex items-center gap-4'>
                            <SearchIcon />
                        </div>
                        <input onChange={(e) => setKeyword(e.target.value)} className='w-full -ml-7 border border-white pl-12 p-4 rounded-lg flex h-14 items-center text-sm' placeholder='Search for participants' type="text" name="" id="" />

                    </div>



                    {
                        participants.map((part, i) => (

                            <option value={part} key={i} className='flex items-center p-4 text-sm text-white'>{part}</option>
                        ))
                    }
                </fieldset>

            )
        }
    </>
}
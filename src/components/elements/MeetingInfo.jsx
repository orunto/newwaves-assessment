import logo from '../../assets/konn3ct_logo.png'
export default function MeetingInfo () {
    return <div id='meetinginfo' className='flex items-center gap-3'>
        <img src={logo} alt="konnect logo" className='h-12 pl-3 border-r'/>

        <div className='flex flex-col'>
            <header className=' text-lg font-medium'>Lagos State Tech Summit 2023</header>
            <span className='text-sm font-medium' style={ {color: '#acacac'} }>June 12th, 2023</span>
        </div>
    </div>
}
import Link from './Link'

function Topbar () {
    const topBarList = [
        {label:"00 Home", path:"/home"},
        {label:"01 Destination", path:"/destination"},
        {label:"02 Crew", path:"/crew"},
        {label:"03 Technology", path:"/technology"}
    ];

    const topBarLinks = topBarList.map((item)=>{
        return (
            <Link key={item.label} to={item.path}>
                {item.label}
            </Link>
        )
    })

    return (
        <div className="topBar">
            {topBarLinks}
        </div>
    )
}

export default Topbar;
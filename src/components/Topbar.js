import Link from './Link';
import NavigationContext from '../context/navigation';
import { useContext } from 'react';
import classNames from 'classnames';

function Topbar () {
    const { currentPath } = useContext(NavigationContext);
    const topBarList = [
        {label:"00 HOME", path:"/home"},
        {label:"01 DESTINATION", path:"/destination"},
        {label:"02 CREW", path:"/crew"},
        {label:"03 TECHNOLOGY", path:"/technology"}
    ];

    const classes = classNames(
        'topBar',
        currentPath === "/destination" && 'destinationShades',
        currentPath === "/crew" && 'crewShades',
        currentPath === "/technology" && 'technologyShades'
    )

    const topBarLinks = topBarList.map((item)=>{
        return (
            <Link key={item.label} to={item.path}>
                {item.label}
            </Link>
        )
    })

    return (
        <div className={classes}>
            {topBarLinks}
        </div>
    )
}

export default Topbar;
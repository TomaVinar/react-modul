import "./Flight.css"

function Flight ({item}) {
    const {mission_name, launch_year, links: {mission_patch_small}} = item

    return (
        <div className={'item'}>
            <div className={'mission_name'}>
                <div>{mission_name}</div>
                <div>{launch_year}</div>
            </div>
            <img src={mission_patch_small} alt=""/>
        </div>
    )
}

export default Flight
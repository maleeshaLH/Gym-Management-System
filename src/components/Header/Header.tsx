export function Header() {

    const nav_link=[
        {
            path:"#",
            display:"Home"
        },
        {
            path:"#",
            display:"Schedule"
        },
        {
            path:"#",
            display:"Classes"
        },
        {
            path:"#",
            display:"Home"
        },
    ]
    return(
        <>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logs">
                        {/*<div className="logs_img"><img src={""} alt={""}"image"/></div>*/}
                        <h2>FitTrack</h2>
                    </div>
                    {/*navigation*/}
                    <div className="navigation">
                        <ul className="menu">

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
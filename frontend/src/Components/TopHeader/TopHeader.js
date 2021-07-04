import React from "react"
import "./TopHeader.css"
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../../store/actions";
import UserIcon from "../Layout/UserIcon/UserIcon";
import MenuIcon from "../Layout/MenuIcon/MenuIcon";
// import SideDrawer from "../Layout/SideDrawer/SideDrawer"

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <img alt="user-icon" src="/user.png" style={{ width: "25px" }} ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} />
));

function TopHeader() {
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.userName)
    // const [showSideDrawer, setShowSideDrawer] = useState(false)

    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">Alertas</h4>
                <div className="d-flex ">
                    <UserIcon userName={userName} logOutHandler={() => { dispatch({ type: LOG_OUT }) }} />
                    <MenuIcon />
                </div>
            </div>
            {/* <SideDrawer open={showSideDrawer} closed={() => setShowSideDrawer(false)} /> */}

            <div className="PostBold PostSmall">Ultimas alertas recibidas</div>
        </div >
    )
}

export default TopHeader
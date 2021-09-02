import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoPaw } from "react-icons/io5";
import { FaHandHoldingHeart, FaHouseDamage } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { BsExclamationTriangleFill } from "react-icons/bs";

function PostsTabs({ body }) {
    return (
        <Tabs
            className="d-flex justify-content-between"
            unmountOnExit={true}
        >
            <Tab eventKey="all" title={
                <Link to="/alert/all">
                    <IoPaw className="post-tabs" size="25" />
                </Link>
            } >
                {body}
            </Tab>
            <Tab
                eventKey="adoption"
                title={
                    <Link to="/alert/all?alert_type=Adopción">
                        <FaHandHoldingHeart className="post-tabs" size="25" />
                    </Link>
                }
            >
                {body}
            </Tab>
            <Tab
                eventKey="lost"
                title={
                    <Link to="/alert/all?alert_type=Perdido">
                        <SiOpenstreetmap className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
            <Tab
                eventKey="abandoned"
                title={
                    <Link to="/alert/all?alert_type=Abandonado">
                        <FaHouseDamage className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
            <Tab
                eventKey="critical"
                title={
                    <Link to="/alert/all?alert_type=Crítico">
                        <BsExclamationTriangleFill className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
            {/* <Tab eventKey="settings" title={<MdSettings className="post-tabs" size="25" />}>
                        <div style={{ fontStyle: "italic", color: "#464646" }}>
                            No hay alertas publicadas recientemente.
                         </div>
                    </Tab> */}
        </Tabs>
    )
}
export default PostsTabs
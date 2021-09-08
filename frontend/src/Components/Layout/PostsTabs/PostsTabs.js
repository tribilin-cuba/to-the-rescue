import { Tabs, Tab } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IoPaw } from "react-icons/io5";
import { FaHandHoldingHeart, FaHouseDamage } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useRef, useEffect } from "react";

function PostsTabs({ body, activeKey }) {
    const location = useLocation()
    const searchParams = useRef("")


    useEffect(() => {
        searchParams.current = new URLSearchParams(location.search)
        if (searchParams.current.has("alert_type"))
            searchParams.current.delete("alert_type")
    })
    return (
        <Tabs
            className="d-flex justify-content-between"
            unmountOnExit={true}
            defaultActiveKey={activeKey}
        >
            <Tab eventKey="all" title={
                <Link to={"/alert/all/?" + searchParams.current.toString()}>
                    <IoPaw className="post-tabs" size="25" />
                </Link>
            } >
                {body}
            </Tab>
            <Tab
                eventKey="Adopción"
                title={
                    <Link to={"/alert/all?alert_type=Adopción&" + searchParams.current.toString()}>
                        <FaHandHoldingHeart className="post-tabs" size="25" />
                    </Link>
                }
            >
                {body}
            </Tab>
            <Tab
                eventKey="Perdido"
                title={
                    <Link to={"/alert/all?alert_type=Perdido&" + searchParams.current.toString()}>
                        <SiOpenstreetmap className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
            <Tab
                eventKey="Abandonado"
                title={
                    <Link to={"/alert/all?alert_type=Abandonado&" + searchParams.current.toString()}>
                        <FaHouseDamage className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
            <Tab
                eventKey="Crítico"
                title={
                    <Link to={"/alert/all?alert_type=Crítico&" + searchParams.current.toString()}>
                        <BsExclamationTriangleFill className="post-tabs" size="25" />
                    </Link>
                }>
                {body}
            </Tab>
        </Tabs >
    )
}
export default PostsTabs
import "./Post.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostType } from "../../../types/Post";



export default function Post({ _id, animal, alert_type, municipality, date, description, from, picture_path, province }: PostType) {
    if (!description)
        description = `${animal}:${alert_type}`

    let d = new Date(date)
    const formattedDate = d.toLocaleDateString("es-ES")
   

    return (
        <Card className="PostCard mt-2">
            <Card.Body style={{ padding: "0px" }}>
                <Link className="Post d-flex post-link"
                    to={`/post-details/${_id}/${from}`}

                >
                    <div className="d-flex flex-column align-items-start m-2 PostWidth PostHeight">
                        <div className='d-flex justify-content-between PostWidth'>
                            <h6 className={alert_type}>{alert_type}</h6>
                            <div className="PostXSmall">{municipality || province}</div>
                        </div>
                        {/* <div className="PostSmall PostBold">{preview}</div> */}
                        <div className="PostSmall justify-self-end">{formattedDate}</div>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    );
}

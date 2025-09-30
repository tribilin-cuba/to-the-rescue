import "./Post.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type AnimalType =  "Perro"| "Gato" ;
type AlertType = "Perdido" | "Abandonado" | "Adopción" | "Crítico";
type ProvinceType = "Pinar del río" | "Artemisa" | "La Habana" | "Mayabeque" | "Matanzas" | "Cienfuegos" | "Villa Clara" | "Sancti Spíritus" | "Ciego de Ávila" | "Camagüey" | "Las Tunas" | "Granma" | "Holguín" | "Santiago de Cuba" | "Guantánamo" | "Isla de la Juventud";

interface PostProps {
    id: string;
    animal?: AnimalType;
    alert_type: AlertType;
    municipality?: string;
    date: string;
    description?: string;
    from?: string;
    picture_path?: string;
    province: ProvinceType;
}

export default function Post({ id, animal, alert_type, municipality, date, description, from, picture_path, province }: PostProps) {
    if (!description)
        description = `${animal}:${alert_type}`

    let d = new Date(date)
    const formattedDate = d.toLocaleDateString("es-ES")
   

    return (
        <Card className="PostCard mt-2">
            <Card.Body style={{ padding: "0px" }}>
                <Link className="Post d-flex post-link"
                    to={`/post-details/${id}/${from}`}

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

import React, { useState, useEffect } from "react"
import "./NewPost.css"
import { Form, Button } from "react-bootstrap"
import { SERVER_URL } from "../../Constants/constants"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../Hooks/App/App"
import imageCompression from 'browser-image-compression'

function NewPost() {
    const userId = useAppSelector(state => state.app.userId);
    const params = useParams<{ from: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const [postForm, setPostForm] = useState({
        author_id: userId,
        animal: "",
        gender: "Desconocido",
        age: "",
        picture_path: "",
        province: "",
        municipality: "",
        address: "",
        alert_type: "Perdido",
        email: "",
        phone: "",
        description: "",
        imgString: null as string | null,
    });
    const [imgUrl, setImgUrl] = useState("/default.png");
    const [validated, setValidated] = useState(false);
    const [from, setFrom] = useState("home");

    useEffect(() => {
        const fromParam = params.from + location.search;
        setFrom(fromParam);
    }, [params.from, location.search]);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        const submitButton = document.getElementById("submit-post") as HTMLButtonElement;
        if (submitButton) submitButton.disabled = true;

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postForm)
        };
        fetch(SERVER_URL + "alert", request)
            .then(response => {
                window.flash("Alerta publicada con éxito", "success");
                navigate("/" + from);
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error");
                if (submitButton) submitButton.disabled = false;
            });
    };

    const inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, inputId: string) => {
        const updatedPostForm = { ...postForm };
        (updatedPostForm as any)[inputId] = event.target.value;
        setPostForm(updatedPostForm);
    };

    const changeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            };
            imageCompression(imageFile, options)
                .then(compressedFile => {
                    const reader = new FileReader();

                    reader.readAsDataURL(compressedFile);
                    reader.onload = () => {
                        setImgUrl(URL.createObjectURL(compressedFile));
                        setPostForm({ ...postForm, imgString: reader.result as string });
                    };
                })
                .catch(() =>
                    window.flash("Ha ocurrido un error al cargar la imagen", "error")
                );
        }
    };

    return (
        <Form onSubmit={submitHandler} noValidate validated={validated}>
            <Form.Group>
                <div className="d-flex">
                    <Link to={"/" + from} className="ml-auto" >
                        <img src="/close.png" alt="close" style={{ width: "15px", height: "15px" }} />
                    </Link>
                </div>
                <div className="d-flex justify-content-center customContainer">
                    <img className="NewPostImage" src={imgUrl} alt='' />
                    <label>
                        <img src="/camera.png" style={{ width: "50px" }} alt="add" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={changeImageHandler}
                            className="fileInput"
                            style={{ visibility: "hidden", width: "0px" }} />
                    </label>
                </div>
                <div className="d-flex flex-column">
                    <Form.Group>
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "alert_type") }} >
                            <option value="" disabled selected>Condición del animal</option>
                            <option value="Perdido">Perdido</option>
                            <option value="Abandonado">Abandonado</option>
                            <option value="Adopción">Adopción</option>
                            <option value="Crítico">Crítico</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Seleccione un elemento de la lista
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "animal") }}>
                            <option value="" disabled selected>Animal</option>
                            <option>Perro</option>
                            <option>Gato</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Seleccione un elemento de la lista
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" onChange={(event) => { inputChangedHandler(event, "gender") }}>
                            <option value="" disabled selected>Sexo</option>
                            <option>Hembra</option>
                            <option> Macho</option>
                            <option>Desconocido</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Edad" onChange={(event) => { inputChangedHandler(event, "age") }} />
                    </Form.Group>
                    {/* ############################### */}
                    <Form.Group>
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "province") }}>
                            <option value="" disabled selected>Provincia</option>
                            <option value="Pinar del río">Pinar del río</option>
                            <option value="Artemisa">Artemisa</option>
                            <option value="La Habana">La Habana</option>
                            <option value="Mayabeque">Mayabeque</option>
                            <option value="Matanzas">Matanzas</option>
                            <option value="Cienfuegos">Cienfuegos</option>
                            <option value="Villa Clara">Villa Clara</option>
                            <option value="Sancti Spíritus">Sancti Spíritus</option>
                            <option value="Ciego de Ávila">Ciego de Ávila</option>
                            <option value="Camagüey">Camagüey</option>
                            <option value="Las Tunas">Las Tunas</option>
                            <option value="Granma">Granma</option>
                            <option value="Holguín">Holguín</option>
                            <option value="Santiago de Cuba">Santiago de Cuba</option>
                            <option value="Guantánamo">Guantánamo</option>
                            <option value="Isla de la Juventud">Isla de la Juventud</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Seleccione un elemento de la lista
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Municipio" onChange={(event) => { inputChangedHandler(event, "municipality") }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" placeholder="Dirección" onChange={(event) => { inputChangedHandler(event, "address") }} />
                    </Form.Group>
                    <div>
                        <Form.Group>
                            <Form.Control placeholder="Teléfono (opcional)" onChange={(event) => { inputChangedHandler(event, "phone") }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Correo electrónico (opcional)" onChange={(event) => { inputChangedHandler(event, "email") }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Descripción" as="textarea" onChange={(event) => { inputChangedHandler(event, "description") }} />
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Button id="submit-post" type="submit" variant="warning">Publicar</Button>
                    </Form.Group>
                </div>
            </Form.Group>
        </Form>
    );
}

export default NewPost;
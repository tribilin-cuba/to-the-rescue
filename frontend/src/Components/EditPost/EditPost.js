import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { SERVER_URL } from "../../Constants/constants"
import { populateSelectedPost } from "../../App/store"
function EditPost() {
    const post = useSelector(state => state.app.selectedPost);
    const dispatch = useDispatch();
    const params = useParams();
    const [postForm, setPostForm] = useState({
        author_id: "",
        animal: "",
        gender: "",
        age: "",
        picture_path: "",
        province: "",
        municipality: "",
        address: "",
        alert_type: "",
        email: "",
        phone: "",
        description: "",
        imgString: undefined,
    });
    const [imgUrl, setImgUrl] = useState("/default.png");
    const [validated, setValidated] = useState(false);
    const [from, setFrom] = useState("home");

    useEffect(() => {
        if (post && Object.keys(post).length > 0) {
            setPostForm({
                author_id: post.author_id || "",
                animal: post.animal || "",
                gender: post.gender || "",
                age: post.age || "",
                picture_path: post.picture_path || "",
                province: post.province || "",
                municipality: post.municipality || "",
                address: post.address || "",
                alert_type: post.alert_type || "",
                email: post.email || "",
                phone: post.phone || "",
                description: post.description || "",
                imgString: undefined,
            });
        }
    }, [post]);

    useEffect(() => {
        const fromParam = params.from;
        setFrom(fromParam);
    }, [params.from]);

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postForm)
        };
        fetch(SERVER_URL + "alert/" + post._id, request)
            .then(response => {
                console.log(response);
                // Navigate back to post details
                window.location.href = `/post-details/${post._id}/${from}`;
                dispatch(populateSelectedPost(postForm));
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error");
            });
    };

    const inputChangedHandler = (event, inputId) => {
        const updatedPostForm = { ...postForm };
        updatedPostForm[inputId] = event.target.value;
        setPostForm(updatedPostForm);
    };

    const changeImageHandler = (event) => {
        if (event.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                setImgUrl(URL.createObjectURL(event.target.files[0]));
                setPostForm({
                    ...postForm,
                    imgString: reader.result
                });
            };
        }
    };
    return (
        <Form onSubmit={submitHandler} noValidate validated={validated} className="mt-3">
            <Form.Group>
                <div className="d-flex flex-column">
                    <Form.Group>
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "alert_type") }} value={postForm.alert_type}>
                            <option value="" disabled>Condición del animal</option>
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
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "animal") }} value={postForm.animal}>
                            <option value="" disabled>Animal</option>
                            <option>Perro</option>
                            <option>Gato</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Seleccione un elemento de la lista
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" onChange={(event) => { inputChangedHandler(event, "gender") }} value={postForm.gender}>
                            <option value="" disabled>Sexo</option>
                            <option>Hembra</option>
                            <option> Macho</option>
                            <option>Desconocido</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Edad" onChange={(event) => { inputChangedHandler(event, "age") }} value={postForm.age} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control required as="select" onChange={(event) => { inputChangedHandler(event, "province") }} value={postForm.province}>
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
                        <Form.Control placeholder="Municipio" onChange={(event) => { inputChangedHandler(event, "municipality") }} value={postForm.municipality} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" placeholder="Dirección" onChange={(event) => { inputChangedHandler(event, "address") }} value={postForm.address} />
                    </Form.Group>
                    <div>
                        <Form.Group>
                            <Form.Control placeholder="Teléfono (opcional)" onChange={(event) => { inputChangedHandler(event, "phone") }} value={postForm.phone} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Correo electrónico (opcional)" onChange={(event) => { inputChangedHandler(event, "email") }} value={postForm.email} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Descripción" as="textarea" onChange={(event) => { inputChangedHandler(event, "description") }} value={postForm.description} />
                        </Form.Group>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={`/post-details/${post._id}/${from}`} className="mr-2" >
                            <Button variant="secondary">Cancelar</Button>
                        </Link>
                        <Form.Group>
                            <Button type="submit" variant="warning">Guardar</Button>
                        </Form.Group>
                    </div>
                </div>
            </Form.Group>
        </Form>
    );
}

export default EditPost;
import { Modal, Form, Button, Card, AccordionCollapse, AccordionToggle } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import { PROVINCES } from "../../../Constants/constants";

function FilterModal({ show, onHide }) {
    const [animal, setAnimal] = useState(null)
    const [gender, setGender] = useState(null)
    const [province, setProvince] = useState([])
    const [municipality, setMunicipality] = useState(null)
    const [redirect, setRedirect] = useState(null)
    const provinces = PROVINCES.map(p => {
        return <Form.Check
            type="checkbox"
            name="province"
            label={p}
            value={p}
            onChange={(e) => {
                if (e.target.checked)
                    setProvince([...province, e.target.value])
                else
                    setProvince(province.filter(pr => pr !== e.target.value))
            }}
        />
    })
    useEffect(() => {
        console.log(province)
    }, [province])
    const submitHandler = (event) => {
        event.preventDefault()

        let search = new URLSearchParams()

        animal && search.append("animal", animal)
        gender && search.append("gender", gender)
        municipality && search.append("municipality", municipality)

        province.forEach((p) => search.append("province", p))
        setRedirect("/alert/all/?" + search.toString())
        onHide()
    }

    if (redirect)
        return <Redirect to={redirect} />

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <div className="d-flex flex-column">
                            <Accordion defaultActiveKey="0">
                                <AccordionToggle as="div" eventKey="0">
                                    <Card>
                                        <Card.Header>
                                            <div>Animal</div>
                                        </Card.Header>
                                    </Card>
                                </AccordionToggle>
                                <Card.Body>
                                    <AccordionCollapse eventKey="0">
                                        <div >
                                            <Form.Check
                                                type="radio"
                                                label="Perro"
                                                name="animal"
                                                value="Perro"
                                                onChange={(e) => setAnimal(e.target.value)}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Gato"
                                                name="animal"
                                                value="Gato"
                                                onChange={(e) => setAnimal(e.target.value)}
                                            />
                                        </div>
                                    </AccordionCollapse>
                                </Card.Body>
                            </Accordion>
                            <Accordion defaultActiveKey="0">
                                <AccordionToggle as="div" eventKey="0">
                                    <Card>
                                        <Card.Header>
                                            <div>Sexo</div>
                                        </Card.Header>
                                    </Card>
                                </AccordionToggle>
                                <Card.Body>
                                    <AccordionCollapse eventKey="0">
                                        <div>
                                            <Form.Check
                                                type="radio"
                                                label="Hembra"
                                                name="gender"
                                                value="Hembra"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Macho"
                                                name="gender"
                                                value="Macho"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </div>
                                    </AccordionCollapse>
                                </Card.Body>
                            </Accordion>
                            <Accordion >
                                <AccordionToggle as="div" eventKey="0">
                                    <Card>
                                        <Card.Header>
                                            <div>Provincia</div>
                                        </Card.Header>
                                    </Card>
                                </AccordionToggle>
                                <Card.Body>
                                    <AccordionCollapse eventKey="0">
                                        <div>{provinces}</div>
                                    </AccordionCollapse>
                                </Card.Body>
                            </Accordion>

                            <Form.Group>
                                <Form.Control
                                    placeholder="Municipio"
                                    onChange={(e) => { setMunicipality(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center">
                                <Button type="button" variant="secondary" onClick={onHide}>Cancelar</Button>
                                <Button className="ml-2" type="submit" variant="warning">Aplicar</Button>
                            </Form.Group>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal >
    )
}
export default FilterModal
import { Form, Button, AccordionCollapse, AccordionToggle } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./FilterForm.css"
import { Redirect, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { PROVINCES } from "../../../Constants/constants";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsArrowClockwise } from "react-icons/bs";

function FilterForm({ onHide }) {
    const location = useLocation()
    const activeFilters = new URLSearchParams(location.search)

    const [animal, setAnimal] = useState(activeFilters.get("animal"))
    const [gender, setGender] = useState(activeFilters.get("gender"))
    const [province, setProvince] = useState(activeFilters.getAll("province") || [])
    const [municipality, setMunicipality] = useState(activeFilters.get("municipality"))
    const [redirect, setRedirect] = useState(null)

    const checkElementById = (elementId) => {
        document.getElementById(elementId).checked = true
    }
    useEffect(() => {

        animal && checkElementById(`animal-${animal}`)

        gender && checkElementById(`gender-${gender}`)

        province.forEach(p => checkElementById(`province-${p}`))

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const resetValues = () => {
        document.getElementById("filter-form").reset()
        setAnimal(null)
        setGender(null)
        setMunicipality(null)
        setProvince([])
    }
    const provinces = PROVINCES.map(p => {
        return <Form.Check
            id={"province-" + p}
            key={p}
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

    const submitHandler = (event) => {
        event.preventDefault()
        onHide()
        let search = new URLSearchParams()

        animal && search.append("animal", animal)
        gender && search.append("gender", gender)
        municipality && search.append("municipality", municipality)

        province.forEach((p) => search.append("province", p))
        setRedirect("/alert/all/?" + search.toString())
    }

    if (redirect)
        return <Redirect to={redirect} />

    return (
        <Form onSubmit={submitHandler} id="filter-form">
            <div className="d-flex justify-content-end">
                <h5>
                    <Button variant="light" onClick={resetValues}>
                        <BsArrowClockwise /> Restaurar
                    </Button>
                </h5>
            </div>
            <Form.Group>
                <div className="d-flex flex-column">
                    <h4 className="filter-header">Animal</h4>
                    <div className="ml-4 mt-2 mb-2">
                        <Form.Check
                            id="animal-Perro"
                            type="radio"
                            label="Perro"
                            name="animal"
                            value="Perro"
                            onChange={(e) => setAnimal(e.target.value)}
                        />
                        <Form.Check
                            id="animal-Gato"
                            type="radio"
                            label="Gato"
                            name="animal"
                            value="Gato"
                            onChange={(e) => setAnimal(e.target.value)}
                        />
                    </div>
                    <h4 className="filter-header">Sexo</h4>
                    <div className="ml-4 mt-2 mb-2">
                        <Form.Check
                            id="gender-Hembra"
                            type="radio"
                            label="Hembra"
                            name="gender"
                            value="Hembra"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <Form.Check
                            id="gender-Macho"
                            type="radio"
                            label="Macho"
                            name="gender"
                            value="Macho"
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 mb-2">
                        <h4 className="filter-header" style={{ borderBottom: "none" }}>Municipio</h4>
                        <Form.Group>
                            <Form.Control
                                value={municipality}
                                onChange={(e) => { setMunicipality(e.target.value) }}
                            />
                        </Form.Group>
                    </div>

                    <Accordion>
                        <AccordionToggle as="h4" eventKey="0" className="d-flex filter-header mt-2">
                            Provincia <RiArrowDownSLine color="black" className="ml-auto" />
                        </AccordionToggle>
                        <AccordionCollapse eventKey="0">
                            <div className="ml-4 mt-2">{provinces}</div>

                        </AccordionCollapse>
                    </Accordion>

                    <Form.Group className="d-flex justify-content-center mt-5">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={onHide}
                        >
                            Cancelar
                        </Button>
                        <Button
                            className="ml-2"
                            type="submit"
                            variant="warning"
                        >
                            Aplicar
                        </Button>
                    </Form.Group>
                </div>
            </Form.Group>
        </Form>
    )
}
export default FilterForm
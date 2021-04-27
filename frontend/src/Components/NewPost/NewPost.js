import React, { Component } from "react"
import Input from "../Layout/Input/Input"
import Card from "../Layout/Card/Card"

class NewPost extends Component {
    state = {
        postForm: {
            id: "",
            title: "",
            body: ""
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
        fetch("https://jsonplaceholder.typicode.com/posts", request)
            .then(response => {
                console.log(response)
                this.props.history.push('/')
            })
            .catch(error => console.log(error))

    }
    inputChangedHandler = (event, inputId) => {
        const updatedPostForm = { ...this.state.postForm }
        updatedPostForm[inputId] = event.target.value

        this.setState({ postForm: updatedPostForm })
    }
    render() {
        return (
            <Card color="white">
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <h5 className="card-header" style={{ backgroundColor: "white" }}>Nuevo Anuncio</h5>
                    {/* <Input placeholder="Animal" />
                    <Input placeholder="Sexo" />
                    <Input placeholder="Edad" />
                    <Input placeholder="Direccion" />
                    <Input placeholder="Provincia" />
                    <Input placeholder="Municipio" />
                    <Input placeholder="Descripcion" type="textarea" /> */}
                    <Input config={{ placeholder: "Title", type: "textarea" }} changed={(event) => this.inputChangedHandler(event, "title")} />
                    <Input config={{ placeholder: "Body", type: "textarea" }} changed={(event) => this.inputChangedHandler(event, "body")} />
                    <button type="submit">Publicar</button>
                </form>
            </Card>
        )
    }
}

export default NewPost
import { NavLink } from "react-router"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, type ChangeEvent, type FormEvent } from "react";
import ApiClient from "../../utils/ApiClient";

interface FormMovie {
    judul : string,
    tahunRilis : string,
    sutradara : string
}

function AddMovie(){
    const [form, setForm] = useState<FormMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : ""
    })

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
           const response = await ApiClient.post ('/movie', form)
           console.log(response); 
        }
        catch (error) {
            console.log(error)
        }
    }
    return <div>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formJudulFilm">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control 
                    value={form.judul}
                    onChange={handleInputChange}
                    name="judul" 
                    type="text" 
                    placeholder="Judul Film"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTahunRilis">
                    <Form.Label>Tahun Rilis</Form.Label>
                    <Form.Control value={form.tahunRilis} onChange={handleInputChange} name="tahunRilis" type="text" placeholder="Tahun Rilis"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSutradara">
                    <Form.Label>Sutradara</Form.Label>
                    <Form.Control value={form.sutradara } onChange={handleInputChange} name="sutradara" type="text" placeholder="Sutradara"/>
                </Form.Group>

                <Button type="submit" variant="success">Tambah</Button>
            </Form>
        </div>
        
        <p></p>
        <p></p>

        <div>
            <NavLink to={"/"}>Back</NavLink>
        </div>
    </div>
}
export default AddMovie
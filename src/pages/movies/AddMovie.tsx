import { NavLink } from "react-router"
import Button from 'react-bootstrap/Button';

function AddMovie(){
    return <div>
        <div>
            <div>
                <p>Judul : <input type="text" name="Judul" />
                </p>
            </div>
            <div>
                <p>Tahun Rilis : <input type="integer" name="Tahun Rilis" />
                </p>
            </div>
            <div>
                <p>Pengarang : <input type="text" name="Pengarang" />
                </p>
            </div>


        </div>
        <Button variant="btn btn-success">Tambah</Button>
        <p></p>
        <p></p>

        <div>
            <NavLink to={"/"}>Back</NavLink>
        </div>
    </div>
}
export default AddMovie
import { NavLink } from "react-router"
import Button from 'react-bootstrap/Button';

function AddMovie(){
    return <div>
        <div>
            <li>Judul       :  </li>
            <li>Tahun       :  </li>
            <li>Pengarang   :  </li>
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
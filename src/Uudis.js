import { useParams } from 'react-router-dom';

function Uudis() {
    const {uudis_id} = useParams()
    return (
        <div>
            <h1>Oluline uudis nr {uudis_id}</h1>
        </div>
    )
}

export default Uudis
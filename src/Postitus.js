import { useParams } from "react-router-dom"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Postitus({postitused}) {
    const {uudis_id} = useParams()
    const postitus = postitused[uudis_id]
    return (
        <div> 
            <h1>{postitus.pealkiri}</h1>
            <img className="postituse_pilt" src={postitus.paisepildiUrl} />
            <p>{postitus.loomine}</p>
            <div>
                {documentToReactComponents(postitus.sisu)}
            </div>
        </div>
    )
}

export default Postitus
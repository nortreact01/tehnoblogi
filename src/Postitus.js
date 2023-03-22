import { useParams } from "react-router-dom"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (<img
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt="??"
        />)
      }
    }
  }


function Postitus({postitused}) {
    const {uudis_id} = useParams()
    const postitus = postitused[uudis_id]
    return (
        <div> 
            <h1>{postitus.pealkiri}</h1>
            <img className="postituse_pilt" src={postitus.paisepildiUrl} />
            <p>{postitus.loomine}</p>
            <div>
                {documentToReactComponents(postitus.sisu, renderOption)}
            </div>
        </div>
    )
}

export default Postitus
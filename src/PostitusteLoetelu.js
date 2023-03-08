import { Link } from "react-router-dom"

function PostitusteLoetelu({postitused}) {
    if (postitused.length < 1) {
        return (
            <div>
                <h2>laen postitusi ...</h2>
            </div>
        )
    }
    return (
        <div className="postitused_loetelu">
            {
                postitused.map((element, index) => {
                    return (
                        <div className="postitus" key={index}>
                            <div> 
                                <h3>{element.pealkiri}</h3> 
                            </div>
                            <div>
                                {element.lyhikirjeldus}
                            </div>
                            <div>
                                <Link to={"/uudis/" + index}>Loe edasi</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostitusteLoetelu
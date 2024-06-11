import { useParams } from "react-router-dom"
import { data } from "./data"

export const Person = () => {
    const {id} = useParams()
    const personData = data.filter((a) => a.id == id);
    return(<div className="container my-10 myClass">
        <img src={personData[0].img} alt="image" />
        <h3>{personData[0].name}</h3>
        <p dangerouslySetInnerHTML={{
            __html: personData[0].otherInfo
        }}></p>
    </div>)
}
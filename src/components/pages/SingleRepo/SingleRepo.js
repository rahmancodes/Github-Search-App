import React, {useState, useContext, useEffect} from "react";
import {useParams} from "react-router-dom"
import { MyContextApi } from "../../../App";

function SingleRepo() {
    const {id} = useParams()
    const {repository} = useContext(MyContextApi)
    const [singleRepo, setSingleRepo] = useState([])

    useEffect(
        () => {
            const getRepo = repository.filter(rep => rep.id ===Number(id))
            setSingleRepo(getRepo)
        }, []
    )
 return (
    <div>Single Repo
        <p>{id}</p>
        <div>
            {
                singleRepo?.map(
                    single => <div>
                        <h2>{single.name}</h2>
                        <p>{single.visibility}</p>
                        <p>{single.language}</p>
                        <p>{single.description || "No Description"}</p>
                    </div>
                )
            }
        </div>
    </div>

 )
}
export default SingleRepo
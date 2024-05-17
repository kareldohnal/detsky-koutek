import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export const CentersPage = () => {
    const [center, setCenter] = useState([])

    useEffect(() => {
        const nacistData = async () => {
            const result = await fetch("http://localhost:4000/api/centers")
            const data = await result.json()
            setCenter(data.result)
        }
        nacistData()
    }, [])

    return (
        <div>
            {center.map((pobocka) => {
                return (
                    <React.Fragment key={pobocka.id}>
                        <Link to={`/pobocky/${pobocka.id}`}>{pobocka.name}</Link>
                        <p>{pobocka.address}</p>
                    </React.Fragment>
                )
        })}
        <Outlet />
        </div>
    )
}
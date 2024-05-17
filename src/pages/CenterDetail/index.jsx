import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CenterDetail = () => {
    const [dataPobocka, setDataPobocka] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const nacistData = async () => {
            const result = await fetch(`http://localhost:4000/api/centers/${id}`)
            const data = await result.json()
            setDataPobocka(data.result)
        }
        nacistData()
    }, [id])

    return (
        <div>
            {dataPobocka && <h2>{dataPobocka.name}</h2>}
            {dataPobocka && <p>{dataPobocka.info}</p>}
            {dataPobocka && <div>Pondělí: {dataPobocka.open.mon}</div>}
        </div>
    )
}
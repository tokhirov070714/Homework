import { capitalize } from "./Input";

function Confirm({ item }: { item: any }) {

    const [key, formData] = item

    return (

        <div className="flex items-center gap-2">

            <p>{capitalize(key)}:</p>
            <p className="font-bold">{formData.value}</p>

        </div>

    )

}

export default Confirm;
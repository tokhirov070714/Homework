import { Label } from "../ui/label";

export function capitalize(key: string) {

    return key.slice(0, 1).toUpperCase() + key.slice(1)

}

function Input({ item, onInput }: { item: any; onInput: any }) {


    const [key, formData] = item

    return (

        <div>

            <Label className="mb-2" htmlFor={key}>{capitalize(key)}</Label>

            <input
                className="w-full p-2 border rounded"
                id={key}
                type="text"
                name={key}
                placeholder={key}
                value={formData.value}
                onChange={(e) => onInput(key, e.target.value)}
            />

            {formData.error && <p className="text-sm text-red-500 mt-1">Invalid input format</p>}

        </div>

    )

}

export default Input;
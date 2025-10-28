import { useState } from "react"
import { Button } from "./components/ui/button"

import Input from "./components/custom/Input"
import Confirm from "./components/custom/Confirm"


type AuthFormData = {

  name: {

    value: string;
    error: boolean;
    validate: RegExp

  },

  age: {

    value: string;
    error: boolean;
    validate: RegExp

  },

  password: {

    value: string;
    error: boolean;
    validate: RegExp

  },

  email: {

    value: string;
    error: boolean;
    validate: RegExp

  }

}


function App() {

  const [formData, setFormData] = useState<AuthFormData>({

    name: {

      value: "",
      error: false,
      validate: /^[A-Za-z\s]+$/,

    },

    age: {

      value: "",
      error: false,
      validate: /^(1[2-9]|[2-9]\d|1[0-4]\d|150)$/

    },

    password: {

      value: "",
      error: false,
      validate: /^(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{8,}$/

    },

    email: {

      value: "",
      error: false,
      validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    }

  })


  const [modal, setModal] = useState<boolean>(false)


  const submit = (e: any) => {

    e.preventDefault()

    const logData = formData

    console.log(logData);

  }

  function handleChangeFormData<K extends keyof AuthFormData>(key: K, value: any) {

    setFormData((prev) => ({

      ...prev, [key]: { ...prev[key], value: value },

    }))

    if (formData[key].value.length > 0) {

      setFormData((prev) => ({

        ...prev, [key]: { ...prev[key], error: !prev[key].validate.test(prev[key].value) }

      }))

    }

  }

  const isFormValid = () => {

    return Object.values(formData).every(item =>

      item.value !== "" && !item.error

    )

  }


  return (

    <div className="relative w-full h-screen">

      <div className="max-w-[500px] mx-auto my-0 pt-20">

        <h1 className="text-center text-4xl font-bold">Sample Form</h1>

        <form className="flex flex-col gap-10 mt-5" onSubmit={submit}>

          {Object.entries(formData).map((item, index) => (

            <Input

              key={index}
              item={item}
              onInput={handleChangeFormData}
            />

          ))}

          <Button

            onClick={() => {

              if (isFormValid()) {

                setModal(true)

              }

            }}

          >Submit</Button>

        </form>


        <div

          onClick={() => setModal(!modal)}
          className={modal ? "absolute top-0 right-0 w-full h-full bg-black opacity-50 z-0" : "hidden"}

        ></div>

        {

          modal &&

          <div className="absolute top-50 r-10">

            <div className="w-[500px] p-10 bg-white rounded-2xl z-3">

              <h1 className="text-center text-4xl font-bold">Your Data</h1>

              <div className="mt-8 grid grid-cols-2 gap-2">

                {Object.entries(formData).map((item, index) => (

                  <Confirm

                    key={index}
                    item={item}

                  />

                ))}

              </div>

              <Button onClick={() => setModal(!modal)} className="mt-10 w-full h-10" variant="default">Confirm</Button>

            </div>

          </div>

        }

      </div>

    </div>

  )

}

export default App;
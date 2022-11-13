import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

async function createUser(){
    const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            name: "Denis",
            job: "Developer",
        })

        
    })

    if(!response.ok){
        throw new Error("Error creando el usuario")
    }

}
export default function UserForm() {
    const queryClient = useQueryClient();
    const mutation = useMutation(createUser, {
        onSettled: function(){
            console.log("final")
        },
        onSuccess: function(res){
            // queryClient.invalidateQueries("USERS");
            console.log(res)
            queryClient.setQueryData("USERS", function (oldData) {
                console.log(oldData)
                return {
                    ...oldData,
                    data: [
                        ...oldData.data,
                        {
                            id: 2134,
                            email: "denis zelaya",
                            job: "dev"
                        }
                    ]
                }
            })
            console.log("succes")
        },
        onError(response){
            console.log("Error " + response)
        }
    })

    function handleOnClick(){
        mutation.mutate();
    }
  return (
    <div>
        <button onClick={handleOnClick}>Crear</button>
    </div>
  )
}

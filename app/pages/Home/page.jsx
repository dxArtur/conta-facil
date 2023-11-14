'use client'

import React , { useState } from "react"
import { Text, Button } from '@radix-ui/themes'
import { RiDeleteBin5Line, RiAddCircleLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'

const Home = () =>{
    const [tables, setTables] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // Estado inicial com 5 mesas

    const addTable = () => {
      const newTable = tables.length + 1
      setTables([...tables, newTable])
    }
    

    for (let i = 1; i<= tables; i++) {
        tables.push(i)
    }


    return(
        <div>
            <Button onClick={addTable}>Criar nova mesa</Button>
            <Button> Juntar mesas </Button>
            <div className="mr-4 ml-4 grid grid-cols-3 gap-4 " >
                {tables.map(table=>
                    <div className="   flex flex-col items-center  border-gray-300 border-2 shadow-xl p-2 " size={'4'}> 
                        <Text className="text-zinc-700" >Mesa {table} </Text>
                        <div className="w-full space-x-2  mb-2 flex flex-row items-center mt-2">
                            <Button color="jade" className="shadow-xl w-32">
                                Adicionar produto<RiAddCircleLine />
                            </Button>
                            <Button color="amber" className="shadow-xl w-28">
                                Imprimir conta <BiMoneyWithdraw className="" />
                            </Button>
                            <Button color="red" className="shadow-xl w-28">
                                Apagar mesa<RiDeleteBin5Line />
                            </Button>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Home
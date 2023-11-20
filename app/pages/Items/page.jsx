'use client'

import { Checkbox, TabsList, TabsRoot, TabsTrigger, Text, TextFieldInput, Box, TabsContent, Flex, Button, Theme, DropdownMenu, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/themes'
import React, { useState, useEffect } from 'react'



const Items = () => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [quantity, setQuantity] = useState({})
  const [isVisibleItemByCategoy, setIsVisibleItemByCategoy] = useState([])
    
  const toggleVisibleItemByCategory = (categoryId) => {
    setIsVisibleItemByCategoy((prevIsVisibleItemByCategoy) => {
      if (prevIsVisibleItemByCategoy.includes(categoryId)) {
        return prevIsVisibleItemByCategoy.filter((id) => id !== categoryId);
      } else {
        return [...prevIsVisibleItemByCategoy, categoryId];
      }
    });
  }

  const ArrayQuantityDefault = [1, 2, 3, 4, 5]

  const incrementQuantity = (itemId) => {
    console.log('+')
    setQuantity((prevQuantities) => {
      const currentQuantity = prevQuantities[itemId] || 0
      const updatedQuantity = currentQuantity + 1
      return {
        ...prevQuantities,
        [itemId]: currentQuantity + 1
      }
    })
  }

  const decrementQuantity = (itemId) => {
    if (quantity[itemId] > 1) {
      setQuantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  }

  

  useEffect(() => {
      const fetchDataCategories = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/allCategories')
          const data = await response.json()
          setCategories(data)
        } catch (error) {
          console.log(error)
        }
      }

      const fetchDataItems = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/allItems')
          const data = await response.json()
          setItems(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchDataCategories()
      fetchDataItems()
  },[])

  useEffect(()=>{
  }, [quantity])

  

    return(
        <div className=' p-4'>
            <div className='border-2 p-4'>
                <Text size={'6'}>Pesquisar items do cardápio</Text>
                <Button color='yellow'>Adicionar a comanda</Button>
                <TextFieldInput />
                {categories.map((category)=>(
                  <Flex direction="row">
                  <Theme accentColor='cyan'>
                  <TabsRoot className=''>
                    <TabsList >
                      <TabsTrigger color='jade' onClick={() => toggleVisibleItemByCategory(category.id)} value={category.id} >
                        <Text size={'4'}>{category.name}</Text>
                      </TabsTrigger>
                    </TabsList>
                    {isVisibleItemByCategoy.includes(category.id) &&(
                      <Box px="2" pt="2" pb="2">
                      <TabsContent value={category.id}>
                    {items.filter((item) => item.categoryId === category.id).map((item)=>(
                      <div className='flex items-center space-x-4'>
                        <Checkbox color="orange"  />
                        <Text size="4" className='mx-2'>{item.name} R${item.price}</Text>
                        <Button color='green' onClick={()=>incrementQuantity(item.id)}>+</Button>
                        <DropdownMenuRoot>
                          <DropdownMenuTrigger>
                            <Button color='indigo' variant="outline" size={'2'}>{quantity[item.id] || 1} v</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {ArrayQuantityDefault.map((value)=>(
                              <DropdownMenuItem key={value} onClick={()=>setQuantity(item.id)}>
                                {value}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenuRoot>
                        <Button color='red' onClick={()=>decrementQuantity(item.id)}>-</Button>
                        <Button className='flex items-end justify-end'>adicionar</Button>
                      </div>
                      ))}
                      </TabsContent>
                      </Box>
                      )}
                  </TabsRoot>
                      </Theme>
                  </Flex>
                ))}
            </div>
        </div>
    )
}


export default Items
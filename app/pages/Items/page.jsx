'use client'

import { TabsList, TabsRoot, TabsTrigger, Text, TextFieldInput, Box, TabsContent, Flex, Button } from '@radix-ui/themes'
import React, { useState, useEffect } from 'react'



const Items = () => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
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

  

    return(
        <div className=' p-4'>
            <div className='border-2 p-4'>
                <Text size={'6'}>Pesquisar items do cardápio</Text>
                <TextFieldInput />
                {categories.map((category)=>(
                  <Flex direction="row">
                  <TabsRoot>
                    <TabsList>
                      <TabsTrigger  onClick={() => toggleVisibleItemByCategory(category.id)} value={category.id} >
                        {category.name}
                      </TabsTrigger>
                    </TabsList>
                    {isVisibleItemByCategoy.includes(category.id) &&(
                      <Box px="2" pt="2" pb="2">
                      <TabsContent value={category.id}>
                    {items.filter((item) => item.categoryId === category.id).map((item)=>(
                      <div>
                        <Text size="2">{item.name}</Text>
                        <Text size="2">{item.price}</Text>
                        <Button>adicionar</Button>
                      </div>
                      ))}
                      </TabsContent>
                      </Box>
                      )}
                  </TabsRoot>
                  </Flex>
                ))}
            </div>
        </div>
    )
}


export default Items
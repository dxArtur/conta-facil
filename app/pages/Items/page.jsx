'use client'

import { TabsList, TabsRoot, TabsTrigger, Text, TextFieldInput } from '@radix-ui/themes'
import React, { useState, useEffect } from 'react'
import  categoryService from '../../../db/category'
import  itemService from '../../../db/category'

const Items = () => {

const [ categories, setCategories] = useState([])
const [ items, setItems] = useState([])

async function fetchCategories(){
    try {
        const categoriesData = await categoryService.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
}


async function fetchCategory(num){
    try {
        const category = await categoryService.getCategoryById(num);
        setItems(category);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
}

useEffect(() => {
    fetchCategories()
    fetchCategory(1)
  }, [])

  console.log(categories)
  console.log('itemss' +items)

    return(
        <div className=' p-4'>
            <div className='border-2 p-4'>
                <Text size={'6'}>Pesquisar items do cardápio</Text>
                <TextFieldInput />
                {categories}
                    

                        <TabsRoot>
                        <TabsList>
                            <TabsTrigger></TabsTrigger>
                        </TabsList>
                    </TabsRoot>

                

            </div>
        </div>
    )
}
export default Items
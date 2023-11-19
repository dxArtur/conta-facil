import { prisma } from '../../../db/prismaClient.js'


    export const getAllItems = async(req, res) => {
        try {
            const data = await prisma.item.findMany({})
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    export const getCategoryById = async(req, res) => {
        const {categoryId} = req.body

        try {
            const data = await prisma.category.findUnique(
                {
                 where: {id: categoryId}
                })
                res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    export const getItemsByCategory = async(req, res) => {
        const {categoryId} = req.params
        try {
            const data = await prisma.item.findMany({
                where:{
                    categoryId: categoryId
                },
            })

            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
    
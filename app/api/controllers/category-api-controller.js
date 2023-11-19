import { prisma } from '../../../db/prismaClient.js'


    export const getAllCategories = async(req, res) => {
        try {
            const data = await prisma.category.findMany({})
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

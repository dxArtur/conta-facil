import { prisma } from "./prismaClient"

const categoryService = {

    async getCategories() {
        try {
            const data = await prisma.category.findMany()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    },
    
    async getCategoryById(categoryId) {
        return prisma.category.findUnique({
            where: {
                id: categoryId
            }
        })
    },
    async addCategory(data) {
        return prisma.category.create({
            data: {
                name: data.name
            }
        })
    }
}

export default categoryService
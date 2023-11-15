import { prisma } from "./prismaClient"

const Service = {

    async getItems() {
        try {
            const data = await prisma.item.findMany()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    },
    
    async getItemById(categoryId) {
        return prisma.item.findUnique({
            where: {
                id: categoryId
            }
        })
    },
    async addItem(data) {
        return prisma.item.create({
            data: {
                name: data.name
            }
        })
    }
}

export default itemService
import { prisma } from "../database"

const post = async (req: any) => {
  try {
    const store = await prisma.store.create({
        data: {
            name: req.body.name
        }
    })

    return store;
  } catch (error) {
    throw new Error(error)
  }
}

export default {
    post
}
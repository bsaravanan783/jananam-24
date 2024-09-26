import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


const createTransaction = async(){
    const transaction = await prisma.transaction({
        data:{

        },

    })
}

export { createTransaction};
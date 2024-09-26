import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();



const createBay = async() =>{
    const bay = await prisma.bay.create({
        data:{
            total_count:0,
            available:0,
            amount_of_ticket:100,
            bay_type:"MALE"
        }
    });
    console.log(bay);

    return bay;
};

const getAllBay = async() =>{
    const bay = await prisma.bay.findMany();
    return bay;
}

const getIndividualBayById = async(bayId) =>{
    const bay = await prisma.bay.findFirst({
        where:{
            id:bayId,
        }
    });

    return bay;
}


const getBayByType = async(bayType) =>{
    const bay = await prisma.bay.findMany({
        where:{
            bay_type:bayType,
        }
    });

    return bay;
}


export {createBay,getAllBay,getBayByType,getIndividualBayById};
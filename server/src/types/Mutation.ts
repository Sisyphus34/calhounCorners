import { prismaObjectType } from 'nexus-prisma'

const Mutation = prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields({
            filter: [
                'deleteManyMenuItems',
                'updateManyMenuItems'
            ]
        }) // this allows mutations to be accessible to the server prisma service
    }
})

export default Mutation;
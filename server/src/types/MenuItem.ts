import {prismaObjectType} from 'nexus-prisma'

const MenuItem = prismaObjectType({
    name: 'MenuItem',
    definition(t) {
        t.prismaFields({
            filter: [
                'updatedAt',
                'createdAt',
            ]
        })
    }
})

export default MenuItem;
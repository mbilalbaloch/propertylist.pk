import type { CollectionConfig } from 'payload'

export const Property: CollectionConfig = {
    slug: 'property',
    admin: {
        defaultColumns: ['title', 'description', 'phoneNumber'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'phoneNumber',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
    ]
}
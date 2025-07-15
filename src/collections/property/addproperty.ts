import type { CollectionConfig } from 'payload'

export const AddProperty: CollectionConfig = {
    slug: 'add-property',
    admin: {
        defaultColumns: ['title', 'description', 'phoneNumber'],
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
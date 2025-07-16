import type { CollectionConfig } from 'payload'

const Property: CollectionConfig = {
  slug: 'property',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media', // make sure media collection is enabled
      required: true,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
    },
    {
      name: 'area',
      label: 'Area',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Property Type',
      type: 'select',
      required: true,
      options: ['House', 'Flat', 'Plot', 'Commercial'],
    },
    {
      name: 'price',
      label: 'Price (PKR)',
      type: 'number',
      required: true,
    },
    {
      name: 'size',
      label: 'Size (e.g., 5 Marla, 1 Kanal)',
      type: 'text',
      required: true,
    },
    {
      name: 'bedrooms',
      label: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      label: 'Bathrooms',
      type: 'number',
    },

  ],
};

export { Property }
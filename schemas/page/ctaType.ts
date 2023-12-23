import { defineField, defineType } from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Link',
      type: 'reference',
      to: [{ type: 'page' }],
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary Link',
      type: 'reference',
      to: [{ type: 'page' }],
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Vertical', value: 'vertical' },
          { title: 'Horizontal', value: 'horizontal' },
        ],
        layout: 'radio',
      },
    }),
  ],
})

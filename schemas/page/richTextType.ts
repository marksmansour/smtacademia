import { defineField, defineType } from 'sanity'

export const richTextType = defineType({
  name: 'richText',
  type: 'object',
  title: 'Text',
  fields: [
    defineField({
      name: 'text',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})

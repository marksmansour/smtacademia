import { defineArrayMember, defineField, defineType } from 'sanity'

export const richTextType = defineType({
  name: 'richText',
  type: 'object',
  title: 'Text',
  preview: {
    prepare() {
      return {
        title: 'Text',
      }
    },
  },
  fields: [
    defineField({
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})

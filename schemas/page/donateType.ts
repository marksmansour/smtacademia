import { defineField, defineType } from 'sanity'

export const donateType = defineType({
  name: 'donate',
  type: 'object',
  title: 'Donate',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
    }),
  ],
})

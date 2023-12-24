import { defineField, defineType } from 'sanity'

export const formType = defineType({
  name: 'form',
  type: 'object',
  title: 'Form',
  preview: {
    prepare() {
      return {
        title: 'Form',
      }
    },
  },
  fields: [
    defineField({
      name: 'form',
      title: 'Form Name',
      type: 'string',
      options: {
        list: [{ title: 'Contact Form', value: 'contact' }],
        layout: 'radio',
      },
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const eventListType = defineType({
  name: 'eventList',
  type: 'object',
  title: 'Event List',
  preview: {
    prepare() {
      return {
        title: 'Events',
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
        },
      ],
    }),
  ],
})

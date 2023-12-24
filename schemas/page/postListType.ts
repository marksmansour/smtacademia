import { defineField, defineType } from 'sanity'

export const postListType = defineType({
  name: 'postList',
  type: 'object',
  title: 'Post List',
  preview: {
    prepare() {
      return {
        title: 'Blog Posts',
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    }),
  ],
})

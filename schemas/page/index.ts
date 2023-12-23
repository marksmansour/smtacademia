import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  icon: DocumentIcon,
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'cta',
          type: 'cta',
        }),
        defineArrayMember({
          name: 'donate',
          type: 'donate',
        }),
        defineArrayMember({
          name: 'eventList',
          type: 'eventList',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'postList',
          type: 'postList',
        }),
        defineArrayMember({
          name: 'richText',
          type: 'richText',
        }),
      ],
    }),
  ],
})

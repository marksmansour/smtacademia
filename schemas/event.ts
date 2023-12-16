import { CalendarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import authorType from './author'
import { format, parseISO } from 'date-fns'

export default defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: [{ type: authorType.name }],
    // }),
    defineField({
      name: 'date',
      title: 'Date and Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Event URL',
      type: 'url',
    }),
    defineField({
      name: 'repeat',
      title: 'Repeat',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '' },
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'image',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})

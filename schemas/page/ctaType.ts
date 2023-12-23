import { defineField, defineType } from 'sanity'

import { links } from 'components/Navbar'
const navLinks = links.flatMap((link) =>
  link.dropdown
    ? link.sublinks?.map((sub) => ({ value: sub.href, title: sub.title })) || []
    : [{ value: link.href, title: link.title }],
)

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
      name: 'primaryText',
      title: 'Primary Link Text',
      type: 'string',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Link',
      type: 'string',
      options: {
        list: navLinks,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'secondaryText',
      title: 'Secondary Link Text',
      type: 'string',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary Link',
      type: 'string',
      options: {
        list: navLinks,
        layout: 'radio',
      },
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

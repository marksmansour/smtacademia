import { groq } from 'next-sanity'

export const pageQuery = groq`
*[_type == "page" && title == $title][0]{
  title,
  pageBuilder[]{
    _type == "cta" => {
      _type,
      title,
      text,
      primary,
      primaryText,
      secondary,
      secondaryText,
      style
    },
    _type == "donate" => {
      _type,
      text
    },
    _type == "eventList" => {
      _type,
      heading,
      events[]->{
        _id,
        title,
        description,
        "author": author->{name, picture},
        date,
        location,
        url,
        repeat,
        "slug": slug.current,
        status
      }
    },
    _type == 'form' => {
      _type,
      form
    },
    _type == "hero" => {
      _type,
      heading,
      description,
      image
    },
    _type == "postList" => {
      _type,
      heading,
      posts[]->{
        _id,
        title,
        date,
        _updatedAt,
        excerpt,
        coverImage,
        "slug": slug.current,
        "author": author->{name, picture},
      }
    },
    _type == "richText" => {
      _type,
      text
    },
  },
}
`

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const postsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

const eventFields = groq`
  _id,
  title,
  description,
  "author": author->{name, picture},
  date,
  location,
  url,
  repeat,
  "slug": slug.current,
  status
`

export const eventsQuery = groq`
*[_type == "event"] | order(date desc) {
  ${eventFields}
}`

export const eventQuery = groq`
*[_type == "event" &&  slug.current == $slug] | order(date desc) [0] {
  content,
  ${eventFields}
}`

export const eventSlugsQuery = groq`
*[_type == "event" && defined(slug.current)][].slug.current
`

export const eventBySlugQuery = groq`
*[_type == "event" && slug.current == $slug][0] {
  ${eventFields}
}
`

const resourceFields = groq`
  _id,
  name,
  description,
  "file": file.asset->url,
  url
`

export const resourcesQuery = groq`
*[_type == "resource"] | order(date desc) {
  ${resourceFields}
}`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  excerpt?: any
  about?: any
  ogImage?: {
    title?: string
  }
}

export interface Event {
  _id: string
  title?: string
  slug?: string
  description?: string
  author?: Author
  date?: string
  location?: string
  url?: string
  repeat?: string
}

export interface Resource {
  _id: string
  name?: string
  description?: string
  file?: string
  url?: string
}

export interface Page {
  _id: string
  title: string
  pageBuilder: any[]
}

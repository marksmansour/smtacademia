/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import {
  apiVersion,
  dataset,
  DRAFT_MODE_ROUTE,
  projectId,
} from 'lib/sanity.api'
import { locate } from 'plugins/locate'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import eventsType from 'schemas/event'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'
import resourcesType from 'schemas/resource'
import pageType from 'schemas/page'
import { ctaType } from 'schemas/page/ctaType'
import { donateType } from 'schemas/page/donateType'
import { eventListType } from 'schemas/page/eventListType'
import { formType } from 'schemas/page/formType'
import { heroType } from 'schemas/page/heroType'
import { postListType } from 'schemas/page/postListType'
import { richTextType } from 'schemas/page/richTextType'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: [
      settingsType,
      pageType,
      postType,
      eventsType,
      resourcesType,
      ctaType,
      donateType,
      eventListType,
      formType,
      heroType,
      postListType,
      richTextType,
    ],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
      title: 'Content',
    }),
    presentationTool({
      locate,
      previewUrl: {
        origin:
          typeof location === 'undefined'
            ? 'http://localhost:3000'
            : location.origin,
        preview: '/',
        draftMode: {
          enable: DRAFT_MODE_ROUTE,
        },
      },
      title: 'Live Preview',
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
})

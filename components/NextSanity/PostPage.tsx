import Container from 'components/NextSanity/BlogContainer'
import BlogHeader from 'components/NextSanity/BlogHeader'
import Layout from 'components/NextSanity/BlogLayout'
import MoreStories from 'components/NextSanity/MoreStories'
import PostBody from 'components/NextSanity/PostBody'
import PostHeader from 'components/NextSanity/PostHeader'
import PostPageHead from 'components/NextSanity/PostPageHead'
import PostTitle from 'components/NextSanity/PostTitle'
import SectionSeparator from 'components/NextSanity/SectionSeparator'
import PageHeader from 'components/PageHeader'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import AuthorAvatar from './AuthorAvatar'
import BlogSection from 'components/Home/BlogSection'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />
      <Layout preview={preview} loading={loading}>
        <PageHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <Container>
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="my-24 sm:my-32">
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
        {morePosts?.length > 0 && (
          <Container>
            <SectionSeparator />
            <BlogSection posts={morePosts} />
          </Container>
        )}
      </Layout>
    </>
  )
}

import Container from 'components/BlogContainer'
import Layout from 'components/Layout'
import PostBody from 'components/PostBody'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import PageHeader from 'components/PageHeader'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import BlogSection from 'components/BlogSection'

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
            <PostBody content={post.content} />
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

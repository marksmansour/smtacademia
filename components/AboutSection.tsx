import BlogContainer from './BlogContainer'
import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'

export default function AboutSection({ excerpt }: { excerpt: any }) {
  return (
    <div className="my-16 sm:my-20">
      <BlogContainer>
        <div className={styles.portableText}>
          <PortableText value={excerpt} />
        </div>
      </BlogContainer>
    </div>
  )
}

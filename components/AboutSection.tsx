import BlogContainer from './BlogContainer'
import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'

export default function AboutSection({ excerpt }: { excerpt: any }) {
  return (
    <div className="bg-white my-24 sm:my-32">
      <BlogContainer>
        <div className={styles.portableText}>
          <PortableText value={excerpt} />
        </div>
      </BlogContainer>
    </div>
  )
}

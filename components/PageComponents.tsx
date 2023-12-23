import HeroSection from './HeroSection'
import CtaSection from './CtaSection'
import BlogSection from './BlogSection'
import EventSection from './EventSection'
import AboutSection from './AboutSection'

export default function PageComponents({ sections }: any) {
  return (
    <div>
      {sections.map((section: any, index: number) => {
        switch (section._type) {
          case 'cta':
            return (
              <CtaSection
                key={`${section._type}-${index}`}
                title={section.title}
                text={section.text}
                primary={section.primary}
                primaryText={section.primaryText}
                secondary={section.secondary}
                secondaryText={section.secondaryText}
                style={section.style}
              />
            )
          case 'donate':
            return <></>
          case 'eventList':
            return (
              <EventSection
                key={`${section._type}-${index}`}
                title={section.heading}
                events={section.events}
              />
            )
          case 'form':
            return <></>
          case 'hero':
            return (
              <HeroSection
                key={`${section._type}-${index}`}
                title={section.heading}
                description={''}
                image={section.image}
              />
            )
          case 'postList':
            return (
              <BlogSection
                key={`${section._type}-${index}`}
                title={section.heading}
                posts={section.posts}
              />
            )
          case 'richText':
            return (
              <AboutSection
                key={`${section._type}-${index}`}
                excerpt={section.text}
              />
            )
          default:
            return <></>
        }
      })}
    </div>
  )
}

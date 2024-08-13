import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Firas Mlayeh | Events</title>
        <meta
          name="description"
          content="I’ve spoken at events in my local community and been invited to some event talks."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events in my local community and been invited to some event talks."
        intro="Speaking at events is a great way to share your knowledge and meet new people. I’ve spoken at events in my local community and been invited to some event talks"
      >
        <div className="space-y-20">
          <SpeakingSection title="Technical Skills ">
            <Appearance 
              title="Javascript"
              description="Good"
            />
            <Appearance 
              title="React,Nextjs,React native,node.js,Express,JWT,Tailwind,mui"
              description="Good"
            />
            <Appearance 
              title="Mysql,MongoDb"
              description="Good"
            />
            <Appearance 
              title="Git,GitHub,VisualStudioCode"
              description="Good"
            />
           
           
          </SpeakingSection>
          <SpeakingSection title="Soft Skills ">
          <Appearance
              title="Time mangement"
            />
            <Appearance
              title="Problem solving"
            />
            <Appearance
              title="TeamWork"
            />
            <Appearance
              title="Adaptability"
            />
            <Appearance
              title="Critical thinking"
            />
           
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

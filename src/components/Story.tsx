import { BookOpen, GitPullRequest, Globe2, Hammer, Share2, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PILLARS = [
  {
    icon: BookOpen,
    title: "Educate",
    body: "Workshops, pairing, and public docs so first-time contributors can land a real pull request — not just watch a talk.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "Community-owned tools for infrastructure, the contributor lifecycle, and the messy work of keeping shared libraries healthy.",
  },
  {
    icon: Share2,
    title: "Share",
    body: "Events, open roadmaps, and knowledge that stay in Nairobi and travel across Africa.",
  },
] as const

const REASONS = [
  {
    icon: Globe2,
    title: "Rooted in Nairobi",
    body: "We ship for the constraints we live with — connectivity, cost, and the talent already here. Built in Kenya, useful far beyond it.",
  },
  {
    icon: Users,
    title: "Community, not a funnel",
    body: "Contributors write the tools they use. Maintainers review in the open. Decisions belong to the people who ship the code.",
  },
  {
    icon: GitPullRequest,
    title: "From issue to impact",
    body: "We do not stop at tutorials. We walk people from their first GitHub issue to production software they can point at.",
  },
] as const

export default function Story() {
  return (
    <>
      <section id="what-we-do" className="relative z-10 scroll-mt-28 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="relative max-w-xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-background/70 blur-2xl"
            />
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              What we do
            </p>
            <h2 className="font-heading mt-4 text-4xl tracking-tight text-foreground md:text-5xl">
              We teach people to ship in the open.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Salamander Tech Hub is a Nairobi open-source community founded in
              2025. We educate and empower developers, designers, and makers to
              contribute to real software — not as spectators, but as
              maintainers. Open source is for everyone. We forge the tools that
              power that future, one pull request at a time.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {PILLARS.map((item) => (
              <Card
                key={item.title}
                className="bg-card/80 py-5 backdrop-blur-md"
              >
                <CardHeader className="grid grid-cols-[auto_1fr] items-start gap-4">
                  <item.icon
                    className="mt-0.5 size-5 text-primary"
                    aria-hidden
                  />
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-1.5">
                      {item.body}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-salamander" className="relative z-10 scroll-mt-28 px-6 pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <div className="relative max-w-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-background/70 blur-2xl"
            />
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Why Salamander
            </p>
            <h2 className="font-heading mt-4 text-4xl tracking-tight text-foreground md:text-5xl">
              Why choose us
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Plenty of communities talk about open source. We run the loop:
              learn in public, ship together, and leave the work where the next
              person can find it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {REASONS.map((item) => (
              <Card
                key={item.title}
                className="h-full bg-card/80 backdrop-blur-md"
              >
                <CardHeader>
                  <item.icon
                    className="mb-3 size-5 text-primary"
                    aria-hidden
                  />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-11 rounded-full px-7"
              nativeButton={false}
              render={<Link to="/contact" />}
            >
              Get involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full px-7"
              nativeButton={false}
              render={<Link to="/about" />}
            >
              Read our story
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

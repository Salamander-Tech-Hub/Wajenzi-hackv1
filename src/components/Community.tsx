import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const IMPACT = [
  {
    stat: "500+",
    label: "Active members",
    tag: "Community",
    body: "A Nairobi-rooted network of developers, designers, and makers shipping in the open.",
  },
  {
    stat: "1k+",
    label: "Contributions",
    tag: "Contribution",
    body: "Issues, reviews, and pull requests that stay public so the next person can pick them up.",
  },
  {
    stat: "2025",
    label: "Founded",
    tag: "Governance",
    body: "A community started to demystify open-source contribution and keep decisions with the people who write the code.",
  },
] as const;

const EVENTS = [
  {
    title: "Contributor workshops",
    tag: "Documentation",
    body: "Pairing sessions and public docs so first-time contributors land a real pull request — not just watch a talk.",
  },
  {
    title: "Community meetups",
    tag: "Community",
    body: "Nairobi gatherings for maintainers and newcomers to share roadmaps, review work, and leave the notes where others can find them.",
  },
  {
    title: "From issue to impact",
    tag: "Maintainership",
    body: "Walkthroughs that take a GitHub issue through review and into production software people can point at.",
  },
] as const;

export default function Community() {
  return (
    <section id="community" className="relative z-10 scroll-mt-28 px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Community
          </p>
          <h2 className="font-heading mt-4 text-4xl tracking-tight text-foreground md:text-5xl">
            Events hosted and impact
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Salamander Tech Hub runs workshops, meetups, and contributor loops
            in Nairobi. The numbers below come from the community itself —
            members, contributions, and the programs we host.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {IMPACT.map((item) => (
            <Card key={item.label} className="bg-card/70 backdrop-blur-md">
              <CardHeader>
                <Badge variant="outline" className="w-fit font-mono uppercase">
                  {item.tag}
                </Badge>
                <p className="font-heading text-5xl text-primary">{item.stat}</p>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {EVENTS.map((item) => (
            <Card key={item.title} className="bg-card/70 backdrop-blur-md">
              <CardHeader>
                <p className="font-mono text-[10px] tracking-[0.14em] text-primary uppercase">
                  {item.tag}
                </p>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

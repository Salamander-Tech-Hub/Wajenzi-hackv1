import React from 'react';
import NavBar from '../components/Navbar';
import { SocialIcon } from 'react-social-icons';
import ThemeCard from '../components/ThemeCard';
import ThemeButton from '../components/ThemeButton';
import MediaPlaceholder from '../components/MediaPlaceholder';

import andrewKimImg from '../assets/team/andi.jpeg';
import sharonMurugiImg from '../assets/team/sharon.jpeg';
import adrianCharlesImg from '../assets/team/adrian.jpeg';
import randyLuttaImg from '../assets/team/randy.jpeg';
import sidneyBarakaImg from '../assets/team/sidney.png';
import steveKingoroImg from '../assets/team/steve-kingoro.svg';
import christianTazmaImg from '../assets/team/christian-tazma.svg';
import charlesMbuguaImg from '../assets/team/charles.jpeg';
import jeniferMbalaImg from '../assets/team/jenifer_mbala.jpeg';
import heroVideo from '../assets/Untitled design.mp4';
import leadersTeamImg from '../assets/leaders-team.jpeg';
import champsImg from '../assets/champs.jpeg';
import communityImg from '../assets/community.jpeg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: { url: string; label: string }[];
}

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Andrew Kim J.',
      role: 'Project Author & Technical Lead',
      bio: 'Leads the technical vision and architecture for Salamander projects.',
      avatar: andrewKimImg,
      socials: [
        { url: 'https://linkedin.com', label: 'LinkedIn' },
        { url: 'https://github.com', label: 'GitHub' },
      ],
    },
    {
      name: 'Sharon Murugi',
      role: 'Project Author & Community Lead',
      bio: 'Drives community engagement and authors key learning materials for contributors.',
      avatar: sharonMurugiImg,
      socials: [
        { url: 'https://linkedin.com', label: 'LinkedIn' },
        { url: 'https://twitter.com', label: 'Twitter' },
      ],
    },
  ];

  const coreTeam: TeamMember[] = [
    { name: 'Adrian Charles', role: 'Partnerships and Outreach Lead', bio: 'Builds and maintains partner relationships and outreach programs.', avatar: adrianCharlesImg, socials: [{ url: 'https://linkedin.com', label: 'LinkedIn' }] },
    { name: 'Randy Lutta', role: 'Team Member', bio: 'Contributes across features and community initiatives.', avatar: randyLuttaImg, socials: [{ url: 'https://github.com', label: 'GitHub' }] },
    { name: 'Sidney Baraka', role: 'Community Manager', bio: 'Organizes events and supports community contributors.', avatar: sidneyBarakaImg, socials: [{ url: 'https://twitter.com', label: 'Twitter' }] },
    { name: 'Jenifer Mbala', role: 'Events Planner & Manager', bio: 'Plans and runs Salamander events, meetups, and community programs end to end.', avatar: jeniferMbalaImg, socials: [{ url: 'https://linkedin.com', label: 'LinkedIn' }] },
    { name: 'Steve Kingoro', role: 'Team Member', bio: 'Works on integrations and project polish.', avatar: steveKingoroImg, socials: [{ url: 'https://linkedin.com', label: 'LinkedIn' }] },
    { name: 'Christian Tazma', role: 'Open Source Projects Lead', bio: 'Coordinates open-source initiatives and contributor workflows.', avatar: christianTazmaImg, socials: [{ url: 'https://github.com', label: 'GitHub' }] },
    { name: 'Charles Mbugua', role: 'Maintainer', bio: 'Maintains core repos and reviews community PRs.', avatar: charlesMbuguaImg, socials: [{ url: 'https://github.com', label: 'GitHub' }] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-sans text-slate-200">
      <NavBar />

      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6">
              About <span className="text-primary text-glow italic">Salamander</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              A community dedicated to educating and empowering people to contribute to{' '}
              <span className="text-primary font-bold">open source software</span>.
            </p>
            {/* Hero media placeholder – full-width banner / hero video */}
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80">
              <video
                src={heroVideo}
                className="w-full aspect-[21/9] object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </section>

        {/* Mission + media */}
        <section className="py-20 bg-accent-dark/40 border-y border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">What we do</span>
                <h2 className="text-4xl font-bold text-white mt-2 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  At Salamander, we believe that open source is for everyone. Our mission is to demystify open source contribution and create a welcoming space for learners at all levels. We forge the tools that power the future, one pull request at a time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-white">Open by Design</h4>
                      <p className="text-slate-400">Everything we build is accessible, transparent, and collaborative.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-white">Community Driven</h4>
                      <p className="text-slate-400">Decisions are made by the people who write the code.</p>
                    </div>
                  </div>
                </div>
              </div>
              <ThemeCard className="overflow-hidden">
                <img
                  src={leadersTeamImg}
                  alt="Salamander Leadership Team"
                  className="w-full h-auto object-cover"
                />
              </ThemeCard>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 border-b border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ThemeCard className="p-8 text-center">
                <span className="text-5xl font-black text-primary block mb-2">500+</span>
                <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Active Members</span>
              </ThemeCard>
              <ThemeCard className="p-8 text-center">
                <span className="text-5xl font-black text-primary block mb-2">1k+</span>
                <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Contributions</span>
              </ThemeCard>
              <ThemeCard className="p-8 text-center">
                <span className="text-5xl font-black text-primary block mb-2">100%</span>
                <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Open Source</span>
              </ThemeCard>
            </div>
          </div>
        </section>

        {/* Our Story – alternating text + media */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">The story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-16">Why we exist</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">From idea to community</h3>
                <p className="text-slate-400 leading-relaxed">
                  Salamander started with a simple belief: that everyone can contribute to open source. We built a space where engineers, designers, and makers learn together and ship in the open.
                </p>
              </div>
              <ThemeCard className="overflow-hidden">
                <img
                  src={champsImg}
                  alt="Salamander Champions"
                  className="w-full aspect-video object-cover"
                />
              </ThemeCard>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ThemeCard className="order-2 lg:order-1 overflow-hidden">
                <img
                  src={communityImg}
                  alt="Salamander Community and Culture"
                  className="w-full aspect-video object-cover"
                />
              </ThemeCard>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-4">Build. Burn. Evolve.</h3>
                <p className="text-slate-400 leading-relaxed">
                  We iterate in public, embrace feedback, and keep our tools and processes transparent. That’s how we stay aligned with the community we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Partners – with image placeholders */}
        <section className="py-24 bg-accent-dark/40 border-y border-slate-800/50">
          <div className="container mx-auto px-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">The visionaries</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-16">Founding Partners</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <ThemeCard key={index} className="overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    {/* Replace this block with <img src={founder.avatar} /> when you have the photo */}
                    {founder.avatar ? (
                      <img
                        alt={founder.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        src={founder.avatar}
                      />
                    ) : (
                      <MediaPlaceholder type="image" aspectRatio="portrait" label={`${founder.name} – add photo`} className="w-full h-full rounded-none border-0" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                      <h3 className="text-3xl font-bold text-white mb-1">{founder.name}</h3>
                      <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">{founder.role}</p>
                      <p className="text-slate-300 leading-relaxed max-w-md">{founder.bio}</p>
                      <div className="flex gap-3 mt-6">
                        {founder.socials.map((social, idx) => (
                          <SocialIcon
                            key={idx}
                            url={social.url}
                            fgColor="#0f172a"
                            bgColor="#FDE047"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </ThemeCard>
              ))}
            </div>
          </div>
        </section>

        {/* Culture / “See us in action” video placeholder */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-4">See us in action</h2>
            <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
              A short clip of our culture, events, or day-to-day. Drop your video here.
            </p>
            <ThemeCard className="overflow-hidden max-w-4xl mx-auto">
              <MediaPlaceholder type="video" aspectRatio="video" label="Company or culture video" className="w-full" />
            </ThemeCard>
          </div>
        </section>

        {/* Core Leadership */}
        <section className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Core Leadership</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto italic mb-16">The experts driving our key initiatives and community growth.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <ThemeCard key={index}>
                  <div className="p-8 bg-background-dark/50 group relative h-full">
                    {member.avatar ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
                        <img alt={member.name} className="w-full h-full object-cover" src={member.avatar} />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 bg-slate-800/60 flex items-center justify-center mb-6">
                        <span className="text-primary/60 text-xs font-bold text-center px-2">Photo</span>
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-primary font-mono text-xs uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex gap-3 justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                      {member.socials.map((social, idx) => (
                        <SocialIcon
                          key={idx}
                          url={social.url}
                          fgColor="#fff"
                          bgColor="transparent"
                          style={{ height: 30, width: 30, border: '1px solid #334155', borderRadius: '50%' }}
                          className="hover:border-primary transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </ThemeCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-slate-800/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the community</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">Ready to contribute or partner with us? Get in touch.</p>
            <ThemeButton to="/contact" variant="primary">Get in touch</ThemeButton>
          </div>
        </section>
      </main>

      <footer className="bg-background-dark border-t border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-slate-900 text-sm font-bold">∞</span>
              </div>
              <span className="text-lg font-bold text-white">Salamander</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Security</a>
              <a className="hover:text-primary transition-colors" href="#">Status</a>
            </div>
            <p className="text-sm text-slate-600">© 2026 Salamander Tech Hub. Built with code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

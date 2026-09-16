import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import TextType from "../components/TextType/TextType";
import ThemeButton from "../components/ThemeButton";
import ThemeCard from "../components/ThemeCard";
import LongShadowText from "../components/LongShadowText";
import KineticText from "../components/KineticText";
import salamanderLogo from "../assets/salamanderlogo.jpeg";

// ProjectCard Component
interface ProjectCardProps {
  icon?: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ label, title, description, tags, image }) => {
  return (
    <article
      className="rounded-md overflow-hidden flex flex-col h-full group"
      style={{
        transition: "all 0.3s ease",
        border: "1px solid rgba(244, 208, 63, 0.2)",
        boxShadow: "0 0 15px rgba(252, 211, 77, 0.1)",
        backgroundColor: "rgba(17, 17, 17, 0.8)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#F4D03F";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(244, 208, 63, 0.3)";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(244, 208, 63, 0.2)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(252, 211, 77, 0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="h-48 overflow-hidden relative bg-gray-900 border-b border-white/5">
        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="text-yellow-300 text-sm">★</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{label}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-mono px-2 py-1 rounded ${idx === 0
                ? "border border-yellow-300/30 text-yellow-300 bg-yellow-300/5"
                : "border border-white/10 text-gray-400"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const MainPage = () => {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" style={{ background: "radial-gradient(circle at center top, #1a1a1a 0%, #000000 100%)" }}>
          {/* Background Honeycomb Pattern */}
          <div className="absolute top-0 left-0 w-1/2 h-full opacity-50 z-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"104\" viewBox=\"0 0 60 104\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0L60 17.3205V51.9615L30 69.282L0 51.9615V17.3205L30 0Z M30 104L0 86.6795V51.9615L30 34.641L60 51.9615V86.6795L30 104Z\" fill=\"%231a1a1a\" fill-opacity=\"0.2\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
            backgroundRepeat: "repeat"
          }}></div>

          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-1/2 h-full z-0" style={{
            background: "linear-gradient(90deg, rgba(5,5,5,0) 0%, rgba(5,5,5,1) 80%)"
          }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
                  <span className="text-[#FCD34D]" style={{ textShadow: "0 0 10px rgba(244, 208, 63, 0.5)" }}>
                    <TextType
                      text={["Build.", "Burn.", "Build. Burn."]}
                      typingSpeed={100}
                      deletingSpeed={50}
                      loop={true}
                      showCursor={true}
                    />
                  </span><br />
                  <KineticText as="span" className="text-white" delay={0.4}>Evolve.</KineticText>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                  Building Umoja in Kenya’s Open Source Community.<br />
                  Fostering collaboration, innovation, and shared knowledge.<br />
                  Empowering developers to create solutions for Africa and beyond
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ThemeButton to="/contact" variant="primary">View our shop</ThemeButton>
                  <ThemeButton href="https://github.com/Salamander-Tech-Hub" variant="secondary" newTab>View our GitHub →</ThemeButton>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative flex justify-center lg:justify-end items-center">
                <div className="absolute inset-0 bg-yellow-300 blur-[100px] opacity-10 rounded-full scale-75"></div>
                <img alt="Digital Salamander Low Poly Art"
                  className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGo5GKWajy6Zkn9jSdyDVK6eTLOJvxOWUdcB14lf475yq6ibTO76UCgs5nHVkoShlLxyptCA8O6yS5Ms4LTGrogXoyO67fyi7DDbqs5T71VpLRiuq4P_u-spHAChjU8gb848xRDfJOi0hS61g4G2z7XajMowDHWxvZYyAR6QqQl7YcwgBwlymwVuV3dwHjKo8IPeHryoEFuM3xM5XKxMg9u8YXlMV1rK32avdlLSvmnD3Js-YBUep0k7DhhegFgCqrJJOYWW8i0if" />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="border-y border-white/5 bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Pioneering Open Infrastructure</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default tracking-wider">LINUX</span>
              <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default tracking-wider">APACHE</span>
              <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default tracking-wider">GITHUB</span>
              <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default tracking-wider">DOCKER</span>
              <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default tracking-wider">PYTHON</span>
            </div>
          </div>
        </section>

        {/* Open-Source Initiatives Section */}
        <section className="py-24 relative" id="projects" style={{ background: "radial-gradient(circle at center top, #1a1a1a 0%, #000000 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <LongShadowText shadowLength={10} className="text-3xl md:text-5xl font-bold mb-4 block" as="h2">
                Open-Source Initiatives
              </LongShadowText>
              <p className="text-gray-500 max-w-2xl mx-auto mb-8">Our commitment to the community goes beyond code. We build tools that empower developers worldwide.</p>
              <div className="w-20 h-1 bg-yellow-300 mx-auto"></div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ThemeCard className="h-full">
                <ProjectCard
                  icon="hub"
                  label="Distributed Core"
                  title="Community-Built Core Tool"
                  description="Focusing on distributed collaboration and battle-tested software stability for enterprise environments."
                  tags={["Communication", "Python", "GitHub Actions", "CI/CD"]}
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAAeAWT2R6UUIFy7_Xu35EKcAI6GzAUk8hXp04gcGli8nNgWx4LH9TpUviZkIQqoFFQlb3qaXjhpmvbqnore-kHEycaxevjcTgn1ntacyHyVCsIzo53CoKznIfqN30Xjj_PiFOE1FVRJI5Cwtc0wMbKzfvww1iRV7J8vdFk-cgEflMWw30VbgIwAH4r9a6zGEvFezBfpP7l0iyRZAokYQMO0JU852LVus4GoPjwZg0YUfecbzgRDWE1t9DvQqYYb7oFed6CoJS-zHoj"
                />
              </ThemeCard>
              <ThemeCard className="h-full">
                <ProjectCard
                  icon="public"
                  label="Global Infrastructure"
                  title="Open Infrastructure for the Global South"
                  description="Scalable payments and identity systems designed specifically for emerging digital economies."
                  tags={["PostgreSQL", "Flutter", "APIs"]}
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1EBSZh_yY-HSCyhu_wX_B9X8qikFEjuRD0b_EbbjZp4wkozXx3RPPltNC49KD6Q5-QCg1Fkk_obO435c_OQ1oEEXNM8TYC0Div3F_jk6jw0wK8JnHxNHOpNHkwkg7hErBgRbWPnPfc96laPMBfr8LCJ73p1xQHWM864qi7KzKtl_uxXPL8w7CY9b0TXgp0bUQcZY9Kye_Wff5X_Z7dD0wLWoECe4vKbVfzcPgnY_1q_p3JJj1fkcJH8CNuPt_aOXFgHdTB8iEqpTz"
                />
              </ThemeCard>
              <ThemeCard className="h-full">
                <ProjectCard
                  icon="conversion_path"
                  label="Dev Lifecycle"
                  title="From Issue to Impact"
                  description="End-to-end tooling to streamline the lifecycle from a GitHub issue report to a deployed feature."
                  tags={["TypeScript", "React", "Testing"]}
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAjErb7W9uMLZW089a6ZeW_b_OSvqo9IvLOx9Oo-SgUhK8F6DweVw6ueWI_35ptJLsBYF6KticGygHkvrCaPR_ScRkDo4gHE3iXoCHwpmPonAw9E6Wu2sXRyKjvKdC3RFHBdgrzvq7kpmJtJSKVTTn3B1Ox_cVv0X_CMS4OG2uJVIlkkDUbn54Z_sBQB4Y_l_k1-TSmh0u5uSeCq4SlQdl6Ga_I0lUrQ683LcbeLW2WeJ6UTXLg6Q982nOYlyPlVJfGReQak04hMTXh"
                />
              </ThemeCard>
              <ThemeCard className="h-full">
                <ProjectCard
                  icon="security"
                  label="Trust Engine"
                  title="Cross-Project Dependency Patch"
                  description=" Maintainers from different projects come together to spot common problems in shared tools or libraries."
                  tags={["Transparency", "Cross-repo repair", "Collaborative maintenance"]}
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xD_gOlmkMCVkknokA8ks52dImxTqJSO9887myr8DLeKbOYr41Sb4FQNsbjFxW33dESouEtpIlJTId5HnkJC9-HGQd0PAxlsE4t_B9_1nWeMEvpKQ1BiYBuJuDry7ITCcj3U0I9uPDWa1yqKOb_zBZpLFcabFSNRn05Bk18viHXQWk0lLyGcVdlUOBFaVoVssOdr7E09i_bzt1qQ0IG0kaFjuFRnAzj-JPpe-qBGk2LnBr_avMgAu7PNAdaigUv3kOXl770M8uddY"
                />
              </ThemeCard>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/5 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xl tracking-tight"><span className="font-bold">Salamander</span> Tech Hub</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Forging the future of software with heat, pressure, and precision.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="mailto:hello@salamander.tech" className="hover:text-yellow-300 transition-colors">hello@salamander.tech</a></li>
                  <li>+254 717600514</li>
                  <li>Nairobi, KE</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
                  <li><a href="https://github.com/Salamander-Tech-Hub" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">Open Source</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Social</h4>
                <SocialMediaCards />
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={salamanderLogo} alt="Salamander Tech Hub logo" className="h-8 w-auto object-contain" />
                <p className="text-xs text-gray-600"> 2026 Salamander Tech Hub. All rights reserved.</p>
              </div>
              <p className="text-xs text-gray-600">Built with transparency and intent.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

// SocialMediaCards Component
const SocialMediaCards: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/salamander-tech-hub/', color: '#0077B5', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/Salamander_hub', color: '#03A9F4', icon: 'twitter' },
    { name: 'GitHub', url: 'https://github.com/Salamander-Tech-Hub', color: '#000000', icon: 'github' },
    { name: 'Discord', url: '#', color: '#8C9EFF', icon: 'discord' },
    { name: 'WhatsApp', url: '#', color: '#25D366', icon: 'whatsapp' },
  ];

  return (
    <div className="social-cards-container" style={socialStyles.container}>
      <style>{socialStyles.css}</style>
      <div className="social-main">
        <div className="social-back"></div>
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            style={{ ...socialStyles.card, '--card-color': social.color } as React.CSSProperties}
            title={social.name}
          >
            <SocialIcon iconType={social.icon} />
          </a>
        ))}
        <p className="social-text">FOLLOW<br /><br />US</p>
      </div>
    </div>
  );
};

// Social Icon Component
interface SocialIconProps {
  iconType: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ iconType }) => {
  switch (iconType) {
    case 'linkedin':
      return (
        <svg height="30px" width="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="social-icon linkedin">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="social-icon twitter">
          <path d="M42,12c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" fill="currentColor"></path>
        </svg>
      );
    case 'github':
      return (
        <svg height="30px" width="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="social-icon github">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="currentColor"></path>
        </svg>
      );
    case 'discord':
      return (
        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="social-icon discord">
          <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" fill="currentColor"></path>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="social-icon whatsapp">
          <path d="M24 4C12.954 4 4 12.954 4 24c0 3.534 0.878 6.881 2.431 9.788L4.5 43.5l10.006-3.072C18.03 42.824 20.936 44 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 2c9.941 0 18 8.059 18 18s-8.059 18-18 18c-2.709 0-5.286-0.618-7.569-1.722l-5.431 1.667 1.667-5.431C6.618 29.286 6 26.709 6 24c0-9.941 8.059-18 18-18zm0 0" fill="currentColor"></path>
          <path d="M33.5 25c-.276 0-.5.224-.5.5 0 .276.224.5.5.5.276 0 .5-.224.5-.5-.001-.276-.224-.5-.5-.5m-13-6c-3.59 0-6.5 2.91-6.5 6.5 0 1.245.349 2.408.954 3.398l-1.434 4.656 4.656-1.434c.99.605 2.153.954 3.398.954 3.59 0 6.5-2.91 6.5-6.5 0-3.59-2.91-6.5-6.5-6.5zm0 12c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z" fill="currentColor"></path>
        </svg>
      );
    default:
      return null;
  }
};

const socialStyles = {
  container: {} as React.CSSProperties,
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,

  css: `
    .social-cards-container {
      position: relative;
    }

    .social-main {
      display: flex;
      flex-wrap: wrap;
      width: 14em;
      align-items: center;
      justify-content: center;
      z-index: 1;
      position: relative;
    }

    .social-card {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-top-left-radius: 10px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(5px);
      border: 1px solid transparent;
      -webkit-backdrop-filter: blur(5px);
      transition: 0.4s ease-in-out, 0.2s background-color ease-in-out, 0.2s background-image ease-in-out;
      text-decoration: none;
      color: inherit;
    }

    .social-icon {
      opacity: 0;
      transition: 0.2s ease-in-out;
      fill: #999;
    }

    .social-card:nth-child(2) {
      border-radius: 0px;
    }

    .social-card:nth-child(3) {
      border-top-right-radius: 10px;
      border-top-left-radius: 0px;
    }

    .social-card:nth-child(4) {
      border-radius: 0px;
    }

    .social-card:nth-child(5) {
      border-radius: 0px;
    }

    .social-card:nth-child(6) {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 0px;
    }

    .social-card:nth-child(7) {
      border-radius: 0px;
    }

    .social-card:nth-child(8) {
      border-bottom-right-radius: 10px;
      border-top-left-radius: 0px;
    }

    .social-back {
      position: absolute;
      border-radius: 10px;
      transform: rotate(90deg);
      width: 11em;
      height: 11em;
      background: linear-gradient(270deg, #03a9f4, #25D366, #0077B5);
      z-index: -2;
      box-shadow: inset 0px 0px 180px 5px rgba(255, 255, 255, 0.3);
    }

    .social-main:hover {
      cursor: pointer;
    }

    .social-main:hover .social-back {
      opacity: 0;
    }

    .social-main:hover .social-card {
      margin: 0.2em;
      border-radius: 10px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.2);
    }

    .social-main:hover .social-text {
      opacity: 0;
      z-index: -3;
    }

    .social-main:hover .social-icon {
      opacity: 1;
    }

    .social-card:nth-child(2):hover {
      background-color: #0077B5;
    }

    .social-card:nth-child(2):hover .linkedin {
      fill: white;
    }

    .social-card:nth-child(3):hover {
      background-color: #03A9F4;
    }

    .social-card:nth-child(3):hover .twitter {
      fill: white;
    }

    .social-card:nth-child(4):hover {
      background-color: #000000;
    }

    .social-card:nth-child(4):hover .github {
      fill: white;
    }

    .social-card:nth-child(5):hover {
      background-color: #8C9EFF;
    }

    .social-card:nth-child(5):hover .discord {
      fill: white;
    }

    .social-card:nth-child(6):hover {
      background-color: #25D366;
    }

    .social-card:nth-child(6):hover .whatsapp {
      fill: white;
    }

    .social-text {
      position: absolute;
      font-size: 0.7em;
      transition: 0.4s ease-in-out;
      color: #999;
      text-align: center;
      font-weight: bold;
      letter-spacing: 0.33em;
      z-index: 3;
      line-height: 1.5;
    }
  `,
};

export default MainPage;
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projectData: Record<string, { title: string, description: string[], scopeOfWork: string[], image?: string }> = {
  'partner-1': {
    title: 'Method',
    image: 'https://i.postimg.cc/XY9TV8L0/A7V06537-(1).jpg',
    description: [
      'Highlight Productions provided full-scale production services for an exclusive Coachella after-party hosted by Method Products, featuring a headline performance by BLOND:ISH.',
      'Working closely with the event team and creative partners, we designed and executed a comprehensive production setup that transformed the venue into a high-energy, immersive environment aligned with the brand’s identity and the festival atmosphere.',
      'Our scope included complete power distribution, staging, crowd control infrastructure, custom lighting design, professional audio system deployment, and full DJ equipment and backline support. Every element was carefully integrated to ensure seamless performance flow and an elevated guest experience.',
      'The production was tailored to enhance both the visual impact and sonic quality of the event, creating a dynamic space that supported the artist’s performance while maintaining operational efficiency and safety for attendees.',
      'This project reflects our ability to deliver turnkey production solutions for large-scale, high-profile events, combining technical precision with creative execution in fast-paced festival environments.'
    ],
    scopeOfWork: [
      'Power Distribution',
      'Staging & Crowd Control Infrastructure',
      'Custom Lighting Design',
      'Professional Audio System Deployment',
      'DJ Equipment & Backline Support',
      'Turnkey Production Solutions'
    ]
  },
  'partner-2': {
    title: 'LONG FENG Art Car',
    image: 'https://i.postimg.cc/vBpZJhXQ/Photo-Apr-16-2026-10-27-34-PM.webp',
    description: [
      'Highlight Productions was commissioned to design and implement the full lighting system for the Long Feng Art Car, a large-scale mobile stage built for festival environments and nighttime events.',
      'Our role included the complete lighting design, show control architecture, and data distribution infrastructure for the vehicle. The goal was to create a visually striking lighting system capable of operating reliably in harsh outdoor conditions while delivering a high-impact show experience.',
      'The lighting design combined high-output moving fixtures, strobes, and laser systems to transform the art car into a fully immersive performance platform. Special attention was given to fixture placement, beam geometry, and visibility from long distances to ensure the structure would stand out across large festival grounds.',
      'In addition to the creative design, we engineered the entire control and networking system, including Art-Net distribution, DMX universe planning, and show control integration between lighting and laser systems. The system was built around a grandMA control environment, allowing precise programming and real-time show operation.',
      'Highlight Productions also supervised the project implementation and system integration, ensuring that all lighting, networking, and control components operated seamlessly on a moving platform.',
      'The result is a powerful and reliable lighting installation that transforms the Long Feng Art Car into a dynamic centerpiece for nighttime events and large-scale gatherings.'
    ],
    scopeOfWork: [
      'Lighting Design',
      'Fixture Layout & Beam Planning',
      'Art-Net / DMX Data Distribution',
      'Show Control System Design',
      'Lighting & Laser Integration',
      'Technical Project Oversight'
    ]
  },
  'partner-3': {
    title: 'Sound Night Club',
    image: 'https://i.postimg.cc/mgNBdR02/Photo-Apr-16-2026-10-27-34-PM.jpg',
    description: [
      'For four years, Highlight Productions has been responsible for the technical operations and production management at Sound Nightclub, one of the leading electronic music venues in the region.',
      'Our role encompassed the full oversight of the venue’s audio, lighting, and show control systems, ensuring consistent performance for weekly events, touring artists, and special productions.',
      'Responsibilities included managing the day-to-day technical operations of the venue, maintaining and optimizing the sound and lighting systems, and coordinating production requirements for visiting DJs and artists. The goal was to deliver a reliable, high-quality experience for both performers and audiences while maintaining the operational efficiency of a busy nightclub environment.',
      'Throughout this period, we supervised system maintenance, show operation, and technical production, ensuring the venue operated at a professional standard every night.',
      'Working closely with promoters, artists, and production teams, Highlight Productions helped maintain Sound Nightclub as a consistent, high-energy performance environment where music, lighting, and atmosphere come together seamlessly.'
    ],
    scopeOfWork: [
      'Venue Technical Operations',
      'Audio System Management',
      'Lighting System Operation',
      'Show Control & Programming',
      'Artist Technical Coordination',
      'Production Management'
    ]
  },
  'partner-4': {
    title: 'Raspoutine Nightclub',
    image: 'https://i.postimg.cc/gJL7THnZ/8a-Vrwzz-F.jpg',
    description: [
      'Highlight Productions worked alongside event vendors and production teams to support the design and execution of lighting and sound systems at Raspoutine Nightclub.',
      'Our role focused on assisting in the development of the technical environment, including lighting layout planning, equipment integration, and sound system setup. The goal was to create a balanced and immersive atmosphere that supports both the venue’s aesthetic and the energy of live events and DJ performances.',
      'This project reflects our ability to collaborate with other production teams, adapt to existing venue infrastructure, and contribute to professional event environments in active nightlife settings.'
    ],
    scopeOfWork: [
      'Lighting Layout Planning',
      'Equipment Integration',
      'Sound System Setup',
      'Technical Environment Support',
      'Production Collaboration'
    ]
  },
  'partner-5': {
    title: 'The Goldstein Residence',
    image: 'https://i.postimg.cc/PqWpzBMK/ALN09840-(1).jpg',
    description: [
      'Highlight Productions provided lighting, sound, and stage production for a private Halloween event hosted by Muha Meds at the iconic Goldstein Residence in Los Angeles.',
      'Working alongside event vendors and production teams, we designed and installed a complete production setup that integrated seamlessly with the unique architecture of the venue. The project included custom lighting design, professional sound system deployment, and stage installation to support the event’s entertainment and overall atmosphere.',
      'The production was tailored to enhance both the visual environment and the energy of the event, creating an immersive experience for guests throughout the space.',
      'This project reflects our ability to deliver full production services in high-end and non-traditional venues while maintaining a clean, organized, and professional execution.'
    ],
    scopeOfWork: [
      'Custom Lighting Design',
      'Sound System Deployment',
      'Stage Installation',
      'Full Production Services',
      'Event Integration'
    ]
  },
  'partner-6': {
    title: 'Stranger Than',
    image: 'https://i.postimg.cc/25GZFdnK/ALN04896.jpg',
    description: [
      'Highlight Productions collaborated with Stranger Than, a respected electronic music event promoter, providing lighting direction and show design for several of their productions.',
      'For these events, Highlight Productions supplied the house lighting director and lighting designer, responsible for shaping the visual atmosphere of the shows and operating the lighting systems during performances.',
      'Working closely with the event production teams and artists, our role focused on creating dynamic lighting environments that enhanced the musical experience while adapting to the unique energy of each event. From programming lighting looks to live show operation, the goal was to deliver a cohesive visual experience that complemented the performances on stage.',
      'Through this collaboration, Highlight Productions helped bring a professional lighting design and show control approach to Stranger Than events, ensuring every production delivered a visually engaging and immersive experience for the audience.'
    ],
    scopeOfWork: [
      'Lighting Direction',
      'Show Lighting Design',
      'Live Show Operation',
      'Lighting Programming',
      'Artist & Production Coordination'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-zinc-50 dark:bg-black flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-orange-600 hover:underline">Return to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors mb-12 uppercase tracking-wider text-sm font-semibold">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter uppercase mb-12">
          {project.title}
        </h1>
        
        {project.image && (
          <div className="mb-12 relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-6">About the Project</h2>
            {project.description.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 self-start">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-6">Scope of Work</h3>
            <ul className="space-y-4">
              {project.scopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

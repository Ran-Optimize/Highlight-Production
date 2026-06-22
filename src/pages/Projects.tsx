import { Link } from 'react-router-dom';
import VimeoBackground from '../components/VimeoBackground';

export default function Projects() {
  const projects = [
    { id: 'partner-1', title: 'Method', img: 'https://i.postimg.cc/ZWV85g7g/yzwb-ll-sm.png' },
    { id: 'partner-2', title: 'LONG FENG Art Car', img: 'https://i.postimg.cc/CxdkKLMn/2.png' },
    { id: 'partner-3', title: 'Sound Night Club', img: 'https://i.postimg.cc/Kv6jHZct/sound-logo-darko.avif', imgDark: 'https://i.postimg.cc/6qRq9SYq/sound-logo-web-sm.png' },
    { id: 'partner-4', title: 'Raspoutine Nightclub', img: 'https://i.postimg.cc/qvZNx8hq/yzwb-ll-sm-2026-03-18T132609-633.png' },
    { id: 'partner-5', title: 'The Goldstein Residence', img: 'https://i.postimg.cc/kMyFFbTP/68ca06d3277d0d6779d6940e-ec65a0afb368a181d5f6ea946c86abcf4ec9e1df.png' },
    { id: 'partner-6', title: 'Stranger Than', img: 'https://i.postimg.cc/rwzxpFy4/5.png' },
  ];

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-black">
      {/* Banner Section */}
      <VimeoBackground 
        desktopVideoId="1172164695" 
        mobileVideoId="1172164695"
        desktopRatio={4/3}
        mobileRatio={4/3}
        overlayOpacity="opacity-0"
        showGradients={false}
        startTime={16}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
      >
        <div className="text-center px-6 relative z-20">
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light">
            A glimpse into our recent technical productions across Los Angeles.
          </p>
        </div>
      </VimeoBackground>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((p, i) => (
            <Link to={`/projects/${p.id}`} key={i} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] group relative rounded-none overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center justify-center p-8 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-orange-600 dark:hover:border-orange-600">
              <div className="flex-1 flex items-center justify-center w-full">
                {p.imgDark ? (
                  <>
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="max-w-[80%] max-h-[150px] object-contain transition-all duration-300 dark:hidden" 
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src={p.imgDark} 
                      alt={p.title} 
                      className="max-w-[80%] max-h-[150px] object-contain transition-all duration-300 hidden dark:block" 
                      referrerPolicy="no-referrer"
                    />
                  </>
                ) : (
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="max-w-[80%] max-h-[150px] object-contain transition-all duration-300" 
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              <div className="mt-8 text-center w-full">
                <h3 className="text-zinc-900 dark:text-white text-2xl font-bold mb-4 uppercase tracking-wider">{p.title}</h3>
                <span className="inline-block px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wider uppercase group-hover:bg-orange-600 dark:group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

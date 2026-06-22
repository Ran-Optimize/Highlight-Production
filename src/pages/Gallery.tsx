export default function Gallery() {
  const portraitVideos = [
    "https://www.youtube.com/embed/j5VoTKP-CA0",
    "https://www.youtube-nocookie.com/embed/cgZwgjCDfC8?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3",
    "https://www.youtube-nocookie.com/embed/dwP9PdvmT-8?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
  ];

  const images = [
    // New Images
    'https://i.postimg.cc/zBtbJdDn/6CFD415A-7292-4C3A-BB42-5FBDEEEE163C.jpg',
    'https://i.postimg.cc/ZnW90r0w/AK8A0434-Enhanced-NR.jpg',
    'https://i.postimg.cc/qqNtg8gw/DSC09280.jpg',
    'https://i.postimg.cc/hvXJh9h0/IMG-9080.jpg',
    
    // Full Production
    'https://i.postimg.cc/RZsjLK0w/ALN09840.jpg',
    'https://i.postimg.cc/2ScP7h5t/IMG-2535.jpg',
    'https://i.postimg.cc/htyH1TG5/IMG-2586.jpg',
    'https://i.postimg.cc/P53BQYq3/IMG-2589.jpg',
    
    // Mid Tier Events
    'https://i.postimg.cc/pV5XhVq7/432EE4CA-03E7-4490-B9CB-F96FA6DB2EA6.jpg',
    'https://i.postimg.cc/h4QPz4p5/AK8A0365-Enhanced-NR.jpg',
    'https://i.postimg.cc/ZnNT1jWY/ALN07535.jpg',
    'https://i.postimg.cc/5yzxZpXj/ALN07621.jpg',
    'https://i.postimg.cc/QC7XRSFC/ALN07628.jpg',
    'https://i.postimg.cc/gcLkXcNQ/DSC03032-Enhanced-NR.jpg',
    'https://i.postimg.cc/L5PHrvJq/IMG-5040.png',

    // Weddings
    'https://i.postimg.cc/VLFgjwNK/DSC-2249-Enhanced-NR.jpg',
    'https://i.postimg.cc/jdhczTjg/DSC-2266-Enhanced-NR.jpg',
    'https://i.postimg.cc/pXvkhrPB/DSC-7594-Enhanced-NR.jpg',
    'https://i.postimg.cc/J4Qxb8hK/DSC-7830-Enhanced-NR.jpg',
    'https://i.postimg.cc/BQCpx3vV/DSC00645-Enhanced-NR.jpg',
    'https://i.postimg.cc/15SMnXy8/IMG-2765.jpg',
    'https://i.postimg.cc/wTzFyM95/IMG-8606.jpg',

    // Concerts & Live Shows
    'https://i.postimg.cc/PxphwKzS/ALN07410.jpg',
    'https://i.postimg.cc/MTCwbRdr/DSC09293.jpg',

    // Parties & Social Events
    'https://i.postimg.cc/bvRqPsY6/IMG-1956.jpg',
    'https://i.postimg.cc/j5dtStLK/IMG-3472.jpg',

    // Rental Packages
    'https://i.postimg.cc/PJSL5StM/IMG-2233.jpg',
    'https://i.postimg.cc/6qM7pM9G/IMG-4410.jpg'
  ];

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-black">
      {/* Banner Section */}
      <div 
        className="relative flex items-center justify-center overflow-hidden bg-black pt-20 mx-auto"
        style={{ height: '100px', width: '1154.22px', maxWidth: '100%' }}
      >
        <div className="text-center px-6 relative z-20">
          <h1 className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light">
            Visual moments from our events
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6" style={{ height: '5104.74px', paddingTop: '59px' }}>
        {/* Videos Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center uppercase tracking-tight">Videos</h2>
          
          {/* Landscape Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 shadow-xl">
              <iframe width="1013" height="570" 
                src="https://www.youtube.com/embed/08K_tdTgm0g?controls=0&modestbranding=1&rel=0&iv_load_policy=3" 
                title="Highlightproduction1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full">
              </iframe>
            </div>
            <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 shadow-xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/FNxD3NByMlM?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3" 
                title="Highlightproduction Landscape 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Portrait Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative w-full aspect-[9/16] max-w-[356px] mx-auto bg-zinc-100 dark:bg-zinc-900 shadow-xl">
              <iframe width="320" height="576" 
                src="https://www.youtube.com/embed/j5VoTKP-CA0" 
                title="HIGHLIGHTPRODUCTION" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full">
              </iframe>
            </div>
            {portraitVideos.slice(1).map((src, i) => (
              <div key={`port-${i+1}`} className="relative w-full aspect-[9/16] max-w-[356px] mx-auto bg-zinc-100 dark:bg-zinc-900 shadow-xl">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={src} 
                  title={`Highlightproduction Portrait ${i + 2}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center uppercase tracking-tight">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-none overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-900 cursor-pointer shadow-md">
                <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

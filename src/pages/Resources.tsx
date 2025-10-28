import { Book, Video, FileText, ExternalLink } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics and get up to speed quickly",
      icon: Book,
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Video,
      link: "#"
    },
    {
      title: "Documentation",
      description: "Comprehensive reference materials",
      icon: FileText,
      link: "#"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get help",
      icon: ExternalLink,
      link: "#"
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-6xl w-full mx-auto py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Resources
        </h1>
        <p className="text-xl text-white/70 mb-12">
          Everything you need to make the most of Hummm
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-white/70">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

// Reusable PersonaCard component
const PersonaCard = ({ img, name, role, bio, socialLinks }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
    <div className="relative w-32 h-32 mb-4">
      <Image
        src={img}
        alt={name}
        fill
        className="rounded-full object-cover border-4 border-green-100"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-green-600 font-medium mb-3">{role}</p>
    <p className="text-gray-600 mb-4 text-sm md:text-base">{bio}</p>

    <div className="flex space-x-3 mt-auto">
      {socialLinks.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-yellow-500 transition-colors"
          aria-label={`${name}'s social profile`}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export default function TeamSection() {
  // Social media icons (using Heroicons)
  const socialIcons = {
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  const team = [
    {
      name: "Ayesha Khan",
      role: "CEO & Founder",
      img: "/pic1.webp",
      bio: "Renewable energy expert with 15+ years in solar technology and sustainable business development.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.twitter, url: "#" },
        { icon: socialIcons.email, url: "mailto:ayesha@company.com" },
      ],
    },
    {
      name: "Hassan Malik",
      role: "CTO",
      img: "/pic1.webp",
      bio: "Solar engineering specialist focused on innovative panel technologies and energy storage solutions.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.email, url: "mailto:hassan@company.com" },
      ],
    },
    {
      name: "Zara Ahmed",
      role: "Project Lead",
      img: "/pic1.webp",
      bio: "Oversees installation projects with a focus on efficiency and client satisfaction.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.twitter, url: "#" },
      ],
    },
    {
      name: "Rajiv Sharma",
      role: "Head of R&D",
      img: "/pic1.webp",
      bio: "Leads our innovation lab developing next-generation solar materials and efficiency improvements.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.email, url: "mailto:rajiv@company.com" },
      ],
    },
    {
      name: "Fatima Ali",
      role: "Community Relations",
      img: "/pic1.webp",
      bio: "Connects communities with solar solutions through education and partnership programs.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.twitter, url: "#" },
      ],
    },
    {
      name: "Thomas Chen",
      role: "Operations Director",
      img: "/pic1.webp",
      bio: "Manages supply chain and logistics to ensure timely project delivery worldwide.",
      socialLinks: [
        { icon: socialIcons.linkedin, url: "#" },
        { icon: socialIcons.email, url: "mailto:thomas@company.com" },
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 px-4 sm:px-6 lg:px-18">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-green-600 mb-6">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
          Passionate experts driving the solar energy revolution with innovation
          and commitment
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {team.map((member) => (
            <PersonaCard
              key={member.name}
              img={member.img}
              name={member.name}
              role={member.role}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8 max-w-5xl mx-auto border border-green-100">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Our Team Philosophy
          </h3>
          <p className="text-gray-600 mb-6">
            We believe that the future of energy is collaborative. Our diverse
            team of engineers, environmentalists, and community specialists work
            together to create solar solutions that are both technologically
            advanced and socially responsible.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Expert Certification</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Client-Focused Approach</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Continuous Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

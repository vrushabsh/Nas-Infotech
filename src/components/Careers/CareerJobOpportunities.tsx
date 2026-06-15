import { useState } from 'react';
import { ArrowUpRight, MapPin, Clock, X, Briefcase, GraduationCap, Code } from 'lucide-react';

const Img1 = "/Career/careerHeroImg.png";

interface Job {
  id: number;
  title: string;
  category: string;
  description: string;
  skills: string[];
  experience: string;
  education: string;
  location: string;
  type: string;
}

const CareerJobOpportunities = () => {
  const [activeCategory, setActiveCategory] = useState('View all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  // Application form fields state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    designation: '',
    experience: '',
    resume: null as File | null
  });

  const categories = [
    'View all',
    'Development',
    'Design',
    'Management'
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      category: 'Development',
      description: 'Designing, developing and maintaining high-quality software applications. Participating in code reviews to ensure quality. Troubleshooting and resolving software defects and performance issues.',
      skills: ['Python', 'Java', 'C++', 'DSA', 'Git', 'SDLC', 'SQL', 'NoSQL'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Web Developer',
      category: 'Development',
      description: 'Design, develop, and maintain user-friendly, responsive and visually appealing websites. Optimizing web applications for speed and performance. Developing new features based on project requirements.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Node.js', 'Django'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Product Manager',
      category: 'Management',
      description: 'Collaborating with cross-functional teams throughout the product lifecycle. Communicating product plans, progress and results to stakeholders. Ensuring alignment and managing expectations.',
      skills: ['Problem-Solving', 'Decision-Making', 'Leadership', 'Strategic Planning', 'Market Research'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      category: 'Design',
      description: 'Creating user-centered designs through wireframes, prototypes and mockups. Conducting user research and usability testing to gather insights and validate design decisions.',
      skills: ['User-Centric Design', 'Wireframing', 'Prototyping', 'Sketch', 'Adobe XD', 'Figma', 'Usability Testing', 'Visual Design', 'Responsive Design'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Data Scientist',
      category: 'Development',
      description: 'Analyzing large and complex datasets to extract actionable insights. Developing predictive models and machine learning algorithms to solve business problems and enhance products.',
      skills: ['Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Python', 'R', 'SQL', 'Pandas', 'NumPy'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      category: 'Development',
      description: 'Designing, implementing, and maintaining CI/CD pipelines. Automating deployment and scaling processes. Ensuring applications run smoothly and efficiently.',
      skills: ['Ansible', 'Puppet', 'Chef', 'Docker', 'Kubernetes', 'Bash', 'Python', 'Ruby'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 7,
      title: 'Network Engineer',
      category: 'Development',
      description: 'Designing, implementing and maintaining network infrastructure. Monitoring network performance. Addressing problems and delivering prompt solutions to reduce downtime.',
      skills: ['Network Protocols', 'Network Hardware', 'Network Monitoring', 'Network Security', 'Troubleshooting', 'Cloud Networking'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    },
    {
      id: 8,
      title: 'Database Administrator',
      category: 'Development',
      description: 'Installing, configuring and maintaining database systems. Designing and implementing database schemas. Optimizing queries. Ensuring data integrity and security.',
      skills: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'SQL', 'AWS RDS', 'Azure SQL'],
      experience: '0-4 years',
      education: 'BE/BTech in Computer Science or a related field',
      location: '100% remote',
      type: 'Full-time'
    }
  ];

  // Helper function to auto-populate fields when opening the modal form
  const handleOpenApplyForm = (job: Job) => {
    setSelectedJob(null); // Clear detail modal overlay view
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      designation: job.title,
      experience: job.experience,
      resume: null
    });
    setApplyingJob(job);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted successfully for ${applyingJob?.title}!`);
    setApplyingJob(null);
  };

  const filteredJobs = activeCategory === 'View all'
    ? jobs
    : jobs.filter(job => job.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#101828] font-sans antialiased selection:bg-rose-100 relative overflow-x-hidden">

      {/* Dark overlay backdrop block behind your Global Navbar */}
      <div className="absolute top-0 left-0 right-0 h-[90px] bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-10" />

      {/* Decorative Blur Background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Content Column */}
          <section className="w-full md:w-[60%] flex flex-col items-start justify-center">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide border border-neutral-300 rounded-full text-neutral-800 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
              We're hiring!
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] mb-4 leading-[1.1]">
              Job Opportunities For You
            </h1>
            <p className="text-[#475467] text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-md">
              Find your next career step. We're looking for passionate individuals to join our global team. Explore open roles across engineering, management, and product design.
            </p>
          </section>

          {/* Right Image Column */}
          <section className="w-full md:w-[40%] flex items-center justify-center">
            <img
              src={Img1}
              alt="careersHero"
              className="w-[80%] max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
            />
          </section>
        </div>

        {/* Categories Horizontal Filter */}
        <section className="mb-10 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2.5 pb-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-[16px] py-2 text-[14px] font-medium rounded-full transition-all duration-200 whitespace-nowrap border cursor-pointer active:scale-95
                    ${isActive
                      ? 'bg-[#101828] text-white border-[#101828] shadow-sm'
                      : 'bg-white text-[#344054] border-neutral-250 hover:bg-neutral-50 hover:border-neutral-400'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {/* Job Board List Listings */}
        <section className="space-y-0 border-t border-neutral-200">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group border-b border-neutral-200 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/50 transition-all duration-300 rounded-xl px-4 -mx-4"
              >
                {/* Info block */}
                <div className="space-y-3 flex-1 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-[#101828] tracking-tight group-hover:text-neutral-900 transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                      {job.category}
                    </span>
                  </div>

                  <p className="text-[#475467] text-[15px] leading-relaxed line-clamp-2 md:line-clamp-1">
                    {job.description}
                  </p>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-xs font-semibold text-neutral-400 mr-1 flex items-center gap-1">
                      <Code size={12} /> Skills:
                    </span>
                    {job.skills.slice(0, 5).map((skill, i) => (
                      <span key={i} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 5 && (
                      <span className="text-xs text-[#475467] font-medium pl-1">
                        +{job.skills.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Badges metadata with "Read more" button added directly beside them */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#344054] bg-white border border-neutral-200 rounded-full shadow-2xs">
                      <MapPin size={13} className="text-gray-400" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#344054] bg-white border border-neutral-200 rounded-full shadow-2xs">
                      <Clock size={13} className="text-gray-400" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#344054] bg-white border border-neutral-200 rounded-full shadow-2xs">
                      <Briefcase size={13} className="text-gray-400" />
                      {job.experience}
                    </span>
                    
                    {/* Handled custom addition request: Read More action badge aligned right alongside indicators */}
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold text-white bg-[#ffb066] hover:bg-[#ffa04d] rounded-full shadow-2xs transition-colors cursor-pointer active:scale-95 ml-1"
                    >
                      Read More
                    </button>
                  </div>
                </div>

                {/* Main Apply Button row */}
                <button
                  onClick={() => handleOpenApplyForm(job)}
                  className="w-full md:w-auto inline-flex items-center justify-between gap-6 bg-[#ffb066] hover:bg-[#ffa04d] text-neutral-900 font-bold py-2 pl-6 pr-2 rounded-full transition-all duration-200 group-hover:translate-x-0.5 active:scale-98 shadow-sm cursor-pointer"
                >
                  <span className="tracking-wide text-[15px]">Apply Now</span>
                  <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                    <ArrowUpRight size={18} className="stroke-[2.5]" />
                  </div>
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 border-b border-neutral-200">
              <p className="text-[#475467] font-medium text-base">No open positions in this category right now.</p>
              <button
                onClick={() => setActiveCategory('View all')}
                className="mt-2 text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
              >
                Clear filter
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Job Details Modal - Triggers when clicking "Read More" */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  {selectedJob.category}
                </span>
                <h2 className="text-2xl font-bold text-[#101828] mt-3">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-[#475467]">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {selectedJob.type}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {selectedJob.experience}</span>
                </div>
              </div>

              <hr className="border-neutral-100" />

              <div>
                <h4 className="text-sm font-bold text-[#101828] mb-1.5 uppercase tracking-wider text-neutral-500">Roles & Responsibilities</h4>
                <p className="text-[#475467] text-[15px] leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#101828] mb-2 uppercase tracking-wider text-neutral-500">Skills Required</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="bg-neutral-100 text-neutral-800 text-xs font-medium px-2.5 py-1 rounded-md border border-neutral-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 flex items-start gap-2.5">
                <GraduationCap className="text-neutral-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-wide">Education Requirements</h4>
                  <p className="text-sm text-neutral-700 font-medium mt-0.5">{selectedJob.education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styled Job Application Form Modal - Triggers when clicking "Apply Now" */}
      {applyingJob && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-center text-[#101828] mb-6">Job Application form</h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#ffb066] focus:border-transparent bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#ffb066] focus:border-transparent bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Mobile number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#ffb066] focus:border-transparent bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Designation</label>
                <input
                  type="text"
                  disabled
                  value={formData.designation}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg text-sm bg-neutral-100 text-neutral-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Years of Experience</label>
                <input
                  type="text"
                  disabled
                  value={formData.experience}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg text-sm bg-neutral-100 text-neutral-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Your Resume</label>
                <div className="flex items-center justify-between border border-neutral-300 rounded-lg px-4 py-2 bg-neutral-50/50 text-sm">
                  <input
                    type="file"
                    required
                    id="resume-upload"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files ? e.target.files[0] : null })}
                    className="hidden"
                  />
                  <label htmlFor="resume-upload" className="bg-neutral-200 hover:bg-neutral-300 px-3 py-1 rounded border border-neutral-400 text-xs text-neutral-700 font-medium cursor-pointer transition-colors">
                    Choose Files
                  </label>
                  <span className="text-neutral-400 text-xs truncate max-w-[200px]">
                    {formData.resume ? formData.resume.name : 'No file chosen'}
                  </span>
                </div>
              </div>

              {/* Injected buttons from the read tab overlay right over here */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-4 bg-[#ffb066] hover:bg-[#ffa04d] text-neutral-900 font-bold py-3 px-6 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <span className="tracking-wide">Submit Application</span>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                    <ArrowUpRight size={14} className="stroke-[2.5]" />
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="px-5 py-3 border border-neutral-300 text-neutral-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Styled utilities injection */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CareerJobOpportunities;
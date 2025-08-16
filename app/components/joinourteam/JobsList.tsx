'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiBriefcase, FiMapPin, FiClock, FiArrowRight, FiFilter } from "react-icons/fi";

const JobsList = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Build beautiful, responsive interfaces using React and Next.js",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      featured: true
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      location: "San Francisco",
      description: "Create intuitive user experiences for our SaaS platform",
      tags: ["Figma", "UX Research", "Prototyping"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Contract",
      location: "Remote",
      description: "Optimize our cloud infrastructure and CI/CD pipelines",
      tags: ["AWS", "Terraform", "Kubernetes"]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      location: "New York",
      description: "Lead our digital marketing strategy and campaigns",
      tags: ["SEO", "Content", "Growth"]
    }
  ];

  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const departments = ["All", ...new Set(jobs.map(job => job.department))];
  const locations = ["All", ...new Set(jobs.map(job => job.location))];

  const filteredJobs = jobs.filter(job => {
    return (
      (departmentFilter === "All" || job.department === departmentFilter) &&
      (locationFilter === "All" || job.location === locationFilter) &&
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shape the future with us at QUOTE NXT
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button 
              onClick={toggleFilters}
              className="flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <FiFilter className="mr-2 h-5 w-5 text-blue-600" />
              <span className="font-medium">Filters</span>
            </button>
          </div>

          {/* Filters - Desktop */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiBriefcase className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none shadow-sm hover:shadow-md transition-all"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none shadow-sm hover:shadow-md transition-all"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters - Mobile */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="space-y-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBriefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      value={departmentFilter}
                      onChange={(e) => setDepartmentFilter(e.target.value)}
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results count with animated counter */}
          <div className="text-gray-500 flex items-center">
            Showing{' '}
            {isMounted && (
              <motion.span 
                key={filteredJobs.length}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-1 font-medium text-blue-600"
              >
                {filteredJobs.length}
              </motion.span>
            )}{' '}
            {filteredJobs.length === 1 ? "position" : "positions"}
          </div>
        </motion.div>

        {/* Job listings with staggered animations */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${job.featured ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-white'}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="inline-flex items-center text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-sm">
                          <FiBriefcase className="mr-2 h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-sm">
                          <FiMapPin className="mr-2 h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-sm">
                          <FiClock className="mr-2 h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <motion.span 
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-3 py-1 text-sm bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm hover:bg-blue-50 hover:border-blue-100 hover:text-blue-700 transition-all"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-40 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all group-hover:shadow-lg"
                      >
                        Apply
                        <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">No positions found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
              <button 
                onClick={() => {
                  setDepartmentFilter("All");
                  setLocationFilter("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA for more opportunities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-medium text-gray-700 mb-4"> Don&apos;t see your dream job?</h3>
          <p className="text-gray-500 mb-6"> We&apos;re always looking for talented people. Send us your resume!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
          >
            Submit General Application
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsList;
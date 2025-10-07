import { Shield, Github, Linkedin, Mail, Server, Cloud, Lock, Terminal, Award, Briefcase, Code, ChevronRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Udohekere Nkene
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#expertise" className="text-slate-300 hover:text-cyan-400 transition-colors">Expertise</a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#certifications" className="text-slate-300 hover:text-cyan-400 transition-colors">Certifications</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">DevSecOps | CloudSec | AppSec</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Securing the
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Cloud & Beyond
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Cybersecurity professional specializing in DevSecOps, Cloud Security, and Application Security.
                Building robust security architectures with expertise in AWS, Azure, threat detection, and automated security pipelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all transform hover:scale-105"
                >
                  Get In Touch
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Udohekere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <Cloud className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">Cloud Security</h3>
                    <p className="text-sm text-slate-400">AWS, Azure, GCP</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <Lock className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold mb-1">DevSecOps</h3>
                    <p className="text-sm text-slate-400">CI/CD Security</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <Server className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="font-semibold mb-1">Infrastructure</h3>
                    <p className="text-sm text-slate-400">Kubernetes, Docker</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <Terminal className="w-8 h-8 text-green-400 mb-3" />
                    <h3 className="font-semibold mb-1">Threat Hunting</h3>
                    <p className="text-sm text-slate-400">SIEM, Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-400 text-lg">Comprehensive security solutions across the entire technology stack</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
              <p className="text-slate-400 mb-4">
                Implementing security policies and architectures across AWS, Azure, and GCP. Expertise in IAM, encryption, network security, and compliance frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">AWS</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Azure</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">GCP</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Terraform</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DevSecOps</h3>
              <p className="text-slate-400 mb-4">
                Building automated security into CI/CD pipelines. Implementing secure software development practices and infrastructure as code security scanning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Jenkins</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Docker</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">K8s</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">GitOps</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Security</h3>
              <p className="text-slate-400 mb-4">
                Designing and implementing network intrusion detection systems, traffic analysis, and security monitoring solutions using machine learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Wireshark</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">NIDS</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Splunk</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">SIEM</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Intelligence</h3>
              <p className="text-slate-400 mb-4">
                Proactive threat hunting, vulnerability management, and incident response. Expertise in darkweb operations and cyber forensics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Threat Hunting</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">OSINT</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Forensics</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
              <p className="text-slate-400 mb-4">
                Conducting comprehensive security assessments, vulnerability testing, and ethical hacking across web, mobile, and network infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Metasploit</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Nmap</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Burp Suite</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Automation</h3>
              <p className="text-slate-400 mb-4">
                Developing custom security tools and automation scripts. Creating solutions for packet analysis, security monitoring, and data recovery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">Bash</span>
                <span className="px-3 py-1 bg-slate-800 text-xs rounded-full">PHP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Security solutions and tools developed for real-world applications</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://github.com/Udohekere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Hybrid Network Intrusion Detection System</h3>
              <p className="text-slate-400 mb-4">
                Machine learning-based NIDS combining signature and anomaly detection methods.
                Implemented using Python with real-time traffic analysis and threat classification capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Machine Learning</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Network Security</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>🔒 Intrusion Detection</span>
                <span>🤖 AI/ML</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://github.com/Udohekere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-semibold mb-3">AWS Security Policies Repository</h3>
              <p className="text-slate-400 mb-4">
                Comprehensive collection of security policies, IAM configurations, and best practices for AWS environments.
                Includes automated compliance checking and infrastructure as code templates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">AWS</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">Terraform</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">IAM</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>☁️ Cloud Security</span>
                <span>📋 Compliance</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://github.com/Udohekere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Automated DevSecOps Pipeline</h3>
              <p className="text-slate-400 mb-4">
                End-to-end secure CI/CD pipeline with automated security scanning, vulnerability assessment,
                and compliance checks integrated into the development workflow.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">DevSecOps</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Jenkins</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Docker</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>🔄 CI/CD</span>
                <span>🛡️ Automation</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-green-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://github.com/Udohekere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Python Network Security Tools</h3>
              <p className="text-slate-400 mb-4">
                Suite of network security tools including packet sniffers, traffic analyzers, and security monitoring utilities.
                Built for educational and professional penetration testing purposes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Networking</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Security Tools</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>🔍 Packet Analysis</span>
                <span>⚡ Real-time</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Udohekere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Credentials</h2>
            <p className="text-slate-400 text-lg">Professional certifications validating expertise across security domains</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">CompTIA Security+</h3>
                  <p className="text-sm text-slate-400">Foundational cybersecurity certification</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">CISM</h3>
                  <p className="text-sm text-slate-400">Certified Information Security Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Container Security Specialist</h3>
                  <p className="text-sm text-slate-400">Certified container security expert</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Threat Hunting</h3>
                  <p className="text-sm text-slate-400">Security Blue Team certification</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cyber Forensics</h3>
                  <p className="text-sm text-slate-400">Digital forensics and investigation</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Darkweb Operations</h3>
                  <p className="text-sm text-slate-400">Threat intelligence & darkweb analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Vulnerability Management</h3>
                  <p className="text-sm text-slate-400">Security Blue Team certification</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Network Analysis</h3>
                  <p className="text-sm text-slate-400">Security Blue Team certification</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ethical Hacking</h3>
                  <p className="text-sm text-slate-400">Mobile & network architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-slate-400 text-lg">Delivering security excellence across diverse environments</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

              <div className="relative pl-20 pb-12">
                <div className="absolute left-5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold">February 2022 - August 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cybersecurity Analyst</h3>
                  <p className="text-slate-400 mb-4">Aptech • Remote</p>
                  <p className="text-slate-300">
                    Led security initiatives in cloud infrastructure, DevSecOps pipeline integration, and threat intelligence operations.
                    Implemented comprehensive security architectures for multi-cloud environments and automated security workflows.
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pb-12">
                <div className="absolute left-5 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold">June 2020 - February 2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Security Operations Centre Analyst</h3>
                  <p className="text-slate-400 mb-4">Inforprive • Remote</p>
                  <p className="text-slate-300">
                    Monitored and analyzed security events using SIEM platforms. Conducted incident response, threat hunting, and vulnerability assessments.
                    Developed automated detection rules and security playbooks for SOC operations.
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pb-12">
                <div className="absolute left-5 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-semibold">February 2017 - November 2019</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">IT Support Specialist</h3>
                  <p className="text-slate-400 mb-4">MTN • On-Site</p>
                  <p className="text-slate-300">
                    Provided technical support for IT infrastructure and network systems. Managed system security configurations,
                    troubleshot network issues, and assisted with security policy implementation.
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pb-12">
                <div className="absolute left-5 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Key Achievements</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Designed and deployed hybrid network intrusion detection system using ML algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Implemented automated DevSecOps pipelines reducing security vulnerabilities by 70%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Established comprehensive AWS security policies and compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Conducted threat hunting operations and digital forensics investigations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-5 w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-3 text-slate-300">
                    <div>
                      <p className="font-semibold">BSc. Computer Science</p>
                      <p className="text-sm text-slate-400">Landmark University</p>
                    </div>
                    <div className="pt-2">
                      <p className="font-semibold text-sm">Professional Training</p>
                      <p className="text-sm text-slate-400">Cisco Networking Academy • Multiple security certifications from Security Blue Team, Great Learning, and CompTIA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-400 mb-12">
            Open to discussing security consulting, DevSecOps opportunities, and collaborative projects
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/Udohekere/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <div className="text-left">
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="font-semibold">@Udohekere</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/udohekere-nkene/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
              <div className="text-left">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="font-semibold">Udohekere Nkene</p>
              </div>
            </a>

            <a
              href="mailto:udohekerenkene@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all group"
            >
              <Mail className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-sm text-cyan-100">Email</p>
                <p className="font-semibold text-white">Get in Touch</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="font-semibold">Udohekere Nkene</span>
            </div>
            <p className="text-slate-400 text-sm">
              DevSecOps | Cloud Security | Application Security
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

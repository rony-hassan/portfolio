import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialSidebar from "@/components/social-sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <main className="max-w-6xl mx-auto px-6">
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
            I’m a Computer Science graduate from Green University of Bangladesh.
            I have practical experience in end-to-end software testing cycles,
            including manual testing, automation frameworks, API testing, and
            performance testing.
          </p>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Python, Selenium, Pytest, Postman, JMeter, SQL, Git, Manual Testing,
            Bug Reporting
          </p>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-slate-700 dark:text-slate-300">
            SauceDemo Automation Framework (POM), API Testing Collection, Manual
            Testing Reports...
          </p>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Email: your-email@gmail.com
          </p>
        </section>
      </main>
    </>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import ScrollToTopOnLoad from '@/components/ScrollToTopOnLoad';

export const metadata = {
  title: 'Qaiser Farooq | AI Researcher Portfolio',
  description:
    'AI Researcher specializing in Machine Learning, NLP, and Deep Learning solutions. Explore my projects, experience, and skills.',
  keywords:
    'AI Researcher, Machine Learning, Deep Learning, NLP, Python, TensorFlow, PyTorch',
  author: 'Qaiser Farooq',
  openGraph: {
    title: 'Qaiser Farooq | AI Researcher',
    description: 'Modern portfolio showcasing AI and ML projects',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <ScrollToTopOnLoad />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Skills />
      <Chatbot />
      <Footer />
    </main>
  );
}

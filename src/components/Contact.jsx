function Contact() {
  const resumeLink = "https://portfolio1-sepia-theta.vercel.app/";
  return (
    <section className="flex justify-center items-center">
      <ul className="text-4xl">
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shaunak-harmalkar-15954a211/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a target="_blank" href="https://github.com/Shaunak999" rel="noreferrer">
            Github
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a href="mailto:shaunakharmalkar@gmail.com">Email</a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a target="_blank" href={resumeLink} rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li className="mb-2 text-base">Goa, India</li>
        <li className="mb-2 text-base">+91-7030793167</li>
      </ul>
    </section>
  );
}

export default Contact;

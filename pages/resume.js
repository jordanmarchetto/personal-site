import Heading from "../components/Heading";

const Resume = () => {
  return (
    <div>
      <Heading pageTitle="Resume" />
      <h2>Resume</h2>
      <p>My resume is available below to view or <a href="/resume.pdf">download</a>.</p>
      <object data='/jordan_marchetto_resume.pdf#zoom=60&amp;scrollbar=0&amp;toolbar=1&amp;messages=0'
        type='application/pdf'
        width='100%'
        height='600' >
        <param name="src" value="/jordan_marchetto_resume.pdf" />
        <param name="type" value="application/pdf" />
        <p>It appears your Web browser is not configured to display PDF files.
          No worries, just <a href='/jordan_marchetto_resume.pdf'>click here to download the PDF file.</a></p>
      </object>
    </div>
  );
}

export default Resume;
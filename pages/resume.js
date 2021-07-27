import Heading from "../components/Heading";

const Resume = () => {
  return (
    <div>
      <Heading pageTitle="Resume" />
      <h2>Resume</h2>
      <p>My resume is available below to view or <a href="/resume.pdf">download</a>.</p>
      <object data='/resume.pdf#zoom=75&amp;scrollbar=1&amp;toolbar=0&amp;messages=0'
        type='application/pdf'
        width='100%'
        height='600' >
        <param name="src" value="files/Resume.pdf" />
        <param name="type" value="application/pdf" />
        <p>It appears your Web browser is not configured to display PDF files.
          No worries, just <a href='/resume.pdf'>click here to download the PDF file.</a></p>
      </object>
    </div>
  );
}

export default Resume;
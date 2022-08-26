import Heading from "../components/Heading";
import Link from "next/link";

const About = () => {

  return (
    <div>
      <Heading pageTitle="About"/>
      <h2>About</h2>
      <p>I am currently a Senior Software Developer for Fresh Technology.
        If you&apos;re interested in hiring me, or more information on me,
        please view my <Link href="/resume"><a>resume</a></Link> or <Link href="/contact"><a>contact information</a></Link>. 
      </p>
    </div>
  );
}

export default About;
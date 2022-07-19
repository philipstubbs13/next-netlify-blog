import { PageTitle } from '@components/page-title/PageTitle';
import PropTypes from 'prop-types';
import { Layout } from '../components/layout/Layout';

export interface IProps {
  description: String;
  title: String;
}

const About = (props: IProps) => {
  return (
    <Layout pageTitle={`${props.title} | About`}>
      <div className="container-md">
        <PageTitle title="About Me" />
        <div className="row">
          <div className="col-sm-12 col-md-3 pr-10">
            <img
              src="/profile.jpg"
              alt="profile"
              className="img-fluid rounded-circle"
              width={200}
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <p>
              Hello! I&apos;m Phil. You&apos;re probably wondering what I&apos;ve been up to.
              You&apos;ve come to the right place. I created this site to share with you what&apos;s
              going on in the mind of Phil. As to what you will find... pretty much anything I find
              interesting, learn, or am just generally curious about. Whatever comes to my mind in
              the moment and that I want to share with random strangers on the Internet is what I
              plan to post. If you have any ideas, suggestions, topics, or questions that you would
              like me to offer my thoughts on, send me an{' '}
              <a href="mailto:philipstubbs13@gmail.com" target="_blank" rel="noreferrer">
                email
              </a>
              .
            </p>
            <p>
              You might be asking, &quot;who am I?&quot;. And, that is a great question. I am a web
              developer, which means I love building websites. If you would like to know more about
              my developer journey and more details on how I got into coding specifically, I make
              developer content on TikTok. Check me out at{' '}
              <a
                href="https://github.com/devsontiktok/awesome-devs-on-tiktok"
                target="_blank"
                rel="noopener noreferrer">
                Awesome Developers On TikTok
              </a>
              .
            </p>
            <p>
              In my free time, I enjoy making, editing, and uploading videos for TikTok. I first
              started posting on TikTok in November 2019. My username is{' '}
              <a href="https://tiktok.com/@thephilstubbs" target="_blank" rel="noopener noreferrer">
                @thephilstubbs
              </a>
              . Besides making videos, I also enjoy writing, running, hiking, watching sports, and
              playing video games (mainly NBA2K).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

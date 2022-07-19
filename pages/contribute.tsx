import PropTypes from 'prop-types';
import { Layout } from '../components/layout/Layout';
import { HelpTopic } from '@components/help-topic/HelpTopic';
import { PageTitle } from '@components/page-title/PageTitle';

export interface IProps {
  description: String;
  title: String;
}

const Contribute = (props: IProps) => {
  return (
    <Layout pageTitle={`${props.title} | Contribute`}>
      <div className="container-md">
        <PageTitle title="Contribute" />
        <div className="row">
          <div className="col-12">
            <p>
              Do you have an idea for a post and want to contribute as a guest writer? That&apos;s
              awesome! Thanks for your contribution. The process for contributing is still being
              worked out. In the future, I hope to smooth out the contribution process and make it
              more straightforward. So, thank you for bearing with me at the moment.
            </p>
            <p>
              For now, here is some helpful information on how you can begin contributing. If you
              have any questions or are having trouble with getting started, don&apos;t hesistate to
              reach out. Thanks again!
            </p>
            <ol>
              <li>
                <a href="#download-code">Download the source code for this website</a>
              </li>
              <li>
                <a href="#create-post">Create a post</a>
              </li>
              <li>
                <a href="#preview-post">Preview a post</a>
              </li>
              <li>
                <a href="#submit-review">Submit for review</a>
              </li>
            </ol>

            <HelpTopic
              anchorTag="download-code"
              topicTitle="1. Download the source code for this website.">
              <p>
                To be able to contribute as a writer or developer of this site, you will need to
                download the source code for the site to a local directory on your computer. The
                source code and posts for this website are open source. You can find the repository
                on{' '}
                <a
                  href="https://github.com/philipstubbs13/next-netlify-blog"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
                .
              </p>
              <p>
                To download the code to a local directory on your computer, perform the following
                steps:
              </p>
              <ol>
                <li>
                  If you do not already have GIT installed on your computer, download and install
                  GIT from{' '}
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                    here
                  </a>
                  .
                </li>
                <li>
                  Clone the source code for this website to a local directory on your computer by
                  running the following command in a terminal on your computer.
                  <pre>git clone https://github.com/philipstubbs13/next-netlify-blog.git</pre>
                  Running this will create a directory called{' '}
                  <code className="code">next-netlify-blog</code> within the directory in which you
                  ran this command.
                </li>
              </ol>
            </HelpTopic>

            <HelpTopic anchorTag="create-post" topicTitle="2. Create a post">
              <p>Perform the following steps to create a post.</p>
              <ol>
                <li>
                  Navigate to the <code className="code">next-netlify-blog/posts</code> directory of
                  this project and create a <code className="code">.md</code> file within the{' '}
                  <code className="code">posts</code> directory.
                  <p>
                    The name of the file should be similar to the title of your blog post where each
                    word is hyphenated (also known as snake case).
                  </p>
                  <p>
                    There should be no spaces in the filename and should be all lowercase. For
                    example, if the title of your blog post is <b>My Awesome Post</b>, then a good
                    filename for the post would be{' '}
                    <code className="code">my-awesome-blog-post.md</code>.
                  </p>
                  <p>
                    The naming of the file is important because the name of the file will be used to
                    construct the url to the post content on the site. For example, a file name of{' '}
                    <code className="code">my-awesome-blog-post.md</code> will have a url of{' '}
                    <code className="code">/post/my-awesome-blog-post</code> when the post is live
                    on the site.
                  </p>
                </li>
                <li>
                  Inside the <code className="code">.md</code> fil you just created, copy and paste
                  the starter code from{' '}
                  <code className="code">next-netlify-blog/example-post/example-post.md</code> into
                  your new file.
                  <p>
                    This is the template for writing a blog post for this site. If you follow this
                    template, you should have no problem contributing and getting a post added.
                  </p>
                  <p>
                    Note that posts for this site are written in Markdown syntax. If you are
                    unfamiliar with Markdown, refer to this guide for more information:{' '}
                    <a
                      href="https://guides.github.com/features/mastering-markdown/"
                      target="_blank"
                      rel="noreferrer">
                      Markdown guide
                    </a>
                    .
                  </p>
                </li>
              </ol>
            </HelpTopic>

            <HelpTopic anchorTag="preview-post" topicTitle="3. Preview a post">
              <p>
                After you have created a post, it is a good idea and highly recommended to preview
                your post to make sure everything looks good before it goes live on the site.
              </p>
              <p>
                To preview your post and see what it would look like before it goes live, perform
                the following steps:
              </p>
              <ol>
                <li>
                  If not already installed, install <code className="code">node.js</code> on your
                  computer from{' '}
                  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                    here
                  </a>
                  .
                </li>
                <li>
                  In a terminal on your computer, change directory to the{' '}
                  <code className="code">next-netlify-blog</code> directory of the project.
                  <br />
                  <code className="code">cd next-netlify-blog</code>
                </li>
                <li>
                  Run the following command to install the project dependencies (which are listed in
                  the <code className="code">package.json</code> file if you are curious):
                  <br />
                  <code className="code">npm install</code>
                </li>
                <li>
                  To start the website locally on your computer, run the following command:
                  <br />
                  <code className="code">npm run dev</code>
                  <p>
                    If the website started correctly with no errors, you should be able to preview
                    your post by opening up a browser and going to the following url:
                  </p>
                  <code className="code">http://localhost:3000/post/example-post</code>
                  <p>
                    Where <code className="code">example-post</code> is the name of the{' '}
                    <code className="code">.md</code> file you created.
                  </p>
                </li>
              </ol>
            </HelpTopic>

            <HelpTopic anchorTag="submit-review" topicTitle="4. Submit for review">
              <p>
                After you have created a post, previewed it, and you are satisfied with it, follow
                these steps to get your changes published:
              </p>
              <ol>
                <li>
                  Submit a pull request for your changes targeting the{' '}
                  <code className="code">master</code> branch to this{' '}
                  <a
                    href="https://github.com/philipstubbs13/next-netlify-blog"
                    target="_blank"
                    rel="noreferrer">
                    repository
                  </a>{' '}
                  on GitHub.
                </li>
                <li>
                  Someone on the team will review it and might provide some feedback for you to
                  address before your changes can be merged into the
                  <code className="code">master</code> branch.
                </li>
                <li>
                  After your pull request is approved and merged, an automatic deploy will be kicked
                  off to deploy your changes to the live site, which is hosted on netlify.
                </li>
                <li>
                  After the deploy finishes, it is recommended that you do a final QA check to make
                  sure your changes are showing up correctly on the site and that there are no bugs.
                </li>
              </ol>
            </HelpTopic>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contribute;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      description: configData.default.description,
      title: configData.default.title,
    },
  };
}

Contribute.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

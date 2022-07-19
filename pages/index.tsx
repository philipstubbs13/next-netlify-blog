// @ts-nocheck
import { useState } from 'react';
import PropTypes from 'prop-types';
import matter from 'gray-matter';
import { Layout } from '@components/layout/Layout';
import { PostList } from '@components/post-list/PostList';
import { SearchFilter } from '@components/search-filter/SearchFilter';
import { BLOG_TITLE } from '../constants';
import { FeedbackCard } from '@components/feedback-card/FeedbackCard';
import { PageTitle } from '@components/page-title/PageTitle';

export interface IProps {
  description: String;
  title: String;
  posts: any[];
}

const Index = (props: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(props.posts);

  const handleSearchPosts = (event) => {
    event.preventDefault();

    const postsToFilter = [...props.posts];
    let postsToDisplay = postsToFilter;

    if (searchTerm.trim().length) {
      postsToDisplay = postsToFilter.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.frontmatter.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(postsToDisplay);
  };

  const handleChangeSearchFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout pageTitle={props.title}>
      <div className="container-fluid">
        <div className="card">
          <PageTitle title={BLOG_TITLE} description={props.description} />
        </div>
      </div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <PostList posts={filteredPosts} searchTerm={searchTerm} />
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <h2 className="card-title">Search</h2>
                <SearchFilter
                  handleChange={handleChangeSearchFilter}
                  handleSubmit={handleSearchPosts}
                  placeholder="Search posts by title or author"
                />
              </div>
              <FeedbackCard />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

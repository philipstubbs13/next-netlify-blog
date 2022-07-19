import PropTypes from 'prop-types';
import Link from 'next/link';

export interface IProps {
  slug: string;
  title: String;
}

export const NavLink = (props: IProps) => {
  return (
    <Link href={props.slug}>
      <a className="btn-link btn-lg mr-5 pl-0">{props.title}</a>
    </Link>
  );
};

NavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

export interface IProps {
  description?: String;
  title: String;
}

export const PageTitle = (props: IProps) => {
  const { description = '' } = props;

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="title">{props.title}</h1>
      </div>
      <div className="col-12">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

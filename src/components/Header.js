import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "rgb(219,40,40)" : "rgb(33,186,69)"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

/**
 * 
const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};


Header.defaultProps = {
    title: 'Task tracker'
}

export default Header;

 */

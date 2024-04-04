import c from './Button.module.css';

const Button = props => {
  console.log(props);
  return (
    <button className={c.btn} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

import classes from "./InputCard.module.css";

const InputCard = (props: any) => {
  return (
    <div className={classes.inputCard}>
      <div className={classes.cardTitle}>
        <h1>Audio</h1>
        <h2>It's modular and designed to last</h2>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default InputCard;

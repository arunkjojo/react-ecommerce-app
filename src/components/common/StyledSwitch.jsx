import style from "./StyledSwitch.module.css";

const StyledSwitch = ({ label, checked, onChange }) => {
  return (
    <label className={style.switchLabel}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={style.switchSlider}>
        {label && <span className={style.switchLabelText}>{label}</span>}
      </span>
    </label>
  );
};

export default StyledSwitch;

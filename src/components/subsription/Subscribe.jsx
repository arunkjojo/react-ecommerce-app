import style from "./Subscribe.module.css";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (event) => setEmail(event.target.value);
  return (
    <div className={style.subscription}>
      <div className="container">
        <div className={style.subscriptionInnerDiv}>
          <div className="left">
            <h2 className={style.heading}>Grab an extra 5% duscount</h2>
            <p className={style.paragraph}>
              Subscribe to monthly newsletter. Get the latest product updates
              and special offers delivered right to your inbox.
            </p>
          </div>
          <div className="right">
            <div className={style.emailInputDiv}>
              <input
                type="email"
                placeholder="Enter Email Address"
                className={style.emailInput}
                value={email}
                onChange={(e) => emailHandler(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

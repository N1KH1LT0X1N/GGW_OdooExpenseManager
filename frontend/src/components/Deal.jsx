import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Streamline your expense workflow <br className="sm:block hidden" /> in three simple steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Submit expenses with OCR receipt scanning, configure multi-level approval workflows, and process reimbursements automatically. Complete visibility and control at every step.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

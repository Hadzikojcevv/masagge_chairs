import { montserat } from "@/fonts/Fonts";

const ContactSection = () => {
  return (
    <section className="contactSection" id="contact">
      <div>
        <h3>
          Дали ви е потребна експертска препорака  за вашата идеална масажна
          фотелја?
        </h3>
        <p className={`${montserat.className} aboutDesc`}>
          {" "}
          Оставете го тоа на тимот на Масажери.мк
        </p>
      </div>
      <button className="btn">Контакт</button>
    </section>
  );
};

export default ContactSection;

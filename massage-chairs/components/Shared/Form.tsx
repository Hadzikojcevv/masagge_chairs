import { massageChairs } from "@/data/Data";
import { montserat } from "@/fonts/Fonts";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const Form = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [state, handleSubmit] = useForm("mrgwnngw");

  if (state.succeeded) {
    return (
      <div className="modalMessageWrapper">
        <Image src={"/logo.png"} alt="logo" width={200} height={200} />
        <h5 className={`${montserat.className} modalTitle`}>
          Вашата Порака е <span style={{fontWeight: 800, color: '#08c75b'}}>УСПЕШНО</span> испратена.
          <br />
          Ви Благодариме.
        </h5>
      </div>
    );
  }

  if (state.errors) {
    return (
      <div className="modalMessageWrapper">
        <Image src={"/logo.png"} alt="logo" width={200} height={200} />
        <h5 className={`${montserat.className} modalTitle`}>
          Вашата Порака е <span style={{fontWeight: 800, color: '#fa6767'}}>НЕУСПЕШНО</span> испратена.
          <br />
          Обидете се повтрно
        </h5>
      </div>
    );
  }

  return (
    <>
      <h5 className={`${montserat.className} modalTitle`}>Испратете Порака</h5>

      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          e.currentTarget.reset();
        }}
      >
        <div className="inputGroup">
          <label htmlFor="name" className={`${montserat.className}`}>
            Вашето Име*
          </label>
          <input
            type="text"
            id="name"
            name="Име"
            required
            className="basicInputStyles"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email" className={`${montserat.className}`}>
            Вашиот Е-Маил*
          </label>
          <input
            type="email"
            id="email"
            name="Е-маил"
            required
            className="basicInputStyles"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="tel" className={`${montserat.className}`}>
            Телефонски Број
          </label>
          {/* <input type="tel" name="Tel" id="tel" className="basicInputStyles" /> */}
          <PhoneInput
            country={"mk"}
            value={phoneNum}
            preferredCountries={["mk"]}
            placeholder="HEy"
            specialLabel=""
            inputProps={{
              name: "Телефонски Број",
              required: true,
              label: null,
            }}
            containerClass="phoneContainer"
            inputClass="inputPhoneContainer"
            containerStyle={{
              flexBasis: "100%",
              width: "100%",
              borderRadius: "2px",
            }}
            inputStyle={{
              width: "100%",
              borderRadius: "2px",
              border: "1px solid #3f3f3f2e",
              fontSize: "18px",
              padding: "0.3rem",
              outline: "none",
            }}
            onBlur={(e: any) => {
              setPhoneNum(e.target.value);
            }}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="msg" className={`${montserat.className}`}>
            Порака
          </label>
          <textarea
            name="Порака"
            id="msg"
            rows={2}
            className="basicInputStyles"
          ></textarea>
        </div>

        <div className="inputGroup">
          <label htmlFor="chair" className={`${montserat.className}`}>
            Заинтересиран/а сум за...
          </label>
          <select
            name="Заинтересиран/а сум за"
            id="chair"
            className="basicInputStyles"
          >
            {massageChairs.map((chair) => (
              <option key={chair.id} value={chair.name}>
                {chair.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={`${montserat.className} formBtn`}>
          Испрати
        </button>
      </form>
    </>
  );
};

export default Form;

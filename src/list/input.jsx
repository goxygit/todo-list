import s from "./list.module.css";
import plus from "./img/plus.png";
const Input = ({ value, handleSubmit, handleChange, content }) => {
  return (
    <div style={{ margin: "20px auto 0 auto", width: "500px" }}>
      <form>
       
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              margin:' 30px 0 0 0 '
            }}
          >
            <input
              onChange={handleChange}
              maxLength={30}
              placeholder="Ващі справи до нас.."
              style={{
                border: "1px solid rgb(231, 230, 230)",
                outline: "none",

                width: "65%",
                height: "80%",
                fontSize: "18px",
              }}
              type="text"
              value={value}
            />
            {value && content.length < 8 ? (
              <div
                onClick={handleSubmit}
                className={s.gradient}
                style={{
                  width: "34px",
                  height: "34px",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={plus}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Input;

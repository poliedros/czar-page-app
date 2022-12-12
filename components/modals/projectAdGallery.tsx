import { IoGrid } from "react-icons/io5";
import translations from "../../functions/translations";
import { Languages } from "../../types/languages";

export default function ModalAdGallery({ language }: { language: Languages }) {
  return (
    <>
      <div className="card" onClick={undefined}>
        <div className="image fifth">
          <div className="screen"></div>
          <div className="text text-end p-4">
            <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>
              {<IoGrid />}
              <br /> translations(projectt, language, 0)
            </h1>
            <h3>translations(projectst, language, 0) </h3>
            <h5>
              {" "}
              translations(projecttmsg, language, 0)
              <br />
              {
                <a href="https://poliedros.github.io/catalog-app/">
                  project example
                </a>
              }
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

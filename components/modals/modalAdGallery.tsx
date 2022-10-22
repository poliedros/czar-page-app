import { IoGrid } from "react-icons/io5";
import translations from "../../translations.json";
import { Language } from "../languages";

export default function ModalAdGallery({ language }: Language) {
    return <>
            <div className="card" onClick={undefined }>
                            <div className="image fifth">
                                <div className="screen"></div>
                                <div className="text text-end p-4">
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{ <IoGrid /> }<br />{translations[this.props.language].projectt[0] }</h1>
                                    <h3>{ translations[this.props.language].projectst[0] }</h3>
                                    <h5>
                                        { translations[this.props.language].projecttmsg[0]}
                                        <br />
                                        { <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a> }
                                    </h5>
                                </div>
                            </div>
                        </div>
            </>
}
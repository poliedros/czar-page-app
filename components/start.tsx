import { BsMouse, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

export default function Start() {
    return <>
        <div className="App" id="start">
            <header className="App-header">
                <div>

                    {/*
                    <svg className="svg" style={{ position: "absolute", left: "18.9vw", top: "19.5vh" }}>
                        <circle class="meter-1" cx="7.5em" cy="7.5em" r="6em" />
                    </svg>
                    <svg className="svg" style={{ position: "absolute", left: "41.5vw", top: "21.5vh" }}>
                        <circle class="meter-2" cx="7.5em" cy="7.5em" r="6em" />
                    </svg>
                    */}

                    <h1 className="unselectable -mb-20" style={{
                        fontSize: "35vmin",
                        fontFamily: "'Josefin Sans', sans-serif",
                    }}>
                        <span className="inline-block align-top scale-x-[-1]" style={{
                            filter: "fliph"
                        }}>
                            C
                        </span>
                        ZAR
                    </h1>

                    {/*
                    <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", marginTop: "-10rem", marginBottom: "7rem" }}>
                        desenvolvedores
                    </h3>
                    */}

                </div>
                <BsChevronCompactUp className="slide-top fixed top-6 text-white z-[1]" />
                <BsChevronCompactDown className="slide-bottom fixed bottom-6 text-white z-[1]" />
                <BsMouse className="absolute text-[#6b7280]" style={{ bottom: "10vh" }} />
                <BiPlusMedical className="text-flicker-in-glow absolute text-white" style={{ fontSize: "7vmin" }} />
            </header>
        </div>
    </>;
}

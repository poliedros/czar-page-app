import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Language } from "./languages";
import translations from "../functions/translations";
import { RiCloseCircleLine } from "react-icons/ri";
import getIconsByName from "../functions/getIconsByName";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import SocialMedia from "./socialMedia";

type MemberData = {
  image: string;
  name: string;
  pos: number;
  links: {
    youtube: string;
    medium: string;
    twitter: string;
    linkedin: string;
  };
  language: Language;
};

export default function MemberCzar({ data }: { data: MemberData }) {
  return (
    <>
      <Col
        xs={12}
        md={6}
        className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image})`,
        }}
      >
        <div className="my-[5vh]">
          <h1
            style={{
              fontFamily: "'Ubuntu Condensed', sans-serif",
            }}
          >
            {data.name}
          </h1>
          <h6
            className="text-gray"
            style={{
              fontFamily: "'M PLUS Code Latin', sans-serif",
              textShadow: "1px 1px 2px black, 2px 2px 4px #000000",
            }}
          >
            {translations("teamlanguage", data.language, data.pos)}
          </h6>
          <h4>
            <b>{translations("teamrole", data.language, data.pos)}</b>
          </h4>
          <h5>{translations("teamcv", data.language, data.pos)}</h5>
          <h6>{translations("teamaddress", data.language, data.pos)}</h6>
          <Row>
            <Col>
              <SocialMedia media={"Linkedin"} link={data.links.linkedin} />
            </Col>
            <Col>
              <SocialMedia media={"Medium"} link={data.links.medium} />
            </Col>
            <Col>
              <SocialMedia media={"Twitter"} link={data.links.twitter} />
            </Col>
            <Col>
              <SocialMedia media={"Youtube"} link={data.links.youtube} />
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

import getIconsByName from "../functions/getIconsByName";

type RenderIconType = {
  media: string;
  link: string;
};

export default function SocialMedia({ media, link }: RenderIconType) {
  if (link != "") {
    switch (media) {
      case "Linkedin":
        return <a href={link}>{getIconsByName("io", "IoLogoLinkedin")}</a>;
      case "Medium":
        return <a href={link}>{getIconsByName("bs", "BsMedium")}</a>;
      case "Youtube":
        return <a href={link}>{getIconsByName("bs", "BsYoutube")}</a>;
      case "Twitter":
        return <a href={link}>{getIconsByName("bs", "BsTwitter")}</a>;
      default:
        return <></>;
    }
  }
  return <></>;
}

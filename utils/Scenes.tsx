/* Icons */
import hedgehogIcon from "../assets/icons/hedgehog.svg";
import raccoonIcon from "../assets/icons/raccoon.svg";
import squirrelIcon from "../assets/icons/squirrel.svg";

/* png images */
import hedgehog1 from "../assets/images/hedgehog/hedgehog1-min.png";
import hedgehog2 from "../assets/images/hedgehog/hedgehog2-min.png";
import hedgehog3 from "../assets/images/hedgehog/hedgehog3-min.png";
import raccoon1 from "../assets/images/raccoon/raccoon1-min.png";
import raccoon2 from "../assets/images/raccoon/raccoon2-min.png";
import raccoon3 from "../assets/images/raccoon/raccoon3-min.png";
import squirrel1 from "../assets/images/squirrel/squirrel1-min.png";
import squirrel2 from "../assets/images/squirrel/squirrel2-min.png";
import squirrel3 from "../assets/images/squirrel/squirrel3-min.png";
import { url } from "inspector";

export const kidsScene = {
  icon: { src: "data:image/png;base64,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", alt: "Kids" },
  text: "Kids",
  desc: "Unforgettable moments captured",
  image: { src: "https://media.discordapp.net/attachments/701312584917450766/1038352478351147019/3.jpeg", alt: "Picture of kids" },
};

export const familyScene = {
  icon: { src: "data:image/png;base64,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", alt: "Family" },
  text: "Family",
  desc: "Photo sessions made special",
  image: { src: "https://media.discordapp.net/attachments/701312584917450766/1038354243377184768/2.jpeg", alt: "Picture of family" },
};

export const celebScene = {
  icon: { src: "data:image/png;base64,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", alt: "Celebrations" },
  text: "Celebrations",
  desc: "Keepsakes for a lifetime",
  image: { src: "https://media.discordapp.net/attachments/701312584917450766/1038354985269858344/1.jpeg", alt: "Picture of celebration" },
};
import Image from "next/image";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { TelegramIcon } from "../components/icons/TelegramIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";

import forest from "../public/forest.jpg"

export default function Home() {
  return (
    <div className="baseWrapper">
      <div className="box">
        <div className="informationBox">
          <div className="boxChildren">
            <div className="text">Stanislav <br/> Petryk</div>
            <div className="line"/>
          </div>
          <div className="icons">
            <a target="_blank" href="https://github.com/Stasic-Pk" className="icon"><GitHubIcon/></a>
            <a target="_blank" href="https://t.me/StasicPk" className="icon"><TelegramIcon/></a>
            <a target="_blank" href="https://twitter.com/petryt_stas" className="icon"><TwitterIcon/></a>
          </div>
        </div>

        <div className="imageBox">
          <Image
              priority={true}
              src={forest.src}
              alt="forestImage"
              width={1000}
              height={1000}
              className='forestImage'
            />
            <div className="imgFilter"/>
        </div>
      </div>
    </div>
  )
}

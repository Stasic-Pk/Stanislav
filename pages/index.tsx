import Image from "next/image";
import { GitHubIcon } from "../components/icons/GitHubIcon"
import { TelegramIcon } from "../components/icons/TelegramIcon"
import { TwitterIcon } from "../components/icons/TwitterIcon"

import forest from '../public/forest.jpg';

export default function Home() {
  
  return (
    <div className="box">
      <div className="boxChildren">
        <div>
          <div className="text">Stasnislav <br/> Petryk</div>
          <div className="line"></div>
        </div>

        <div className="icons">
          <div className="icon"><GitHubIcon /></div>
          <div className="icon"><TelegramIcon /></div>
          <div className="icon"><TwitterIcon /></div>
        </div>
      </div>

      <div className="imgWrapper">
        <Image
          priority={true}
          src={forest.src}
          alt="forest picture"
          width={3500}
          height={3500}
          className="forestImage"
        />

        <div className="imgFilter"></div>
      </div>
    </div>
  )
}

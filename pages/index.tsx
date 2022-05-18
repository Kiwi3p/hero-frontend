import type { NextPage } from "next";
import Link from "next/link";

import BodyText from "../components/BodyText";
import ContentBlock from "../components/ContentBlock";
import FAQBlock from "../components/FAQBlock";
import Hero from "../components/Hero";

import Stars from "../components/Stars.js";
import Team from "../components/Team";
import Layout from "../components/wrappers/Layout";
import logo from "../public/img/LogoGif.gif";

// import imgSet1 from "../data/imgSet1.json";
// import imgSet2 from "../data/imgSet2.json";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`bg-doodle max-h-full h-full pb-14`}>
      <Layout title="Home">
        <div className="relative z-20">
          <div>
            <div className="flex justify-center flex-col content-center items-center">
              <Hero />
            </div>
          </div>
          <p className="mx-24 twofivefive text-4xl flex items-center text-center">
            The Hero Galaxy is a “Battle-To-Earn” metaverse of games and
            challenges, hosted on various NFT Worlds called Battle Planets,
            populated by Heroes (5,555 NFT Avatars), and playable in Minecraft.
          </p>
          <section id="about" className="my-10">
            <ContentBlock
              img="/uploads/Webpage_Char_1.png"
              align="left"
              header="About"
              blackhole={true}
            >
              Heroes are a collection of 5,555 generative ERC-721 NFTs that act
              as an access-pass, and playable in-game avatars within the Hero
              Galaxy. Heroes accrue value and rewards through gameplay within
              the Hero Galaxy’s various “battle-to-earn” games. All except 10
              Heroes are composed of randomly generated attributes of variable
              rarity, and have 5 slots with which to bear various types of
              weaponry, armor, outfits, and accessories, called Artifacts – won
              through their glory on the gamefield.
            </ContentBlock>
            <h2
              id="battles"
              className="lg:-mb-24 lg:m-24 m-6 mt-44 text-4xl my-5 flex items-center telex"
            >
              Gameplay
            </h2>
            <ContentBlock
              img="/uploads/Group 46v2.png"
              smallHeader={true}
              align="right"
              header="HERO reward mechanics"
            >
              Heroes who play are able to claim WRLD Token (the native token of
              the NFT Worlds metaverse) and Artifacts, which are standalone NFTs
              that can be equipped by Heroes to increase their rarity, on a
              daily basis. The drop chance for Artifacts, and the rarity of
              dropped Artifacts is dependent on players’ in-game performance.
              <br />
              <br />
              Heroes who don’t have time to play may stake their Heroes and earn
              WRLD Token passively. Players who wish to battle and earn within
              Hero Galaxy without owning a Hero may purchase temporary Galaxy
              Passes, allowing them to leverage staked Heroes’ access to enter.
              80% of Galaxy Pass purchase fees, and 50% of the rewards earned by
              Galaxy Pass players will be distributed as rewards to staked
              Heroes.
              <br />
              <br />
              Hero Galaxy Battle Planets will also host multiple live,
              timebound, in-game competitions, whose winners will receive grand
              prizes (riches and glory). Heroes with the best performance will
              be immortalized both on leaderboards, and in our website’s Hall of
              Heroes (coming soon!)
            </ContentBlock>
            <div className="lg:-mt-44">
              <ContentBlock
                img="/uploads/Group 44.png"
                smallHeader={true}
                align="left"
                header="Battle Planets"
              >
                Battle Planets are the battlegrounds that compose the Hero
                Galaxy, built on various NFT Worlds. All Battle Planets present
                unique challenges, and opportunities to earn WRLD Tokens and
                Artifacts. Battle Planets coming to the Hero Galaxy include:{" "}
                <br />
                <br />
                PVP World - a Colosseum battle arena. <br />
                <br />
                PVE World - a cat-saving challenge <br />
                <br />
                Battle Royale World - a self-explanatory epic last-man-standing
                battle of wits and will, and more!
              </ContentBlock>
            </div>
          </section>
          <section className="my-44" id="roadmap">
            <h2 className="m-14 text-4xl my-5 flex items-center telex">
              Roadmap
            </h2>
            <div className="lg:m-20 m-5 my-16 flex justify-center">
              <img src="/img/Group 47.png" alt="roadmap image" />
            </div>
            <BodyText>
              <h2 className="text-2xl my-2 flex items-center telex">
                Chapter 1: Whispers
              </h2>
              People begin to talk of{" "}
              <u className="purple">
                <Link href="/whitepaper">Hero Galaxy</Link>
              </u>
              . Whispers are heard in Discords across the world(s), desperate
              DMs from randoms are sent to get a Whitelist chance. “Pls bro”
              they cry.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 2: A most glorious mint!
              </h2>
              All Heroes shall be minted on the day following Valentine’s Day.
              All will pray that they are among those most fortunate.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 3: All is revealed
              </h2>
              One week following our newly minted holy day, all Heroes shall be
              revealed. All are lucky, for gold and glory are in their future.
              The luckiest will rejoice.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 4: Battle for Artifacts
              </h2>
              Less than a month after, Artifacts are revealed and the gates to
              the Colosseum open. Heroes descend from across the galaxy to
              compete, win Artifacts, glory, and rewards. Blood is spilt.
              Victors are crowned. Players are made rich beyond their wildest
              dreams. Some become memes on the Hero Galaxy TikTok.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 5: Save the cats!
              </h2>
              PVE World is discovered and Heroes find friends in danger. They
              fly to the scene to save as many of their feline brethren as they
              can. Many perish to creepers, zombies, and traps. Those most
              valiant are rewarded handsomely.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 6: Winner take all
              </h2>
              Seeking to prove their honor on a grander scale, for more glorious
              spoils of war, Heroes create Battle Royale World. They aim to test
              themselves amongst one another, to determine who is the most
              valiant.
              <br />
              <br />
              <h2 className="text-2xl my-2 flex items-center telex">
                {" "}
                Chapter 7: An enemy emerges
              </h2>
              The epic ferocity of the Heroes’ clashing resounds across the
              multimetaverse. Echoes are heard in dark places, where none dare
              go. Drawn by bloodlust to this source of unimaginable power, a new
              set of enemies emerge. Prepare for war…
              <br />
              <br />
            </BodyText>
          </section>
          <section
            id="team"
            data-aos="fade-up"
            className="flex flex-col items-center"
          >
            <h2 className="m-14 text-4xl my-5 flex items-center telex">Team</h2>
            <Team />
          </section>
          <section id="faq" className="lg:mx-48 my-44 relative z-20">
            <h2 className="my-14 justify-center text-4xl my-5 flex items-center telex">
              FAQ
            </h2>
            <FAQBlock />
          </section>

          <Link href="/">
            <img
              className="relative mb-10 z-30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{
                height: 169,
                width: 169,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={logo.src}
            />
          </Link>

          <p className="mx-24 mt-14 two-rem hero-purple flex items-center justify-center text-center">
            Hero Galaxy is in no way associated with, endorsed by, or a partner
            of Minecraft, Mojang, Microsoft or any related parties.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

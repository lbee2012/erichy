export const DEFAULT_MUSEUM_DESCRIPTION = 'on the way!';

export const MUSEUM_DESCRIPTIONS = {
  device1: `my first iPad ever! this iPad was my dad's gift when I was around 3, he bought it in an autumn vacation to Japan, Akihabara - Tokyo in 2010. thanks dad.

joke of the century (Vietnamese): tao đã chém hoa quả ầm ầm khi mấy thằng cùng lứa chưa biết cái iPad là chố cái gì.

then I got an iPad 2nd gen in the next year, afterwards, 3rd generation, subconsequenly, iPad Air 1st gen. the head pic was the first one, I would update some nearby pics for the later gets.`,
  device2: `Mar 21. 2021 // iPad 8th Gen // finally, a guy who addicted and really enjoy FreeFire, PUBG, ArenaOfValor got his first self-afford iPad, which is an 8th Generation. it took my accumulation roughly 9 millions of VND.`,
  device3: `Dec 08. 2021 // iPad Air 4 // this was my mom's present, for my 14th birthday. thanks mom.`,
  device4: `Jun 19. 2022 // iPad Air 5 // this one is also my mom's gift, for my graduation of the junior high-school. thanks mom.`,
  device5: `Jun 10. 2023 // Acer Nitro 5. AN515-45 R86D submodel // first laptop ever, I'm currently utilizing it since the time, really love it although the original charger has almost been broken. 😊`,
  device6: `Dec 10. 2023 // Attack Shark X3. lavender-base // my mom's present, for a 16th birthday. this was a gaming mouse and I've sold it after few months of using because I decided to quit games, then I really left them behind. all the achivements were memories for the moment and also the future. games, games, games. 😳`,
  device7: `Dec 10. 2023 // ZA68 Pro. tri-modes // my mom's present of my 16th birthday. I picked it because I love the LGBT led. continued using for a while until it broke around July 2023. long story. 😭`,
  device8: `Feb 21. 2025 // Moondrop Space Travel // hell yah, I bought it following a friend's tell, love the trab, boost, volume, noise cancel, extend vol,... WE CAN'T NOT BLAME THIS SHIT BECAUSE IT WAS HELLY PERFECT. 😎`,
  device9: `Apr 25. 2025 // Hyperwork. Hyperone Gen 2 & Silentium // special minimal ergonomic combo, keyboard & mouse. I bought this combination some days after taking the IELTS examination (I got 6.0 Overall - on March 22. 2025). Before, I simply used enormous gears and they took huge spaces on the desk, so my needs changed then... 😔`,
  device10: `May 24. 2025 // Logitech Ergo M575s // after realizing my desk still sucked, I actively tried to find a stable-in-one-place mouse, which is the kind of 'trackball' mouse. bought it in used condition with 30% of the original price, then I gave the ergonomic Silentium to my mom. my first trackball, in the long-term journey with them! 😆`,
  device11: `Mar 14. 2025 // Seiko Watch // a special gift from Mr.Agata, our japanese friend. Agata decided to give me the watch through my dad, while my dad visited Japan and his friends, including Mr.Agata.`,
  device12: `Unknown date // Asus Vivobook. X509FA - xxx submodel // my uncle's old laptop, I supported her to pick a new one and she gave me this one. currently dual-booting Arch Linux and Windows 10 ULTRA LITE on it, I mainly use it for writing something, like thoughts, autobiographies...`,
  device13: `July 14. 2025 // Logitech Cordless Trackman Wheel - 'cordless' was wireless version // this one is dead for the moment, but this model first released in 2000. I've got an ultimately ancient trackball during the real Japan summer vacation trip. plus one for eric's trackball collection 🏆`,
  device14: `July 14. 2025 // ProtoArc EM01 - white & RGB ring // this was a very special one because its mother company, protoarc, did not produce this variant of EM01 anymore. Another extremely special trackball I got during the Japan summer trip. 😎`,
  device15: `July 06. 2025 // HHKB Professional HYBRID Type-S - Snow/Printed // my first HHKB ever! I've dreamed of a HHKB keyboard for a while, mainly because of the notorious layout in any keyboard-tech forums. I thought it was customizable (hotswapable) but I was wrong, I did not read the information about Topre-switches since I bought it home =)). However, my keyboard nowadays is the limited edition. 😳

if uguys pay more attention, will see the special point in the general looking at keycaps. I've mailed PFU for this issue reporting and they said they would send me a new one (not for replacement but the whole brand new HHKB by the same variant).`,
  device16: `July 05. 2025 // LG Monitor - 23EA63 // quite an old monitor, first released might be in 2013, Agata gave it to me. the monitor has travelled for more than 5000 kilometers from Japan to Vietnam.`,
};

export function getMuseumDescription(deviceKey) {
  const text = MUSEUM_DESCRIPTIONS[deviceKey];
  if (!text) {
    return DEFAULT_MUSEUM_DESCRIPTION;
  }

  return text.trim().length ? text : DEFAULT_MUSEUM_DESCRIPTION;
}

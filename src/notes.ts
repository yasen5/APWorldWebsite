export interface CountryNotes {
  [country: string]: {
    [section: string]: string[];
  };
}

export const noteSVGs: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  /* Put the country name EXACTLY as it appears in the country svgs, then the note svg that was generated for it */
};

export interface GeneralNotes {
  [country: string]: {
    [section: string]: string[] | [number, number];
    applicableCountries: string[];
    timePeriod: [number, number];
    emphasizedUnit: [number, number];
  };
}

export const generalNotes: GeneralNotes = {
  Crusades: {
    Governance: [
      "Trying to retake the Holy Land (Jerusalem area) from the Muslims, as well as to stop Muslim expansion into Europe",
      "There were several different crusades from 1095 to about 1270",
      "The first crusade was the only big Christian victory. They took control of Jerusalem from 1099 to 1187",
    ],
    Social: [
      "Younger sons of nobles often went to fight in the crusades due to primogeniture (only the oldest son would inherit anything",
    ],
    Technology: [
      "Increased contact and trade with the Middle East, spreading ideas and technology from the East to Europe, including paper, sugar, and gunpowder", // maybe culture or economic?
    ],
    applicableCountries: [
      "France 1200-1450",
      "England 1200-1450",
      "Holy Roman Empire 1200-1806",
    ],
    timePeriod: [1095, 1291],
    emphasizedUnit: [1200, 1450],
  },
  "Black Death": {
    Environment: [
      "Spread from China over the Silk Roads",
      "Killed about 1/3 of Europe's population",
    ],
    Social: [
      "Because there was a high demand for labor but so many people had died, serfs were able to gain more power, triggering the end of feudalism in Western Europe",
    ],
    applicableCountries: [
      "France 1200-1450",
      "England 1200-1450",
      "Holy Roman Empire 1200-1806",
    ],
    timePeriod: [1344, 1353],
    emphasizedUnit: [1200, 1450],
  },
  Renaissance: {
    Culture: [
      "Caused by increased contact with the East in the 1300s",
      "Revived interest in classical Greek and Roman arts",
    ],
    Technology: [
      "The Gutenberg printing press, invented in 1439, led to an increase in literacy",
    ],
    applicableCountries: [
      "France 1200-1450",
      "England 1200-1450",
      "Holy Roman Empire 1200-1806",
    ],
    timePeriod: [1400, 1600],
    emphasizedUnit: [1200, 1450],
  },
  "Trans-Saharan Trade": {
    Environment: [
      "Used camels for transportation",
      "North of the Sahara was able to grow a lot, while South of the Sahara was better for pastoralists",
    ],
    Culture: ["Lead to the spread of Islam"],
    Economy: [
      "Used mainly coins and cowrie shells as a currency",
      "Facilitated trade of horses, books, salt, gold, ivory, cloth, and slaves",
    ],
    Technology: ["With the new Somali saddle, camels could carry up to 600lbs"],
    applicableCountries: [
      "Mali Empire", 
      "Hausa States"],
    timePeriod: [0, 1450],
    emphasizedUnit: [1200, 1450],
  },
  "Silk Road Trade": {
    Environment: [
      "Used camels for transportation",
      "Contributed to the spread of the Black Death",
    ],
    Culture: [
      "Facilitated the exchange of cultures between merchants",
      "Was a safe place for some persecuted religions, including Nestorian Christianity",
    ],
    Economy: [
      "The Chinese used flying money instead of coins, which later influenced European banking systems",
      "Facilitated the trade of silk, tea, spices, dyes, porcelain, rice, paper, gunpowder, horses, saddles, fruit, domesticated animals, honey, and textiles",
      "Established caravanserai, spaced about 100 miles apart along the road, where camels could rest and be exchanged",
      "Cities were established along the Silk Roads, especially near water sources as most of the routes didn't have much water, as centers of trade. Examples include Kashgar, Samarkand, and Chang'an",
    ],
    Technology: [
      "Facilitated the spread of maritime technology, including lateen sails (triangular to allow wind to be caught from all directions), the stern rudder (allowed for better steering and maneuverability), the astrolabe, dhow ships, and the compass",
    ],
    applicableCountries: ["Song Dynasty", "Abbasid Caliphate"],
    timePeriod: [0, 1450],
    emphasizedUnit: [1200, 1450],
  },
  "Indian Ocean Trade": {
    Environment: [
      "Sailors utilized monsoon winds to expedite their voyages. Monsoon winds could be predicted based on season (from the Northeast in winter, from the Southwest in spring and summer) ",
    ],
    Culture: [
      "Facilitated the spread of Islam to everywhere except China",
      "Led to diaspora and cultural transfer as merchants would settle or start families while waiting for monsoon winds",
    ],
    Governance: [
      "Never countrolled by any one country, although Yongle in the Ming Dynasty tried to establish control through the Zheng He voyages",
    ],
    Economy: [
      "There was more trade in the Indian Ocean than on the Silk Roads, since ships could carry more goods than camels",
      "Facilitated trade of gold, ivory, quartz, animal skins, fruits, books, textiles, spices, precious metals, porcelain, and tea",
      "There were three circuits of trade: the Arabian Sea, the Bay of Bengal, and the South China Sea. Traders generally stayed within their circuit",
      "Trade cities were established, including Calicut, Malacca, and Kilwa",
    ],
    Technology: [
      "The essential maritime techology for the Indian Ocean trade included the magnetic compass, astrolabe, lateen sail, dhow ship, and stern rudder",
    ],
    applicableCountries: [
      "Srivijaya Empire",
      "Majapahit Empire",
      "Song Dynasty",
      "Swahili Coast",
    ],
    timePeriod: [0, 1850],
    emphasizedUnit: [1200, 1450],
  },
  Calvinism: {
    Culture: [
      "Founded by John Calvin in 1530",
      "Believed in predestination, where God had already predetermined who was going to heaven and who was not",
      "Beleived being predestined to go to heaven was shown through hard work and wealth",
      "They led a very strict lifestyle in order to prove to others that they had been selected to go to heaven",
    ],
    Social: [
      "People who were predestined to go to heaven were called the Elect",
    ],
    Technology: [],
    applicableCountries: ["France 1200-1450"],
    timePeriod: [1536, 1750],
    emphasizedUnit: [1450, 1750],
  },
  "Columbian Exchange": {
    Environment: [
      "Diseases like smallpox, measles, and tuberculosis were spread to the New World. This led to the native population declining by about 80%, known as the Great Dying",
      "Animals like pigs, goats, cows, and horses were brought to the New World",
      "Crops like wheat, okra, rice, and sugarcane were brought to the New World",
      "Crops like potatoes, maize, tomatoes, beans, peppers, cacao, yams, and tobacco were brought to the Old World. This led to better nutrition and population growth",
    ],
    applicableCountries: ["Aztecs", "Spain 1492-1750"],
    timePeriod: [1492, 1600],
    emphasizedUnit: [1450, 1750],
  },
  "Triangular Trade and Trans-Atlantic Slave Trade": {
    Governance: [
      "African kingdoms that participated in slave trade, like the Asante and Oyo, became very powerful",
    ],
    Economy: [
      "Colonies needed slaves because there weren't enough Native Americans, as they had been decimated by disease and were able to escape and hide from the Europeans. Africans had already been exposed to European diseases, and they were easy to find if they escaped",
      "Europeans sold manufactured goods and firearms to Africa in exchange for slaves. African kingdoms used the firearms to get more slaves to sell to the Europeans",
      "African kingdoms often exploited each other for slaves to trade. For example, the Oyo conquered Dahomey but gave them independence in exchange for an annual tribute of slaves. Angolan leaders took in refugees from other kingdoms, kept the women and children, but sold the men into slavery",
      "The slaves were sent to the Americas (Trans-Atlantic Slave Trade) to work on plantations (mainly sugar or tobacco) or in mines",
      "Most slaves were sent to Portuguese colonies",
      "Raw materials produced in the Americas were sent to Europe to be made into manufactured goods",
      "Chattel slavery was a common practice, where slaves were treated as property and could be bought and sold. This was passed down through generations",
    ],
    Social: [
      "Most slaves taken from Africa were men, leaving a gender imbalance in Africa. This led to more polygyny, but also to women taking on more traditionally masculine roles in society",
      "In some Spanish, Portuguese, and French colonies, owners and slaves could go to court to argue for the freedom of a slave",
    ],
    applicableCountries: [
      "Hausa States",
      "Spanish Territory",
      "Portuguese Territory",
      "French Territory",
      "British Territory",
      "Asante Kingdom",
    ],
    timePeriod: [1500, 1850],
    emphasizedUnit: [1450, 1750],
  },
  "Thirty Years War 1618-1648": {
    Governance: [
      "A war between Catholics and Protestants. It originally started in the Holy Roman Empire, and then it spread",
      "It resulted in the Peace of Westphalia, where each area of the Holy Roman Empire could choose Roman Catholicism, Lutheranism, or Calvinism",
    ],
    applicableCountries: [
      "England 1450-1700",
      "France 1450-1700",
      "Holy Roman Empire 1200-1806",
      "Spain 1492-1750",
      "Netherlands 1450-1750",
    ],
    timePeriod: [1618, 1648],
    emphasizedUnit: [1450, 1750],
  },
  "Enlightenment (1600s-1700s)": {
    "Important ideas": [
      "Socialism, the idea where the public owns the means of production, was developed",
      "Adam Smith developed the idea of laissez-faire economics, where the government would not interfere with economic deciisions. This was the foundation for capitalism and the free market. He believed that capitalism would protect against poverty better than mercantilism had",
      "Liberalism valued natural rights, a constitutional government, laissez-faire economics, and reductions to the money spent on the army and church. It was supported mainly by professionals and academics, as well as by the British Parliament",
      "Conservatism, generally supported by the ruling class, valued traditions and religion over new idealogical theories",
      "Thomas Hobbes believed that humans were naturally bad, and that they had to give up their rights to the government in exchange for order",
      "John Locke, known as the Father of Liberalism, thought that people have natural rights (rights for all humans that couldn't be infringed upon by the government) to life, liberty, and the pursuit of property. He also believed that there was a social contract, where the government was obligated to protect its people's natural rights, and it was the responsibility of the people to revolt against the government if it was unjust. He developed the idea of tabula rasa, where people were born as a blank slate and are shaped by their environment and education, as opposed to the traditional belief that better ancestry would lead to more intelligence. This idea essentially went against the idea of absolute monarchy",
      "Voltaire believed in constitutional monarchies, religious freedom, and freedom of speech",
      "Jean-Jacques Rousseau developed the idea of the social contract after Locke and the new idea of the general will of the population, where decisions would be made based on the will of the majority. This was the start of democracy, and a big threat to monarchs",
      "Baron Montesquieu believed supported monarchies, but not absolute monarchies. He wanted to check the monarch's power, so he developed the idea of separating the executive, legislative, and judicial powers, as well as the idea of checks and balances. His ideas influenced the American and French constitutions",
      "Deism, the belief that God set natural laws in motion but does not interfere after, became prevalent among Enlightenment thinkers",
      "Atheism, the rejection of religious beliefs, became more common",
    ],
    Consequences: [
      "A rejection of tradition, challenging monarchs and church leaders",
      "People began to want more independence and constitutional representation",
      "Led to the rise of nationalism",
      "Led to the rise of revolutions, including the American Revolution, the French Revolution, and the Haitian Revolution",
      "Led to the end of serfdom and slavery, and the rise of suffrage movements",
    ],
    applicableCountries: [
      "England 1750-Present",
      "France 1750-1920",
      "Spanish Territory",
    ],
    timePeriod: [1688, 1789],
    emphasizedUnit: [1750, 1900],
  },
  "Second Industrial Revolution": {
    Environment: [
      "The rapid rise in urbanization led to overcrowding and poor sanitation",
      "Pollution increased as fossil fuels were burned for energy. Additionally, the air and water was polluted from factories, leading to health problems and the spread of diseases like cholera and typhoid",
    ],
    Economy: ["Europe, the US, and Japan did most of the manufacturing"],
    Social: [
      "Being a housewife became a symbol of status in the middle class, as it meant that the husband made enough money to support the entire family",
      "Social classes began to change; the working class was made up of replaceable low-skilled people who worked in factories or coal mines; the middle class were higher-skilled, educated factory overseers, managers, doctors, or lawyers; the higher class was made up of rich factory or office managers",
      "Social reforms began to be implemented as the working conditions (long hours, overworked, dangerous work) were awful, and for very little pay. Labor unions formed, and laws were put in place to limit thnigs like child labor",
      "Consumerism began to emerge in the middle class",
    ],
    Technology: [
      "The telegraph was invented in the mid-1800s",
      "Electricity was developed, leading to public power stations, electric streetcars, and street lights in the late 1800s",
      "The telephone was invented in the late 1800s",
      "The second industrial revolution used mainly oil instead of coal with the invention of the internal combustion engine",
      "Cars were introduced in the early 1900s",
      "Railways and steamships improved transportation, linking industrial centers and ports. Urbanization accelerated as new industrial cities rapidly grew",
    ],
    Uncategorized: [
      "Countries that had money, natural resources, and water transportation (eg. US, Germany, France, Russia, and Japan) began to industrialize after Britain",
      "Before the industrial revolution, families worked together at home on their farms, but after the industrial revolution, the whole family was separated to work in factories",
    ],
    applicableCountries: [
      "United States 1776-1920",
      "Germany 1850-1920",
      "France 1750-1920",
      "Japan 1853-Present",
    ],
    timePeriod: [1870, 1914],
    emphasizedUnit: [1750, 1900],
  },
  Communism: {
    Social: ["Split into classes of proletariat and bourgeoisie"],
    Uncategorized: [
      "Developed by Karl Marx (1818-1883), who wanted to replace capitalism with socialism",
      "In 1848 Karl Marx and Freidrich Engels wrote the Commmunist Manifesto, detailing how capitalism produced a lot of money but left many in poverty. They predicted that the middle class would be eliminated so everyone would fall into one of two classes: the bourgeoisie (rich people who owned the means of production) and the proletariat (the working class), and that the proletariat would eventually overthrow the bourgeoisie to form communism",
    ],
    applicableCountries: [
      "China",
      "USSR",
      "Vietnam",
      "Venezuela",
      "Ethiopia",
      "Iran",
    ],
    timePeriod: [1847, 1991],
    emphasizedUnit: [1900, 2025],
  },
  "European Imperialism": {
    Culture: [
      "Colonizers would force their culture, language, and religions on the people in their colonies",
    ],
    Governance: [
      "The British, French, and Dutch charter companies made treaties with rulers in India, East Africa, and the East Indies to set up ports and forts, which they used for spice trade and to form armies used to conquer the territory and make colonies",
    ],
    Economy: [
      "Countries wanted access to more raw materials (especially palm oil, gold, ivory, and diamonds from Africa) as well as new markets, so they made colonies",
    ],
    Social: [
      "They justified imperialism using ideas like White Man's Burden (it's white people's responsibility to civilize other people) and Social Darwinism (the idea that white people were superior to other races)", // social? culture?
      "Having colonies was a way to prove how powerful a nation was", // maybe gov
    ],
    applicableCountries: [
      "England 1750-Present",
      "France 1750-1920",
      "France 1920-Present",
      "Germany 1850-1920",
      "Spain 1492-1750",
      "Spain 1750-Present",
      "The Netherlands",
      "Japan 1853-Present",
    ],
    timePeriod: [1492, 1945],
    emphasizedUnit: [1750, 1900],
  },
  "Berlin Conference 1885": {
    Governance: [
      "As imperialism was rising, Europeans fought each other for control in Africa. Otto von Bismarck wanted to keep the peace between the European nations, so he organized the Berlin Conference from 1884-1885",
      "In the Berlin Conference, the European powers met up to divide Africa peacefully",
      "Africans had no say in the division, so the borders of the colonies often dividded up tribes into different colonies or grouped rival colonies in the same colony",
    ],
    Economy: ["It allowed free movement of goods on major rivers"],
    applicableCountries: [
      "England 1750-Present",
      "Belgium",
      "Germany 1850-1920",
      "France 1750-1920",
      "Spain 1750-Present",
      "Italy",
      "Portugal 1750-Present",
    ],
    timePeriod: [1885, 1886], // Not really, but I'm making this exclusive so the second number has to be higher
    emphasizedUnit: [1750, 1900],
  },
  "Great Depression 1929-1939": {
    Economy: [
      "Disrupted global economies",
      "Germany was especially affected because they had inflation due to printing money to pay reparations after World War I",
    ],
    applicableCountries: [
      "United States 1920-Present",
      "Germany 1920-1945",
      "France 1920-Present",
    ],
    timePeriod: [1929, 1939],
    emphasizedUnit: [1900, 2025],
  },
  "World War I (1914-1918)": {
    Causes: [
      "Tensions were rising as Germany and Britain were becoming more powerful, Austria-Hungary and Russia both wanted control of the Balkans, and Kaiser Wilhelm II kicked out Otto von Bismarck who was trying to keep the peace",
      "Militarism - European powers were competing for dominance through being the most militarily prepared. There was an arms race between Germany, Britain, and Russia. Countries also expanded their railroads and made plans for how to mobilize their massive standing armies through them",
      "Alliances - there were a lot of alliances (Otto von Bismarck had made many alliances to discourage the French from getting back at them for the Franco-Prussian Wars). Notable alliances include the Triple Entente (French, British, and Russian) who were enemies with the Triple Alliance (Germany, Austria-Hungary, Italy).",
      "Imperialism - European countries competed for dominance through owning colonies. Once all the land had been taken up, they fought each other for colonies. Germany had begun taking more overseas colonies in the early 1900s, making other countries feel threatened",
      "Nationalism - countries wanted to prove that their country was the best. A lot of younger men wanted to prove themselves by going to war (the last big European was was the Crimean War in the 1850s), and each European country was used to easily winning because they had just been fighting to subjugate their colonies",
      "There were many different nationalities in the Austro-Hungarian Empire who wanted self-determination.",
      "Serbian nationalists wanted to unite South Slavic people, many of whom were controlled by Austria-Hungary",
      "In 1914, Gavrilo Princip, a member of a Serbian nationalist group called the Black Hand, assassinated the Austro-Hungarian Archduke Franz Ferdinand in protest of Austria-Hungary's control over Bosnia-Herzegovina",
      "In response to the assassination, the Austro-Hungarian government ordered the Serbian government to end the anti-Austrian anger but Serbia refused, leading to Austria-Hungary declaring war and starting World War I",
      "One war had been declared, countries began to call on their alliances, dragging a bunch of countries into the war",
    ],
    Alliances: [
      "Central Powers: Austria-Hungary, Germany, Ottoman Empire, Bulgaria, initially Italy",
      "Allies: Serbia, Russia, Britain, France, Italy, Portugal, Romania, Greece, China, US, Japan",
      "Neutral: Spain, Norway, Sweden, Denmark, Netherlands, Switzerland, Albania",
    ],
    "The War": [
      "Germany made the Schlieffen Plan for a two front war - they would attack France and then Russia, since they figured France could mobilize faster than Russia",
      "At first, people were very optimistic and thought that the war would be over in months, so they enlisted for heroism",
      "New technology was developed, changing the nature of war. Developed trench warfare, where soldiers were in trenches all the time. Developed artillery shells. Trenches were placed just out of range of the other side's artillery shells, and between the trenches was no man's land. Poison gas was developed, and gas masks to go along with it. Machine guns made it easier to gain territory. Submarines were developed, and airplanes were used at first for reconnaissance but were developed for aerial combat. Tanks were developed by the British and gave them an advantage at the end of the war",
      "There was a stalemate on the Western front for the whole time. There was a lot of fighting but very little movement.",
      "Germany was beating Russia since they had better weapons. In 1918, after the Russian Civil War, Russia surrendered to Germany, and Germany was able to redirect its energy to the Western Front",
      "Britain tried to get Ottoman territories to rebel in order to weaken Ottomans. Officer T. E. Lawrence promised Ottoman Arabs their own independent state to convince them to betray the Ottoman Empire",
      "All the European powers except Germany used their colonies for manpower and supplies. Most colonial soldiers volunteered because they thought the colonial powers would give them more autonomy, but there was some coercion",
      "This was the first total war, where nations put everything into winning the war. All the civilians, including colonies, had to help, whether it was through serving in the military, producing war materials in factorings, or rationing food and supplies. Women weren't allowed to fight in most countries but they replaced soldiers' jobs and served as nurses, ambulance drivers, and switchboard operators. Countries used a lot of propaganda to influence their population.",
      "The US joined the war in 1918 because the Germans were attacking American civilian ships. The entrance of the US turned the tide of the war as they provided a bunch of supplies that the Germans didn't have",
      "The Allies won the war on November 11 1918",
    ],
    "Paris Peace Conference": [
      "The Big Four (Woodrow Wilson from the US, David Lloyd George from Britain, Georges Clemenceau from France, and Vittoria Orlando from Italy met up to make the peace treaty",
      "Woodrow Wilson wanted to not severely punish or reward any countries, but Clemenceau disagreed because he wanted France to have protection from Germany",
      "Wilson's wanted to create the League of Nations, where all nations would convene to discuss conflicts and avoid tensions, and to allow conquered people under the Central Powers to have self-determination. The League of Nations was created and countries were given the illusion of self-determination while they were really under British or French control through the League of Nations mandates",
      "Italy was angry because they didn't get the Ottoman Territories that they were promised",
      "Russia was angry because they weren't invited since they were communist. They decided to ignore their debts to the Allies, who then refies to recognize the Bolshevik government",
      "Made the 1919 Treaty of Versailles with Germany. Germany had to take blame for the war, pay reparations, give up their colonies, and restrict their military.",
    ],
    Consequences: [
      "Weakened European powers, and power shifted from Europe to the US",
      "Led to the downfall of Russian, Austro-Hungarian, German, and Ottoman monarchies",
      "Germany had to take full blame for the war, lose their overseas territories, make reparations, and dissolve their army. This facilitated the rise of authoritarian regimes that led to World War II",
      "The Ottoman Empire collapsed",
      "Led to the rise of communism and fascism",
      "Inpsired colonial revolts",
    ],
    applicableCountries: [
      "Serbia",
      "Ottoman Empire",
      "Germany 1850-1920",
      "Russia 1380-1917",
      "USSR",
      "United States 1776-1920",
      "France 1750-1920",
      "Italy",
      "England 1750-present",
      "British Territory",
      "Japan 1853-Present",
      "Belgium",
      "Australia",
      "New Zealand",
      "French Territory",
      "Bulgaria",
      "Portugal 1750-Present",
      "China",
      "Romania",
      "Greece",
    ],
    timePeriod: [1914, 1918],
    emphasizedUnit: [1900, 2025],
  },
  "World War II (1938-1945)": {
    Causes: [
      "There was unrest in Germany, leading to the rise of the Nazi party and Hitler",
      "Hitler wanted to conquer the whole continent and began taking territory starting with Rhineland in 1936, and Czechoslovakia and Poland in 1939",
    ],
    Alliances: [
      "Axis Powers: Germany, Italy (Rome-Berlin Axis), Japan (Anti-Comintern Pact), Hungary, Romania, Bulgaria, Croatia",
      "Allies: Britain, USSR, China, US, France, Canada, Australia, New Zealand, South Africa, Poland",
    ],
    "The War": [
      "Used total war, where nations put everything into winning the war. All the civilians, including colonies, had to help, whether it was through serving in the military, producing war materials in factorings, or rationing food and supplies. Women weren't allowed to fight in most countries but they replaced soldiers' jobs and served as nurses, ambulance drivers, and switchboard operators. Countries used a lot of propaganda to influence their population.",
      "Used blitzkrieg (lightning war) tactics, where planes would bomb first, then they would send tanks in, then the infantry, which was very effective",
      "Aircraft carriers were the most vital tech development on the Pacific front.",
      "In addition to fighting the other countries, Nazis forcefully revomed Slavs, gypsies, political opponents, gay people, people with disabilities, and Jews, and forced them to work in labor camps. They sent those who couldn't work to death camps where they would be likked",
      "Japan invaded China in 1937. This was the start of World War II on the Asian front. During the Rape of Nanking, the Japanese killed 100,000 Chinese soldiers and civilians",
      "In 1939, Hitler offered Stalin control of eastern Poland and the Baltic if he didn't interfere with Germany's invasion of Poland in the German-Soviet Non-Agression Pact",
      "The Nazis invaded Poland in 1939 and took over in 4 weeks using tanks and the air force",
      "The Nazis slowly took over Austria. In 1938 Hitler threatened the Austrian chancellor into giving the Austrian Nazis more power, then he used them occupy Austria",
      "In 1940, the Germans took Denmark, Norway, the Netherlands, Belgium, Norway, and France. They established the Vichy regime under Marshal Henri-Philippe Pétain",
      "In 1940, the US and Britain made the Destroyers-for-Bases Agreement, where the US promised 50 destroyers for 8 British air/naval bases in the Western Hemisphere",
      "In 1940, the Luftwaffe attacked Britain in the Battle of Britain. They thought the Luftwaffe would weaken Britain so the naval and land forces would be more successful. They initially only targeted military bases until the British Royal Air Force raided Berlin, then they began targeting cities. The British were able to win because they had better planes and radars so they were able to destroy German planes faster than they could be replaced",
      "In 1941, the Germans invaded the Soviet Union. They were winning until the Siege of Leningrad in the winter",
      "In 1941, the US lent more war materials to Britain in the Lend-Lease Act. They also made the Atlantic Charter, which outlined the US's and Britain's goals for the post-war world. This included restoration of self-government, abandonment of the use of force, and to disarm aggressor nations",
      "In 1941, Japan attacked Pearl Harbor and took control of the Philippines, Dutch East Indies, British Malaya, Burma, and more. They wanted access to Indonesia for oil because the US had cut them off, and they bombed Pearl Harbor because they hoped it would force the US to negotiate a settlement for oil. However, this caused the US to join the war and was a turning point of the war.",
      "In 1942, the British defeated the German general Erwin Rommel at the Battle of El Alamein",
      "In 1942, the US Navy defeated the Japanese who were trying to invade New Guinea and the Solomon Islands at the Battle of the Coral Sea",
      "In 1942, Allied forces destroyed 4 Japanese aircraft carriers at the Battle of Midway Island, putting the Japanese at a disadvantage",
      "In 1942, the Russians stopped the German Sixth Army at the Battle of Stalingrad. Over a million Soviets died but this was the turning point where they began driving the Nazis back",
      "In 1943, the Allies took Guadalcanal and Sicily",
      "In 1943, the Soviets held the defense at the Battle of Kursk and were able to make a counterattack",
      "In 1944, the Allies took Rome",
      "In 1944, the Allies launched an amphibious attack form England to Normany at D-Day to establish a base to retake paris later that year",
      "In 1945, the Allies took Warsaw, Okinawa, Iwo Jima, Berlin, and fire-bombed Tokyo",
      "The Germans' final push was at the Battle of the Bulge in 1945, which the Allies won",
      "Mussolini was killed in 1945, and Hitler committed suicide, so the German High Commander surrendered on May 8",
      "The US developed the atomic bomb in 1945 and dropped ones on Hiroshima and Nagasaki, forcing Japan to unconditionally surrendered on September 2",
    ],
    Consequences: [
      "World War II was the bloodiest war in history. About 75 million people died, with about 2/3 of them being civilians",
      "Led to the creation of the UN since the League of Nations was ineffective. They made the Security Council, where members of 15 nations would meet to discuss conflicts. 5 members (US, Britain, France, USSR, China) were permanent while the other 10 rotated",
      "Gremany was split between the USSR, US, Britain, and France. The USSR's territory became East Germany, and the Western powers' territory became West Germany",
      "The USSR got control of Poland",
      "Europe became less influetial, solidifying the shift of power to the US",
    ],
    applicableCountries: [
      "Germany 1920-1945",
      "Italy",
      "Japan 1853-Present",
      "Hungary",
      "Bulgaria",
      "Croatia",
      "England 1750-Present",
      "United States 1920-Present",
      "China",
      "France 1920-Present",
      "USSR",
      "Canada",
      "Australia",
      "New Zealand",
      "South Africa",
      "Poland",
    ],
    timePeriod: [1938, 1945],
    emphasizedUnit: [1900, 2025],
  },
  "Cold War": {
    "General notes": [
      "The US sent troops to try to stop the Bolsheviks during the Russian Civil War, leading to tensions between the US and the new government",
      "Both countries wanted to show that their economic system (capitalism vs communism) was superior",
      "The Iron Curtain was a term describing an imaginary line between the western countries and the Soviet bloc",
      "The US had a policy of containment, meaning stopping the spread of communism",
      "NATO (North Atlantic Treaty Organization) was created in 1949 to coordinate defenses in case of a Soviet attack. Its original members were Belgium, Canada, Denmark, France, Great Britain, Iceland, Italy, Luxembourg, the Netherlands, Norway, Portugal, and the US",
      "The Warsaw Pact was created in 1955 as a response to NATO, to coordinate defenses in case of a Western attack. Its original members were Albania, Bulgaria, Czechoslovakia, East Germany, Hungary, Poland, Romania, and the Soviet Union",
      "SEATO (Southeast Asia Treaty Organization) was created in 1954 to stop the spread of communism in Southeast Asia. Its members were Australia, France, Great Britain, New Zealand, Pakistan, the Philippines, Thailand, and the US.",
      "CENTO (Central Treaty Organization) was created in 1955 to stop the spread of communism in the Middle East. Its members were Great Britain, Iran, Iraq, Pakistan, Turkey. The US was in the military committee but was not a full member of the organization",
      "Many countries wanted to remain neutral in the Cold War, as part of the Non-Aligned Movement. The major countries involved included India, Ghana, Egypt, and Indonesia",
      "Many people were against nuclear weapons, leading to anti-nuclear weapon movements globally. In 1955, a third of the Japanese population signed a petition against nuclear weapons because the US had been testing them in the Pacific Ocean. Such movements spread in the 70s and 80s. In 1982, there was a big demonstration in New York against nuclear weapons.",
      "Many countries including China, Iran, Vietnam, Ethiopia, India, Mexico, Bolivia, Venezuela wanted land reforms, leading to the spread of socialism and communism",
      "The USSR and the US had a fairly diplomatic relationship during the last decades of the Cold War, after the Cuban Missile Crisis. This period was known as détente. In 1972, President Nixon even visited the Soviet Union to sign the Strategic Arms Limitation Treaty freezing the number of intercontinental ballistic missiles. The US also began to sell grain to the USSR when they had a shortage due to a drought. The period of détente ended in 1979 when President Carter stopped selling grain.",
      "Tensions heightened again in the 1980s but began to thaw again as Mikhael Gorbachev came to power",
    ],
    "East and West Germany": [
      "The Soviets blockaded West Berlin from getting supplies (West Berlin, which was controlled by the Western powers, was in Eastern Germany). The Western powers responded with the Berlin Airlift, flying supplies into West Berlin to avoid the blockade",
      "The Soviets built the Berlin wall between East and West Berlin in 1961 to prevent people from moving from their side to the West side where there was democracy and a higher quality of life. The Berlin Wall fell in 1989",
      "Free elections were held in 1990. A pro-unification party was elected, leading to the reunification of Germany in late 1990",
      "The Berlin Wall was torn down in 1989 and Germany was reunified in 1990",
    ],
    "Korean War": [
      "North Korea invaded South Korea to try to unite the countries",
      "The Soviets supported the North by providing weapons and money. They did not supply troops.",
      "The UN supported the South, with most support coming from the US.",
      "The UN pushed the North Koreans towards the Chinese border. American General Douglas MacArthur pushed the North Koreans too close to the Chinese border",
      "The Chinese were afraid that the UN would try to invade China, so they entered the war supporting North Korea and pushed the UN and South Koreans back to the original border between the North and South",
    ],
    "Iranian Revolution": [
      "Iranian nationalists disliked the puppet shah Britain had put in and forced him to leave the country in 1951. They elected Mohammad Mosaddegh to replace him",
      "In 1953, The US and Britain overthrew Mosaddegh and reinstated Muhammad Reza Pahlavi, but Mosaddegh returned to power a few days later through a military coup",
      "In the White Revolution (1963-1979, called white because it was bloodless), Iranians pushed for more progressive policies like women's suffrage, social welfare, literacy programs, and land reform. This was opposed by religious conservatives, landowners (who lost land from the land reforms), and peasants who didn't receive land from the land reforms",
      "In the Iranian Revolution in 1979, the shah was replaced by a new theocracy",
    ],
    "Cuban Missile Crisis": [
      "Authoritarian rule changed hands, landing on the Communist regime of Fidel Castro.",
      "The U.S. was uncomfortable with a Communist dictatorship so near to them, so many assassins and the disastrous Bay of Pigs invasion were sent to try to kill Castro. It was obvious that the U.S. had supplied the weapons and training to the soldiers in the Bay of Pigs, and Castro became extremely hostile toward the U.S. and allied with the Soviets",
      "The USSR took advantage of Castro's hatred of the U.S. and placed nuclear missiles in Cuba. The U.S. blockaded Cuba but they couldn't extract the missiles already there.",
      "The Cuban Missile Crisis almost resulted in nuclear war, but eventually the U.S. agreed to withdraw the nukes they put in Turkey and the USSR took back its Cuban nukes.",
      "The Cuban Missile Crisis led to the creation of the Hot Line, a direct link between the US and Soviet leader's office to prevent nuclear war in 1963",
      "Also led to the Nuclear Test-Ban Treaty in 1963, outlawing nuclear weapon tests above ground, under water, and in space, so only underground testing was legal, as well as the 1968 Nuclear Non-Proliferation Treaty, the agreement that nuclear powers should prevent the spread of nuclear tech to non-nuclear countries",
    ],
    "Vietnam War": [
      "The country was split after indpendence, with the North led by Communist Ho Chi Minh, and the South led by noncommunist Ngo Dinh Diem",
      "Ngo Dinh Diem was unpopular and corrupt but supported by the US since he was anti-communist until a coup in 1963",
      "The Soviets supported the Northern Vietnamese and the spread of communism",
      "Some Southern Vietnamese supported the North by joining the Viet Cong",
      "President Johnson sent troups to support South Vietnam in 1964 because they were afraid that if Vietnam turned completely communist, that would trigger the spread of communism in Southeast Asia. By 1967, 365,000 Americans were fighting in Vietnam",
      "The Tet Offensive in 1968 shook American morale. The Viet Cong attacked the Americans on Tet (Lunar New Year) and won. They wanted to end the war that year because Ho Chi Minh was sick so they became more aggressive",
      "The US began pulling out of the war in 1971. By 1973, all their troops were withdrawn",
      "The US signed the Paris Peace Accords agreeing to withdraw from Vietnam as long as the North didn't attack the South",
      "In 1975, the North claimed that the South had attacked them and launched the Ho Chi Minh Campaign, conquering South Vietnam and uniting the North and South",
    ],
    "Angolan Civil War": [
      "The Mbundu tribe controlled the socialist group Popular Movement for the Liberation of Angola (MPLA). They were supported by the USSR and Cuba, who wanted to get back at the US after the Cuban Missile Crisis",
      "The Ovimbundu tribe controlled the National Union for the Total Independence of Angola (UNITA) and were backed bu the US and South Africa",
      "The Bankongo tribe controlled the National Front for the Liberation of Angola (FNLA). They were backed by the US, China, and the Democratic Republic of Congo, whose dictator was the brother in law of the leader of the FNLA",
      "There was a civil war from 1975-2002 between the tribes. The Mbundu tribe technically won in 1991, but UNITA refused to accept that and continued to fight until their leader was killed in 2002",
    ],
    "Contra War": [
      "The Sandanistas, a socialist group, took down the Somoza dictatorship and took over the government in 1979. They emphasized liberation theology, land redistribution, and more educationa and healthcare",
      "The US supported the Contras who tried to overthrow the Sandinistas in 1981, as the US like that socialists were coming to power",
      "In response to the US's actions, The Sandinistas turned to the Soviets for support",
      "Led to the Contra War from 1981-1988",
      "The Contras used geurilla tactics",
      "The Sandinistas began limited civil rights and conscripting soldiers during the war",
      "The 1989 Tela Accords demobilized both armies",
      "The Sandinistas lost power in 1990",
    ],
    "Soviet-Afghan War": [
      "The communist government was very weak in the 1970s as conservatives and rural leaders disliked it",
      "In 1979, the Soviets invaded to support the government, but they were unable to conquer the the Mujahideen guerilla troops. The US, under Reagan, sent support to the Mujahideen against the Soviets",
      "The Soviets, under Gorbachev, withdrew from the war starting in 1985, fully withdrawing in 1989",
      "Up to 2 million people died",
      "The communist regime fell in 1992",
    ],
    applicableCountries: [
      "United States 1920-Present",
      "USSR",
      "Vietnam",
      "Nicaragua",
      "North Korea",
      "South Korea",
      "Cuba",
      "Iran",
      "Venezuela",
    ],
    timePeriod: [1945, 1991],
    emphasizedUnit: [1900, 2025],
  },
};

export const countryNotes: CountryNotes = {
  "Seljuk Caliphate": {
    Governance: [
      "1037-1194",
      "Established state in the declining Abbasid Caliphate",
      "Conquered Syria and Anatolia",
      "Didn't collect much tax, and didn't invest in agriculture or infrastructure, leading to the decline of the House of Wisdom and the collapse of the canal system",
    ],
  },
  "Song Dynasty": {
    Environment: [
      "Took champa rice from Vietnam, which was drought-resistant and could be harvested twice a year, increasing agricultural productivity and population",
    ],
    Culture: [
      "Confucianism was very popular",
      "Foot binding was a common practice, especially among elites, since it meant that your family was wealthy enough that the women didn't need to work or walk",
      "Neo-Confucianism (Confucianism with Buddhist and Daoist influence) became more popular again and spread to Japan, Korea, and Southeast Asia",
    ],
    Governance: [
      "960-1279",
      "Civil Service Exams turned the bureaucracy into a meritocracy, allowing for social mobility, although the exams were so hard that only the rich had the time and resources to study and pass",
      "Gunpowder was developed for weaponry",
    ],
    Economy: [
      "Better maritime technology allowed for more efficient trade",
      "Tried to switch to paper money, but it got hyperinflated and failed",
      "Used flying money (similar to an IOU), which was used for trade since it was lighter than coins",
      "Imported spices, luxury goods, and cloths",
      "Exported silk, porcelain, tea, sugar, and precious metals",
    ],
    Social: [
      "Movable type allowed for more accessible books, leading to an increase in literacy",
    ],
    Technology: [
      "Maritime technology, including the magnetic compass and junk ship, was improved, allowing for more trade",
      "Gunpowder was developed for weaponry",
      "Movable type was brought to China from Korea, meaning books could be produced faster and cheaper, leading to an increase in literacy",
      "Produced a lot of cast iron and steel, which was used for building, agricultural equipment, weapons, and more",
    ],
  },
  "Dai Viet": {
    Environment: [],
    Culture: [
      "Confucianism and Buddhism spread from China",
      "Had previously been ruled by the Tang Dynasty from 100bc to 938ce, so Vietnam experienced lots of sinification",
    ],
    Economy: ["Tribute to China in the form of champa rice"],
  },
  "Goryeo Dynasty": {
    Culture: [
      "Confucianism and Mahayana Buddhism spread from China",
      "Neo-confucianism was adopted as the state ideology",
    ],
  },
  "Japan 1200-1853": {
    Environment: [
      "The strong monsoon winds allowed Japan to resist Mongol invasions",
    ],
    Culture: [
      "Buddhist and Confucian ideals were mixed with traditional Shinto beliefs",
      "Christianity became very popular as European missionaries converted Japanese, mostly peasants",
      "The shogun banned Christianity in 1614, killing Japanese Christians, and promoting Buddhism",
      "Developed kabuki theater, woodblock prints, silk-screened fabrics, and restaurants",
    ],
    Governance: [
      "Had a feudal system, with the Emperor at the top of the heirarchy, then the Shogun, then the Daimyo, then Samurai, and last, the serfs",
      "The Emperor was more of a figurehead while the daimyo and shogun had the majority of the power",
      "The Mongols tried to conquer Japan but failed because of the strong winds",
      "First contact with the Europeans was in the 16th century",
      "Daimyo (Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu) unified and centralized Japan, leading to the Tokugawa Shogunate, also known as the Edo Period, from 1603-1868. Even though it was centralized, the Daimyo still had a lot of power.",
      "The Tokugawa Shoguns required daimyo to make frequent visits to the capital to ensure loyalty, and they often made daimyo's families live in Edo",
      "The 47 Ronin Incident (1701-1703) displays the conflict between state (law) and traditional (samurai) values. A senior minister provoked a young daimyo into drawing his sword in the shogun's court, which was not allowed, so the daimyo had to commit suicide. His samurai then became ronin (masterless samurai who had to avenge their master) and killed the senior master, then confessed to what they did in court. The shogun had to decide how to handle it (if he condemned them, he would be condemning samurai values, but if he condoned it, there would be chaos). He decided to have them commit suicide",
      "The government thought that Christianity was a tool for the Europeans to take over Japan, so they banned it in 1614, as well as expelling all Europeans and shifting to isolationism.",
    ],
    Economy: [
      "The government didn't want the economy to be in favor of the merchants due to their confucian beliefs, and they still favored samurai so they didn't want them to be in debt. They paid the samurai in rice since they could control inflation and the worth of rice, but the samurai just exchanged the rice for cash and the merchants became powerful anyway",
      "Produced steel, pottery, lacquer, and porcelain",
      "Traded silver to the Chinese, but avoided silver inflation because they invested in financial security",
      "Toyota and Mitsubishi were founded",
      "Became isolationist in 1614. They only continued to trade with China, and had some limited trade with the Dutch",
    ],
    Social: ["Persecuted Christians"],
    Technology: [
      "The Europeans introduced firearms to Japan",
      "Had good roads and maritime transport, since the Tokugawa Shoguns required daimyo to make frequent visits to the capital",
    ],
  },
  "Abbasid Caliphate": {
    Culture: [
      "The state was neither Sunni nor Shi'a, but the population was majority Sunni",
      "The House of Wisdom, a government-sponsored library and university, attracted scholars from all over the empire. They conducted research and collected ancient texts (notably Greek texts). Nasir al-Din al-Tusi studied trigonometry and astronomy. Muhammad ibn Musa al-Khwarizmi was one of the most famous mathmaticians, solving linear and quadratic equations. The House of Wisdom eventually declined due to lack of investment from the Seljuk Turks",
    ],
    Governance: [
      "750-1258",
      "Conquered territory and converted people to Islam",
      "Used Mamluks (Turkish slaves) in the army. They had a lot of control - when they didn't like a caliph, they sometimes murdered him and replaced him",
      "Declined because they began to lose control over their territory, as their territory was too big, and groups like the Seljuk Turks, Fatimids, and Mamluks established their own states in Abbasid territory",
      "Fell when the Mongols invaded and sacked Delhi in 1258",
    ],
    Social: ["Literacy increased due to the introduction of paper"],
    Technology: [
      "Developed the idea of hospitals and quarantine",
      "Got paper from China, which increased literacy",
    ],
  },
  "Mamluk Sultanate": {
    Governance: [
      "1250-1516",
      "Stopped Mongol expansion",
      "Conquered by the Ottoman Empire in 1516",
    ],
  },
  "Fatimid Caliphate": {
    Governance: ["909-1171"],
  },
  "Delhi Sultanate": {
    Culture: [
      "The Bhakti Movement, a form of Hinduism where moksha could be accomplished through individual devotion to god, promoted conversion to Hinduism",
      "Created Urdu, a mix of Farsi, Arabic, and Turkish",
      "The state was Sunni Muslim, but the majority of the population was Hindu"
    ],
    Governance: [
      "1206-1526",
      "Never had control over the entirety of India",
      "Declined as they lost territory. Some Muslim nobles separated and founded the Bahmani Kingdom in the 14th century, Hindu brothers founded the Vijayanagara Empire in the 14th century",
      "Timur invaded in 1398, sacked Dehli, and left the sultanate in ruins",
      "Finally fell when they lost the Battle of Panipat to the Mughals in 1526",
    ],
    Economy: [
      "Imported silver",
      "Exported cloth, yarn, silk, indigo, and pepper",
    ],
    Social: [
      "Had the jizya tax (a special tax for non-Muslims), which promoted conversion to Islam", // gov? econ?
    ],
    Technology: [
      "Used irrigation"
    ]
  },
  "Vijayanagara Empire": {
    Culture: ["Hindu"],
    Governance: [
      "1336-1545,",
      "Founded by two Hindu brothers from the Delhi Sultanate who had converted to Islam in order to rise up in the government. They were sent south to expand the Delhi Sultanate, but instead they established their own Hindu state",
      "Eventually overthrown by small Muslim kingdoms",
    ],
  },
  "Sinhala Dynasty": {
    Governance: ["600bc to 1900ce"],
    Economy: [
      "Imported cloths",
      "Exported cinammon, pepper, cardamom, elaphants, and gems",
    ],
    Technology: ["Used irrigation"]
  },
  "Khmer Empire": {
    Environment: ["Very watery environment"],
    Culture: [
      "Was Hindu, then became Buddhist in the 12th or 13th century. This is reflected in the architecture (eg. Angkor Wat), as they preserved Hindu art alongside new Buddhist art",
    ],
    Governance: ["802 to 1431", "Conquered by the Sukhothai Empire in 1431"],
    Technology: [
      "There was too much water so they had to build really good irrigation and drainage. They built leeways to protect their buildings from caving in due to water damage.",
    ],
  },
  "Majapahit Empire": {
    Culture: [
      "Muslim",
      "Malacca was Muslim, as the ruler converted to Islam for better relations with Muslim traders, and because the traders would start families while they were waiting in Malacca for seasonal monsoon winds that would aid their journey home",
    ],
    Governance: ["Malacca fell to the Portuguese in 1511"],
    Economy: [
      "Malacca was one of the most important trading ports/cities in the Indian Ocean",
      "Imported cloth, silver, and ivory",
      "Exported pepper, nutmeg, and cloves",
    ],
  },
  "Mississippi Mound Builders": {
    Environment: [
      "Had a very large population due to food surpluses",
      "Had very fertile floodplains which allowed for good agriculture and food surpluses",
      "Fell for unknown reasons (possibly weather, crop failure, or European diseases, but it certainly wasn't from war)",
    ],
    Culture: ["Built large mounds (the largest of which was called Cahokia)"],
    Governance: ["8th or 9th century to the 16th century"],
    Economy: [
      "Had many trade routes due to waterways",
      "Traded salt, shells, carved items, and pottery",
    ],
    Social: [
      "Their mounds were built to represent the strict social hierarchy",
      "Had a matrilineal society, meaning the social status was traced thorugh the female side of the family",
      "Men still held all the power",
      "Classes: Great Sun, then the upper class (priests, nobles), the lower class (farmers, hunters, merchants, artisans), and then slaves",
    ],
  },
  Anasazi: {
    Environment: [
      "There was a big scarcity of resources since the climate was so dry",
      "Grew corns, beans, and squash, known as the three sisters of agriculture",
      "Some tribes built houses into the cliffs",
      "Other tribes built large houses out of clay",
    ],
    Uncategorized: [
      "Also known as the Ancestral Puebloans (their descendants don't like the term Anasazi but that's what the collegeboard uses)",
      "Refers to a group of tribes in the Four Corners region (where Arizona, Colorado, New Mexico, and Utah meet)",
    ],
  },
  Teotihuacan: {
    Environment: ["Population of up to 200,000 people"],
    Culture: ["Built religious pyramids"],
    Governance: [
      "100-750",
      "Height in 600",
      "Had a very powerful military",
      "Fell in 750 for unknown reasons (possibly conflict between elites or improperly managed resources",
    ],
  },
  Mayans: {
    Environment: [
      "Grew corn, beans, and squash, known as the three sisters of agriculture",
      "Fell possibly due to drought, deforestation, or an epidemic",
    ],
    Culture: ["Had a polytheistic religion"],
    Governance: [
      "3rd century to 9th century, although some city-states still remained after",
      "The Mayan empire was made up of city-states that were united religously, but not politically.",
      "Mayan kings claimed descent from gods",
      "Fought wars for tributes and human sacrifices, not territory",
    ],
    Social: [
      "Women could co-rule or serve as placeholders for men and had a higher status than in the Aztec Empire",
      "Sacrificed mainly elites",
    ],
    Technology: [
      "Developed accurate calendars, the number 0, Bas Relief hieroglypics, aqueducts, and made rubber",
      "Had no wheels",
      "Used chinampas (floating gardens that could grow crops year-round), terraced hillsides, irrigation, slash-and-burn agriculture", // or env
    ],
  },
  Aztecs: {
    Environment: ["Grew corns, beans, squash, and tomatoes"],
    Culture: ["Had a polytheistic religion"],
    Governance: [
      "1200 to 1521",
      "Had a theocracy",
      "Ruled through fear using sacrifices and punishments",
      "Leaders had to conquer territory and find human sacrifices in order to gain legitimacy.",
      "Declined because they couldn't control their expanding territory, and tribes kept trying to rebel",
      "Fell when the Spanish arrived in 1519, and became a part of New Spain",
    ],
    Economy: [
      "Engaged in long-distance trade, mainly with luxury goods like gold and cloth",
    ],
    Social: [
      "Hierarchy: the Great Speaker, then land-owners, then scribes and healers, then traders and artisans, then peasants and soldiers, and lastly, slaves",
      "Women had a pretty low status, but they were important to the tributary system since they would weave cloth as a part of payment. This often led to polygamy as men needed more women to make enough cloth for the tribute system",
    ],
    Technology: [
      "Used chinampas, terraced hillsides, and irrigation", // or environment
      "Didn't have much technological innovation. They borrowed a lot of Mayan achievements, including their calendar, hieroglyphics, agriculture techniques, math, irrigation, and aqueducts",
    ],
    Uncategorized: ["Also known as the Mexicas"],
  },
  Incas: {
    Environment: [
      "Llamas were used for meat, wool, and transportation (they were they only beast of burdan in the Americas prior to the Europeans' arrival",
      "Used terraced hillsides for farming",
      "Grew corn, cotton, potatoes, quinoa, coca, and fruit",
    ],
    Governance: [
      "11th century to 1572",
      "The tribes in the Inca area were united in 1438",
      "Leaders had to conquer territory in order to gain legitimacy",
      "Leaders claimed to represent the god of the sun, Inti",
      "Controlled their vast territory using road systems like the Carpa Nan, keeping province leaders loyal to the emperor. They also kept leaders' children as hostages in the capital",
      "The Mit'a system was a rotational public service that they utilized instead of a tribute system. Men would hunt, fight, trade, build, etc. while women would weave, farm, and take care of the home",
      "Fell due to a civil war and the arrival of the Spanish in 1532, but it took until 1572 for their entire territory to be conquered",
    ],
    Social: [
      "Priests had very high status, and were consulted for war and other things",
    ],
    Technology: [
      "Developed quipu, a method of recording numbers using knotted string",
      "Made the best bridges and roads in the world at the time"
    ],
  },
  "Mali Empire": {
    Culture: ["Muslim"],
    Governance: ["1230-1670", "Founded by Sundiata"],
    Economy: [
      "Traded gold and copper to North African Muslim traders",
      "Controlled all the trade in their territory",
      "Declined because rulers after Mansa Musa were incompetent, and other empires kept attacking",
    ],
    Uncategorized: [
      "Mansa Musa made a pilgrimage to Mecca (1324-1325), bringing slaves and gold to display his wealth. This caused inflation everywhere he went.",
    ],
  },
  "Hausa States": {
    Culture: ["Islam was introduced in the 14th century"],
    Governance: ["7 states with no central authority"],
    Economy: [
      "Traded cotton and leather through Trans-Saharan Trade,",
      "Engaged in a lot of slave trade",
      "City-states were specialized",
    ],
  },
  "Zimbabwe Kingdom": {
    Environment: ["Declined due to overgrazing"],
    Culture: [
      "Practiced animism",
      "Developed Swahili language, mixing Bantu and Arabic",
    ],
    Governance: ["1220-1450"],
    Economy: [
      "They were very wealthy from agriculture and trading gold and ivory. There was a lot of gold being taken from the eat through Zimbabwe to the Indian Ocean, and Zimbabwe took a 50% tax of all goods coming through their territory",
      "Cattle were used similarly to a banking system. THe king gave people cattle, and people could loan cattle, etc.",
      "Declined because traders began to go around Zimbabwe to get to the Swahili Coast, thus avoiding taxes",
    ],
    Social: ["Women were responsible for farming"],
    Technology: [
      "Made large walls (the largest manmade structures in sub-Saharan Africa pre-colonization) without any kind of mortar/mud/cement. The walls represented status. An example is the Great Encloser in Great Zimbabwe, which housed the Queen.",
    ],
  },
  Ethiopia: {
    Culture: [
      "Christian since the 12th century, but practiced differently from European Christianity",
      "They were isolated from other Christians as they were surrounded by Muslims",
      "Made 12 churches entirely sculpted from rock",
    ],
    Governance: [
      "Had no church-state conflict",
      "A new dysnasty was founded in 1270 by King Menelik, who claimed lineage from King Soloman and the Queen of Sheba for legitimacy. He claimed to have brought the Ark of the Covenant to Ethiopia.", // not sure abt this one?
      "Declined as they fought with surrounding Muslim empires",
      "Was never colonized, but they were briefly occupied by Italy in 1936-1941. During the Scramble for Africa in the 1880s, Italy tried to invade Ethiopia, but the emperor modernized the army and infrastructure and repelled the Italians in 1896, remaining independent",
      "Emperor Haile Selassie promoted modernization in the mid-1900s and became a symbol of African independence. He tried to implement land reforms but failed, leading to his downfall in 1974",
      "Mengistu Haile Mariam overthrew Haile Selassie in 1974 and established a socialist government supported by the Soviets, but it was not very successful",
    ],
    Economy: [
      "Traded slaves, amber, and pelts",
      "Had a lot of revenue from coffee trade",
      "People wanted land reforms but they couldn't successfully implement them",
    ],
  },
  "Swahili Coast": {
    Culture: [
      "Had a very culturally diverse community as merchants from all over the Inidan Ocean would settle and start families there",
    ],
    Governance: [
      "Eventually, they were conquered by the Portuguese and they declined",
    ],
    Economy: ["Engaged in a lot of trade over the Indian Ocean"],
    Uncategorized: ["Many port cities were founded by Arabs"],
  },
  "France 1200-1450": {
    Culture: ["Began to have a national identity during the Hundred Years War"],
    Governance: [
      "Utilized the Estates General system in the government, which represents the social hierarchy of France as estates. The first estate is the clergy (the church), the second is nobility, and the third is all the peasants and merchants (98% of the population but only 1/3 of the estates general)",
      "Fought in the Hundred Years War against the English, because the English wanted French territory. This led to a national identity replacing regional ones",
    ],
    Economy: ["Shift away from self-sufficiency and manorialism around 1100"],
    Social: [
      "Women didn't have a lot of power. They could only become wealthy if they inherited money when widowed. They were, however, able to escape the patriarchy by joinng a monastery or convent",
      "The middle class/bourgeoisie (merchants, artisans, shopkeepers, etc.) emerges and grew",
    ],
  },
  "England 1200-1450": {
    Governance: [
      "Fought in the Hundred Years War against the French, because the English wanted French territory. This led to a national identity replacing regional ones",
      "Nobles forced the king to sign the Magna Carta in 1215, which limited the king's power and increased nobles' power",
      "Parliament formed in 1265, which increased nobles' rights",
    ],
    Social: [
      "Women didn't have a lot of power. They could only become wealthy if they inherited money when widowed. They were, however, able to escape the patriarchy by joinng a monastery or convent",
    ],
  },
  "France 1450-1700": {
    Governance: [
      "The kings used Divine Right, meaning that they were chosen by God, to legitimize their rule and give them political and religious authority and become absolute monarchs",
      "Louis XIV (ruled 1643 to 1715) was the strongest absolute monarch at the time. In the Versailles architecture, he often portrayed himself and his family as gods. He centralized the government, and limited nobles' power by keeping them close and distracting them at Versailles",
      "The Indendents system was where royal officials would carry out laws in provinces",
      "Continued to have the Estates General system, although it wasn't used",
      "Controlled Pondicherry (Southeast India) until they were driven out by the British",
      "Fought in the Seven Years War (1574-1763) against the British. The French lost and were driven out of India and North America",
    ],
    Economy: [
      "Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible",
    ],
    Uncategorized: [
      "Began exploring in order to find the Northwest Passage to the Indian Ocean",
      "Jacques Cartier founded Canada in 1535",
      "Found many resources (like fur) in the Americas and decided they didn't need to find a new way to go to Asia",
      "Quebec was founded in 1608, bringing traders and priests from France. Their main job was to get furs from the Native Americans and to convert them to Catholicism. They maintained good relationships with the Natives in order to foster fur trade",
    ],
  },
  "Portugal 1450-1750": {
    Governance: [
      "Had naval supremacy in the 1400s",
      "Lost power in the Indian Ocean when the English pushed them out of South Asia and the Dutch took over Malacca and Java in 1620",
      "In 1492 Spain and Portugal made the Treaty of Tordesillas, reserving territory west of the Line of Demarcation for Spain, and the east for Portugal",
      "Portugal wanted control of Ndongo (now Angola) for slave exports in the late 16th and early 17th century. The Queen of Ndongo, Ana Nzinga, was driven out of Ndongo but she took control of Matamba, allied with the Dutch, and made a new treaty",
      "The Portuguese used military control to force trade in the Indian Ocean instead of forming ethnic and religious ties", // gov or econ?
    ],
    Economy: [
      "Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible",
      "Established a trading-post empire, based on small outposts instead of large territories, with forts from the Persian Gulf to India and Malacca",
      "Monopolized spice trade",
      "Started trading with Japan in the early 16th century but were driven out when Japan became isolationist",
    ],
    Technology: [
      "Developed the carrack, a ship good for trading, used in the 14th to 17th centuries, and the caravel, a ship good for speed, long voyages, and shallow water, used from the 15th to 17th centuries",
    ],
    Uncategorized: [
      "Prince Henry the Navigator (1394-1460) searched for a new route to the Indian Ocean around Africa",
      "Bartholomew Diaz sailed around the Cape of Good Hope (the Southern tip of Africa) in 1488",
      "Vasco Da Gama sailed around the Cape of Good Hope in 1498 and established ports in India. Initially the Indian kingdoms didn't want to trade with him, but then he came back with weapons and forced them to trade in 1509",
      "First came to China in 1514 with traders and missionaries",
    ],
  },
  "Holy Roman Empire 1200-1806": {
    Culture: [
      "Lutheranism was started by Martin Luther in 1516 when he wrote the 95 Theses about his grievances with the church (including indulgences, where people could pay for salvation, simony, where people could pay for church offices, and the fact that the Bible was only available in Latin so the church kept control over its interpretations). Lutheranism spread quickly, especially to political leaders and launched social revolutions and the Protestant Reformation",
      "Different areas were Catholic, Lutheran, or Calvinist",
    ],
    Governance: [
      "Lost power during the Thirty Years War (1619-1648)",
      "Fell when Napoleon invaded in 1806",
      "States within the Holy Roman Empire, such as Prussia and Austria, began to have more autonomy and develop their own military",
    ],
  },
  "England 1450-1750": {
    Culture: [
      "Henry VIII initially supported the Pope against protestants, until he wanted a divorce andd the Pope wouldn't allow it. He then started Anglicanism, which was still essentially the same as Catholicism",
    ],
    Governance: [
      "Jamestown, the first successful colony, was established in 1607",
      "In 1689, the English Bill of Rights checked monarch power, increased individual liberties (right to be tried before conviction, give parliament a say in taxation and military)",
      "Had naval supremacy in the 1700s",
      "Parliament preferred a moderately protestant monarch, so they kept replacing the monarchs",
      "Fought the Seven Years War (1754-1763) against the French. The British won and pushed the French out of India and Canada",
    ],
    Economy: [
      "Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible",
      "The British East India Company (EOC) was founded in 1600 and traded with the Mughal Empire in the 17th century. They expanded to trade with other local rulers through treaties",
    ],
    Uncategorized: [
      "Began exploring to the West in order to find a new trade route to the Indian Ocean",
      "John Cabot claimed the territory from Newfoundland to Chesapeake Bay for England in 1497",
    ],
  },
  "Spain 1492-1750": {
    Culture: ["Catholic"],
    Governance: [
      "Created when King Ferdinand and Queen Isabella married in 1492, uniting their kingdoms to form Spain",
      "Had naval supremacy in the 1500s",
      "In 1492 Spain and Portugal made the Treaty of Tordesillas, reserving territory west of the Line of Demarcation for Spain, and the east for Portugal",
      "In the Pueblo Revolt (1680), the Pueblo and Apache indigenous groups fought the Spanish to regain their land and religion, since the Spanish had forced them to convert to Catholicism. They killed 400 Spanish, and drove the others out, successfully regaining their land until the Spanish retook it in 1692",
    ],
    Economy: [
      "Shift to mercantilism, where they maximized exports and minimized imports in order to amass as much gold and silver as possible",
      "The Spanish grew very wealthy from silver from the New world, since there was high demand for silver, as it could be used as coins that were less valuable than gold but could still be verified unlike copper. About half of the silver was exported to Spain, and about half they traded over the Pacific to China",
      "After silver inflation, silver mining became less profitable",
      "Spent a lot of money on religious wars",
    ],
    Social: ["Kicked Muslims out of Spain in 1492"],
    Technology: [
      "Developed galleoons - armed ships used for carrying silver from the Americas to East Asia",
    ],
    Uncategorized: [
      "Began exploring in the 1490s to find new trade routes to the Indian Ocean",
      "In 1492, Queen Isabella and King Ferdinand sponsored Christopher Columbus's voyages, leadign him to find the Americas",
      "Ferdinand Magellan's fleet was the first to circumnavigate the world in 1522",
    ],
  },
  "Spanish Territory": {
    Environment: [
      "Grew sugar, cocoa, tobacco",
      "Mined silver",
      "Collected guano, bat/seabird excrement used as fertilizer",
    ],
    Culture: ["Had syncretic religions"],
    Governance: [
      "Simón Bolívar was one of the leaders of the South American revolutions. He came from a wealthy family, and wanted independence for political and economic reasons, not for social reasons. He allied with Jose de San Martin, who was from Argentina. He had promised slaves freedom, so Bolívar went along with it",
      "By 1825, all the Spanish South American colonies had achieved independence",
      "The new government abolished slavery but was still very conservative. Creoles formed the upper class, and only educated people could vote, so most indigenous people and women were excluded",
    ],
    Economy: [
      "Exported silver, sugar, tobacco, beef, guano, copper, and tin to Spain",
      "One of the biggest silver mines was in Potosí",
      "Used coerced labor (called Encomienda), especially for work in the fields (called Hacienda). They converted the Incan mit'a system into coerced labor, where villages would have to give up a certain amount of men in exchange for some money",
      "Relied on African slavery",
    ],
    Social: [
      "Had the Castas system, a hierarchy based on one's race. Peninsulares were Spanish people born on the Iberian peninsula, who were more likely to stay loyal to the monarchy. Creoles were Spanish people born in the Americas. Mulattoes (now offensive term) were people of Spanish and African descent, Mestizos were of Spanish and Native American descent, and Zambos were of African and indigenous descent. The only way to move to a different level was through intermarriage",
    ],
    Uncategorized: [
      "Wanted independence because they disliked mercantilism (they could only buy or sell goods to/from Spain), and lower classes wanted more power",
    ],
    "Viceroyalty of Peru": [
      "Established in 1533 after Francisco Pizarro conquered the Inca Empire",
      "In 1780, Túpac Amaru II, the chief of Peru, descended from the last Inca Ruler (Túpac Amaru), killed a colonial administrator for his cruel treatment of the people. He started a revolt against inequality and the perversion of the mit'a system (not necessarily aiming for independence) in Southern Peru, Bolivia, and Argentina. He was captured in 1781, and was forced to watch his family be executed before being executed himself",
    ],
    "Puerto Rico": [
      "Lola Rodríguez de Tío was a female poet in a time when women didn't have much education who held meetings for thinkers and fostered revolutionary ideas against Spain.",
      "In 1868 there was a big revolution but it was supporessed by the Spanish",
      "Puerto Rico was ceded to the US after the Spanish-American War in 1899",
    ],
    Philippines: [
      "Was a Spanish colony since 1571",
      "Was a stopping point for silver on the way from the Americas to China",
      "Education was limited in the Philippines, so wealthy people would go to Europe for education, where they gained access to Enlightenment ideas. When they returned to the Philippines, they began publishing books about these Enlightenment ideas. One of these people, José Rizal, started the Propaganda Movement, which aimed for more autonomy, and was arrested and executed in 1896, sparking a revolutionary movement.",
      "At the same time, the Spanish were fighting the Spanish-American War (1898-1899). When the Spanish lost, they had to sell the Philippines, Puerto Rico, and Guam to the US. Then the Philippines fought the Philippine-American War for independence in 1899, but lost.",
    ],
  },
  Philippines: {
    Governance: [
      "The Spanish fought the Spanish-American War (1898-1899). When the Spanish lost, they had to sell the Philippines, Puerto Rico, and Guam to the US. Then the Philippines fought the Philippine-American War for independence in 1899, but lost.",
      "They finally gained independence in 1946 after World War II",
      "Anti-communist",
    ],
  },
  "Netherlands 1450-1800": {
    Culture: ["Calvinist"],
    Governance: ["Had naval supremacy in the 1600s"],
    Economy: [
      "The Dutch East India Company (VOC) was founded in 1602",
      "The Dutch bought furs from trappers in the North, and crops (especially Tobacco) fromthe South and would exchange that in the Netherlands",
      "In 1799, the VOC was declared bankrupt. It was dissolved, and its power and possessions were taken by the state",
    ],
    Technology: [
      "Developed the fluyt, a ship good for trade, used in the 16th nad 17th centuries",
    ],
    Uncategorized: [
      "Began exploring in order to find the Northwest Passage to the Indian Ocean",
      "Henry Hudson claimed the Hudson River Valley and Manhattan for the Netherlands, founding New Amsterdam in 1609",
    ],
  },
  "Mongol Empire": {
    Environment: [
      "Increased trade on the Silk Roads due to Pax Mongolica led to the spread of the Black Death",
    ],
    Culture: [
      "Generally very religiously tolerant, and many religions were practiced. All Mongols had some elements of animism.",
    ],
    Governance: [
      "Initially nomadic tribes who were eventually united by Genghis Khan",
      "Great horsemen",
      "They began their conquest in 1609 under Genghis Khan. They started with the Jin Empire then moved west to the Middle East",
      "Used siege weapons to invade cities",
      "They led to the decline of knights in Europe", // is this true?
      "They starved cities and killed their people until the cities surrendered",
      "Once they had conquered territory, there was a period called Pax Mongolica (Mongolian Peace) in the 13th and 14th centuries, since no one wanted to fight the Mongols",
      "The Mongol empires were united until 1265, then there was a lot of infighting",
    ],
    Economy: [
      "Pax Mongolica led to increased trade on the Silk Roads",
      "Kept skilled workers alive, which allowed their empire to thrive",
    ],
    Uncategorized: [
      "Had the yam messenger system, where messengers would take oral messages and ride nonstop, even sleeping on their horses, to deliver the message. An early version existed under Genghis Khan, but it was expanded under Ogedai Khan",
    ],
  },
  "Golden Horde": {
    Culture: [
      "Became isolated from Europe, reinforcing the Great Schism divide and leading to a new and unique culture",
    ],
    Governance: [
      "1236-1380",
      "Created when Batu (one of Genghis Khan's grandsons) invaded Russia in 1236",
      "Mongol leaders ruled through Russian princes - the princes had to collect taxes and prevent rebellion",
      "Rivalry between the Golden Horde and the Il-Khanate",
      "City-states began allying together to rebel, led by Alexander Nevskii. They kept some of the taxes they were supposed to give to the Mongols and used the money to build an army",
      "The Russian city-states defeated the Golden Horde at the Battle of Kulikovo in 1380",
      "Moscow replaced Kiev as the political center and Kiev lost importance",
    ],
    Technology: [
      "The Mongols brought passports, coal mining, moveable type, high temperature metallurgy, gunpowder, and bronze cannons",
    ],
  },
  "Il-Khanate": {
    Culture: [
      "Funded work in astronomy", // tech?
      "Originally, it was religiously tolerant until Ghazan Khan made Sunni Islam the state religion in 1295, then other religions were persecuted",
    ],
    Governance: [
      "1256-1335", // check
      "Founded by Helegu (one of Genghis Khan's grandsons)",
      "Destroyed Baghdad and ended the Abbasid Caliphate in 1258, but were stopped from exanding further by the Mamluks in 1260",
    ],
    Economy: [
      "Ghazan Khan tried to lower the tax but had to raise them again which made the population unhappy",
      "Tax farming was used extensively (a sign that the government didn't have enough money), where the government paid people to collect taxes for them, and the tax farmers could tax more in order to make a profit. It worked well at first, and then failed (people were driven into debt and agriculture declined). Then the government tried to buy land for agriculture but that led to even less tax revenue",
    ],
    Social: [
      "Once Sunni Islam became the state religion in 1295, other religions were persecuted",
    ],
  },
  "Yuan Dynasty": {
    Environment: [
      "The population declined by 40% due to the Black Death, Mongols killing everyone, and because the government didn't invest in the infrastructure",
    ],
    Culture: [
      "They were religiously tolerant, which made Buddhists and Daoists, who had previoulsy been oppressed, more loyal. Eventually they turned towards Tibetan Buddhism, and had Lamas as advisors",
    ],
    Governance: [
      "1260-1368",
      "Founded by Kublai/Kubilai Khan (one of Genghis Khan's grandsons)",
      "Tried to conquer Japan, Indochina, and Java in 1278 but failed",
      "The government was unpopular with Confucians and the Scholar Gentry since they got rid of the Civil Service Exam, and changed the social hierarchy so merchants were more valuable than farmers (which went against Confucian beliefs)",
      "In the 1350s, the White Lotus Society began organizing a rebellion, and in 1368 Zhu Yuanzhang/Hongwu (a Buddhist monk) started the rebellion and founded the Ming Dynasty",
    ],
    Economy: ["They got wealthy through trade"],
    Social: [
      "Women had more rights: they could wear pants, initiate divorces, and remarry",
      "There was separation between Mongols and ethnically Chinese. Mongolians were given all the positions in the government and were at the top of the hierarchy. Chinese were not allowed to speak Mongolian.",
    ],
    Technology: ["Fell behind in technology"],
  },
  "Ming Dynasty": {
    Culture: [
      "Shifted back to Confucianism",
      "They were very anti-Mongol, asserting their Chinese identity",
    ],
    Governance: [
      "1368-1644",
      "Reinstated the Civil Service Exam",
      "Pushed the Mongols out of China, but were still always ready to defend against the Mongols, institution mandatory military service",
      "Sent their army to aid against the Japanese invasion of Korea in the 1590s, leading to economic and military weakness",
      "There was a lot of internal rebellion starting in the 1630s, and as the Ming Dynasty was still weak, they allied with the Manchus to help them against the rebels, but the Manchus instead took power and started the Qing Dynasty in 1644",
      "Emperor Yongle (ruled 1403-1424) wanted to control the Indian Ocean through the Zheng He voyages, where Zheng He would bring gifts and receive tribute from cities in the Indian Ocean. Yongle was the only Ming emperor who really supported exploration. Zheng He made 7 voyages all around the Indian Ocean for tribute and to show the Ming Dynasty's strength, until Yongle died. The rest of the Ming Dynasty did not support his voyages",
    ],
    Economy: [
      "Really wanted silver as a currency, since they wanted a coin currency, and silver was not as valuable as gold but could still be verified, unlike copper",
      "Imported a lot of silver from the Americas (supplied by the Spanish), which led to silver inflation",
      "Traded porcelain and textiles for silver",
    ],
  },
  "Jagadai Khanate": {
    Governance: [
      "1227-1363",
      "Founded by Jagadai (Genghis Khan's son)",
      "Timur (Tamerlane) was the Genghis Khan of the 14th century. He sacked Delhi in 1398, defeated the Ottoman sultan in 1402 (delaying the Ottomans from taking Constantinople)",
    ],
  },
  "Ottoman Empire": {
    Culture: [
      "Sunni Islam",
      "Fairly religiously tolerant. They had special courts for non-Muslim non-secular law, and provided a safe place for Jewish after they were driven out of the Iberian Peninsula, but they still had the jizya tax for non-Muslims, and Jewish and Christians were not allowed top positions in the government",
      "Coffee houses, where men could gather and discuss ideas, became very popular",
      "The Tulip Period (1718-1730) was when tulips from the Netherlands became super popular in the Ottoman Empire, and people would spend large amounts of money to buy them. Elites would have tulip gardens and throw parties to show off their gardens",
    ],
    Governance: [
      "1299-1922",
      "Used land grants to recruit people for cavalry in the military. They would get land for their whole lifetime, and it wouldn't be taxed, but the land grants were not hereditary so if their children wanted the land they would also have to be in the cavalry",
      "Used the Devshirme system, where they took Christian boys from the Balkans to serve in the government, usually in the military as Janissaries. they were foot soldiers adn used guns, since guns were too heavy for horseback",
      "Began using tax farming extensively in the 16th centiry", // econ?
      "The Anatolia Revolts (1590 and 1610) were a result of discontent among the population in Anatolia. A lot of cavalry was displaced in the mid 16th century because the goverment reduced the amount of landholding cavalry, and many peasants were poor due to taxes. It led to a lot of people moving away, leading to less agricultural output",
      "There was a Janissary revolt in 1730, forcing Sultan Ahmed III to abdicate and to give Janissaries more rights and power",
      "Finally conquered Constantinople in the Battle of Kosovo in 1453",
      "Defeated the Safavids in the Battle of Chaldiran in 1514, stopping their expansion and defining the border between the Ottomans and Safavids",
      "Suleiman the Magnificent ruled from 1520 to 1566 during the Ottoman Empire's height. He expanded the empire and developed secular law called Kanun",
      "Began declining after Suleiman the Magnificent's death as the centralized power weakened. Harem politics became more common, where wives and concubines of the sultan would fight for their sons to be in power. The Ottoman Empire was often referred to after as the Sick Man of Europe",
      "Ottoman power declined most in the Balkans, where nationalism was rising",
      "In 1827, Greece declared independence from the Ottomans, with the help of the British, French, and Russians",
      "The Ottoman government wanted a new, more modern military while Greece was fighting for independence, which the Janissaries didn't like, so the government killed all of the Janissaries",
      "The government made the Tanzimat Reforms in 1839-1876, making schools secular so they had more control over them and codified Ottoman laws",
    ],
    Economy: [
      "Silver inflation in the late 16th century happened because the silver from the New World was so cheap, meaning they could buy more, so prices rose",
    ],
    Social: [
      "They had the jizya tax for non-Muslims, and Jewish and Christians were not allowed top positions in the government",
      "Janissaries didn't have many rights until 1730. They weren't allowed to get jobs, marry, have kids, or own property",
      "The higher class (military, government officials) were called the Askeri, while the lower class was called the Reaya",
    ],
  },
  "Mughal Empire": {
    Culture: [
      "The majority of the population was Hindu but the state religion was Sunni Islam",
      "Sikhism emerged in 1469. It was influenced by Hinduism and Islam. They were initially tolerated until the reign of Aurangzeb, who had the ninth guru killed",
      "Jahan (ruled 1628 to 1658) made the Taj Mahal for his favorite wife after her death. It simultaneously was a way to legitimize him to all the religions in the empire. It appealed to Muslims because of the Quranic verses inscribed, along with the gardens, minarets, and mosque. It appealed to Hindus because the marble represented the caste system",
    ],
    Governance: [
      "1526-1857",
      "Took over the Delhi Sultanate after the Battle of Panipat in 1526, which the Mughals won even though they were outnumbered because they had gunpowder weapons",
      "Used zamindars, or government officials specialized for tasks including taxation, construction, and water supply. Eventually they began keeping some of the taxes and building their own armies",
      "Mansabdars were government officials trained at acadamies. They made up the bureaucracy and generals",
      "Land grants in the Mughal Empire were hereditary, unlike in other Muslim Empires",
      "The Mughal Empire declined due to efforts to expand with a weak and corrupt military. Expansion was expensive and they were unable to effectively assimilate the new territories, leading to uprisings. The Mughal Empire became decentralized due to wars with the growing Maratha Empire, and then the French and English took control",
    ],
    Economy: [
      "Grew and traded a lot of cotton for calico",
      "Britain was unhappy about the success of Indian cotton so they made the Calico Acts in 1700 and 1721 banning calico imports in Britain so they wouldn't compete with Brtish products",
      "The British East India Company forced India to export raw cotton instead of finished textiles so they wouldn't compete with Britain"
    ],
    Social: [
      "There was religious intolerance except under Akbar",
      "Casts were still very prevalent",
    ],
    Uncategorized: [
      "Akbar ruled from 1556 to 1605 at the height of the Mughal Empire. He wanted to unite Hindus and Musliims, so he was very religiously tolerant, exempting Hindus from the jizya tax. He also created a new religion called the Divine Faith (incorporating Islam, Hinduism, Zoroastrianism, Sikhism, and Christianity) but it didn't last. He also established the land grant (mansab) system in the Mughal Empire",
      "Aurangzeb (ruled 1658-1707) was very religiously intolerant. He had the ninth Sikh guru killed",
    ],
  },
  "Safavid Empire": {
    Culture: [
      "The state religion was Shi'a Islam, which the government used as a unifying force",
      "They were surrounded by Sunni Muslims on both sides (the Ottomans and Mughals)",
      "They believed in the Hidden Imam (the 12th descendent of Ali who would return on a judgment day), and they had a Shah as a placeholder for the Hidden Imam",
    ],
    Governance: [
      "1501-1736",
      "Gave land grants to qizilbash in exchange for military service. The qizilbash generally didn't use guns, so the Safavids took captives from other places to be soldiers and use guns, which was very expensive",
      "Lost the Battle of Chaldiran to the Ottomans, establishing the border betweeen the Ottomans and Safavids",
      "Took some Mughal territory, including the Silk Roads, during the Siege of Kandahar in 1653",
      "Shah Abbas ruled from 1588 to 1629 during the Safavid Empire's height. He expanded the government's power by taking power away from the nobles, and expanded silk trade, imported more weaponry, and shifted the military to a more European style",
      "Delcined after Shah Abbas, as rulers were overspending, and they lost territory to the Ottomans and Russians",
      "In 1722, Sunni people rebelled and sacked Isfahan and made centralization andd taxing difficult",
      "Fell when they were replaced by the Zand Dynasty in 1760",
    ],
    Economy: [
      "Traded mostly carpets, and had a monopoly on silk trade",
      "Silver inflation in the late 16th century because the silver from the New World was so cheap, meaning they could buy more, so prices rose",
    ],
    Social: [
      "They were religiously intolerant",
      "Women had property rights, but were restricted to certain areas in their houses",
    ],
  },
  "Songhai Kingdom": {
    Culture: ["Muslim"],
    Governance: [
      "Defeated by the Moroccans in the Battle of Tondibi in 1591. The Moroccans invaded because they wanted the gold in Songhai territory. The Songhai greatly outnumbered the Moroccans and even had cattle to trample them, but they lost because they didn't have firearms. As a result, they had to pay tribute to Morocco with slaves and goods",
      "Built off the fuondation created by the Ghana and Mali Empires", // econ?
    ],
    Economy: [
      "Exported slaves, gold and the kola nut. They faciltated trade of textiles, hardware, and weapons",
    ],
  },
  "Russia 1380-1917": {
    Culture: [
      "Eastern Orthodox, but Muslim in steppes",
      "Religously tolerant until the end when they wanted to promote a uniform Russian identity",
    ],
    Governance: [
      "The government hired soldiers called cossacks. They were very good warriors but sometimes they decided not to follow the state's orders",
      "Expanded east to Central Asia, and west to Alaska and California",
      "Settled by the Amur river in the 1640s to grow grain, but the Ming Dynasty felt threatened, leading to the Treaty of Nerchinsk in 1689, which recognized Russian ownership of the land but forced them not to settle there",
      "Ivan the Terrible ruled from 1533 to 1584. He expanded Russia east and south using the cossacks. There was a lot of tension with the boyars, so he forced them to move to Moscow, where it would be harder to plot against him. He also made the oprichnina, a paramilitary force loyal to him",
      'Peter the Great ruled from 1682 to 1725. He was known as the "Defender of Orthodoxy" and was at first in favor with the church until he tried to reform it too much (tried to make it answer to him). He divided Russia into provinces and made provincial officials. He moved the capital from Moscow to St. Petersburg and reintegrated Russia with Western Europe. He was known for copying Western Europe (especially French) things, including technology, tolerance, and trade, but not democracy',
      "Catherine the Great (ruled 1762-1792) expanded Russia, taking Polish and Ottoman Territory",
      "In 1774, a cossack named Yemelyan Pugachev started the Pugachev Rebellion against Catherine the Great. The movement aimed to gain more rights for serfs, but was defeated by the Russian army, and Catherine doubled down on oppressing the peasants",
      "Began exploring Alaska and the North American West Coast in the 1800s",
      "Alexander I (ruled 1815-1825) expanded Russia to include Finland, Moldova, Georgia, Azerbaijan, and Armenia",
      "Sold Alaska to the US in 1867"
    ],
    Economy: [
      "Exported furs",
      "Mainly produced agricultural products like wheat until Communism, when they began producing more coal, iron, and steel",
    ],
    Social: [
      "Social hierarchy: Boyars (land-owning nobles), then merchants, then peasants (who were often driven into debt and serfdom",
      "Built railroads like the Trans-Siberian Railroad to allow for easier trade and transport between the east and west of Russia",
      "Serfdom ended in 1861",
    ],
  },
  "Qing Dynasty": {
    Environment: [
      "Grew more cash crops like tea, cotton, and silk as well as as New World crops like corn and sweet potatoes",
      "Had floods and droughts, which harmed the agriculture"
    ],
    Culture: [
      "The majority of the population was Han Chinese but the Manchus wanted to assimilate them. For example, all men were forced to wear the Manchu hairstyle, called the queue, and if they didn't, they were killed",
      "Jesuit missionaries began converting people to Christianity, as they allowed the Chinese to continue the confucian practice of worshipping their ancestors. Emperor Kangxi supported them, so he banned all other missionaries who didn't support him",
    ],
    Governance: [
      "1644-1911",
      "Founded by Manchus who had allied with the Ming Dynasty, then took control",
      "Expanded to Mongolia, Taiwan, and Tibet",
      "The British sent the Macartney Mission in 1792 to show more interest in the Qing Dynasty and to renegotiate the Canton system, but they failed",
      "The White Lotus Rebellion (1796-1804) weakened the Qing Dynasty",
      "Declined to to corruption, lack of investment in infrastructure, and too much expansion so they were unable to control their territory (as they expanded, they didn't increase the number of government officials)",
      "The Taiping Rebellion (1850-1864) was an internal uprising led by Hong Xiuquan. He was angry because he had failed the Civil Service Exam and believed that he was the brother of Jesus. He gathered people to rebel against the Qing Empire, saying that they hadn't solved the opium addiction or famine problems. In the end, they were defeated by the Qing Dynasty with help from the Europeans (who wanted the Qing dynasty weak but not dissolved), but the uprising showcased the government's weakness",
      "Tried to modernize during the Self-Strengthening Movement from 1861-1895, but it was only adding modern ideas to traditions instead of a full reform so it wasn't as effective. They strengthened the military and stabilized the government more",
      "Lost the First Sino-Japanese War (1894-1895)",
      "During the Hundred Days of Reform in 1898, the government tried to eliminate corruption by stopping the Civil Service exam, which had become corrupt, and instituting a constitutional monarchy and parliament. It also established Western industrial, commercial, and medical systems",
      "In 1898, the emperor's aunt Empress Dowager Cixi took power in a coup d'état. She was very conservative, being afraid of foreign influence, and undid all the work that the Emperor had done during the Hundred Days of Reform, stopping work on railroads and telegraph lines, and reinstating the Civil Service Exams. By the end of her reign, she realized how corrupt the Civil Service Exams were and removed them again",
      "The Boxer Rebellion in 1900 was a movement against foreign influence. An anti-imperialist group called the Boxers, supported by Empress Cixi, attacked foreigners and Christians, but were eventually defeated",
      "The dynasty collapsed in 1911, and was replaced by the Republic of China",
    ],
    Economy: [
      "Limited foreign trade to one city per foreign place - European trade was limited to Canton. The Dutch (through the VOC) were able to trade more, until they were replaced by the British (through the EIC)",
      "Imported a lot of silver which led to silver inflation",
      "The British wanted tea from China but didn't have anything the Qing Dynasty wanted, so they began importing opioids",
      "The British importing opium led to the Opium Wars (1839-1842 and 1856-1860). China asked them to stop but they refused, leading to wars. The first war ended in 1842 with the Treaty of Nanking, where Britain forced free trade, got first nation trading status, opened 4 more ports, received control of Hong Kong, and got extraterritorial rights (British merchants don't have to obey Chinese laws). War broke out again in 1856 and ended in 1960 with the Treaty of Tientsin, where the British got more ports, envoys in Beijing, freedom of movement for Christian missionaries, part of the Kowloon Peninsula, and legalized opium",
    ],
    Uncategorized: [
      "Emperor Kangxi (ruled from 1662 to 1722) expanded to Mongolia, made the 1689 Treaty of Nerchinsk with Russia, improved infrastructure, supported the Jesuits and included them as advisors, and was very popular with the people as he portrayed himself as a Confucian scholar. He commissioned the Nanxuntu, which displayed him visiting Southern cultural and economic centers",
      "Emperor Qianlong (ruled from 1736 to 1796) portrayed himself as a Universal Ruler, appealing to Buddhists by portraying himself as a bodhisattva, and appealing to Confucians through commissioning Nanxuntu, similar to Kangxi. Under him, the bureaucracy became more corrupt",
    ],
  },
  "United States 1776-1920": {
    Culture: [
      "In 1889, the Northern Paiute Indians in Nevada started a movement called the Ghost Dance. It was caused by decline of resoures due to deforestation and irrigation, assimilation to white culture. The Native Americans did Ghost Dance Rituals, which were nonviolent, because they believed that the dead would come back to overthrow the whites and restore the land. The movement spread from the Sierra Nevada to the Missouri River and from Northern Texas to Canada. The US army killed 150-200 Natives at the Wounded Knee Massacre in 1890, and the movement died down after that.",
      "Ethnic enclaves formed as immigrants moved to America"
    ],
    Governance: [
      "Started fighting for independence in 1775.",
      "At first they were losing until they gained French support",
      "They won in 1783 with the Treaty of Paris",
      "The Articles of Confederation were made in 1781 but they made the central government too weak so they were replaced with the Constitution in 1787. The Constitution established the legislative, executive, and judicial powers. They also made the Great Compromise for big and small states, createing the House of Representatives based on population size, which gave an advantage to bigger states, but balanced it with the Congress which had equal representation for each state, which helped smaller states.",
      "Anti-Federalists wanted more state rights, resulting in the 1793 Bill of Rights", // ?
      "President Monroe's Secretary of State John Quincy Adams made the Monroe Doctrine in 1823, stating that European nations should not interfere with the Western Hemisphere, and that the US would not interfere with European wars. This allowed the US to be the main power in the Americas and prevented European colonization/regaining of territories",
      "Bought Alaska from the British in 1867",
      "Fought the Spanish during the Spanish-American War (1898-1899). They won and gained the Philippines, Puerto Rico, and Guam",
      "In 1904, Roosevelt made the Roosevelt Corollary to the Monroe Doctrine saying that the US could intervene in unstable Latin American countries, allowing them to have economic dominance",
      "During World War I, they were initially neutral but joined the Allies in 1917, tipping the balance towards Allied victory",
      "Sent troops to try to stop the Bolsheviks from taking over during the Russian Civil War",
    ],
    Economy: [
      "Began industrializing after the Civil War, and became a leading manufacturer of steel, oil, and automobiles by the early 1900s. Their industrialization was especially successful because they had a lot of human capital as people would immigrate tothe US due to political or economic problems in their home countries",
      "The United Fruit Company traded fruits in Central America and the Caribbean. They pressured the governemnts there to give them ideal trading rights. This led to the creation of banana republics, politically unstable Central American countries dependent on exportation to foreign corporations"
    ],
    Social: [
      "Manifest Destiny was the belief that Americans had the right to expand to the Pacific Ocean",
      "Many people immigrated to America during the gold rush",
      "In 1879, California made a new constitution that discriminated against Chinese immigrants. The government couldn't hire them, they weren't allowed citizenship, and segregation was put in place",
      "In 1882, the Chinese Exclusion Act banned Chinese immigration",
      "In 1907, the US agreed to not restrict Japanese immigration in exchange for the Japanese stopping emigration to the US. This was called the Gentlemen's Agreement. It was endded in 1924 by the Immigration Act",

    ],
    Technology: [
      "The Transcontinental Railway was completed in 1869"
    ],
    Uncategorized: [
      "The expansion of railroads connected markets and facilitated westward expansion, often at the expense of the Indigenous peoples",
    ],
  },
  "United States 1920-Present": {
    Governance: [
      "The U.S. entered World War II after the attack on Pearl Harbor in 1941, becoming a global superpower after the war",
      "During the Cold War, the US led the Western bloc against the Soviets",
      "One of the permanent members of the UN Security Council",
      "Power shifted from Europe to the US in the early 1900s",
      "Made the Truman Doctrine in 1947 supporting a policy of containing communism in Turkey, where the USSR wanted military bases to control Dardanelles, and Greece, where communist groups almost took control of the government",
      "The USSR and the US had a fairly diplomatic relationship during the last decades of the Cold War, after the Cuban Missile Crisis. This period was known as détente. In 1972, President Nixon even visited the Soviet Union to sign the Strategic Arms Limitation Treaty freezing the number of intercontinental ballistic missiles. The US also began to sell grain to the USSR when they had a shortage due to a drought. The period of détente ended in 1979 when President Carter stopped selling grain.",
      "Tensions rose again in the 1980s",
    ],
    Economy: [
      "The interwar period saw economic boom in the 1920s, followed by the Great Depresssion beginning in 1929",
      "The New Deal programs under Franklin D. Roosevelt expanded the federal government's role in the economy. The policies aimed to bring relief for citizens, recovery to bring the nation out of depression, and reform to prevent economic depressions in the future. The government used deficit spending to deal with economic problems and stimulate economic activity. They also started FDIC, which ensured that the government could pay citizens back if the bank collapsed. The economy was recovering until FDR thought that the government deficit was too big and tried to reverse some of his actions, and the economy got worse again",
      "The US made the Marshall Plan in 1947, where they offered $12 million to European countries to modernize, reduce trade barriers, and improve infrastructre, since they thought that there would be more communist revolutions if the economy was unstable",
    ],
    Social: [
      "White women gained the right to vote in 1920",
      "Demonstrations for women's and African Americans' rights",
      "The 1964 Civil Rights Act banned discrimination based on race, color, religion, or national origin",
      "The 1965 Voting Rights Act banned discrimination in voting"
    ],
    Technology: [
      "Developed the atomic bomb",
      "Landed the first man on the moon in 1969",
    ],
  },
  "France 1750-1920": {
    Governance: [
      "Louis XVI called the Estates General in 1789 because he wanted to start taxing nobles to get more money, but as the nobles essentially had 2 of the 3 votes, they avoided the tax. The bourgeoisie were angry that they only had one vote so they formed the National Assembly which pushed for a constitutional monarchy",
      "The commoners stormed the Bastille on July 14, 1789. In October, they stormed Versailles and made the king make the monarchy constitutional (they didn't want to kill him, they only wanted him to make things better)",
      "Became the First French Republic (constitutional monarchy) in 1792. Monarch power was limited, and the National Assembly had a lot of power. They stopped feudalism and made the Declaration of the Rights of Man and Citizen. The King was unhappy with this new government and tried to veto a lot of things",
      "Eventually, the Jacobins, extreme revolutionaries, were elected. They wanted to end the monarchy, the church's power, and slavery, and killed anyone (including the king and queen) who were “against” the revolution (could have been for any reason) in the 1793 Reign of Terror.",
      "In 1804, Napoleon Bonaparte took control of France in a coup d'ètat, and became emperor through a vote (the French people wanted stability after the reign of terror). He fixed the economic situation, but got rid of freedom of speech. He invaded Russia in 1812 and lost half a million people.",
      "In 1815, other European countries overthrew Napoleon, exiling him to Île d'Elbe and reestablished the monarchy. They wanted to ensure that the monarchs would stay in control so they promoted conservatism and buried the idea of democracy from 1815 to 1848",
      "Fought with the Ottoman Empire and Britain against Russia in the Crimean War (1853-1856) and won",
      "Fought with th Allies during World War I",
    ],
    Economy: [
      "Began industrializing in the 1850s, but it wasn't as successful because the cities had smaller populations, they had no iron or coal deposits, and France had a lot of wars with their neighboring countries",
    ],
    Social: [
      "Started the French Revolution because all the money and taxes were going to the nobles and higher class, and they had lost a lot of money from wars such as the American Revolution and the Seven Years' War. The estate system was very unfair to the majority of the population who had to pay a 50% tax and were only represented as 1/3 in the government.",
    ],
  },
  "Saint Domingue/Haiti": {
    Governance: [
      "Had been under French control",
      "The revolution started in 1792 and continued to gain more people. Toussaint L'Ouverture, who became the leader of the revolution, joined the movement in 1794. They allied with the Spanish and then drove out the Spanish and British",
      "In 1801, Toussaint L'Ouverture established the Haitian government and constitution, creating equal rights and citizenship, and abolishing slavery and racism. However, he made himself the governor for life and gave himself all the power",
      "In 1804, Napoleon reinstated slavery and imprisoned Toussaint L'Ouverture. Haiti fought for independence because they didn't want slavery and gained full independence that year.",
      "Even after the revolution, Haiti was unrecognized by most countries and had to pay France reparations, leading to them being a very poor country",
      "They were the first and only Black-led nation to get rid of colonial power", //?
    ],
    Social: [
      "Their revolution was inspired by the French Revolution and Enlightenment ideas. All the people wanted more rights (it wasn't about slavery yet)", // maybe gov?
    ],
  },
  Brazil: {
    Governance: [
      "In 1807, Napoleon invaded Portugal, so to escape, the Portuguese royal family fled to Brazil. The king wanted to return, but the creoles loved having their own government in the country, so Prince Pedro remained in Brazil while the King went back to Portugal",
      "Brazil declared independence from Portugal in 1822 under Dom Pedro I. It maintained a monarchy until 1889, when it became a republic.",
      "Brazil fought against Paraguay in the Paraguayan/Triple Alliance War from 1864-1870. Brazil's army heavily relied on slaves who fought in exchange for their freedom. This accelerated the abolitionist movement in Brazil, leading to the abolition of slavery in 1888",
      "In 1930, power transitioned to Getulio Vargas through a bloodless coup. He was very similar to Mussolini and was interested in fascism, but he didn't use violence to get control. He wanted to industrialize, as he saw that other countries were exploiting Latin American countries for their resources. He used his policy of Estado Novo to restrict individual political freedoms, censoring the press, abolishing political parties, imprisoning political opponents, and promoting hypernationalism",
      "Brazil participated in World War II on the Allied side, sending troops to fight in Italy.",
      "Moved away from fascism after World War II",
    ],
    Economy: [
      "Brazil's economy relied heavily on coffee exports",
      "Exported beef",
      "Economic growth after World War II",
    ],
    Social: ["Slavery persisted until 1888"],
  },
  "Mexico 1821-Present": {
    Governance: [
      "Wanted independence because of enlightenment ideals, and they didn't like mercantilism. Padre Miguel Hidalgo was one of the leaders of the revolution, and he was very liberal. He wanted land redistribution, and the abolition of the castas system and slavery.",
      "Became a republic in 1821 with Iturbide, a creole general, as king, although he was eventually kicked out of Mexico and killed",
      "In 1857 the Liberals, led by Benito Juaréz, made a more liberal constitution. The Conservatives really disliked this and started a civil war. Benito Juaréz borrowed heavily from Europe to win the war and keep power",
      "The French, who wanted Mexico as a colony, used the fact that Juaréz was in debt to them as an excuse to invade Mexico in the French-Mexican War. They were supported by the Mexican Conservatives in overthrowing Juaréz in 1963. The French then replaced him with Austrian Archduke Maximillian as the emperor of Mexico (they wanted to repair relations with Austria",
      "The Mexicans drove the French out Mexico in 1867 with the help of the Americans, returning power to Juaréz.",
      "Juaréz went against the term limits in the constitution he wrote",
      "Porfirio Díaz ruled as a dictator from 1876-1910. He made a new kind of slavery - debt slavery that could be passed down through families. He wanted to modernize and industrialize, but by giving foreign investors control over Mexico's resources (Americans controlled up to 50% of land). In 1910, he imprisoned his political opponent Francisco Madero, leading to the 1910 Mexican Revolution.",
      "The Mexican Revolution (1910-1920) overthrew the dictatorship of Porfirio Díaz, leading to land reforms and a new constitution. It was led by Francisco Madero, the political opponent of Díaz, Francisco \"Pancho\" Villa in northern Mexico, and Emiliano Zapata in southern Mexico. They made Díaz step down and go into exile, and Madero was elected president",
      "There was a lot of political instability and violence (Madero, Villa, and Zapata were all assassinated) until 1930. Leaders didn't follow the constitution, and the military kept trying to establish a military dictatorship",
      "A new, very liberal, constitution was written in 1917, promoting land redistribution, universal suffrage, one-term presidency, labor unions, public education, and nationalizing the oil industry. However, the government did not follow this constitution",
      "Lazaro Cardenas began following the constitution in the 1930s",
      "The country experienced one-party rule under the PRI (Institutional Revolutionary Party) for much of the 20th century, with gradual democratization in the late 1900s. The PRI helped improve the economy from the 1930s to 1970s",
    ],
    Economy: [
      "Mexico nationalized its oil industry in 1938, giving the state-run company PEMEX control over the industry, asserting economic sovereignty",
    ],
    Social: [
      "The creoles wanted more rights, so they kept switching sides to suit their wants. At first, they were against the peninsulares because they wanted more power, but then Hidalgo's followers would attack both peninsulares and creoles so the creoles sided with the peninsulares. Then, in 1820, the Spanish government got rid of the castas system. The creoles wanted to still be at the top of the hierarchy so they switched sides against the peninsulares and Spain.",
      "Mexico welcomed Chinese immigrants after the US made the Chinese Exclusion Act in 1882"
    ],
  },
  Italy: {
    Culture: ["Catholic"],
    Governance: [
      "Count di Cavour, the prime minister of the largest state in Italy (Piedmont-Sardinia) used nationalism to help unite Italy. He went to war against Austria for more territory, simultaneously fostering nationalism as other city-states joined his side.",
      "Unified in 1861",
      "Started getting colonies in the mid-1800s",
      "There was a lot of crime in Southern Italy in the 1800s",
      "Formed the Triple Alliance with Germany and Austria-Hungary in 1882",
      "In World War I, they initially sided with the Central Powers but then switched to the Allies' side",
      "Had the 6th most casualties in WWI",
      "Represented by Vitorria Orlando in the Paris Peace Conference after World War I. They ended up angry because they didn't receive the Austro-Hungarian territory they wanted",
      "Benito Mussolini took power in the 1920s and became a dictator. He used violence, propaganda, and toxic nationalism to promote fascism and totalitarianism", // check?
      "Tried to conquer Ethiopia (called Abyssinia at the time) after the Scramble for Africa, but they were driven away in 1896 and never took control of the country",
      "Allied with Hitler in 1936 in the Rome-Berlin Axis",
      "Fought with the Axis Powers during World War II",
      "Was one of the original members of NATO (North Atlantic Treaty Organization) in 1949 with Belgium, Canada, Denmark, France, Britan, Iceland, Luxembourg, the Netherlands, Norway, Portugal, and the US",
    ],
    Economy: [
      "Monopolized European trade with Asia in the 1400s",
      "Had a lot of poverty in the 1800s, leading to a lot of emigration, which was encouraged by the 1853 constitution",
      "Mussolini used corporatism, where companies that were already successful got additional benefits from the government. Worker rights and labor unions were also severely limited",
    ],
    Social: [
      "Many immigrated to the US, South America (especially Argentina under work contracts), Australia, and New Zealand",
    ],
  },
  "Germany 1850-1920": {
    Governance: [
      "Otto von Bismarck led German unification. He supported the king of Prussia, the largest and strongest German state. He was very conservative and wanted to keep monarch power. To unite Germany, he tricked other countries into declaring war on Prussia (eg. Seven Weeks' War in 1866 against Austria), then asked other German states to help Prussia, creating a sense of nationality.",
      "In 1870, Prussia invaded France in the Franco-Prussian War. Being more industrialized and populated, they captured Napoleon III (different from Bonaparte) and forced the French to surrender. This led to the last Catholic German states joining Prussia, and forming Germany in 1871, with the king of Prussia becoming the king of Germany.",
      "After unification, Otto von Bismarck wanted to keep the peace (and stop France from retaliating after the Franco-Prussian War), so he allied Germany with Russia and Austria-Hungary. This alliance contributed to the escalation of World War I.",
    ],
    Economy: ["Was the world leader in steel and coal production"],
  },
  "England 1750-present": {
    Governance: [
      "Britain expanded its empire to secure raw materials and markets, using its naval dominance to control global trade routes.",
      "The Catholic region of Northern Ireland wanted to join the Republic of Ireland, as they were being discriminated against by the Protestant majority. Some of them formed a terrorist group called the Irish Republican Army (IRA), and set off bombs in England to try to get what they wanted. There was finally a cease-fire in 1994",
      "Left the EU during the 2020 Brexit movement because it felt that the EU restricted its right to govern itself"
    ],
    Economy: [
      "Got cotton, wool, jute, vegetable oil, rubber, coffee, cocoa, meat, and butter from their colonies",
      "England was able to industrialize first in the 1760s because it had proximity to waterways, allowing it to import and export goods easily, access to coal and iron, large cities, agricultural productivity due to the agricultural revolution, access to foreign resources through colonies, accumulation of capital, legal protection of private property, and political stability.",
      "Flooded the markets of its competitors. India had been the main producer of cotton, but Britain wanted people to buy British cotton. They began mass production of cotton cloth using their industrialized factories, and imported their cotton to Indian markets, where people would buy the cheaper British cotton rather than the Indian cotton, while also taxing Indian cloth to discourage British from buying Indian cloth. They did the same process in Egypt.",
    ],
    Technology: [
      "During the industrial revolution, they developed the spinning jenny, which could spin more than one thread at a time, the water frame, which could power a spinning wheel using water. Textile production began to move to factories instead of homes. They also developed the specialization of labor, leading to the assembly line in the early 1900s.", // econ?
      "Developed the steam engine, the most important invention of the first industrial revolution. It powered factories, so they didn't need to be next to water anymore and could be in more convenient places, as well as steam boats and locomotives, leading to more efficient transportation.",
    ],
  },
  Egypt: {
    Governance: [
      "Controlled by Mamluks until 1516, when it was taken over by the Ottomans. In 1798, Napoleon took control of Egypt for France but withdrew in 1801. The Ottomans wanted Egypt back so they sent a general Muhammad Ali to regain control. Muhammad took power as governor, still technically in the Ottoman Empire but fairly independent.",
      "Muhammad Ali reformed Egypt and industrialized by taking land from Muslim religious institutions and imposing high cotton taxes that forced peasants to give up their land to the state. The government used this land to grow cotton.",
      "Muhammad Ali also built a strong European-style military",
      "England took power in 1882 during the Anglo-Egyptian War",
      "Became nominally independent in 1922, but Britian still controlled the Suez Canal and had treaty rights. In 1936 the Anglo-Egyptian treaty gave more independence, but the British still kept the Suez Canal and some influence in Egypt",
      "In 1952, Gamal Abdel Nasser and others overthrew the king in a coup and established the Republic of Egypt",
      "Nasser was socialist. Part of his reforms included land reforms, reserving half of the seats in elected bodies for peasants, taxing the wealthy, making a salary cap, raising minimum wage, reducing the work week, and nationalizing industries",
      "Nasser tried to nationalize the Suez Canal in 1956 to help them pay for the Aswan Dam, which the British still had control over, leading to the Suez Crisis. France and Britain had Israel invade Egypt, then they occupied the area around the Canal. The US and Soviets supported Egypt in the crisis and threatened economic sanctions and the use of nuclear weapons. The crisis was resolved in the UN, making the canal international with Egyptian sovereignty.",
      "Egypt was non-aligned in the Cold War and got support from both the US and the Soviets. Eventually they aligned more with the US",
    ],
    Economy: [
      "Muhammad Ali used protective tariffs, making imports more expensive to encourage his people to buy domestic products instead of foreign things. Britain disliked this, so when Muhammad Ali's sons went to war against the Ottomans in an attempt to take over the Ottoman Empire, Britain supported the Ottoman Empire and defeated Egypt. They forced Egypt to stop their protective tariffs, then flooded the market so Egyptian markets couldn't compete. Egypt started to only export cotton and import British goods.",
      "Land reforms",
      "Socialist (not communist though)",
      "Produced cotton"
    ],
    Uncategorized: [
      "The Suez Canal was funded by the British and was built by Egyptian corvée laborers (they were unpaid and had to work as taxation). It was finished in 1869",
    ],
  },
  "Japan 1853-present": {
    Culture: [
      "Began adopting Western culture, including clothing, hairstyles, garden parties, and dances",
    ],
    Governance: [
      "Isolationist until 1853, when American Commodore Matthew Perry demanded that Japan trade with the US, threatening them with warships",
      "There was a civil war, as some people wanted to fight the West to preserve their culture, and others were scared of a situation like the Opium Wars in China, and they didn't believe they could win against teh west, so they proposed to protect Japan by working with the West. This led to the end of the Tokugawa Shogunate and isolationism",
      "The Meiji Restoration in 1868 saw the overthrow of the shogun and the return of power to the emperor. The Charter Oath was created, abolishing feudalism, instituting a constitutional monarchy, modernizing the military, establishing a new school system, and promoting industrialization",
      "In 1871, the government dissolved the samurai",
      "Japan wanted colonies because they didn't have a ton of natural resources or land, so they began taking parts of China, Korea, Southeast Asia, and the Pacific Islands. One group (the Colonization Society) wanted to form colonies in Mexico and Latin America.",
      "The Japanese military was really powerful, defeating China in the First Sino-Japanese War (1894-1895) and Russia in the Russo-Japanese War (1904-1905)",
      "In the 1930s, Japan pursued imperial expansion in East Asia, invading Manchuria (1931) and China (1937)",
      "They used propaganda like the idea of the Greater East Asia Co-Prosperity Sphere, promoting Asian unity and independence from Western Imperialism as an excuse to invade Asia",
      "Forced people that they had conquered into labor, either in military, public works, farms, or as prostitutes for Japanese soldiers",
      "Attacked Pearl Harbor in 1941 during World War II, bringing the US into the war",
    ],
    Economy: [
      "The government promoted industrialization through state-sponsored enterprises, which were later sold to private conglomerates (zaibatsu)",
      "After World War II, the government had kind of mercantilist policies where they exported more than they imported, setting high tariffs on foreign imports",
      "Received a lot of investment from other countries, especially the US",
      "Eventually relaxed trade restrictions, which fostered economic diversification"
    ],
    Social: [
      "Many Japanese went to the US to pursue education",
      "Many Japanese went to the US, Australia, New Caledonia, or Fiji as contracted laborers. Many were sent to Hawaii on 3-year contracts to produce sugar and pineapple",
      "In 1907, the US agreed to not restrict Japanese immigration in exchange for the Japanese stopping emigration to the US. This was called the Gentlemen's Agreement. It was endded in 1924 by the Immigration Act",
      "Women were not allowed in war efforts",
    ],
    Technology: ["Began adopting Western technology"],
  },
  Siam: {
    Economy: [
      "Rapidly industrialized in response to increasing European influence in East Asia, which allowed them to avoid being taken over economically and politically like China. Implemented Western schools, added railroads, and created a bureaucracy.",
    ],
  },
  Ghana: {
    Governance: [
      "One of the British-controlled territories in Africa, negotiated independence peacefully and adopted a British-style parliament.",
      "Negotiated independence with Britain in 1957",
      "Kwame Nkrumah was a major part of the independence movement and was elected the first president, but he immediately transitioned to authoritarian rule.",
    ],
  },
  Kenya: {
    Environment: [
      "After aggressive deforestation, Kenyan women struggled to find wood and clean water. The Green Belt Movement was formed, which continues to repopulate many Kenyan forests.",
    ],
    Governance: [
      "The government of Kenya was extremely oppressive when the Greenbelt Movement started in 1977, and saw large organized gatherings of women as a threat to their control. Violence was common throughout the authoritarian regime, and women who participated in the Movement were harassed and threatened.",
    ],
    Social: [
      "Kenya was highly patriarchal when the Greenbelt Movement started, such that women were unable to effectively influence the government even as they found that the land wasn't fully sustaining them anymore.",
    ],
  },
  Nigeria: {
    Culture: [
      "Nigeria housed many different ethnic/religious lines, including the Yoruba, Igbo, and Islamic groups",
      "Strong divide between the Igbo minority and the Hausa-Fulani majority, who were grouped together by British imperialists.",
    ],
    Governance: [
      "Used a dual legal system, with some secular laws mixed with some religious shariah laws",
      "After independence from Britain, the Igbo felt that they weren't being represented by the Hausa-Fulani majority government. They attempted to secede, but their held valuable oil which the Hausa-Fulani were unwilling to part with. This resulted in a bloody civil war (Nigerian Civil War or Biafran War) that left many hundreds of thousands of civilians dead in addition to military casualties. The Western countries supported Nigeria, but many Western individuals felt more of a connection to the Igbos because they were Christian. They were ultimately unsuccessful.",
      "There were many military coups until the 1999 election"
    ],
    Economy: ["Produced oil"],
  },
  Argentina: {
    Culture: ["Culture influenced by Italian immigrants"],
    Governance: [
      "Jose de San Martin was the main Liberator in Argentina. He coordinated the wars of independence with Simon Bolivar. Bolivar was a Creole and did not have many radical intentions when it came to removing the castas system, but Jose de San Martin was set on eliminating slavery and the castas system. Bolivar eventually accepted these progressive views in order to gain more support for the revolution.",
    ],
    Economy: [
      "Britain invested in Argentina's infrastructure, farming, and commodities. They ended up investing more in Argentina than they did in India, which was their own colony",
      "Attracted a lot of immigrants through being pro-immigration and offering better wages than were available in most other countries",
      "Exported beef",
    ],
    Social: [
      "Like the other Spanish colonies, there was a strict castas hierarchy.",
    ],
  },
  "South Africa": {
    Environment: ["Rich with natural resources, including diamonds and gold"],
    Governance: [
      "Preceded by Cape Colony and was formed in 1910",
      "Supported the Ovimbundu tribe during the Angolan Civil War",
      "The Truth and Reconciliation Commission tried to establish more trust between races after the Apartheid. There were 19 public hearings exposing human rights violations. They granted amnesty to members of the apartheid regime if they testified",
    ],
    Social: [
      "Racial discrimination started with the Afrikaners through the use of coerced labor, and escalated under the British with segregation and forms of coerced labor other than slavery. These practices expanded during industrialization until the apartheid system was instituted in 1948",
      'In the Apartheid system, the white minority had all the privelages while people of color were severely restricted. For example, they could only live in certain areas, and needed passbooks (identity documents) to be in "white" areas, and mixed marriages were forbidden.',
      "There were many protests against apartheid but they were suppressed",
      "In 1964, Nelson Mandela, the leader of the African National Congress, was imprisoned, sparking global anger. Other countries began urging divestment and economic sanctions, and the UN expelled South Africa in 1974.",
      "In 1989 F. W. de Klerk, the acting president, released Nelson Mandela and started negotiations",
      "Apartheid laws were repealed in the early 1990s, and Nelson Mandela became president in the first free election in 1994",
    ],
    Technology: ["Imported many laborers from India"],
  },
  Cuba: {
    Governance: [
      "Authoritarian rule changed hands, landing on the Communist regime of Fidel Castro.",
      "The U.S. was uncomfortable with a Communist dictatorship so near to them, so many assassins and the disastrous Bay of Pigs invasion were sent to try to kill Castro. It was obvious that the U.S. had supplied the weapons and training to the soldiers in the Bay of Pigs, and Castro became extremely hostile toward the U.S.",
      "The USSR took advantage of Castro's hatred of the U.S. and placed nuclear missiles in Cuba. The U.S. blockaded Cuba but they couldn't extract the missiles already there.",
      "The Cuban Missile Crisis almost resulted in nuclear war, but eventually the U.S. agreed to withdraw the nukes they put in Turkey and the USSR took back its Cuban nukes.",
    ],
  },
  Belgium: {
    Governance: [
      "In 1908, the Belgian government took the Congo from King Leopold II as they saw the human rights violations, but still paid him a lot of the profit",
      "Invaded by Germany in World War I",
      "Occupied by the Nazis during World War II starting in 1940",
      "Was one of the first members of NATO (North Atlantic Treaty Organization) in 1949",
    ],
    Economy: [
      "King Leopold II conquered the Congo Basin, and personally owned the Belgian Congo as personal property, where he essentially used slavery to harvest rubber",
    ],
  },
  Chile: {
    Governance: [
      "Chile gained independence from Spain in 1818 under Bernardo O'Higgins",
      "Gained more territory in the War of the Pacific (1879-1883)",
      "In 1970, Salvador Allende became president, pursuing socialist policies.",
      "A 1973 coup brought Augusto Pinochet to power, who implemented neoliberal reforms while committing human rights abuses",
      "Democracy was restored in 1990",
    ],
    Economy: [
      "Exported guano (bat/seabird excrement used as fertilizer) and copper",
      "After the overthrow of Pinochet, the government used economic growth from free trade as well as government programs to help reduce poverty"
    ]
  },
  Venice: {
    Culture: [
      "During the Renaissance, Venice was a center for art, architecture, and printing. They had a lot of wealth from trading which they used to sponsor artists.",
    ],
    Governance: [
      "During the 4th crusade (1202-1204), the Christians paid Venice to take the soldiers to the Middle East, but they didn't pay Venice enough, so the Venetians made the soldiers sack Zara and Constantinople before letting them continue with the crusades",
      "It had a very strong navy",
      "The Ottoman Empire really wanted to take control of Venice in the early 1500s but Venice resisted",
      "It declined in the 1500s when the Portuguese found other routes to Asia so Venice didn't have a complete monopoly on the trade going to and from Asia anymore.",
    ],
    Economy: ["Important hub for Mediterranean and long-distance trade"],
  },
  "Chola Dynasty": {
    Culture: ["Hindu", "Spread Indian culture ot Southeast Asia"],
    Governance: [
      "850-1279",
      "Became one of the longest-ruling dynasties in Indian history",
      "Had a strong centralized monarchy, with local governance (meaning villages were allowed to manage themselves)",
      "Had a very powerful navy which allowed them to have influence in the Indian Ocean trade",
      "Declined due to conflicts, too much expansion, and invasions",
    ],
    Economy: ["Facilitated trade of spices, cotton, and textiles"],
  },
  "Byzantine Empire": {
    Culture: ["Eastern Orthodox"],
    Governance: [
      "Had a strong centralized bureaucracy",
      "Was sacked by the crusaders (on order of the Venetians) in 1204",
      "Had a lot of conflicts with Islamic Caliphates, the Persians, Slavs, and Turks",
      "Fell in 1453 to the Ottoman Empire. Constantinople was renamed Istanbul",
    ],
    Economy: [
      "Controlled major trade routes from the Mediterranean to the Silk Roads",
      "Facilitated trade of silk, glass, and luxury goods",
    ],
    Uncategorized: [
      "Capital was Constantinople which was strategically placed on key trade routes between Europe and Asia. It became one of the richest cities due to trade",
    ],
  },
  "Ghana Empire": {
    Culture: [
      "Practiced traditional animism but Islam spread through trade, until most merchants and elites were Muslim in the 11th century",
    ],
    Governance: [
      "700s to 1200s",
      "Peak of influence was in the 700s-1000s",
      "Had a centralized monarchy",
      "Had a powerful army with iron weapons",
      "They were expansive in order to take control of more trade routes",
      "They were the first major Sudanic state, followed by the Mali and Songhai",
      "Declined due to Berber invasions and internal rebellions in the 11th and 12th centuries",
      "Absorbed into the Mali Empire",
    ],
    Economy: [
      "Exported gold and ivory",
      "Imported salt, copper, cloth, and tools",
    ],
  },
  "Srivijaya Empire": {
    Culture: ["Buddhist"],
    Governance: [
      "Based in Sumatra",
      "Had a large, powerful navy",
      "They were a maritime empire, so they focused on controlling the sea around them rather than the land",
      "Controlled the Strait of Malacca and profited off of taxing ships going between India and China",
    ],
  },
  "Portugal 1200-1450": {
    Culture: ["Catholic"],
    Governance: [
      "Engaged in the Reconquista, the Christian campaign to drive Muslims out of the Iberian peninsula. The Muslims were driven out of Portugal by 1249.",
      "The monarchy began to centralize after the Reconquista",
    ],
    Economy: [
      "Was less engaged in trade and focused more on agriculture and fishing",
    ],
  },
  "Rajput Kingdoms": {
    Culture: ["Hindi"],
    Governance: [
      "Collection of Hindu warriar states",
      "The clans within the kingdom weren't unified and were often at war with each other so they had no centralized government",
      "They limited Muslim influence in India",
      "They fought off initial Muslim invasions. Many states were conquered by the Delhi Sultanate after 1206, but others remained until they were integrated into the Mughal Empire in 1526",
    ],
    Economy: ["Were agriculture-based"],
    Social: ["Used the caste hierarchy"],
  },
  "Sukhothai Kingdom": {
    Environment: ["Rice cultivation supported population growth"],
    Culture: [
      "Promoted Theravada Buddhism, replacing the Khmer Empire's Hindu and Mahayana Buddhist influences",
    ],
    Governance: [
      "Conquered the Khmer in 1431",
      "Had a semi-centralized monarchy with a lot of local autonomy",
      "Declined in the 1400s",
    ],
    Economy: ["Participated in Indian Ocean trade"],
  },
  "Korea 1200-1450": {
    Culture: ["Had strong Buddhist and Confucian influences"],
    Governance: [
      "Had a centralized monarchy, but aristocrats and military leaders had a lot of power",
    ],
    Economy: [
      "Agriculture-based but also engaged in some trade",
      "Paid tribute to China, especially during the Ming Dynasty",
    ],
  },
  "Korea 1450-1750": {
    Environment: ["Cultivated rice"],
    Culture: [
      "Neo-Confucianism became Korea's official state ideology and was used as a unifying force",
    ],
    Governance: [
      "Still had a really centralized government",
      "Adopted Civil Service Exams for the bureaucracy",
      "Japan, under Toyotomi Hideyoshi, invaded in 1592-1598, but Korea drove them out",
      "Invaded by the Manchus",
      "Became more isolationist after Japan and the Manchu invaded",
    ],
    Social: [
      "Social hierarchy: scholars, officials, then peasants, then slaves",
    ],
  },
  "Korea 1750-1900": {
    Culture: [
      "European Catholic missionaries converted some people to Christianity, but they were persecuted",
    ],
    Governance: [
      "Corruption and peasant revolts weakened the state",
      "Paid tribute to China",
      "Remained more isolationist",
      "Under Japanese influence since the 1890s",
    ],
  },
  "Korea 1900-1945": {
    Governance: [
      "Began trying to modernize in the early 1900s by reforming school and adopting Western technology",
      "Ruled by Japan as a colony starting in 1910. They won Korea from China in the Sino-Japanese War.",
      "The Japanese used forced labor suppressed Korean culture",
      "The March 1st Movement in 1919 were protests against Japanese control. They were angry about the Korean Emperor mysteriously dying and blamed it on the Japanese. The Japanese killed thousands ands suppressed the movement. This movement showed the rise of nationalims in Korea.",
    ],
  },
  "South Korea": {
    Culture: ["Developed Kpop"],
    Economy: [
      "Became one of the Asian Tigers, following the Japanese economic model, with Hong Kong, Singapore, and Taiwan. They were able to reduce a lot of poverty in their country",
      "Allied with the US during the Cold War",
    ],
  },
  Morocco: {
    Culture: [
      "Muslim",
      "All the Muslim nations at the time believed their version of Islam was the best and most pure",
      'Ibn Battuta, from Morocco, traveled through the Muslim world in the early 14th century and wrote his book "A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Traveling"',
    ],
    Governance: [
      "Sent their army to take the gold fields in Songhai. Half of the army died while traveling over the desert, and they were vastly outnumbered. However, at the Battle of Tondibi in 1591, they won against the Songhai because they had guns.",
    ],
    Economy: [
      "Lost money after defeating the Portuguese in 1578",
      "After the Battle of Tondibi, they extracted a tribute of slaves and goods and were able to tax merchants in Western Sudan for centuries",
    ],
  },
  "Portuguese Territory": {
    Culture: ["Spread Catholicism through missionaries"],
    Governance: [
      "From 1450-1750, the Portuguese was a trading post empire, not a land-based one",
      "Their empire declined after 1750",
      "Brazil was their main colony",
    ],
    Economy: ["Traded spices, slaves, sugar, and silver"],
    Social: [
      "Slaves in some Portuguese territories could be freed through manumission, where the owner would go to court and free their slaves, but they would often pay to be able to do this.",
    ],
  },
  "British Territory": {
    Environment: [
      "Produced cotton (13 colonies), palm oil (Africa), sugar (Caribbean), gold and diamonds (South Africa), tea, rum, indigo, rubber, and opium (India)",
      "Led to mass deforestation, soil exhaustion from monocultures",
      "Major famines occured as farmers were forced to grow cash crops instead of subsistence farming",
    ],
    Governance: [
      "The 1663 Gloucester County Rebellion in Virginia was the first recorded slave revolt, although they never got a chance to revolt as a servant betrayed their plans",
      "Metacom's War (1675-1678) was the Natives' last effort to drive out the British",
      "1676 Bacon's Rebellion in Virginia. Freed indentured servants were angry about the lack of land available to them so they rebelled and burned Jamestown to the ground",
      "The Maroon Wars (1728-1740, 1795-1796) in Jamaica were fought by Maroons, communities of escaped slaves, who wanted independence from Britain. It was led by Queen Nanny. The maroons were allowed to form their own independent state in exchange for returning any new escaped slaves",
      "The Stono Rebellion (1789) in South Carolina was the largest slave uprising at the time, with about 100 slaves participating. About 30 died during the uprising, and about 30 escaped then died. After, laws were created banning slaves from reading, earning money, growing their own food, and assembling in groups to ensure that they would not have the means for another rebellion",
    ],
    Economy: [
      "Produce cash crops like cotton, sugar, tea, and indigo, and materials like diamonds (especially in South Africa) and tin",
      "The colonies' exports were used to fuel the industrial revolution",
    ],
    Social: [
      "Used chatttel slavery, especially in the Caribbean and in the South of the 13 colonies",
      "Slavery was abolished in British colonies in 1912",
      "Indentured servitude declined in British colonies in the 1700s but only stopped in 1916",
      "Contract laborers were used by the British. This recruited people, often Chinese or Indian, to work. They weren't considered property but they were still exploited and paid through subsistence wage. This system stopped in 1855.",
      "Some colonies were penal colonies, where they sent convicts from Britain and forced them to work for settlers or for the government. Convicts could earn freedom after a certain amount of years of work, but they often stayed in the colony. This practice stopped in 1850", // gov?
    ],
    Technology: [
      "Built railroads in colonies, saying it was benefiting the colonies, although it was really only benefiting Britain economically, as it made shipping materials more efficient and it allowed them to expand their colonial markets."
    ],
    "British Raj": [
      "British colony from 1858-1947",
      "In 1858, the British made their Indian soldiers, called sepoys, use animal fat to grease rifle cartridges, but this went against Hindu and Muslim beliefs so the sepoys refused to use them. The British imprisoned the sepoys, and then Indians began to rebel. The rebellions were quelled because there was a lack of Indian unity and naitonalism so they were easier to defeat",
      "The British officially took control of India after the Sepoy Rebellion in 1858, forming the British Raj and ending the rule of the British East India Company",
      "The British forced India to export raw cotton instead of finished textiles so they wouldn't compete with Britain",
      "Industrialized slowly, as the British didn't want to encourage Indian industrialization other than what would help them.",
      "Many artisans were pushed out of business by the cheap British textiles",
      "Many Indians left as indentured servants, often on 5-year contracts and were sent to other British colonies, like the Caribbean, South Africa, or East Africa, for labor",
      "India suffered from famines due to the forced cash crop monocultures",
      "Indian soldiers fought for Britain in both World Wars.",
      "Nationalist movements led by figures like Mohandas Gandhi used nonviolent resistance to demand independence, achieved in 1947 with the partition into India and Pakistan",
    ],
    Malaya: [
      "Grew rubber, coffee, and tea as cash crops, as well as opium",
      "Exported rubber, tea, and tin",
      "Controlled by the Japanese during World War 2",
      "They needed cheap labor, so they imported Indian workers through the Kangani system. In this system, workers could come and work together in kinship/family groups",
      "Workers from China also came as farmhands, gardeners, and domestic servants.",
      "Gained independence in 1957 and got renamed to Malaysia",
    ],
    "13 Colonies": [
      "Jamestown, the first successful colony was founded in 1607",
      "The South had good soil and climate for growing crops.",
      "The North had less fertile soil and a colder climate, so they didd more fishing and logging, and eventually became an industrial powerhouse.",
      "The South attracted people, especially young men, who wanted to become rich from growing cash crops (mainly tobacco, indigo, and cotton), and had fewer religiously-focused people. The farming focus led to plantation power structures and harsher treatment and attitude towards slaves",
      "The North attracted more religiously-focused people, especially Puritans.",
      "Indentured servants rebelled in Bacon's Rebellion in 1676. This led to the decline of indentured servitude and the shift to race-based slavery.",
      "Wanted independence from Britain because of Enlightenment ideas, like free market ideas as opposed to mercantilism. They were already for the most part politically independent, as they were geographically very far from Britain.",
      "After the Seven Years War, Britain was in a lot of debt so they tried to tax the colonies more, but the colonies didn't like that, leading to the American Revolution",
    ],
    "Cape Colony": [
      "Britain took Cape Colony during the Napoleonic Wars in 1803",
      "The Dutch briefly retook the colony from 1803-1806",
      "The British retook the colony in 1806",
      "The Xhosa Cattle Killing Movement (1856-1857) was an example of indigenous resistance to colonial power. A disease spread through the Xhosa cattle. A teenage girl named Nongqawuse prophesied that if the Xhosa killed their cattle and destroyed their crops, spirits would drive the British away and give the Xhosa new cattle and crops. This, however, led to a famine and 40,000 starved. Additionally, the British officials kept relief agencies away to weaken the Xhosa as a way to force them to assimilate with and work for the British.",
      "Diamonds were discovered in 1867", // env?
      "The British defeated the Zulus in the Anglo-Zulu War in the 1870s, giving South Africa more territory",
      "The Boer Wars (1880-1881 and 1899-1902) were between the British and the Afrikaners who were unhappy about British control. The wars were mostly over land and resources like gold mines. The Boers (Afrikaners) technicaly won the first war, but the British won the second one. The British placed the Boers in concentration camps during the second Boer War, which were segregated",
      "The Boer Wars led to the formation of the Union of South Africa. In South Africa, British and Boers would be able to share power while Black South Africans had very limited rights.",
      "The De Beers Mining Company was a trans-national company founded by Cecil Rhodes. It was based in Britain and extracted diamonds from Cape Colony. At one point, De Beers Mining company produced 90% of the world's diamonds",
      "Used slavery and coerced labor",
    ],
    Australia: [
      "Very harsh Outback to the West. Aboriginies were able to survive there, but expeditions to the interior often ended disastrously.",
      "Many explorers faced the dangerous threat of drop bears, which are carniverous koala-like killing machines that disable their targets by dropping on them from trees above.",
      "Aboriginal peoples violently removed from their land. Governors and military appointed by the British colonial office. Briefly transitioned to a junta due to the strong influence of the military",
      "Raised sheep, made a large wool industry.",
      "Many people, especially the Chinese, immigrated to Australia for during the Gold Rush",
      "Originally, Australia was a penal colony, where the settlers were British criminals sent to do labor in New South Wales (East Coast)",
      "Found copper in 1842 and gold in 1851",
      "Many immigrants came to Australia for the gold rush",
      "In 1861, the Victoria province passed the Chinese Immigration Act in 1855, limiting the number of Chinese who could immigrate. The Chinese got around this by landing in South Australia",
      "There was a lot of anti-Chinese violence in New South Wales, so New South Wales made the Chinese Immigration Regulation and Restriction Act in 1861, restricting the number of Chinese who could enter the colony. It was repealed in 1867.",
      "White women gained the right to vote in 1894",
      "In 1901, the six British colonies in Australia united under a single government",
      "In 1901, the Australian government made the White Australia Policy, limiting non-British immigration",
      "Aboriginal women got the right to vote in 1962"
    ],
    "New Zealand": [
      "Colonized by Britain in 1840",
      "The Treaty of Waitangi established New Zealand as a colony and gave the native Maori property rights, although they were largely ignored by British settlers",
      "The Maori Wars ended in 1846 with British victory",
      "During the 1850s, the British settlers wanted to buy Maori land, but the Mauri refused to sell until the government put pressure on them",
      "In 1861, the government sent troops to pressure the Maori to give up their property, leading to more fighting until 1872",
      "Raised sheep, made a large wool industry.",
      "Received immigrants from China and Italy",
      "During World War I and World War II, troops from Australia and New Zealand formed the ANZAC",
      "Gained independence in 1947",
    ],
    Canada: [
      "Had access to fur and beaver pelts",
      "Québec was very Catholic due to French influence",
      "The French were driven out of Canada and the rest of the US after the 7 Years War in 1763 and was transferred to the British",
      "Invaded unsuccessfully by the US during the War of 1812",
      "Received a lot of Irish immigrants",
      "Was one of the original members of NATO in 1949",
      "The North American Free Trade Agreement (NAFTA) encouraged the US and Canada to build factories in Mexico to produce tariff-free goods",
      "Quebecois felt more aligned with France than England. In the Quiet Revolution in the 1960s, a more liberal provincial government took over and expande the provicial government power, leading to the rise of Québec nationalism and demand for independence. In 1995, the Québecois tried to become independent again but failed",
    ],
    "Sierra Leone": [
      "Became a British colony for freed slaves. The British would stop slave ships and take the slaves to Sierra Leone where they would be freed.",
    ],
    "East Africa": [
      "The British began ruling Sudan with the Egyptians in 1873",
      "In 1881 Islamic cleric Muhammad Ahmad declared himself the Mahdi who would restore the glory of Islam. He wanted to resist British and Egyptian rule in Sudan and attacked Khartoum, the capital in 1882, and won against the British and Egyptians in 1885, but the movement died down after Ahmed's death that year. The Mahdists were finally defeated in 1898",
    ]
  },
  "French Territory": {
    Environment: [
      "Produced sugar, coffee, indigo, cotton, in the Caribbean, palm oil in West Africa, and rice, rubber, and opium in French Indochina",
    ],
    Culture: ["Spread Catholicism"],
    Governance: [
      "Mix of settler colonies and colonies only for resource extraction",
      "Had some penal colonies", // not sure if they
      "The Haitian Revolution gave Saint Domingue independence", // more details
      "The Algerian War (1954-1962) gave Algeria independence", // more details
      "The First Indochina War (1954) gave Vietnam independence",
    ],
    Economy: ["Produced sugar, coffee, beaver pelts"],
    Social: [
      "Used chattel slavery in sugar colonies",
      "Used indentured servants in Louisiana",
      "Relied on native alliances for fur trade so kept better relations with them",
    ],
    Technology: [
      "Built railroads in colonies, saying it was benefiting the colonies, although it was really only benefiting France economically, as it made shipping materials more efficient and it allowed them to expand their colonial markets."
    ],
    "French Indochina": [
      "Composed of modern-day Cambodia, Laos, and Vietnam",
      "Spread Catholicism",
      "Grew rubber as a cash crop",
      "After WW2, French IndoChina sought independence",
    ],
    Quebec: [
      "Claimed by Jacques Cartier in 1535",
      "Colony expanded by Samuel de Champlain in 1609-1616",
      "Engaged in fur trade",
      "Facilitated the spread of Catholicism",
      "The French were driven out of Canada and the rest of the US after the 7 Years War in 1763 and was transferred to the British",
    ],
    "West Africa": [
      "In 1868, Samory Touré made a new kingdom in Guinea. He didn't want the French to take over in West Africa, so in 1883 he fought the French. The French won and took over but still gave Samory protection. He fought the French again in 1891 and was defeated. He fled and tried to reestablish his kingdom in the Ivory Coast but the French captured and exiled him in 1898",
      "From 1915-1916, villages in French West Africa united to drive out the French, but they were defeated",
      "In 1917, railroad workers organized a strike",
      "In 1946 there was a labor strike",
      "Exported ivory, palm oil, palm nuts, and peanuts"
    ],
  },
  "Dutch Territory": {
    Environment: [
      "Produced tea, rubber, and sugar as cash crops",
      "Because of the emphasis of cash crops, rice cultivation was limited, which was hard for farmers who needed rice",
    ],
    Governance: [
      "Started as a trading-post empire",
      "In the Indian Ocean, they violently suppressed local rulers to gain power",
    ],
    Economy: [
      "The Dutch East India Company (VOC) was founded in 1602. It was a joint-stock company, promoting economic risks because of limited liability. This allowed the Dutch Empire to expand in the Indian Ocean and gain a monopoly over spice trade in the 1600s",
      "Produced rubber and tin as well as cash crops",
      "The Dutch East India Company was declared bankrupt and dissolved in 1799,",
      "Chinese laborers were imported to the Dutch East Indies",
      "The culture system was a form of coerced labor, where people had to set aside 1/5 of their land to grow cash crops as a tax. If they couldn't pay for any reason, their land was taken or they were taken as corvée laborers and were forced to do unpaid work as taxation.",
    ],
    Social: ["Had slavery on plantations"],
      "Cape Colony": [
      "Established by the Dutch East India Company (VOC) in 1652",
    ],
    Technology: [
      "Built railroads in colonies, saying it was benefiting the colonies, although it was really only benefiting the Dutch economically, as it made shipping materials more efficient and it allowed them to expand their colonial markets."

    ]
  },
  "Spain 1750-Present": {
    Governance: [
      "Many of their colonies in Latin America gained independence in the early 1800s",
      "Fought the Spanish-American War (1898-1899), and lost. They had to give Cuba and the Philippines to America. This marked the end of Spain as a global empire",
      "In 1936, the Popular Front (who were liberal) was elected to lead the government. The conservatives and Nationalists (led by Francisco Franco) were against this, leading to the Spanish Civil War (1936-1939). The Nationalists were supported by Hitler, Mussolini, and Porgual, while the Republicans/Loyalists (who supported the Popular Front) had support from the Soviet Union, Britain, France, and the US. The foreign involvement led to a lot more violence than would have otherwise been used. The Nationalists won, leading to Francisco Franco's dictatorship from 1939-1975",
      "Francisco Franco was very anti-communist, and imprisoned or executed his political opposition and dissenters",
      "After Francisco Franco's dictatorship, Spain transitioned to democracy",
      "The Basque Homeland and Freedom (ETA) terrorist group wanted independence for the Basque region. They killed Francisco Franco's successor, but in 2011 promised to stop the violence."
    ],
    Social: ["Encomienda died out, replaced with the hacienda system"],
  },
  "Portugal 1750-Present": {
    Governance: [
      "Invaded by Napoleon in the 1807, causing the monarchy to flee to Brazil until he was defeated",
      "Brazil gained independence in 1822",
    ],
    Economy: [
      "Portugal fostered the Trans-Atlantic Slave trade until the 1800s",
      "After they lost Brazil, Portugal's economy shifted to growing cash crops in African colonies",
    ],
    Social: [
      "Slavery was very prevalent, especially in Brazil",
      "Slavery was abolished in 1869",
    ],
  },
  Paraguay: {
    Governance: [
      "Had been part of the Viceroyalty of the Río de la Plata with Argentina, Uruguay, and Bolivia",
      "Gained independence in 1811",
      "In the 1860s, Paraguay established protective tariffs to aim for economic self-sufficiency, which angered Brazil, Argentina, and Uruguay. This escalated to the Paraguayan War, or the War of the Triple Alliance (1864-1870). Paraguay lost the war, losing a lot of its territory and population.",
    ],
    Economy: ["Economy based on agriculture and cattle"],
  },
  "Asante Kingdom": {
    Culture: [
      "The Golden Stool was sacred to them, as it symbolized national unity and the Asante spirit",
    ],
    Governance: [
      "The Asante kingdom emerge in the late 1600s",
      "After Britain abolished slave trade, they became interested in taking control of the Asante kingdom as a colony",
      "The British tried 4 times to conquer the kingdom but they were repelled. One of their tactics to try to take power was to try and get access to the Golden Stool",
      "In 1900, the British tried for the fifth time to conquer the Asante kingdom. The queen Yaa Asantewaa fought them and tried to prevent them from getting the Golden Stool, but the British defeated her and she was exiled.",
    ],
    Economy: ["Engaged in slave trade with Britain", "Produced gold"],
  },
  Liberia: {
    Governance: [
      "Founded in 1822 by the US as a way to relocate African Americans and freed slaves to Africa",
      "It wasn't technically a colony but it was under US influence",
      "Declared independence in 1847, but it ws still very dependent on the US",
    ],
    Economy: ["Produced rubber"],
  },
  Bolivia: {
    Governance: [
      "Was part of the Viceroyalty of Peru, then the Viceroyalto of Río de la Plata until they declared independence in 1825",
      "Faced a lot of political instability",
      "Owned part of the Atacama dessert until the 1879 War of the Pacific where Chile, indirectly backed by Britain, took Bolivia's Atacama desert territory",
    ],
    Economy: [
      "Produced tin and silver",
      "Wanted land reform in the 1900s", // gov? soc?
    ],
  },
  Greece: {
    Governance: [
      "The Enlightenment led to Greek nationalism when they were a part of the Ottoman Empire",
      "Achieved independence from the Ottoman Empire in 1827 withthe support of the British, French, and Russians",
      "Fought with the Allies in World War I",
      "Some Communist groups almost took control of the government, leading to the US issuing the Truman Doctrine in 1947 to limit the spread of communism in Greece and Turkey",
    ],
  },
  "Sokoto Caliohate": {
    Culture: ["Muslim"],
    Governance: [
      "Founded by Usman dan Fodio, in 1804 to purify Islam",
      "The British took over in 1903",
    ],
    Economy: [
      "Engaged in slave trade, which suffered as Britain would stop slave ships and take the slaves to be freed in Sierra Leone",
    ],
  },
  "German Territory": {
    Environment: ["Grew cocoa, cotton, coffee, rubber"],
    Governance: [
      "Used military to police and suppress resistance",
      "Germany lost all its colonies after the World War I and the Treaty of Paris",
    ],
    Economy: ["Used forced labor and exploitation"],
  },
  Armenia: {
    Governance: [
      "In the Ottoman Empire, Sultan Abdulhamid stopped the Tanzimat Reforms in 1876. Additionally, a group called the Young Turks wanted to make the entire Ottoman Empire Muslim. This angered Armenians, who were Christian",
      "This led to the Armenian Genocide (1894-1896). The Ottoman government claimed that the Armenians were supporting the Russian army (the Ottomans' enemy). They systematically deported, massacred, and starved the Armenians, leading to about 600,000 to 1.5 million deaths. Hitler eventually modeled the Holocaust after the Armenian Genocide",
    ],
  },
  "Italian Territory": {
    Governance: [
      "Tried to conquer Ethiopia/Abyssinia, but failed for the most part, only occupying it briefly in 1935-1936",
    ],
    Economy: [
      "Valued for agriculture and ports",
      "Forced labor was common especially in Somalia and Libya",
    ],
  },
  Serbia: {
    Culture: ["Eastern Orthodox"],
    Governance: [
      "Gained independence from the Ottoman Empire in 1878",
      "Serbian nationalists wanted to unite South Slavic people, many of whom were controlled by Austria-Hungary",
      "In 1914, Gavrilo Princip, a member of a Serbian nationalist group called the Black Hand, assassinated the Austro-Hungarian Archduke Franz Ferdinand in protest of Austria-Hungary's control over Bosnia-Herzegovina",
      "In response to the assassination, the Austro-Hungarian government ordered the Serbian government to end the anti-Austrian anger but Serbia refused, leading to Austria-Hungary declaring war and starting World War I",
      "Fought with the Allies during World War I",
      "In 1992, after Yugoslavia had been broken up, Serbian nationalists wanted to create a homogeneous area and killed 300,000 Bosniak (Muslim) citizens",
    ],
    Social: ["Women were allowed to join the army"],
  },
  Romania: {
    Governance: [
      "Gained independence from the Ottoman Empire in 1878",
      "In World War I, Romania sided with the Allies",
      "In the period before World War II, Romania began to copy the Nazi's persecution of minorities",
      "In World War II, Romania initially sided with the Axis Powers before switching to the Allies in 1944",
      "Became part of the Eastern Bloc after World War II",
      "One of the members of the Warsaw Pact, created in 1955 as a response to the creation of NATO",
      "Non-communist parties were outlawed",
      "Didn't have free elections until 1989",
    ],
    Economy: [
      "Made 5 year plans influenced by the USSR",
      "Could only trade with the USSR",
    ],
    Social: ["Women were allowed to join the army"],
  },
  China: {
    Environment: [
      "The 1958 harvest was really good, but it couldn't all be harvested since there were too few people left in agriculture.",
      "The following years had bad harvests due to drought and insects (the government had thought that sparrows were eating too many crops so ordered sparrows killed, but then the insects became a big problem)",
    ],
    Culture: [
      "Has its own censored social media, like Weibo, while banning Western social media like Twitter and Facebook",
      "Falun Gong, a New Age religion based on Buddhist and Daoist traditions, gained popularity in the 1990s but began to be restricted in 1999",
    ],
    Governance: [
      "The Qing Dynasty ended in 1911 when the emperor stepped down, afraid of a rebellion",
      "The Republic of China was established, led by Dr. Sun Yat-sen representing the Chinese Nationalist Party. Everybody loved him and he had very liberal ideas (suffrage, division of powers, etc.). He never ruled all of China because the military was so weak, and he gave up ruling after 2 months.",
      "Fought with the Allies during World War I",
      "The May Fourth Movement in 1919 was sparked by anger over land in Northeast China being given to Japan in the Treaty of Paris. The Chinese held anti-Japanese demonstrations and began to reject Western ideas in exchange for communism",
      "The Chinese Communist Party was founded in 1921 and was led by Mao Zedong",
      "After Sun Yat-sen's death, the Chinese Nationalist Party (also called Kuomintang) was led by Chiang Kai-sheck, who was conservative and anti-communist",
      "The Chinese Communist Party and Chinese Nationalist Party were fighting for power but temporarily allied to fight against Japan in World War II (starting in 1937 for them). After the war, they resumed fighting for control",
      "Was part of the 5 permanent members of the Security Council in the UN",
      "The Communists defeated the Nationalists in 1949, driving Chiang Kai-shek to Taiwan. They essentially established a one-party system, where other parties had no chance of winning",
      "Fought with North Korea against South Korea and the UN because they were afraid the UN would try to invade China, turning the tide of the war",
      "Started fighting with the USSR over the border in 1961",
      "Supported the Bankongo tribe in the Angolan Civil War",
      "After the failure of the Great Leap Forward, Mao Zedong was iced out politically",
      'Mao Zedong regained power in 1967 and started the Cultural Revolution to reestablish support for communism and silence its critics. Red Guards sent people, especially intellectuals, government officials, and teachers, who were "not revolutionary enough" were sent to reeducation camps where they had to do physical labor. This turned people against each other as they turned each other in.',
      "Supported the Viet Minh during the First Indochina war",
      "Deng Xiaoping took power in 1981. He made economic reforms promoting economic growth instead of economic equality",
      "The CCP gives itself all the power, censoring news and education, ensuring a one-party system, controlling all industries, and restricting all non-state organizations like NGOs",
      "In 1989, people began protesting because they wanted more political freedom and freedom of speech. There were sit-ins and hunger strikes in over 400 cities. On June 4, 1989 there was a big protest in Tiananmen Square, Beijing. The government sent troops and tanks to subdue them. It's estimated that a few thousand civilians were killed, but the government hid the severity of the event from its people and the world. The government didn't allow the families of those who died to mourn and imprisoned people who commemorated the event.",
    ],
    Economy: [
      "The Chinese Communist Party nationalized industries, created 5 year plans, and took control of all industries",
      "During the Great Leap Forward (1958-1962), the communists collectivized farming in an attempt to make agriculture more efficient and moved urban workers to focus on industrialization. Farmers were also encouraged to make iron in their backyards.",
      "Communes often exaggerated how much they had harvested to the government in order to get more benefits, but this led to the government taking too much food from the communes to urban centers, leading to food shortages.",
      "Despite food shortages, China still exported grain to show to the rest of the world how effective communism was, leading to mass famine that led to 20 million deaths",
      "Eventually transitioned to a free market under Deng Xiaoping",
      "Some of Deng Xiaoping's economic reforms included replacing communes with peasant-leased plots, encouraging foreign companies to have factories in certain areas, reopening the Shanghai stock market, and allowing some private ownership of business",
    ],
    Social: [
      "Footbinding was finally banned under the Chinese Communist Party",
      "Discriminated against the Uighur ethnic minority",
    ],
    Uncategorized: [
      "The Chinese Communist Party censored news and eduation limiting freedom of speech and thought",
    ],
  },
  Bulgaria: {
    Governance: [
      "Fought with the Central Powers during World War I",
      "In the period before World War II, Bulgaria began to copy the Nazi's persecution of minorities",
      "Was controlled by the USSR as a satellite country",
      "Non-communist parties were outlawed",
      "One of the members of the Warsaw Pact, created in 1955 as a response to the creation of NATO",
    ],
    Economy: [
      "Made 5 year plans influenced by the USSR",
      "Could only trade with the USSR",
    ],
    Social: ["Allowed women to join the army"],
  },
  "France 1920-Present": {
    Governance: [
      "Represented by Georges Clemenceau at the Paris Peace Conference. He wanted to severely punish Germany because France wanted protection from Germany",
      "Took a lot of Middle Eastern countries as mandates after World War I",
      "Invaded by Germany in 1940. Northeast France was occupied while the South became the Vichy regime and collaborated with the Nazis",
      "Peace and democracy was restored after the war",
      "Supported the Republicans/Loyalists/Popular Front during the Spanish Civil War",
      "Was one of the 5 permanent members of the UN security council",
      "Was one of the founding members of NATO (North Atlantic Treaty Organization) in 1949",
      "Part of the Southeast Asia Treaty Organization (SEATO) in 1955 to stop the spread of communism in Southeast Asia",
      "Withdrew from Vietnam in 1954 after the First Indochina War",
      "Withdrew from Algeria in 1962 after the Algerian War for Independence. Some French, like the French Communist Party, supported independence, while others didn't.",
      "Occupied area around the Suez Canal",
      "Modernized in the 1960s",
      "Negotiated the independence of its West African colonies",
      "There were student protests in 1968, and the police responded with violence, resulting in worker strikes",
    ],
    Economy: [
      "Had a hard time paying back debts to the US after World War I because Germany was having a hard time paying back its debts to France",
    ],
    Social: [
      "Anti-immigrant sentiment after pro-French Algerians immigrated to France and caused housing and employment problems",
    ],
  },
  "Belgian Territory": {
    Governance: [
      "Belgium gained control of Rwanda and Burundi, which had been German colonies, as League of Nation mandates",
      "Rwanda and Burundi gained independence in 1962",
    ],
    Economy: ["Produced rubber, copper"],
    Social: [
      "In Rwanda, Belgium favored the Tutsis over the Hutus, reinforcing ethnic divisions that would eventually lead to the Rwandan Genocide",
    ],
    "Belgian Congo": [
      "King Leopold II (r. 1865-1909) conquered the Congo Basin and owned it personally, meaning he kept all the profit",
      "The Berlin Conference allowed King Leopold to keep the Congo for himself during the Scramble for Africa",
      "Leopold hired mercenary companies to produce rubber using any means, leading to slavery and extremely bad conditions (burn villages, kill families for not meeting quotas). 7-10 million people were killed or starved because of this exploitation.",
      "In 1905 the Human Rights Commission recognized the human rights violations and transfered the Congo from Leopold to the Belgian government in 1908.",
      "Under the Belgian government, there was still a lot of exploitation and coerced labor. They also continued to give King Leopold some of the profits.", // not sure of theme,
      "When the trans-national company Unilever was accused of using slavery in British Nigeria to harvest cocoa and palm oil, they moved to extract those resources from the Congo where slavery and exploitation were more accepted",
    ],
  },
  Manchuria: {
    Governance: [
      "The USSR and Japan were fighting for control of the area in the 1800s as the Qing Dynasty weakened",
      "Japan won the Russo-Japanese War (1904-1905), giving it control of southern Manchuria",
      "When the Qing Dynasty fell in 1911, Manchuria was ruled semi-independently until Japan assassinated the ruling warlord in 1928",
      "As an excuse to invade Manchuria, Japan blew up its own railroads and blamed it on the Chinese in 1931",
      "The Japanese established the puppet state Manchukuo that they controlled. Manchukuo became a base for industrialisation and military expansion in Asia",
      "The USSR invaded in 1945 at the end of World War II and drove the Japanese out, giving control back to the Chinese Communists.",
    ],
    Economy: ["Used forced labor for resource extraction"],
  },
  "Germany 1920-1945": {
    Governance: [
      "After World War I, the rule of the kaiser was replaced by the Weimar Republic. The Weimar Republic was very unpopular because people saw it as weak, since they had to pay so much money and had no army. This discontent led to the desire for the decisive action that right-wing parties promised",
      "The Nazis were elected in 1932, with Hitler as chancellor of the government. He outlawed other political parties to protect his rule, and promoted ultranationalism andd scientific racism.",
      "Hitler wanted to conquer the continent, so in 1935 he created an air force, which was against the Treaty of Versailles but the other countries ignored",
      "Invaded Rhineland, the buffer zone between Germany and France in 1936",
      "Allied with Italy in the Rome-Berlin Axis in 1936",
      "Allied with Japan against communism in the Anti-Comitern Pact in 1936",
      "Threatened the Austrian chancellor into giving the Austrian Nazis more power, then used that to occupy Austria in 1938",
      "Demanded control of the German-speaking part of Czechoslovakia, which Britain, France, and Italy agreed to because they thought it would pacify Hitler, but then in 1939 he took control of all of Czechoslovakia",
      "He wanted the Polish port Danzig, but Britain said no. In 1939, Germany invaded Poland and started World War II",
      "In 1939, Hitler offered Stalin control of eastern Poland and the Baltic if he didn't interfere with Germany's invasion of Poland in the German-Soviet Non-Agression Pact",
      "Used blitzkrieg (lightning war) tactics, where planes would bomb first, then they would send tanks in, then the infantry, which was very effective",
      "Sent Jews to concentration camps and death camps like Auschwitz, Treblinka, and Dachau",
    ],
    Economy: [
      "Germany was in a lot of debt due to World War I, so they had to print more money in order to pay the debts, leading to massive inflation",
      "Germany was hit really hard by the Depression in the 1930s",
      "Used forced labor instead of trying to mobilize citizens during WWII, which led to low productivity",
    ],
    Social: [
      "The Nazis persecuted minorities (including Slavs, communists, gypsies, gay people, and Jews). Jewish were especially discriminated against because Hitler blamed them for the country's problems. In 1935 he made the Nuremberg Laws restricted Jews from marrying non-Jews, being citizens, and to living in ghettos. In 1938, a Jewish teen was accused of killing a German diplomat, leading to anti-Jewish riots known as Kristallnacht. They killed 90 Jews, destroyed most synagogues and many Jewish shops, and arrested 30,000 Jews",
    ],
  },
  USSR: {
    Governance: [
      "The Bolsheviks, led by Vladimir Lenin, led the Russian Civil War (1917-1921) and established a communist government.",
      "Surrendered to the Germans in 1918",
      "There was a power struggle after Lenin's death in 1924",
      "Joseph Stalin took control of the Communist Party's central organization (Politburo) in the 1920s, coming to full power in 1929. He was a dictator for 30 years, having political opponents executed or sent to gulags (labor camps) and controling the press. He emphasized the need to industrialize to catch up with other countries",
      "Ukraine tried to protest the collectivization of farms by hiding or destroying crops, but then Stalin took away food in Ukraine, leading to famine. 5-10 million people starved.",
      "The Germans invaded the Soviet Union in 1941, and were initially very successful until the Siege of Leningrad",
      "In the Battle of Stalingrad in 1942, the Soviets stopped the German Sixth Army. Over a million Soviets died, but this battle was the turning point where they began driving the Nazis back",
      "20 million Soviets died in World War II",
      "Was one of the 5 permanent members of the UN Security Council",
      "They had the satellite countries in Eastern Europe between Russia and Central Europe because they were afraid of Central European countries trying to invade",
      "Used propaganda during the Cold War",
      "Tried to make Eastern European governments like the Soviet's. Bulgaria, East Germany, Hungary, Poland, and Romania had to make 5 Year Plans, outlaw non-communist parties, and only trade with the Soviets",
      "Supported communist revolutions in Germany, Bavaria, Hungary, Italy, and Bulgaria", // check
      "Made the Warsaw Pact as a response to Nato in 1955",
      "Mutually Assured Destruction (MAD) was the idea that the Soviets and the US both had intercontinental ballistic missiles and could both destroy each other, meaning that if either side started a war they would both be destroyed, so they never engaged in war with each other, only through proxy wars",
      "Supported Egypt in the Suez Crisis in 1956",
      "Supported the North Koreans in the Korean War",
      "Supported the Viet Minh in the Vietnam War",
      "Supported Fidel Castro in the Cuban Missile Crisis in 1962",
      "Supported the Mbundu tribe in the Angolan Civil War (1975-2002)",
      "Supported the Sandinistas in the Contra war (1981-1988)",
      "Nikita Krushchev was the leader after Stalin",
      "The USSR and the US had a fairly diplomatic relationship during the last decades of the Cold War, after the Cuban Missile Crisis. This period was known as détente. In 1972, President Nixon even visited the Soviet Union to sign the Strategic Arms Limitation Treaty freezing the number of intercontinental ballistic missiles. The US also began to sell grain to the USSR when they had a shortage due to a drought. The period of détente ended in 1979 when President Carter stopped selling grain.",
      "Tensions rose again in the 1980s",
      "Supported the Afghan communist governemnt in the Soviet-Afghan War. They invaded Afghanistan in 1979 to support the government, but they were unable to conquer the guerilla groups. Gorbachev withdrew from the war slowly from 1985-1989 (the civil war continued though) since it was bad for the government and economy",
      "Mikhail Gorbachev came to power in 1985. He was more progressive. His Perestroika policies restructured the economy for some free enterprise and small-scale capitalism, while his Glasnost policies allowed more freedom of speech and of the press. He stopped economic support for the satellite countries and pulled out of Afghanistan, showing how he was willing to stop fighting for other communist countries.",
      "There was political downfall after all the democratic movements",
      "Protests forced the government to make concessions",
      "Leaders who disliked Gorbachev put him under arrest and sent in the military to suppress the protests, but the protestors convinced the military to join them",
      "The Soviet Union fell in 1991",
    ],
    Economy: [
      "Private trade was abolished and the government took ownership of factories",
      "Refused to pay pre-revolution debts",
      "Industrial and agricultural production decreased during the civil war",
      "In 1921, Lenin tried to pull back from communist policies to fix the economy through the New Economic Plan, where there was limited private trade (farmers could sell products on a small scale), there were some economic liberties but still very strict political control. This lasted until his death in 1924.",
      "Stalin stopped the New Economic Policies and instituted 5 Year Plans in 1928 which had quotas to hit in order to industrialize. It prioritized heavy industry and had few consumer goods. It also collectivized farms (having farmers all work in collectives/kolkhoz on farms together instead of privately) to make agriculture more efficient. This made farmers mad and they tried to protest",
      "Made the COMECON (Council for Mutual Economic Assistance) in response to the US's Marshall Plan, where they offered money to Eastern Europe for modernization. It wasn't as effective as the Marshall Plan, however.",
      "The economy suffered because there wasn't much foreign trade during the Cold War",
    ],
    Social: [
      "Said that the US was descriminating against the poor, people of color, and women",
    ],
    Technology: [
      "Developed the hydrogen bomb, which was more powerful than the atomic bomb, in 1955",
      "During the space race, the Soviets put the first artificial satellite, Sputnik, in orbit around the Earth",
    ],
  },
  Turkey: {
    Governance: [
      "Preceded by the Ottoman Empire. When it fell after World War I, Turkey among other countries replaced it",
      "When the Ottoman Empire fell, it ws technically ruled by the Ottoman Empire who was really a British puppet",
      "The Turkish National Movement, led by Mufasta Kemal or Atatürk, defeated the British in the Turkish War of Independence (1921)",
      "The Republic of Turkey was established in 1923",
      "Atatürk ruled as a dictator until his death in 1938",
      "Atatürk secularized the state, established public education and women's suffrage, and abolishedd polygyny",
      "The USSR wanted to have military bases in Turkey to control Dardanelles, leading to the US's Truman Doctrine supporting containment in Turkey and Greece",
      "Part of the Central Treaty Organization (CENTO) to stop communism in the Middle East",
    ],
  },
  Poland: {
    Governance: [
      "Invaded by the Nazis in 1939 during World War II",
      "Lost a lot of their population during World War II",
      "After World War II, the USSR got some of Poland and it became a satellite country",
      "Outlawed non-communist parties",
      "One of the original members of the Warsaw Pact, the USSR's response to NATO, in 1955",
      "In 1956, workers wanted better living conditions and an end to Soviet control, but Wladyslaw Gomulka, who was loyal to the Soviets, came to power and stopped that movement",
      "Protests in Poland in 1968 against religious issues",
    ],
    Economy: [
      "Had to make 5 Year Plans influenced by the USSR",
      "Farms were collectivized",
      "Could only trade with the USSR",
    ],
  },
  Vietnam: {
    Culture: ["Theravada Buddhism", "Neo-Confucianism"],
    Governance: [
      "Controlled by the French as part of Indochina starting in 1885 after the Sino-French War (1883-1885)",
      "Emperor Hàm Nghi tried to resist french colonialism but was exiled to Algeria in 1888, but resistance continued",
      "Invaded by the Japanese during World War II, forcing the French out. They exploited the Vietnamese and led to famines",
      "Declared independence from the French and Japanese in 1945",
      "The independence movement was led by Ho Chi Minh, who was educated in France and Moscow. He was extremely nationalist and saw communism as a vehicle for natinoalism",
      "He led the Viet Minh against the Japanese in the August Revolution in 1945 and successfully drove them out. He then declared Vietnam as an independent nation, which the French didn't agree with",
      "The Vietnamese fought for independence from the French in the First Indochina War (1946-1954). The US initially supported Vietnam right after World War II but quickly switched to support France during the 1950s. The Vietnamese won the Battle of Dien Bien Phu in 1956, ending the war and gaining independence",
      "The country was split after indpendence, with the North led by Communist Ho Chi Minh, and the South led by noncommunist Ngo Dinh Diem",
      "Ngo Dinh Diem was unpopular and corrupt but supported by the US since he was anti-communist until a coup in 1963",
      "Some Southern Vietnamese supported the North by joining the Viet Cong",
      "President Johnson sent troups to support South Vietnam in 1964 because they were afraid that if Vietnam turned completely communist, that would trigger the spread of communism in Southeast Asia. By 1967, 365,000 Americans were fighting in Vietnam",
      "The Tet Offensive in 1968 shook American morale. The Viet Cong attacked the Americans on Tet (Lunar New Year) and won. They wanted to end the war that year because Ho Chi Minh was sick so they became more aggressive",
      "Ho Chi Minh died in 1969",
      "The US began pulling out of the war in 1971. By 1973, all their troops were withdrawn",
      "The US signed the Paris Peace Accords agreeing to withdraw from Vietnam as long as the North didn't attack the South",
      "1-2 million deaths from the Vietnam War",
      "In 1975, the North claimed that the South had attacked them and launched the Ho Chi Minh Campaign, conquering South Vietnam and uniting the North and South",
      "After fighting Cambodia in 1977 due to border skirmishes, the Vietnamese fully invaded in 1979, overthrowing the Khmer Rouge and establishing a pro-Vietnamese government. The Vietnamese remained until 1989, when it withdrew due to international pressures",
    ],
    Economy: [
      "Produced rubber",
      "Had low labor costs so attracted manufacturing",
      "The communist government redistributed land, sometimes violently",
      "Vietnam made market-based reforms, which helped them have better relations with America"
    ],
  },
  Iran: {
    Governance: [
      "Hosted the Tehran Conference between the Big Three (USSR, US, Britain) in 1943",
      "Part of the Central Treaty Organization (CENTO) to stop the spread ofcommunism in the Middle East",
      "Wanted land reform", // econ? soc?
      "Britain and the USSR were fighting for control of Iran. Both invaded during the early WWII to prevent them from supporting the Nazis. They forced the leader to give power to his son, Muhammad Reza Pahlavi",
      "Iranian nationalists disliked the puppet and forced him to leave the country in 1951. They elected Mohammad Mosaddegh to replace him",
      "In 1953, The US and Britain overthrew Mosaddegh and reinstated Muhammad Reza Pahlavi, but Mosaddegh returned to power a few days later through a military coup",
      "In the White Revolution (1963-1979, called white because it was bloodless), Iranians pushed for more progressive policies like women's suffrage, social welfare, literacy programs, and land reform. This was opposed by religious conservatives, landowners (who lost land from the land reforms), and peasants who didn't receive land from the land reforms",
      "In the Iranian Revolution in 1979, the shah was replaced by a new theocracy",
    ],
  },
  Pakistan: {
    Culture: ["Muslim"],
    Governance: [
      "Created in 1947 as India was being given independence. The leaders of the Muslim League, like Muhammad Ali Jinnah, wanted to ensure that the Muslim minority wouldn't be persecuted by the Hindu state so proposed the Two-State Solution, where areas that were majority Muslim would become a separate country",
      "At first, Pakistan including both modern Pakistan and Bangladesh",
      "1 million Hindus and Muslims (at least a million) died as they moved to live in the country that matched their religion",
      "Established their government with a mix of elected leaders and authoritarian military leaders", // check
      "Part of the Southeast Asia Treaty Organization (SEATO) in 1954 to stop the spread of Communism in Southeast Asia",
      "Part of the Central Treaty Organization (CENTO) to stop the spread of communism in the Middle East",
      "Benazir Bhutto was the first female prime minister in Pakistan in 1988. She tried to improve the economy but failed. She was assassinated in 2007",
      "Conflict with India and China over control Kashmir. The majority of the population is Muslim but they have a Hindu leader. About 45% was controlled by India, 35% by Pakistan, and 20% by China",
    ],
    Social: [
      "Women kind of have voting rights but are unable to exercise them",
      "Outlawed discrimination against untouchables in the caste system in 1953, but it still happened",
    ],
  },
  Guatemala: {
    Governance: [
      "Jacobo Arbenz was elected as president in 1951. He started land reforms, taking land from the American United Fruit Company, which made Americans unhappy",
      "The Americans overthrew Arbenz in 1954 and established a puppet government under Armas",
    ],
  },
  "Palestine/Israel": {
    Culture: ["Jewish and Muslim"],
    Governance: [
      "Palestine became a British mandate after World War I",
      "In the 1917 Balfour Delcaration, Britain promised to make Palestine a home for Jews to gain support for World War I",
      "The Arabs who had already been living there were unhappy about the loss of land and way of life. Violence emerged between the Arabs and settler Jews, so Britain cut off Jewish immigration in 1939 (same year as the start of the Holocaust)",
      "The Holocaust started sympathy for Jewish",
      "In 1948, the UN divided Palestine into Jewish and Arab sections. The Jewish section became Israel. The Arabs made up 60% of the population but only got 40% of the land",
      "In 1948 Syria, Jordan, Lebanon, and Iraq invaded Israel. Israel won, which led to an armed truce. Palestinians fled to refugee camps.",
      "In 1956, Israel invaded the Sinai Peninsula, which belonged to Egypt. They were supported by the French and British as they wanted control of the Suez Canal. Israel was forced to withdraw as the US and USSR supported Egypt.",
      "In 1967, Egypt was planning to attack Israel, so Israel launched a preemptive attack. They won the Six Day War and got the Gaza strip from Egypt, the West bank, East Jerusalem from Jordan, and Golan Heights from Syria",
      "In 1973, Egypt and Syria coordinated an attack during Yom Kippur. Israel was defeated and lost some territory",
      "There was more violence in 2000",
      "The Camp David Accords were a peace agreement between Israeli prime minister Menachem Begin and Egyptian president Anwar Sadat. Other Arab states rejected this peace treaty",
    ],
  },
  Czechoslovakia: {
    Governance: [
      "Controlled by the Nazis during World War II starting in 1939",
      "One of the members of the Warsaw Pact, the USSR's response to NATO, in 1955",
      "In 1968, there was a big protest called Prague Spring. Alexander Dubcek increased freedom of speech and press, allowed more travel, and made politics more democratic. They were then attacked by the Warsaw Pact nations, who used the Brezhnev Doctrine (Soviets would intervene if socialist countries were threatened by a member) as an excuse for invading",
    ],
  },
  India: {
    Culture: ["Hindu, with a Muslim and Sikh minorty"],
    Governance: [
      "Many Indians were conscripted to fight in World War I. Leaders like Gandhi promoted this, as they thought it would gain India more autonomy.",
      "The Indian National Congress was formed in 1885 and fought for independence. It was majority elite Hindu and only a few Muslims",
      "The Muslim League was founded to represent Muslims and make sure that their voices were not drowned out by the Hindu majority",
      "Muhammad Ali Jinnah, a Muslim in the Indian National Congress and leader of the Muslim League, proposed the Two-State Solution to ensure that the Muslim minority wouldn't be drowned out by the Hindu majority by created a separate state for them. Ghandi and Jawaharlal Nehru were unsure of this solution but it ended up being used",
      "Indian nationalists peacefully protested the arrest of freedom fighters during a Sikh festival, and the British responded by killing 379 and wounding over 1000. This radicalized many Indians and gained new supporters for the independence movement",
      "Mohandas Gandhi (given the name Mahatma Gandhi) was one of the leaders of the independence movement. He started by fighting for rights in South Africa, then shifted his efforts to India. He promoted nonviolent civil disobedience and boycotts as a means of achieving independence. In 1930, he led the Salt March protesting the British salt monopoly. He led thousands to the Indian Ocean where they got their own salt",
      "2.5 million Indians fought for the British in World War II",
      "The desire for independence intensified after World War II",
      "In 1946, the Royal Indian Navy revolted, showing the British that they could no longer control India",
      "Given independence and partitioned in 1947. India established a democratic government",
      "1 million Hindus and Muslims (at least a million) died as they moved to live in the country that matched their religion",
      "Jawaharlal Nehru helped lead the Non-Aligned Movement that started in 1961 during the Cold War",
      "In 1966, Indira Gandhi (Jawaharlal Nehru's daughter, not related to Gandhi!) became the first female prime minister of India. She fought inflation through a 20-point economic plan. She supported the separation of Bangladesh from Pakistan. She was very unpopular though, as after being accused of election fraud in 1975 she declared a state of emergency and limited civil liberties. She was assassinated in 1984",
      "Conflict with Pakistan and China over control Kashmir. The majority of the population is Muslim but they have a Hindu leader. About 45% was controlled by India, 35% by Pakistan, and 20% by China",
    ],
    Economy: [
      "The new government made land reforms and tried to promote cooperative farming but weren't super successful",
      "Indira Gandhi pushed for socialist reform and nationalized banks.",
      "Mahindra & Mahindra was a multinational company based in India",
    ],
    Social: [
      "Outlawed discrimination against untouchables in the caste system in 1949, but it still happened",
      "The caste reservation system reserved a certain percentage of government and public sector jobs for lower casts",
    ],
    Uncategorized: [
      "The highest rate of agricultural growth was under Indira Gandhi",
    ],
  },
  "East Germany": {
    Governance: [
      "Split by the UN after World War II. It was formally called the German Democratic Republic",
      "Controlled by the Soviets as a satellite state",
      "Noncommunist groups were outlawed",
      "One of the members of the Warsaw Pact, the USSR's reaction to NATO, in 1955",
      "The Soviets blockaded West Berlin from getting supplies (West Berlin, which was controlled by the Western powers, was in Eastern Germany). The Western powers responded with the Berlin Airlift, flying supplies into West Berlin to avoid the blockade",
      "The Soviets built the Berlin wall between East and West Berlin in 1961 to prevent people from moving from their side to the West side where there was democracy and a higher quality of life. The Berlin Wall fell in 1989",
      "Free elections were held in 1990. A pro-unification party was elected, leading to the reunification of Germany in late 1990",
    ],
    Economy: [
      "Made 5 Year Plans influenced by the USSR",
      "Could only trade with the USSR",
      "Collectivized agriculture and nationalized industry",
    ],
  },
  "West Germany": {
    Governance: [
      "Split by the UN after World War II. One part went to France, one to the British, and one to the US. They united their parts in 1949 to form the Federal Republic of Germany, or West Germany",
      "Had a democratic government",
      "Joined NATO (North Atlantic Treaty Organization) in 1955",
      "Provided reparations to Holocaust survivors and Israel",
      "Aligned more with the US during the Cold War but were slightly more socialist",
      "Germany was reunified in 1990",
    ],
    Economy: [
      "The economy was rebuilt using help from the US through the Marshall Plan",
    ],
  },
  Nicaragua: {
    Culture: ["Liberation theology"],
    Governance: [
      "The Sandanistas, a socialist group, took down the Somoza dictatorship and took over the government in 1979. They emphasized liberation theology, land redistribution, and more educationa and healthcare",
      "The US supported the Contras who tried to overthrow the Sandinistas in 1981, as the US like that socialists were coming to power",
      "In response to the US's actions, The Sandinistas turned to the Soviets for support",
      "Led to the Contra War from 1981-1988",
      "The Contras used geurilla tactics",
      "The Sandinistas began limited civil rights and conscripting soldiers during the war",
      "The 1989 Tela Accords demobilized both armies",
      "The Sandinistas lost power in 1990",
    ],
    Economy: ["Land redistribution"],
  },
  Cambodia: {
    Governance: [
      "Part of French Indochina until they declared independence in 1953",
      "They were non-aligned during the Cold War until the Vietnam War, and then it shifted to a more pro-USSR stance",
      "The communist Khmer Rouge, led by Pol Pot, overthrew the Cambodian government in 1975",
      "The Khmer Rouge facilitated their own cultural revolution targeting intellectuals and people who stood against them. 7 million people died or were starved from the famines",
      "After invading in 1977 due to border skirmishes, the Vietnamese invaded in 1979, overthrowing the Khmer Rouge and establishing a pro-Vietnamese government. The Vietnamese remained until 1989, when it withdrew due to international pressures",
      "In 1991, Cambodia held free elections monitored by the UN",
      "Developed a constitutional monarchy with a democratic government",
    ],
    Economy: [
      "Produced rubber",
      "Communist under the Khmer Rouge and Vietnamese",
      "Developed a market economy after 1991",
    ],
  },
  "Sri Lanka": {
    Culture: ["Buddhist"],
    Governance: [
      "Previously called Ceylon",
      "Gained independence from Britain in 1948",
      "In 1960, Sirimavo Bandaranaike became the first female prime minister in the world. She made economic reforms but they weren't very successful",
    ],
    Economy: [
      "Produced rubber",
      "Land reforms and restrictions on free enterprise under Sirimavo Bandaranaike",
    ],
  },
  Tanzania: {
    Governance: [
      "Gained independence from Britain in 1961",
      "The first president was Julius Nyerere. He had socialist ideas like increasing literacy, free education, and collectivized farming. He wanted economic independence",
      "Had a lot of conflict with Uganda - their dictator Idi Amin kept threatening to attack them",
    ],
    Economy: ["Had a lot of economic harships despite Nyerere's efforts"],
  },
  Angola: {
    Environment: ["Grew cocoa"],
    Governance: [
      "Gained independence from Portugal in 1975",
      "Rival tribes were put in the same community and they began to fight for control",
      "The Mbundu tribe controlled the socialist group Popular Movement for the Liberation of Angola (MPLA). They were supported by the USSR and Cuba, who wanted to get back at the US after the Cuban Missile Crisis",
      "The Ovimbundu tribe controlled the National Union for the Total Independence of Angola (UNITA) and were backed bu the US and South Africa",
      "The Bankongo tribe controlled the National Front for the Liberation of Angola (FNLA). They were backed by the US, China, and the Democratic Republic of Congo, whose dictator was the brother in law of the leader of the FNLA",
      "There was a civil war from 1975-2002 between the tribes. The Mbundu tribe technically won in 1991, but UNITA refused to accept that and continued to fight until their leader was killed in 2002",
    ],
    Economy: ["Produced cocoa", "Socialist"],
  },
  Hungary: {
    Governance: [
      "Controlled by the Soviets as a satellite state",
      "Noncommunist parties were outlawed",
      "One of the members of the Warsaw Pact, created in 1955 as a response to the creation of NATO",
      "In 1956 political leader Imre Nagy declared Hungary's freedom from the USSR. He withdrew from the Warsaw Pact and ordered Soviet troops withdrawn. He wanted to be neutral in the Cold War. The Soviets, however, invaded Hungary and executed Imre Nagy, reinstating a leader loyal to them",
    ],
    Economy: [
      "Made 5 Year Plans influenced by the Soviets",
      "Could only trade with th USSR",
    ],
  },
  Afghanistan: {
    Governance: [
      "Gained independence from the British in 1919",
      "The communist government was very weak in the 1970s as conservatives and rural leaders disliked it",
      "In 1979, the Soviets invaded to support the government, but they were unable to conquer the the Mujahideen guerilla troops. The US, under Reagan, sent support to the Mujahideen against the Soviets",
      "The Soviets, under Gorbachev, withdrew from the war starting in 1985, fully withdrawing in 1989",
      "Up to 2 million people died",
      "The communist regime fell in 1992",
      "The Taliban, a terrorist group, gained power in the 1990s and established the Islamic Emirate of Afghanistan in 1996",
      "The US invaded after 9/11",
    ],
    Social: ["The Taliban government represses women's rights"],
  },
  Algeria: {
    Governance: [
      "Became a French colony in 1870 when the French took it from the Ottomans",
      "Social, political, and economic crises led to protests, which the government responded to with violence and repressive laws",
      "Desire for independence grew after World War II",
      "The National Liberation Front (FLN), supported by Egypt and other Arab countries, led the movement for independence in the Algerian War of Indpendence (1954-1962)",
      "The FLN used guerilla tactics in the war",
      "Somewhere between 400,000 and 1.5 million people died (FLN seems to exaggerate and France seems to minimize), with most of the casualties being Algerian with a few French",
      "Some French supported independence, especially the French Communist Party, but others didn't",
      "In 1958, Charles de Gaulle expanded presidential power to give Algeria independence by bypassing the French National Assembly, leading to Algerian indpendence in 1962",
      "Continued to have political instability and violence",
      "The FLN established a socialist authoritarian government",
      "When the Islamic Salvation Front won the election in 1991, the military cancelled the election, leading to the Algerian Civil War (1991-2002).",
      "Violence declined under President Abdelaziz Bouteflika, who tried to give amnesty and be more inclusive",
    ],
    Economy: [
      "When the French in Algeria went back to France, the economy suffered",
      "Still very economically tied to France",
    ],
    Social: [
      "There was a big French population in Algeria",
      "Many Algerians immigrated to France",
    ],
  },
  Peru: {
    Culture: ["Food was influenced by Chinese immigrants"],
    Governance: [
      "Gained independence from Spain in 1821",
      "The Spanish were fully kicked out of Peru in 1824",
      "A militant group called the Shining Path, led by Abimael Guzmán, wanted to replace the government with a communist government, beginning in the 1980s. They used bombings and assassinations to try to get their way. In 2011, one of the Shining Path leaders admitted defeat and began negotiating with the government",
    ],
    Economy: [
      "Export guano (bat/seabird excrement used as fertilizer), gold, and copper",
      "Received Chinese contract laborers to work on the Andean railroad, guano mines, or as merchants in the Amazon",
    ],
    Social: [
      "Dominated by wealthy landowners and elites, while indigenous and rural populations had no land or money",
      "Nationalized industries in the mid-1900s",
    ],
  },
  Uganda: {
    Environment: ["Grew cotton"],
    Governance: [
      "Idi Amin was a dictator from 1971-1979. His policies made ethnic tensions worse, denied human rights, and were bad for economics. He was responsible for at least 500,000 deaths. Even so, he was very charismatic and served as chairman of the Organization of African Unity and was a member of the UN Commission on Human Rights",
      "Conflict with Tanzania. Idi Amin kept threatening to invade them",
    ],
    Economy: ["The economy wasn't doing very well"],
    Social: ["In 1972, Idi Amin expelled 60,000 Asians"],
  },
  Indonesia: {
    Governance: [
      "Anti-communist",
      "Hosted the Bandung Conference in 1955 focusing on the need to end imperialism, racism, and colonialism",
      "Sukarno, from Indonesia, was one of the leaders of the Non-Aligned Movement during the Cold War. He wanted to stop economic, intellectual, and physical colonialism and promote peace",
    ],
    Economy: ["Exported spices"],
  },
  Yugoslavia: {
    Governance: [
      "Created after World War I",
      "The dictator Marshal Josip Broz Tito tried to suppress the region's desire to separate and have independence",
      "When the Soviet Union collapsed, Yugoslavia collapsed as Slovenia, Croatia, and Montenegro declared independence",
    ],
    Social: [
      "Included many different ethnicities and religions. Serbians were Eastern Orthodox, Croats and Slovenes were Catholic, and Bosniaks were Muslim",
    ],
  },
  Bosnia: {
    Culture: ["Musim"],
    Social: [
      "Bosniaks were persecuted during the Bosnian Genocide in 1992, when Serbian nationalists killed 300,000 in an attempt of ethnic cleansing. The UN was uneffective in trying to handle the situation",
    ],
  },
  Bangladesh: {
    Culture: ["Muslim"],
    Governance: ["Initially part of Pakistan until 1971"],
    Economy: [
      "Became a center of manufacturing",
      "Working conditions are awful in Bangladesh",
    ],
  },
  "Germany 1990-Present": {
    Governance: ["Reunified in 1990 after the fall of the Berlin Wall in 1989"],
    Economy: [
      "Economic disparities between the East and West",
      "Became a manufacturing power",
    ],
  },
  "Russia 1991-Present": {
    Culture: ["Revival of the Russian Orthodox Church"],
    Governance: ["The first leader was Boris Yeltsin"],
    Economy: ["Economics suffer after the USSR", "Export gas and oil"],
  },
  Venezuela: {
    Economy: [
      "Began redestributing land in 2001. They redistributed 5 million acres of land",
    ],
    Uncategorized: [
      "Landowners were really unhappy about the land distribution not just because they were losing land but also because people began to take land that wasn't being redistributed",
    ],
  },
  "Sudan": {
    Governance: ["In 2003, non-Arabs in Darfur (West Sudan) rebelled against the Arab-controlled government. The government responded by sending a militant group, Janjaweed, who killed over 300,000 non-Arabs and displaced millions"]
  }
  // "Template": {
  //       "Environment": [""],
  //       "Culture": [""],
  //       "Governance": [""],
  //       "Economy": [""],
  //       "Social": [""],
  //       "Technology": [""],
  //       "Uncategorized": [""]
  // },
  //more countries will go here
};

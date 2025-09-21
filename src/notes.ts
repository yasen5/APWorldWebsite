export interface CountryNotes {
    [country: string]: {
        [section: string]: string[];
    };
}

export const noteSVGs: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
      /* Put the country name EXACTLY as it appears in the country svgs, then the note svg that was generated for it */
}

/* Note id/summary, then actual notes */
export const blobNotes: Record<string, string> = {
      "Note number 0 with category Government": "Literally nothing lol"
}

export interface GeneralNotes {
      [country: string]: {
            [section: string]: string[];
            applicableCountries: string[];
      };
}

export const generalNotes: GeneralNotes = {
      "Crusades": {
            "Governance": ["Trying to retake the Holy Land (Jerusalem area) from the Muslims, as well as to stop Muslim expansion into Europe",
                  "There were several different crusades from 1095 to about 1270",
                  "The first crusade was the only big Christian victory. They took control of Jerusalem from 1099 to 1187"
            ],
            "Social": ["Younger sons of nobles often went to fight in the crusades due to primogeniture (only the oldest son would inherit anything"],
            "Technology": ["Increased contact and trade with the Middle East, spreading ideas and technology from the East to Europe, including paper, sugar, and gunpowder" // maybe culture or economic?
            ],
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire"]
      },
      "Black Death": {
            "Environment": ["Spread from China over the Silk Roads",
                  "Killed about 1/3 of Europe's population"
            ],
            "Social": ["Because there was a high demand for labor but so many people had died, serfs were able to gain more power, triggering the end of feudalism in Western Europe"],
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire"]
      },
      "Renaissance": {
            "Environment": [""],
            "Culture": ["Caused by increased contact with the East in the 1300s",
                  "Revived interest in classical Greek and Roman arts"
            ],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": ["The Gutenberg printing press, invented in 1439, led to an increase in literacy"],
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire"]
      },
      "Trans-Saharan Trade": {
            "Environment": ["Used camels for transportation",
                  "North of the Sahara was able to grow a lot, while South of the Sahara was better for pastoralists"
            ],
            "Culture": ["Lead to the spread of Islam"],
            "Governance": ["yay governance notes"],
            "Economy": ["Used mainly coins and cowrie shells as a currency",
                  "Facilitated trade of horses, books, salt, gold, ivory, cloth, and slaves"
            ],
            "Social": ["yay social notes"],
            "Technology": ["With the new Somali saddle, camels could carry up to 600lbs"],
            applicableCountries: ["Mali Empire, Hausa States"]
      },
      "Silk Road Trade": {
            "Environment": ["Used camels for transportation",
                  "Contributed to the spread of the Black Death"],
            "Culture": ["Facilitated the exchange of cultures between merchants",
                  "Was a safe place for some persecuted religions, including Nestorian Christianity"
            ],
            "Governance": [],
            "Economy": ["The Chinese used flying money instead of coins, which later influenced European banking systems",
                  "Facilitated the trade of silk, tea, spices, dyes, porcelain, rice, paper, gunpowder, horses, saddles, fruit, domesticated animals, honey, and textiles",
                  "Established caravanserai, spaced about 100 miles apart along the road, where camels could rest and be exchanged",
                  "Cities were established along the Silk Roads, especially near water sources as most of the routes didn't have much water, as centers of trade. Examples include Kashgar, Samarkand, and Chang'an"
            ],
            "Social" :[],
            "Technology":["Facilitated the spread of maritime technology, including lateen sails (triangular to allow wind to be caught from all directions), the stern rudder (allowed for better steering and maneuverability), the astrolabe, dhow ships, and the compass"],
            applicableCountries: ["Song Dynasty", "Abbasid Caliphate"]
      },
      "Indian Ocean Trade": {
            "Environment": ["Sailors utilized monsoon winds to expedite their voyages. Monsoon winds could be predicted based on season (from the Northeast in winter, from the Southwest in spring and summer) "],
            "Culture": ["Facilitated the spread of Islam to everywhere except China",
                  "Led to diaspora and cultural transfer as merchants would settle or start families while waiting for monsoon winds"
            ],
            "Governance": ["Never countrolled by any one country, although Yongle in the Ming Dynasty tried to establish control through the Zheng He voyages"],
            "Economy": ["There was more trade in the Indian Ocean than on the Silk Roads, since ships could carry more goods than camels",
                  "Facilitated trade of gold, ivory, quartz, animal skins, fruits, books, textiles, spices, precious metals, porcelain, and tea",
                  "There were three circuits of trade: the Arabian Sea, the Bay of Bengal, and the South China Sea. Traders generally stayed within their circuit",
                  "Trade cities were established, including Calicut, Malacca, and Kilwa"
            ],
            "Social": [],
            "Technology": ["The essential maritime techology for the Indian Ocean trade included the magnetic compass, astrolabe, lateen sail, dhow ship, and stern rudder"],
            applicableCountries: ["Srivijaya Empire, Majapahit Empire, Song Dynasty, Swahili Coast"]
      },
      "Calvinism": {
            "Environment": [],
            "Culture": ["Founded by John Calvin in 1530",
                  "Believed in predestination, where God had already predetermined who was going to heaven and who was not",
                  "Beleived being predestined to go to heaven was shown through hard work and wealth",
                  "They led a very strict lifestyle in order to prove to others that they had been selected to go to heaven"
            ],
            "Governance": [],
            "Economy": [],
            "Social": ["People who were predestined to go to heaven were called the Elect"],
            "Technology": [],
            applicableCountries: ["France 1200-1450"]
      },
      "Columbian Exchange":{
            "Environment": ["Diseases like smallpox, measles, and tuberculosis were spread to the New World. This led to the native population declining by about 80%, known as the Great Dying",
                  "Animals like pigs, goats, cows, and horses were brought to the New World",
                  "Crops like wheat, okra, rice, and sugarcane were brought to the New World",
                  "Crops like potatoes, maize, tomatoes, beans, peppers, cacao, yams, and tobacco were brought to the Old World. This led to better nutrition and population growth"
            ],
            "Culture": [],
            "Governance": [],
            "Economy": [],
            "Social": [],
            "Technology": [],
            applicableCountries: ["Aztecs",]
      },
      "Triangular Trade and Trans-Atlantic Slave Trade": {
            "Governance": ["African kingdoms that participated in slave trade, like the Asante and Oyo, became very powerful"],
            "Economy": ["Europeans sold manufactured goods and firearms to Africa in exchange for slaves. African kingdoms used the firearms to get more slaves to sell to the Europeans",
                  "The slaves were sent to the Americas (Trans-Atlantic Slave Trade) to work on plantations (mainly sugar or tobacco) or in mines",
                  "Raw materials produced in the Americas were sent to Europe to be made into manufactured goods",
                  "Chattel slavery was a common practice, where slaves were treated as property and could be bought and sold. This was passed down through generations"
            ],
            "Social": ["Most slaves taken from Africa were men, leaving a gender imbalance in Africa. This led to more polygyny, but also to women taking on more traditionally masculine roles in society",],
            "Technology": [],
            "Uncategorized": ["Most slaves were sent to Portuguese colonies",
                  "In some Spanish, Portuguese, and French colonies, owners and slaves could go to court to argue for the freedom of a slave",
                  "Colonies needed slaves because there weren't enough Native Americans, as they had been decimated by disease and were able to escape and hide from the Europeans. Africans had already been exposed to European diseases, and they were easy to find if they escaped",
            ],
            applicableCountries: ["Hausa States",]
      },
      "Thirty Years War 1618-1648": {
            "Governance": ["A war between Catholics and Protestants. It originally started in the Holy Roman Empire, and then it spread",
                  "It resulted in the Peace of Westphalia, where each area of the Holy Roman Empire could choose Roman Catholicism, Lutheranism, or Calvinism"
            ],
            applicableCountries: ["England 1450-1700", "France 1450-1700", "Holy Roman Empire", "Spain 1492-1750", "Netherlands 1450-1750"]
      },
      "Enlightenment": {
            "Culture":["A rejection of tradition, challenging monarchs and church leaders",
                  "People began to want more independence and constitutional representation",
                  "Led to the rise of nationalism",
                  "Deism, the belief that God set natural laws in motion but does not interfere after, became prevalent among Enlightenment thinkers",
                  "Atheism, the rejection of religious beliefs, became more common"
            ],
            "Governance": ["Led to the rise of revolutions, including the American Revolution, the French Revolution, and the Haitian Revolution"],
            "Economy": ["Socialism, the idea where the public owns the means of production, was developed",
                  "Adam Smith developed the idea of laissez-faire economics, where the government would not interfere with economic deciisions. This was the foundation for capitalism and the free market. He believed that capitalism would protect against poverty better than mercantilism had"
            ],
            "Social": ["Led to the end of serfdom and slavery, and the rise of suffrage movements",
            ],
            "Uncategorized": ["Late 1600s through the 1700s",
                  "Liberalism valued natural rights, a constitutional government, laissez-faire economics, and reductions to the money spent on the army and church. It was supported mainly by professionals and academics, as well as by the British Parliament",
                  "Conservatism, generally supported by the ruling class, valued traditions and religion over new idealogical theories",
                  "Thomas Hobbes believed that humans were naturally bad, and that they had to give up their rights to the government in exchange for order",
                  "John Locke, known as the Father of Liberalism, thought that people have natural rights (rights for all humans that couldn't be infringed upon by the government) to life, liberty, and the pursuit of property. He also believed that there was a social contract, where the government was obligated to protect its people's natural rights, and it was the responsibility of the people to revolt against the government if it was unjust. He developed the idea of tabula rasa, where people were born as a blank slate and are shaped by their environment and education, as opposed to the traditional belief that better ancestry would lead to more intelligence. This idea essentially went against the idea of absolute monarchy",
                  "Voltaire believed in constitutional monarchies, religious freedom, and freedom of speech",
                  "Jean-Jacques Rousseau developed the idea of the social contract after Locke and the new idea of the general will of the population, where decisions would be made based on the will of the majority. This was the start of democracy, and a big threat to monarchs",
                  "Baron Montesquieu believed supported monarchies, but not absolute monarchies. He wanted to check the monarch's power, so he developed the idea of separating the executive, legislative, and judicial powers, as well as the idea of checks and balances. His ideas influenced the American and French constitutions"
            ],
            applicableCountries: []
      },
      "Second Industrial Revolution":{
            "Environment": ["The rapid rise in urbanization led to overcrowding and poor sanitation",
                  "Pollution increased as fossil fuels were burned for energy. Additionally, the air and water was polluted from factories, leading to health problems and the spread of diseases like cholera and typhoid"
            ],
            "Economy": ["Europe, the US, and Japan did most of the manufacturing",],
            "Social": ["Being a housewife became a symbol of status in the middle class, as it meant that the husband made enough money to support the entire family",
                  "Social classes began to change; the working class was made up of replaceable low-skilled people who worked in factories or coal mines; the middle class were higher-skilled, educated factory overseers, managers, doctors, or lawyers; the higher class was made up of rich factory or office managers",
                  "Social reforms began to be implemented as the working conditions (long hours, overworked, dangerous work) were awful, and for very little pay. Labor unions formed, and laws were put in place to limit thnigs like child labor"
            ],
            "Technology": ["The telegraph was invented in the mid-1800s",
                  "Electricity was developed, leading to public power stations, electric streetcars, and street lights in the late 1800s",
                  "The telephone was invented in the late 1800s",
                  "The second industrial revolution used mainly oil instead of coal with the invention of the internal combustion engine",
                  "Cars were introduced in the early 1900s",
                  "Railways and steamships improved transportation, linking industrial centers and ports. Urbanization accelerated as new industrial cities rapidly grew"],
            "Uncategorized": ["Countries that had money, natural resources, and water transportation (eg. US, Germany, France, Russia, and Japan) began to industrialize after Britain",
                  "Consumerism began to emerge in the middle class",
                  "Before the industrial revolution, families worked together at home on their farms, but after the industrial revolution, the whole family was separated to work in factories",],
            applicableCountries: []
      },
      "Communism": {
            "Governance": [],
            "Economy": [],
            "Social": ["Split into classes of proletariat and bourgeoisie"],
            "Uncategorized": [ "Developed by Karl Marx (1818-1883), who wanted to replace capitalism with socialism",
                  "In 1848 Karl Marx and Freidrich Engels wrote the Commmunist Manifesto, detailing how capitalism produced a lot of money but left many in poverty. They predicted that the middle class would be eliminated so everyone would fall into one of two classes: the bourgeoisie (rich people who owned the means of production) and the proletariat (the working class), and that the proletariat would eventually overthrow the bourgeoisie to form communism"
            ],
            applicableCountries: []
      },
      "Imperialism": {
            "Culture": ["Colonizers would force their culture, language, and religions on the people in their colonies"],
            "Governance": ["The British, French, and Dutch charter companies made treaties with rulers in India, East Africa, and the East Indies to set up ports and forts, which they used for spice trade and to form armies used to conquer the territory and make colonies"],
            "Economy": ["Countries wanted access to more raw materials (especially palm oil, gold, ivory, and diamonds from Africa) as well as new markets, so they made colonies"],
            "Uncategorized": ["They justified imperialism using ideas like White Man's Burden (it's white people's responsibility to civilize other people) and Social Darwinism (the idea that white people were superior to other races)", // social? culture?
                  "Having colonies was a way to prove how powerful a nation was", // gov or social maybe idk  
            ],
            applicableCountries: []
      },
      "Berlin Conference 1885": {
            "Governance": ["As imperialism was rising, Europeans fought each other for control in Africa. Otto von Bismarck wanted to keep the peace between the European nations, so he organized the Berlin Conference from 1884-1885",
                  "In the Berlin Conference, the European powers met up to divide Africa peacefully",
                  "Africans had no say in the division, so the borders of the colonies often dividded up tribes into different colonies or grouped rival colonies in the same colony"
            ],
            "Economy": ["It allowed free movement of goods on major rivers"],
            applicableCountries: []
      },
      "Great Depression 1929-1939": {
            "Economy": ["Disrupted global economies",
                  "Germany was especially affected because ___"
            ],
            "Technology": [],
            applicableCountries: []
      },
}

export const countryNotes: CountryNotes = {
      "Seljuk Caliphate":{
            "Governance": ["1037-1194",
                  "Established state in the declining Abbasid Caliphate",
                  "Conquered Syria and Anatolia",
                  "Didn't collect much tax, and didn't invest in agriculture or infrastructure, leading to the decline of the House of Wisdom and the collapse of the canal system"
            ],
      },
      "Song Dynasty": {
            "Environment": ["Took champa rice from Vietnam, which was drought-resistant and could be harvested twice a year, increasing agricultural productivity and population"],
            "Culture": ["Confucianism was very popular",
                  "Foot binding was a common practice, especially among elites, since it meant that your family was wealthy enough that the women didn't need to work or walk",
                  "Neo-Confucianism (Confucianism with Buddhist and Daoist influence) became more popular again and spread to Japan, Korea, and Southeast Asia"
            ],
            "Governance": ["960-1279",
                  "Civil Service Exams turned the bureaucracy into a meritocracy, allowing for social mobility, although the exams were so hard that only the rich had the time and resources to study and pass",
                  "Gunpowder was developed for weaponry"
            ],
            "Economy": ["Better maritime technology allowed for more efficient trade",
                  "Tried to switch to paper money, but it got hyperinflated and failed",
                  "Used flying money (similar to an IOU), which was used for trade since it was lighter than coins",
                  "Imported spices, luxury goods, and cloths",
                  "Exported silk, porcelain, tea, sugar, and precious metals"
            ],
            "Social": ["Movable type allowed for more accessible books, leading to an increase in literacy"
            ],
            "Technology": ["Maritime technology, including the magnetic compass and junk ship, was improved, allowing for more trade",
                  "Gunpowder was developed for weaponry",
                  "Movable type was brought to China from Korea, meaning books could be produced faster and cheaper, leading to an increase in literacy",
                  "Produced a lot of cast iron and steel, which was used for building, agricultural equipment, weapons, and more"
            ]
      },
      "Dai Viet": {
            "Environment": [],
            "Culture": ["Confucianism and Buddhism spread from China",
                  "Had previously been ruled by the Tang Dynasty from 100bc to 938ce, so Vietnam experienced lots of sinification"
            ],
            "Governance": [],
            "Economy": [],
            "Uncategorized": ["Tribute to China in the form of champa rice"]
      },
      "Goryeo Dynasty": {
            "Culture": ["Confucianism and Mahayana Buddhism spread from China",
                  "Neo-confucianism was adopted as the state ideology"
            ],
      },
      "Japan 1200-1853": {
            "Environment": ["The strong monsoon winds allowed Japan to resist Mongol invasions"],
            "Culture": ["Buddhist and Confucian ideals were mixed with traditional Shinto beliefs",
                  "Christianity became very popular as European missionaries converted Japanese, mostly peasants",
                  "The shogun banned Christianity in 1614, killing Japanese Christians, and promoting Buddhism",
                  "Developed kabuki theater, woodblock prints, silk-screened fabrics, and restaurants"
            ],
            "Governance": ["Had a feudal system, with the Emperor at the top of the heirarchy, then the Shogun, then the Daimyo, then Samurai, and last, the serfs",
                  "The Emperor was more of a figurehead while the daimyo and shogun had the majority of the power",
                  "The Mongols tried to conquer Japan but failed because of the strong winds",
                  "First contact with the Europeans was in the 16th century",
                  "Daimyo (Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu) unified and centralized Japan, leading to the Tokugawa Shogunate, also known as the Edo Period, from 1603-1868. Even though it was centralized, the Daimyo still had a lot of power.",
                  "The Tokugawa Shoguns required daimyo to make frequent visits to the capital to ensure loyalty, and they often made daimyo's families live in Edo"
            ],
            "Economy": ["The government didn't want the economy to be in favor of the merchants due to their confucian beliefs, and they still favored samurai so they didn't want them to be in debt. They paid the samurai in rice since they could control inflation and the worth of rice, but the samurai just exchanged the rice for cash and the merchants became powerful anyway",
                  "Produced steel, pottery, lacquer, and porcelain",
                  "Traded silver to the Chinese, but avoided silver inflation because they invested in financial security"
            ],
            "Social": [""],
            "Technology": ["The Europeans introduced firearms to Japan",
                  "Had good roads and maritime transport, since the Tokugawa Shoguns required daimyo to make frequent visits to the capital"
            ],
            "Uncategorized": ["The government thought that Christianity was a tool for the Europeans to take over Japan, so they banned it in 1614, as well as expelling all Europeans and shifting to isolationism. They only continued to trade with China, and had some limited trade with the Dutch", //this one just has a bunch of parts that fall in different themes
                  "Toyota and Mitsubishi were founded",
                  "The 47 Ronin Incident (1701-1703) displays the conflict between state (law) and traditional (samurai) values. A senior minister provoked a young daimyo into drawing his sword in the shogun's court, which was not allowed, so the daimyo had to commit suicide. His samurai then became ronin (masterless samurai who had to avenge their master) and killed the senior master, then confessed to what they did in court. The shogun had to decide how to handle it (if he condemned them, he would be condemning samurai values, but if he condoned it, there would be chaos). He decided to have them commit suicide"      
            ]
      },
      "Abbasid Caliphate": {
            "Environment": [""],
            "Culture": ["The state was neither Sunni nor Shi'a, but the population was majority Sunni",
                  "The House of Wisdom, a government-sponsored library and university, attracted scholars from all over the empire. They conducted research and collected ancient texts (notably Greek texts). Nasir al-Din al-Tusi studied trigonometry and astronomy. Muhammad ibn Musa al-Khwarizmi was one of the most famous mathmaticians, solving linear and quadratic equations. The House of Wisdom eventually declined due to lack of investment from the Seljuk Turks"
            ],
            "Governance": ["750-1258",
                  "Conquered territory and converted people to Islam",
                  "Used Mamluks (Turkish slaves) in the army. They had a lot of control - when they didn't like a caliph, they sometimes murdered him and replaced him",
                  "Declined because they began to lose control over their territory, as their territory was too big, and groups like the Seljuk Turks, Fatimids, and Mamluks established their own states in Abbasid territory",
                  "Fell when the Mongols invaded and sacked Delhi in 1258"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Developed the idea of hospitals and quarantine",
                  "Got paper from China, which increased literacy"
            ]
      },
      "Mamluk Sultanate": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["1250-1516",
                  "Stopped Mongol expansion",
                  "Conquered by the Ottoman Empire in 1516"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
      },
      "Fatimid Caliphate": {
            "Governance": ["909-1171"],
      },
      "Delhi Sultanate": {
            "Environment": ["The state was Sunni Muslim, but the majority of the population was Hindu"],
            "Culture": ["The Bhakti Movement, a form of Hinduism where moksha could be accomplished through individual devotion to god, promoted conversion to Hinduism",
                  "Created Urdu, a mix of Farsi, Arabic, and Turkish"
            ],
            "Governance": ["1206-1526",
                  "Never had control over the entirety of India",
                  "Declined as they lost territory",
                  "Timur invaded in 1398, sacked Dehli, and left the sultanate in ruins",
                  "Finally fell when they lost the Battle of Panipat to the Mughals in 1526"
            ],
            "Economy": ["Imported silver",
                  "Exported cloth, yarn, silk, indigo, and pepper"
            ],
            "Social": ["Had the jizya tax (a special tax for non-Muslims), which promoted conversion to Islam"// not sure if it's social or smth else
            ],
            "Technology": [""]
      },
      "Vijayanagara Empire": {
            "Culture": ["Hindu"],
            "Governance": ["1336-1545,",
                  "Founded by two Hindu brothers from the Delhi Sultanate who had converted to Islam in order to rise up in the government. They were sent south to expand the Delhi Sultanate, but instead they established their own Hindu state",
                  "Eventually overthrown by small Muslim kingdoms"
            ],
      },
      "Sinhala Dynasty": {
            "Governance": ["600bc to 1900ce"],
            "Economy": ["Imported cloths",
                  "Exported cinammon, pepper, cardamom, elaphants, and gems"
            ],
      },
      "Khmer Empire": {
            "Environment": [""],
            "Culture": ["Was Hindu, then became Buddhist in the 12th or 13th century. This is reflected in the architecture (eg. Angkor Wat), as they preserved Hindu art alongside new Buddhist art"],
            "Governance": ["802 to 1431",
                  "Conquered by the Sukhothai Empire in 1431"
            ],
            "Technology": ["There was too much water so they had to build really good irrigation and drainage. They built leeways to protect their buildings from caving in due to water damage."]
      },
      "Majapahit Empire": {
            "Culture": ["Muslim",
                  "Malacca was Muslim, as the ruler converted to Islam for better relations with Muslim traders, and because the traders would start families while they were waiting in Malacca for seasonal monsoon winds that would aid their journey home",
            ],
            "Governance": ["Malacca fell to the Portuguese in 1511"],
            "Economy": ["Malacca was one of the most important trading ports/cities in the Indian Ocean",
                  "Imported cloth, silver, and ivory",
                  "Exported pepper, nutmeg, and cloves" 
            ],
      },
      "Mississippi Mound Builders": {
            "Environment": ["Had a very large population due to food surpluses",
                  "Had very fertile floodplains which allowed for good agriculture and food surpluses"
            ],
            "Culture": ["Built large mounds (the largest of which was called Cahokia)"],
            "Governance": ["8th or 9th century to the 16th century",
            ],
            "Economy": ["Had many trade routes due to waterways",
                  "Traded salt, shells, carved items, and pottery"
            ],
            "Social": ["Their mounds were built to represent the strict social hierarchy",
                  "Had a matrilineal society, meaning the social status was traced thorugh the female side of the family",
                  "Men still held all the power",
                  "Classes: Great Sun, then the upper class (priests, nobles), the lower class (farmers, hunters, merchants, artisans), and then slaves"
            ],
            "Technology": [""],
            "Uncategorized": ["Fell for unknown reasons (possibly weather, crop failure, or European diseases, but it certainly wasn't from war)"]
      },
      "Anasazi": {
            "Environment": ["There was a big scarcity of resources since the climate was so dry",
                  "Grew corns, beans, and squash, known as the three sisters of agriculture",
                  "Some tribes built houses into the cliffs",
                  "Other tribes built large houses out of clay"
            ],
            "Culture": [""],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Also known as the Ancestral Puebloans (their descendants don't like the term Anasazi but that's what the collegeboard uses)",
                  "Refers to a group of tribes in the Four Corners region (where Arizona, Colorado, New Mexico, and Utah meet)"
            ]
      },
      "Teotihuacan": {
            "Environment": ["Population of up to 200,000 people"],
            "Culture": ["Built religious pyramids"],
            "Governance": ["100-750",
                  "Height in 600",
                  "Had a very powerful military",
                  "Fell in 750 for unknown reasons (possibly conflict between elites or improperly managed resources"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
      },
      "Mayans": {
            "Environment": ["Grew corn, beans, and squash, known as the three sisters of agriculture"
            ],
            "Culture": ["Had a polytheistic religion"],
            "Governance": ["3rd century to 9th century, although some city-states still remained after",
                  "The Mayan empire was made up of city-states that were united religously, but not politically.",
                  "Mayan kings claimed descent from gods",
                  "Fought wars for tributes and human sacrifices, not territory"
            ],
            "Economy": [""],
            "Social": ["Women could co-rule or serve as placeholders for men"],
            "Technology": ["Developed accurate calendars, the number 0, Bas Relief hieroglypics, aqueducts, and made rubber",
                  "Had no wheels"
            ],
            "Uncategorized": ["Sacrificed mainly elites",
                  "Fell possibly due to drought, deforestation, or an epidemic",
                  "Used chinampas (floating gardens that could grow crops year-round), terraced hillsides, irrigation, slash-and-burn agriculture" //environment or tech
            ]
      },
      "Aztecs": {
            "Environment": [""],
            "Culture": ["Had a polytheistic religion"],
            "Governance": ["1200 to 1521",
                  "Had a theocracy",
                  "Ruled through fear using sacrifices and punishments",
                  "Leaders had to conquer territory and find human sacrifices in order to gain legitimacy.",
                  "Declined because they couldn't control their expanding territory, and tribes kept trying to rebel",
                  "Fell when the Spanish arrived in 1519, and became a part of New Spain"
            ],
            "Economy": ["Engaged in long-distance trade, mainly with luxury goods like gold and cloth"],
            "Social": ["Hierarchy: the Great Speaker, then land-owners, then scribes and healers, then traders and artisans, then peasants and soldiers, and lastly, slaves",
                  "Women had a pretty low status, but they were important to the tributary system since they would weave cloth as a part of payment. This often led to polygamy as men needed more women to make enough cloth for the tribute system"
            ],
            "Technology": ["Used chinampas, terraced hillsides, and irrigation", // or environment
                  "Didn't have much technological innovation. They borrowed a lot of Mayan achievements, including their calendar, hieroglyphics, agriculture techniques, math, irrigation, and aqueducts"
            ],
            "Uncategorized": ["Also known as the Mexicas"],
      },
      "Incas": {
            "Environment": ["Llamas were used for meat, wool, and transportation (they were they only beast of burdan in the Americas prior to the Europeans' arrival",
                  "Used terraced hillsides for farming",
                  "Grew corn, cotton, potatoes, quinoa, coca, and fruit"
            ],
            "Culture": [""],
            "Governance": ["11th century to 1572",
                  "The tribes in the Inca area were united in 1438",
                  "Leaders had to conquer territory in order to gain legitimacy",
                  "Leaders claimed to represent the god of the sun, Inti",
                  "Controlled their vast territory using road systems like the Carpa Nan, keeping province leaders loyal to the emperor. They also kept leaders' children as hostages in the capital",
                  "The Mit'a system was a rotational public service that they utilized instead of a tribute system. Men would hunt, fight, trade, build, etc. while women would weave, farm, and take care of the home",
                  "Fell due to a civil war and the arrival of the Spanish in 1532, but it took until 1572 for their entire territory to be conquered"
            ],
            "Economy": [""],
            "Social": ["Priests had very high status, and were consulted for war and other things"],
            "Technology": ["Developed quipu, a method of recording numbers using knotted string"]
      },
      "Mali Empire": {
            "Environment": [""],
            "Culture": ["Muslim"],
            "Governance": ["1230-1670",
                  "Founded by Sundiata"
            ],
            "Economy": ["Traded gold and copper to North African Muslim traders",
                  "Controlled all the trade in their territory",
                  "Declined because rulers after Mansa Musa were incompetent, and other empires kept attacking"
            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Mansa Musa made a pilgrimage to Mecca (1324-1325), bringing slaves and gold to display his wealth. This caused inflation everywhere he went."]
      },
      "Hausa States": {
            "Environment": [""],
            "Culture": ["Islam was introduced in the 14th century"],
            "Governance": ["7 states with no central authority"],
            "Economy": ["Traded cotton and leather through Trans-Saharan Trade,",
                  "Engaged in a lot of slave trade"
            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["City-states were specialized"]
      },
      "Zimbabwe Kingdom": {
            "Environment": [""],
            "Culture": ["Practiced animism",
                  "Developed Swahili language, mixing Bantu and Arabic"
            ],
            "Governance": ["1220-1450"
            ],
            "Economy": ["They were very wealthy from agriculture and trading gold and ivory. There was a lot of gold being taken from the eat through Zimbabwe to the Indian Ocean, and Zimbabwe took a 50% tax of all goods coming through their territory",
                  "Cattle were used similarly to a banking system. THe king gave people cattle, and people could loan cattle, etc."
            ],
            "Social": ["Women were responsible for farming"],
            "Technology": ["Made large walls (the largest manmade structures in sub-Saharan Africa pre-colonization) without any kind of mortar/mud/cement. The walls represented status. An example is the Great Encloser in Great Zimbabwe, which housed the Queen."],
            "Uncategorized": ["Declined due to overgrazing, and because traders began to go around Zimbabwe to get to the Swahili Coast, thus avoiding taxes"]
      },
      "Ethiopia": {
            "Environment": [""],
            "Culture": ["Christian since the 12th century, but practiced differently from European Christianity",
                  "They were isolated from other Christians as they were surrounded by Muslims",
                  "Made 12 churches entirely sculpted from rock"
            ],
            "Governance": ["Had no church-state conflict",
                  "A new dysnasty was founded in 1270 by King Menelik, who claimed lineage from King Soloman and the Queen of Sheba for legitimacy. He claimed to have brought the Ark of the Covenant to Ethiopia.", // not sure abt this one?
                  "Declined as they fought with surrounding Muslim empires",
                  "Was never colonized, but they were briefly occupied by Italy in 1936-1941. During the Scramble for Africa in the 1880s, Italy tried to invade Ethiopia, but the emperor modernized the army and infrastructure and repelled the Italians in 1896, remaining independent",
                  "Emperor Haile Selassie promoted modernization in the mid-1900s and became a symbol of African independence"
            ],
            "Economy": ["Traded slaves, amber, and pelts"],
            "Social": [""],
            "Technology": [""]
      },
      "Swahili Coast": {
            "Environment": [""],
            "Culture": ["Had a very culturally diverse community as merchants from all over the Inidan Ocean would settle and start families there"],
            "Governance": ["Eventually, they were conquered by the Portuguese and they declined"],
            "Economy": ["Engaged in a lot of trade over the Indian Ocean"],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Many port cities were founded by Arabs"]
      },
      "France 1200-1450": {
            "Environment": [""],
            "Culture": ["Began to have a national identity during the Hundred Years War",
            ],
            "Governance": ["Utilized the Estates General system in the government, which represents the social hierarchy of France as estates. The first estate is the clergy (the church), the second is nobility, and the third is all the peasants and merchants (98% of the population but only 1/3 of the estates general)",
                  "Fought in the Hundred Years War against the English, because the English wanted French territory. This led to a national identity replacing regional ones"
            ],
            "Economy": ["Shift away from self-sufficiency and manorialism around 1100"],
            "Social": ["Women didn't have a lot of power. They could only become wealthy if they inherited money when widowed. They were, however, able to escape the patriarchy by joinng a monastery or convent",
                  "The middle class/bourgeoisie (merchants, artisans, shopkeepers, etc.) emerges and grew"
            ],
            "Technology": [""]
      },
      "England 1200-1450": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Fought in the Hundred Years War against the French, because the English wanted French territory. This led to a national identity replacing regional ones",
                  "Nobles forced the king to sign the Magna Carta in 1215, which limited the king's power and increased nobles' power",
                  "Parliament formed in 1265, which increased nobles' rights"
            ],
            "Economy": [""],
            "Social": ["Women didn't have a lot of power. They could only become wealthy if they inherited money when widowed. They were, however, able to escape the patriarchy by joinng a monastery or convent"],
            "Technology": [""]
      },
      "France 1450-1700": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["The kings used Divine Right, meaning that they were chosen by God, to legitimize their rule and give them political and religious authority and become absolute monarchs",
                  "Louis XIV (ruled 1643 to 1715) was the strongest absolute monarch at the time. In the Versailles architecture, he often portrayed himself and his family as gods. He centralized the government, and limited nobles' power by keeping them close and distracting them at Versailles",
                  "The Indendents system was where royal officials would carry out laws in provinces",
                  "Continued to have the Estates General system, although it wasn't used",
                  "Controlled Pondicherry (Southeast India) until they were driven out by the British",
                  "Fought in the Seven Years War (1574-1763) against the British. The French lost and were driven out of India and North America"
            ],
            "Economy": ["Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible"],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Began exploring in order to find the Northwest Passage to the Indian Ocean",
                  "Jacques Cartier founded Canada in 1535",
                  "Found many resources (like fur) in the Americas and decided they didn't need to find a new way to go to Asia",
                  "Quebec was founded in 1608, bringing traders and priests from France. Their main job was to get furs from the Native Americans and to convert them to Catholicism. They maintained good relationships with the Natives in order to foster fur trade"
            ]
      },
      "Portugal 1450-1750": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Had naval supremacy in the 1400s",
                  "Lost power in the Indian Ocean when the English pushed them out of South Asia and the Dutch took over Malacca and Java in 1620",
                  "In 1492 Spain and Portugal made the Treaty of Tordesillas, reserving territory west of the Line of Demarcation for Spain, and the east for Portugal",
                  "Portugal wanted control of Ndongo (now Angola) for slave exports in the late 16th and early 17th century. The Queen of Ndongo, Ana Nzinga, was driven out of Ndongo but she took control of Matamba, allied with the Dutch, and made a new treaty"
            ],
            "Economy": ["Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible",
                  "Established a trading-post empire, based on small outposts instead of large territories, with forts from the Persian Gulf to India and Malacca",
                  "Monopolized spice trade",
                  "Started trading with Japan in the early 16th century but were driven out when Japan became isolationist"
            ],
            "Social": [""],
            "Technology": ["Developed the carrack, a ship good for trading, used in the 14th to 17th centuries, and the caravel, a ship good for speed, long voyages, and shallow water, used from the 15th to 17th centuries"],
            "Uncategorized": ["Prince Henry the Navigator (1394-1460) searched for a new route to the Indian Ocean around Africa",
                  "Bartholomew Diaz sailed around the Cape of Good Hope (the Southern tip of Africa) in 1488",
                  "Vasco Da Gama sailed around the Cape of Good Hope in 1498 and established ports in India. Initially the Indian kingdoms didn't want to trade with him, but then he came back with weapons and forced them to trade in 1509",
                  "First came to China in 1514 with traders and missionaries",
                  "The Portuguese used military control to force trade in the Indian Ocean instead of forming ethnic and religious ties", // gov or econ?
            ]
      },
      "Holy Roman Empire": {
            "Environment": [""],
            "Culture": ["Lutheranism was started by Martin Luther in 1516 when he wrote the 95 Theses about his grievances with the church (including indulgences, where people could pay for salvation, simony, where people could pay for church offices, and the fact that the Bible was only available in Latin so the church kept control over its interpretations). Lutheranism spread quickly, especially to political leaders and launched social revolutions and the Protestant Reformation",
                  "Different areas were Catholic, Lutheran, or Calvinist"
            ],
            "Governance": ["Lost power during the Thirty Years War (1619-1648)",
                  "Fell when Napoleon invaded in 1806",
                  "States within the Holy Roman Empire, such as Prussia and Austria, began to have more autonomy and develop their own military"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
      },
      "England 1450-1750": {
            "Environment": [""],
            "Culture": ["Henry VIII initially supported the Pope against protestants, until he wanted a divorce andd the Pope wouldn't allow it. He then started Anglicanism, which was still essentially the same as Catholicism"],
            "Governance": [" In 1689, the English Bill of Rights checked monarch power, increased individual liberties (right to be tried before conviction, give parliament a say in taxation and military)",
                  "Had naval supremacy in the 1700s",
                  "Parliament preferred a moderately protestant monarch, so they kept replacing the monarchs",
                  "The 1663 Gloucester County Rebellion in Virginia was the first recorded slave revolt, although they never got a chance to revolt as a servant betrayed their plans",
                  "Metacom's War (1675-1678) was the Natives' last effort to drive out the British",
                  "1676 Bacon's Rebellion in Virginia. Freed indentured servants were angry about the lack of land available to them so they rebelled and burned Jamestown to the ground",
                  "The Maroon Wars (1728-1740, 1795-1796) in Jamaica were fought by Maroons, communities of escaped slaves, who wanted independence from Britain. It was led by Queen Nanny. The maroons were allowed to form their own independent state in exchange for returning any new escaped slaves",
                  "The Stono Rebellion (1789) in South Carolina was the largest slave uprising at the time, with about 100 slaves participating. About 30 died during the uprising, and about 30 escaped then died. After, laws were created banning slaves from reading, earning money, growing their own food, and assembling in groups to ensure that they would not have the means for another rebellion",
                  "Fought the Seven Years War (1754-1763) against the French. The British won and pushed the French out of India and Canada"

            ],
            "Economy": ["Shifted to mercantilism, where they maximized their exports and minimized their imports in order to amass as much gold and silver as possible",
                  "The British East India Company (EOC) was founded in 1600 and traded with the Mughal Empire in the 17th century. They expanded to trade with other local rulers through treaties"
            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Began exploring to the West in order to find a new trade route to the Indian Ocean",
                  "John Cabot claimed the territory from Newfoundland to Chesapeake Bay for England in 1497",
                  "Jamestown, the first successful colony, was established in 1607",
                  "The Agricultural Revolution happened in the early 1700s"
            ]
      },
      "Spain 1492-1750": {
            "Culture": ["Catholic"],
            "Governance": ["Created when King Ferdinand and Queen Isabella married in 1492, uniting their kingdoms to form Spain",
                  "Had naval supremacy in the 1500s",
                  "In 1492 Spain and Portugal made the Treaty of Tordesillas, reserving territory west of the Line of Demarcation for Spain, and the east for Portugal",
                  "In the Pueblo Revolt (1680), the Pueblo and Apache indigenous groups fought the Spanish to regain their land and religion, since the Spanish had forced them to convert to Catholicism. They killed 400 Spanish, and drove the others out, successfully regaining their land until the Spanish retook it in 1692"
            ],
            "Economy": ["Shift to mercantilism, where they maximized exports and minimized imports in order to amass as much gold and silver as possible",
                  "The Spanish grew very wealthy from silver from the New world, since there was high demand for silver, as it could be used as coins that were less valuable than gold but could still be verified unlike copper. About half of the silver was exported to Spain, and about half they traded over the Pacific to China",
                  "After silver inflation, silver mining became less profitable",
                  "Spent a lot of money on religious wars"
            ],
            "Social": ["Kicked Muslims out of Spain in 1492"],
            "Technology": ["Developed galleoons - armed ships used for carrying silver from the Americas to East Asia"],
            "Uncategorized": ["Began exploring in the 1490s to find new trade routes to the Indian Ocean",
                  "In 1492, Queen Isabella and King Ferdinand sponsored Christopher Columbus's voyages, leadign him to find the Americas",
                  "Ferdinand Magellan's fleet was the first to circumnavigate the world in 1522",
                  
            ]
      },
      "Spanish Territory": {
            "Environment": ["Had sugar plantations and mined silver"],
            "Culture": ["Had syncretic religions"],
            "Governance": ["Simón Bolívar was one of the leaders of the South American revolutions. He came from a wealthy family, and wanted independence for political and economic reasons, not for social reasons. He allied with Jose de San Martin, who was from Argentina. He had promised slaves freedom, so Bolívar went along with it",
                  "By 1825, all the Spanish South American colonies had achieved independence",
                  "The new government abolished slavery but was still very conservative. Creoles formed the upper class, and only educated people could vote, so most indigenous people and women were excluded"
            ],
            "Economy": ["Exported silver, sugar, and tobacco to Spain",
                  "One of the biggest silver mines was in Potosí"
            ],
            "Social": ["Had the Castas system, a hierarchy based on one's race. Peninsulares were Spanish people born on the Iberian peninsula, who were more likely to stay loyal to the monarchy. Creoles were Spanish people born in the Americas. Mulattoes (now offensive term) were people of Spanish and African descent, Mestizos were of Spanish and Native American descent, and Zambos were of African and indigenous descent. The only way to move to a different level was through intermarriage"],
            "Technology": [""],
            "Uncategorized": ["Used coerced labor (called Encomienda), especially for work in the fields (called Hacienda). They converted the Incan mit'a system into coerced labor, where villages would have to give up a certain amount of men in exchange for some money",
                  "Wanted independence because they disliked mercantilism (they could only buy or sell goods to/from Spain), and lower classes wanted more power"
            ]
      },
      "Netherlands 1450-1800": {
            "Environment": [""],
            "Culture": ["Calvinist"],
            "Governance": ["Had naval supremacy in the 1600s"],
            "Economy": ["The Dutch East India Company (VOC) was founded in 1602",
                  "The Dutch bought furs from trappers in the North, and crops (especially Tobacco) fromthe South and would exchange that in the Netherlands",
                  "In 1799, the VOC was declared bankrupt. It was dissolved, and its power and possessions were taken by the state"
            ],
            "Technology": ["Developed the fluyt, a ship good for trade, used in the 16th nad 17th centuries"],
            "Uncategorized": ["Began exploring in order to find the Northwest Passage to the Indian Ocean",
                  "Henry Hudson claimed the Hudson River Valley and Manhattan for the Netherlands, founding New Amsterdam in 1609"
            ]
      },
      "Mongol Empire": {
            "Environment": ["Increased trade on the Silk Roads due to Pax Mongolica led to the spread of the Black Death"],
            "Culture": ["Generally very religiously tolerant, and many religions were practiced. All Mongols had some elements of animism."],
            "Governance": ["They began their conquest in 1609 under Genghis Khan. They started with the Jin Empire then moved west to the Middle East",
                  "Used siege weapons to invade cities",
                  "They led to the decline of knights in Europe", // is this true?
                  "They starved cities and killed their people until the cities surrendered",
                  "Once they had conquered territory, there was a period called Pax Mongolica (Mongolian Peace) in the 13th and 14th centuries, since no one wanted to fight the Mongols",
                  "The Mongol empires were united until 1265, then there was a lot of infighting"
            ],
            "Economy": ["Pax Mongolica led to increased trade on the Silk Roads"],
            "Uncategorized": ["Initially nomadic tribes who were eventually united by Genghis Khan",
                  "Great horsemen",
                  "Had the yam messenger system, where messengers would take oral messages and ride nonstop, even sleeping on their horses, to deliver the message. An early version existed under Genghis Khan, but it was expanded under Ogedai Khan",
                  "Kept skilled workers alive, which allowed their empire to thrive"
            ]
      },
      "Golden Horde": {
            "Environment": [""],
            "Culture": ["Became isolated from Europe, reinforcing the Great Schism divide and leading to a new and unique culture"],
            "Governance": ["1236-1380",
                  "Created when Batu (one of Genghis Khan's grandsons) invaded Russia in 1236",
                  "Mongol leaders ruled through Russian princes - the princes had to collect taxes and prevent rebellion",
                  "Rivalry between the Golden Horde and the Il-Khanate",
                  "City-states began allying together to rebel, led by Alexander Nevskii. They kept some of the taxes they were supposed to give to the Mongols and used the money to build an army",
                  "The Russian city-states defeated the Golden Horde at the Battle of Kulikovo in 1380",
                  "Moscow replaced Kiev as the political center and Kiev lost importance"
            ],
            "Technology": ["The Mongols brought passports, coal mining, moveable type, high temperature metallurgy, gunpowder, and bronze cannons"]
      },
      "Il-Khanate": {
            "Environment": [""],
            "Culture": ["Funded work in astronomy", // tech? 
                  "Originally, it was religiously tolerant until Ghazan Khan made Sunni Islam the state religion in 1295, then other religions were persecuted"
            ],
            "Governance": ["1256-1335", // check
                  "Founded by Helegu (one of Genghis Khan's grandsons)",
                  "Destroyed Baghdad and ended the Abbasid Caliphate in 1258, but were stopped from exanding further by the Mamluks in 1260"
            ],
            "Economy": ["Ghazan Khan tried to lower the tax but had to raise them again which made the population unhappy"],
            "Social": ["Once Sunni Islam became the state religion in 1295, other religions were persecuted"],
            "Technology": [""],
            "Uncategorized": ["Tax farming was used extensively (a sign that the government didn't have enough money), where the government paid people to collect taxes for them, and the tax farmers could tax more in order to make a profit. It worked well at first, and then failed (people were driven into debt and agriculture declined). Then the government tried to buy land for agriculture but that led to even less tax revenue"]
      },
      "Yuan Dynasty": {
            "Environment": ["The population declined by 40% due to the Black Death, Mongols killing everyone, and because the government didn't invest in the infrastructure"],
            "Culture": ["They were religiously tolerant, which made Buddhists and Daoists, who had previoulsy been oppressed, more loyal. Eventually they turned towards Tibetan Buddhism, and had Lamas as advisors"],
            "Governance": ["1260-1368",
                  "Founded by Kublai/Kubilai Khan (one of Genghis Khan's grandsons)",
                  "Tried to conquer Japan, Indochina, and Java in 1278 but failed",
                  "Took the Civil Service Exam away",
                  "In the 1350s, the White Lotus Society began organizing a rebellion, and in 1368 Zhu Yuanzhang/Hongwu (a Buddhist monk) started the rebellion and founded the Ming Dynasty"
            ],
            "Economy": ["They got wealthy through trade"],
            "Social": ["Women had more rights: they could wear pants, initiate divorces, and remarry",
                  "There was separation between Mongols and ethnically Chinese. Mongolians were given all the positions in the government and were at the top of the hierarchy. Chinese were not allowed to speak Mongolian."
            ],
            "Technology": ["Fell behind in technology"],
            "Uncategorized": ["The government was unpopular with Confucians and the Scholar Gentry since they got rid of the Civil Service Exam, and changed the social hierarchy so merchants were more valuable than farmers (which went against Confucian beliefs)"]
            
      },
      "Ming Dynasty": {
            "Environment": [""],
            "Culture": ["Shifted back to Confucianism",
                  "They were very anti-Mongol, asserting their Chinese identity"
            ],
            "Governance": ["1368-1644",
                  "Reinstated the Civil Service Exam",
                  "Pushed the Mongols out of China, but were still always ready to defend against the Mongols, institution mandatory military service",
                  "Sent their army to aid against the Japanese invasion of Korea in the 1590s, leading to economic and military weakness",
                  "There was a lot of internal rebellion starting in the 1630s, and as the Ming Dynasty was still weak, they allied with the Manchus to help them against the rebels, but the Manchus instead took power and started the Qing Dynasty in 1644"
            ],
            "Economy": ["Really wanted silver as a currency, since they wanted a coin currency, and silver was not as valuable as gold but could still be verified, unlike copper",
                  "Imported a lot of silver from the Americas (supplied by the Spanish), which led to silver inflation",
                  "Traded porcelain and textiles for silver"
            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Emperor Yongle (ruled 1403-1424) wanted to control the Indian Ocean through the Zheng He voyages, where Zheng He would bring gifts and receive tribute from cities in the Indian Ocean. Yongle was the only Ming emperor who really supported exploration",
                  "Zheng He made 7 voyages all around the Indian Ocean for tribute and to show the Ming Dynasty's strength, until Yongle died. The rest of the Ming Dynasty did not support his voyages"
            ]
      },
      "Jagadai Khanate": {
            "Governance": ["1227-1363",
                  "Founded by Jagadai (Genghis Khan's son)",
                  "Timur (Tamerlane) was the Genghis Khan of the 14th century. He sacked Delhi in 1398, defeated the Ottoman sultan in 1402 (delaying the Ottomans from taking Constantinople)"
            ]
      },
      "Ottoman Empire": {
            "Environment": [""],
            "Culture": ["Sunni Islam",
                  "Fairly religiously tolerant. They had special courts for non-Muslim non-secular law, and provided a safe place for Jewish after they were driven out of the Iberian Peninsula, but they still had the jizya tax for non-Muslims, and Jewish and Christians were not allowed top positions in the government",
                  "Coffee houses, where men could gather and discuss ideas, became very popular",
                  "The Tulip Period (1718-1730) was when tulips from the Netherlands became super popular in the Ottoman Empire, and people would spend large amounts of money to buy them. Elites would have tulip gardens and throw parties to show off their gardens"
            ],
            "Governance": ["1299-1922",
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
                  "The government made the Tanzimat Reforms in 1839-1876, making schools secular so they had more control over them and codified Ottoman laws"
            ],
            "Economy": ["Silver inflation in the late 16th century happened because the silver from the New World was so cheap, meaning they could buy more, so prices rose"],
            "Social": ["They had the jizya tax for non-Muslims, and Jewish and Christians were not allowed top positions in the government",
                  "Janissaries didn't have many rights until 1730. They weren't allowed to get jobs, marry, have kids, or own property",
                  "The higher class (military, government officials) were called the Askeri, while the lower class was called the Reaya"
            ],
            "Technology": [""]
      },
      "Mughal Empire": {
            "Environment": [""],
            "Culture": ["The majority of the population was Hindu but the state religion was Sunni Islam",
                  "Sikhism emerged in 1469. It was influenced by Hinduism and Islam. They were initially tolerated until the reign of Aurangzeb, who had the ninth guru killed"
            ],
            "Governance": ["1526-1857",
                  "Took over the Delhi Sultanate after the Battle of Panipat in 1526, which the Mughals won even though they were outnumbered because they had gunpowder weapons",
                  "Used zamindars, or government officials specialized for tasks including taxation, construction, and water supply. Eventually they began keeping some of the taxes and building their own armies",
                  "Mansabdars were government officials trained at acadamies. They made up the bureaucracy and generals",
                  "Land grants in the Mughal Empire were hereditary, unlike in other Muslim Empires",
                  "The Mughal Empire declined due to efforts to expand with a weak and corrupt military. Expansion was expensive and they were unable to effectively assimilate the new territories, leading to uprisings. The Mughal Empire became decentralized, and then the French and English took control"
            ],
            "Economy": ["Grew and traded a lot of cotton for calico",
                  "Britain was unhappy about the success of Indian cotton so they made the Calico Acts in 1700 and 1721 banning calico imports in Britain so they wouldn't compete with Brtish products"
            ],
            "Social": ["There was religious intolerance except under Akbar",
                  "Casts were still very prevalent"
            ],
            "Technology": [""],
            "Uncategorized": ["Akbar ruled from 1556 to 1605 at the height of the Mughal Empire. He wanted to unite Hindus and Musliims, so he was very religiously tolerant, exempting Hindus from the jizya tax. He also created a new religion called the Divine Faith (incorporating Islam, Hinduism, Zoroastrianism, Sikhism, and Christianity) but it didn't last. He also established the land grant (mansab) system in the Mughal Empire",
                  "Jahan (ruled 1628 to 1658) made the Taj Mahal for his favorite wife after her death. It simultaneously was a way to legitimize him to all the religions in the empire. It appealed to Muslims because of the Quranic verses inscribed, along with the gardens, minarets, and mosque. It appealed to Hindus because the marble represented the caste system",
                  "Aurangzeb (ruled 1658-1707) was very religiously intolerant. He had the ninth Sikh guru killed"
            ]
      },
      "Safavid Empire": {
            "Environment": [""],
            "Culture": ["The state religion was Shi'a Islam, which the government used as a unifying force",
                  "They were surrounded by Sunni Muslims on both sides (the Ottomans and Mughals)",
                  "They believed in the Hidden Imam (the 12th descendent of Ali who would return on a judgment day), and they had a Shah as a placeholder for the Hidden Imam",
            ],
            "Governance": ["1501-1736",
                  "Gave land grants to qizilbash in exchange for military service. The qizilbash generally didn't use guns, so the Safavids took captives from other places to be soldiers and use guns, which was very expensive",
                  "Lost the Battle of Chaldiran to the Ottomans, establishing the border betweeen the Ottomans and Safavids",
                  "Took some Mughal territory, including the Silk Roads, during the Siege of Kandahar in 1653",
                  "Shah Abbas ruled from 1588 to 1629 during the Safavid Empire's height. He expanded the government's power by taking power away from the nobles, and expanded silk trade, imported more weaponry, and shifted the military to a more European style",
                  "Delcined after Shah Abbas, as rulers were overspending, and they lost territory to the Ottomans and Russians",
                  "In 1722, Sunni people rebelled and sacked Isfahan and made centralization andd taxing difficult",
                  "Fell when they were replaced by the Zand Dynasty in 1760"
            ],
            "Economy": ["Traded mostly carpets, and had a monopoly on silk trade",
                  "Silver inflation in the late 16th century because the silver from the New World was so cheap, meaning they could buy more, so prices rose"
            ],
            "Social": ["They were religiously intolerant",
                  "Women had property rights, but were restricted to certain areas in their houses",
            ],
            "Technology": [""]
      },
      "Songhai Kingdom": {
            "Environment": [""],
            "Culture": ["Muslim"],
            "Governance": ["Defeated by the Moroccans in the Battle of Tondibi in 1591. The Moroccans invaded because they wanted the gold in Songhai territory. The Songhai greatly outnumbered the Moroccans and even had cattle to trample them, but they lost because they didn't have firearms. As a result, they had to pay tribute to Morocco with slaves and goods",
                  "Built off the fuondation created by the Ghana and Mali Empires", // econ?
            ],
            "Economy": ["Exported slaves, gold and the kola nut. They faciltated trade of textiles, hardware, and weapons"],
            "Social": [""],
            "Technology": [""]
      },
      "Russia 1300-1917": {
            "Environment": [""],
            "Culture": ["Eastern Orthodox, but Muslim in steppes",
                  "Religously tolerant until the end when they wanted to promote a uniform Russian identity"
            ],
            "Governance": ["The government hired soldiers called cossacks. They were very good warriors but sometimes they decided not to follow the state's orders",
                  "Expanded east to Central Asia, and west to Alaska and California",
                  "Settled by the Amur river in the 1640s to grow grain, but the Ming Dynasty felt threatened, leading to the Treaty of Nerchinsk in 1689, which recognized Russian ownership of the land but forced them not to settle there",
                  "Ivan the Terrible ruled from 1533 to 1584. He expanded Russia east and south using the cossacks. There was a lot of tension with the boyars, so he forced them to move to Moscow, where it would be harder to plot against him. He also made the oprichnina, a paramilitary force loyal to him",
                  "Peter the Great ruled from 1682 to 1725. He was known as the \"Defender of Orthodoxy\" and was at first in favor with the church until he tried to reform it too much (tried to make it answer to him). He divided Russia into provinces and made provincial officials. He moved the capital from Moscow to St. Petersburg and reintegrated Russia with Western Europe. He was known for copying Western Europe (especially French) things, including technology, tolerance, and trade, but not democracy",
                  "In 1774, a cossack named Yemelyan Pugachev started the Pugachev Rebellion against Catherine the Great. The movement aimed to gain more rights for serfs, but was defeated by the Russian army, and Catherine doubled down on oppressing the peasants"
            ],
            "Economy": ["Exported furs"],
            "Social": ["Social hierarchy: Boyars (land-owning nobles), then merchants, then peasants (who were often driven into debt and serfdom",
                  "Built railroads like the Trans-Siberian Railroad to allow for easier trade and transport between the east and west of Russia"
            ],
            "Technology": [""],
            "Uncategorized": ["Serfdom ended in 1861",
                  "Mainly produced agricultural products like wheat until Communism, when they began producing more coal, iron, and steal"
            ]
      },
      "Qing Dynasty": {
            "Environment": ["Grew more cash crops like tea, cotton, and silk as well as as New World crops like corn and sweet potatoes"],
            "Culture": ["The majority of the population was Han Chinese but the Manchus wanted to assimilate them. For example, all men were forced to wear the Manchu hairstyle, called the queue, and if they didn't, they were killed",
                  "Jesuit missionaries began converting people to Christianity, as they allowed the Chinese to continue the confucian practice of worshipping their ancestors. Emperor Kangxi supported them, so he banned all other missionaries who didn't support him",
            ],
            "Governance": ["1644-1911",
                  "Founded by Manchus who had allied with the Ming Dynasty, then took control",
                  "Expanded to Mongolia, Taiwan, and Tibet",
                  "The White Lotus Rebellion (1796-1804) weakened the Qing Dynasty",
                  "Declined to to corruption, lack of investment in infrastructure, and too much expansion so they were unable to control their territory (as they expanded, they didn't increase the number of government officials)",
                  "The Taiping Rebellion (1850-1864) was an internal uprising led by Hong Xiuquan. He was angry because he had failed the Civil Service Exam and believed that he was the brother of Jesus. He gathered people to rebel against the Qing Empire, saying that they hadn't solved the opium addiction or famine problems. In the end, they were defeated by the Qing Dynasty with help from the Europeans (who wanted the Qing dynasty weak but not dissolved), but the uprising showcased the government's weakness",
                  "Tried to modernize during the Self-Strengthening Movement from 1861-1895, but it was only adding modern ideas to traditions instead of a full reform so it wasn't as effective. They strengthened the military and stabilized the government more",
                  "Lost the First Sino-Japanese War (1894-1895)",
                  "During the Hundred Days of Reform in 1898, the government tried to eliminate corruption by stopping the Civil Service exam, which had become corrupt, and instituting a constitutional monarchy and parliament. It also established Western industrial, commercial, and medical systems",
                  "In 1898, the emperor's aunt Empress Dowager Cixi took power in a coup d'état. She was very conservative, being afraid of foreign influence, and undid all the work that the Emperor had done during the Hundred Days of Reform, stopping work on railroads and telegraph lines, and reinstating the Civil Service Exams. By the end of her reign, she realized how corrupt the Civil Service Exams were and removed them again",
                  "The Boxer Rebellion in 1900 was a movement against foreign influence. An anti-imperialist group called the Boxers, supported by Empress Cixi, attacked foreigners and Christians, but were eventually defeated",
                  "The dynasty collapsed in 1911, and was replaced by the Republic of China"
            ],
            "Economy": ["Limited foreign trade to one city per foreign place - European trade was limited to Canton. The Dutch (through the VOC) were able to trade more, until they were replaced by the British (through the EIC)",
                  "The British wanted tea from China but didn't have anything the Qing Dynasty wanted, so they began importing opioids",
                  "Imported a lot of silver which led to silver inflation"
            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["The British sent the Macartney Mission in 1792 to show more interest in the Qing Dynasty and to renegotiate the Canton system, but they failed",
                  "Emperor Kangxi (ruled from 1662 to 1722) expanded to Mongolia, made the 1689 Treaty of Nerchinsk with Russia, improved infrastructure, supported the Jesuits and included them as advisors, and was very popular with the people as he portrayed himself as a Confucian scholar. He commissioned the Nanxuntu, which displayed him visiting Southern cultural and economic centers",
                  "Emperor Qianlong (ruled from 1736 to 1796) portrayed himself as a Universal Ruler, appealing to Buddhists by portraying himself as a bodhisattva, and appealing to Confucians through commissioning Nanxuntu, similar to Kangxi. Under him, the bureaucracy became more corrupt",
                  "Opium Wars" // need more detail
            ]
      },
      "13 Colonies": {
            "Environment": ["The South had good soil and climate for growing crops.",
                  "The North had less fertile soil and a colder climate, so they didd more fishing and logging, and eventually became an industrial powerhouse."
            ],
            "Governance": ["Indentured servants rebelled in Bacon's Rebellion in 1676. This led to the decline of indentured servitude and the shift to race-based slavery.",
                  "Wanted independence from Britain because of Enlightenment ideas, like free market ideas as opposed to mercantilism. They were already for the most part politically independent, as they were geographically very far from Britain."
            ],
            "Economy": ["After the Seven Years War, Britain was in a lot of debt so they tried to tax the colonies more, but the colonies didn't like that, leading to the American Revolution"],
            "Social": ["The South attracted people, especially young men, who wanted to become rich from growing cash crops (mainly tobacco, indigo, and cotton), and had fewer religiously-focused people. The farming focus led to plantation power structures and harsher treatment and attitude towards slaves",
                  "The North attracted more religiously-focused people, especially Puritans."
            ],
            "Technology": [""],
            "Uncategorized": ["Jamestown, the first successful colony was founded in 1607"]
      },
      "United States 1750-1920": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Started fighting for independence in 1775.",
                  "At first they were losing until they gained French support",
                  "They won in 1783 with the Treaty of Paris",
                  "The Articles of Confederation were made in 1781 but they made the central government too weak so they were replaced with the Constitution in 1787. The Constitution established the legislative, executive, and judicial powers. They also made the Great Compromise for big and small states, createing the House of Representatives based on population size, which gave an advantage to bigger states, but balanced it with the Congress which had equal representation for each state, which helped smaller states.",
                  "Anti-Federalists wanted more state rights, resulting in the 1793 Bill of Rights", // ?
                  "Fought the Spanish during the Spanish-American War (1898-1899). They won and gained the Philippines, Puerto Rico, and Guam",
                  "During World War I, they were initially neutral but joined the Allies in 1917, tipping the balance towards Allied victory"
            ],
            "Economy": ["Began industrializing after the Civil War, and became a leading manufacturer of steel, oil, and automobiles by the early 1900s. Their industrialization was especially successful because they had a lot of human capital as people would immigrate tothe US due to political or economic problems in their home countries"],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["The expansion of railroads connected markets and facilitated westward expansion, often at the expense of the Indigenous peoples",]

      },
       "United States 1920-Present": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["The U.S. entered World War II after the attack on Pearl Harbor in 1941, becoming a global superpower after the war",
                  "During the Cold War, the US led the Western bloc against the Soviets"
            ],
            "Economy": ["The interwar period saw economic boom in the 1920s, followed by the Great Depresssion beginning in 1929",
                  "The New Deal programs under Franklin D. Roosevelt expanded the federal government's role in the economy"
            ],
            "Social": [""],
            "Technology": [""]
      },
      "France 1750-1914": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Louis XVI called the Estates General in 1789 because he wanted to start taxing nobles to get more money, but as the nobles essentially had 2 of the 3 votes, they avoided the tax. The bourgeoisie were angry that they only had one vote so they formed the National Assembly which pushed for a constitutional monarchy",
                  "The commoners stormed the Bastille on July 14, 1789. In October, they stormed Versailles and made the king make the monarchy constitutional (they didn't want to kill him, they only wanted him to make things better)",
                  "Became the First French Republic (constitutional monarchy) in 1792. Monarch power was limited, and the National Assembly had a lot of power. They stopped feudalism and made the Declaration of the Rights of Man and Citizen. The King was unhappy with this new government and tried to veto a lot of things",
                  "Eventually, the Jacobins, extreme revolutionaries, were elected. They wanted to end the monarchy, the church's power, and slavery, and killed anyone (including the king and queen) who were “against” the revolution (could have been for any reason) in the 1793 Reign of Terror.",
                  "In 1804, Napoleon Bonaparte took control of France in a coup d'ètat, and became emperor through a vote (the French people wanted stability after the reign of terror). He fixed the economic situation, but got rid of freedom of speech. He invaded Russia in 1812 and lost half a million people.",
                  "In 1815, other European countries overthrew Napoleon, exiling him to Île d'Elbe and reestablished the monarchy. They wanted to ensure that the monarchs would stay in control so they promoted conservatism and buried the idea of democracy from 1815 to 1848",
            ],
            "Economy": ["Began industrializing in the 1850s, but it wasn't as successful because the cities had smaller populations, they had no iron or coal deposits, and France had a lot of wars with their neighboring countries"],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Started the French Revolution because all the money and taxes were going to the nobles and higher class, and they had lost a lot of money from wars such as the American Revolution and the Seven Years' War. The estate system was very unfair to the majority of the population who had to pay a 50% tax and were only represented as 1/3 in the government.",
            ]
      },
      "Saint Domingue/Haiti": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Had been under French control",
                  "The revolution started in 1792 and continued to gain more people. Toussaint L'Ouverture, who became the leader of the revolution, joined the movement in 1794. They allied with the Spanish and then drove out the Spanish and British",
                  "In 1801, Toussaint L'Ouverture established the Haitian government and constitution, creating equal rights and citizenship, and abolishing slavery and racism. However, he made himself the governor for life and gave himself all the power",
                  "In 1804, Napoleon reinstated slavery and imprisoned Toussaint L'Ouverture. Haiti fought for independence because they didn't want slavery and gained full independence that year.",
                  "Even after the revolution, Haiti was unrecognized by most countries and had to pay France reparations, leading to them being a very poor country",
                  "They were the first and only Black-led nation to get rid of colonial power" //?
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Their revolution was inspired by the French Revolution and Enlightenment ideas. All the people wanted more rights (it wasn't about slavery yet)"]
      },
      "Brazil": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["In 1807, Napoleon invaded Portugal, so to escape, the Portuguese royal family fled to Brazil. The king wanted to return, but the creoles loved having their own government in the country, so Prince Pedro remained in Brazil while the King went back to Portugal",
                  "Brazil declared independence from Portugal in 1822 under Dom Pedro I. It maintained a monarchy until 1889, when it became a republic."
            ],
            "Economy": ["Brazil's economy relied heavily on coffee exports"],
            "Social": ["Slavery persisted until 1888"],
            "Technology": [""],
            "Uncategorized": ["The 20th century saw industrialization, urbanization, and periods of authoritarian rule. Brazil participated in World War II on the Allied side, sending troops to fight in Italy. Later decades brought both economic growth and political crises"]
      },
      "Puerto Rico": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["In 1868 there was a big revolution but it was supporessed by the Spanish",
                  "Puerto Rico was ceded to the US after the Spanish-American War in 1899"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Lola Rodríguez de Tío was a female poet in a time when women didn't have much education who held meetings for thinkers and fostered revolutionary ideas against Spain."]
      },
      "Mexico": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Became a republic in 1821 with Iturbide, a creole general, as king, although he was eventually kicked out of Mexico and killed",
                  "The Mexican Revolution (1910-1920) overthrew the dictatorship of Porfirio Díaz, leading to land reforms and a new constitution",
                  "The country experienced one-party rule under the PRI for much of the 20th century, with gradual democratization in the late 1900s."
            ],
            "Economy": ["Mexico nationalized its oil industry in 1938, asserting economic sovereignty"],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Wanted independence because of enlightenment ideals, and they didn't like mercantilism. Padre Miguel Hidalgo was one of the leaders of the revolution, and he was very liberal. He wanted land redistribution, and the abolition of the castas system and slavery.",
                  "The creoles wanted more rights, so they kept switching sides to suit their wants. At first, they were against the peninsulares because they wanted more power, but then Hidalgo's followers would attack both peninsulares and creoles so the creoles sided with the peninsulares. Then, in 1820, the Spanish government got rid of the castas system. The creoles wanted to still be at the top of the hierarchy so they switched sides against the peninsulares and Spain.",
                  "The 19th century was marked by political instability, foreign interventions, and territorial loss to the United States."
            ]
      },
      "Philippines": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Was a Spanish colony since 1571",
                  "Education was limited in the Philippines, so wealthy people would go to Europe for education, where they gained access to Enlightenment ideas. When they returned to the Philippines, they began publishing books about these Enlightenment ideas. One of these people, José Rizal, started the Propaganda Movement, which aimed for more autonomy, and was arrested and executed in 1896, sparking a revolutionary movement.",
                  "At the same time, the Spanish were fighting the Spanish-American War (1898-1899). When the Spanish lost, they had to sell the Philippines, Puerto Rico, and Guam to the US.Then the Philippines fought the Philippine-American War for independence in 1899, but lost.",
                  "They finally gained independence in 1946 after World War II"
            ],
            "Economy": ["Was a stopping point for silver on the way from the Americas to China"],
            "Social": [""],
            "Technology": [""],
      },
      "Italy": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Count di Cavour, the prime minister of the largest state in Italy (Piedmont-Sardinia) used nationalism to help unite Italy. He went to war against Austria for more territory, simultaneously fostering nationalism as other city-states joined his side."],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
      },
      "Germany 1850-1920": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Otto von Bismarck led German unification. He supported the king of Prussia, the largest and strongest German state. He was very conservative and wanted to keep monarch power. To unite Germany, he tricked other countries into declaring war on Prussia (eg. Seven Weeks' War in 1866 against Austria), then asked other German states to help Prussia, creating a sense of nationality.",
                  "In 1870, Prussia invaded France in the Franco-Prussian War. Being more industrialized and populated, they captured Napoleon III (different from Bonaparte) and forced the French to surrender. This led to the last Catholic German states joining Prussia, and forming Germany in 1871, with the king of Prussia becoming the king of Germany.",
                  "After unification, Otto von Bismarck wanted to keep the peace (and stop France from retaliating after the Franco-Prussian War), so he allied Germany with Russia and Austria-Hungary. This alliance contributed to the escalation of World War I.",
            ],
            "Economy": ["Was the world leader in steel and coal production"],
            "Social": [""],
            "Technology": [""],
      },
      "England 1750-present": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Britain expanded its empire to secure raw materials and markets, using its naval dominance to control global trade routes."],
            "Economy": ["Got cotton, wool, jute, vegetable oil, rubber, coffee, cocoa, meat, and butter from their colonies",
                  "England was able to industrialize first in the 1760s because it had proximity to waterways, allowing it to import and export goods easily, access to coal and iron, large cities, agricultural productivity due to the agricultural revolution, access to foreign resources through colonies, accumulation of capital, legal protection of private property, and political stability.",
                  "Flooded the markets of its competitors. India had been the main producer of cotton, but Britain wanted people to buy British cotton. They began mass production of cotton cloth using their industrialized factories, and imported their cotton to Indian markets, where people would buy the cheaper British cotton rather than the Indian cotton, while also taxing Indian cloth to discourage British from buying Indian cloth. They did the same process in Egypt.",
            ],
            "Social": [""],
            "Technology": ["During the industrial revolution, they developed the spinning jenny, which could spin more than one thread at a time, the water frame, which could power a spinning wheel using water. Textile production began to move to factories instead of homes. They also developed the specialization of labor, leading to the assembly line in the early 1900s.", // econ?
                  "Developed the steam engine, the most important invention of the first industrial revolution. It powered factories, so they didn't need to be next to water anymore and could be in more convenient places, as well as steam boats and locomotives, leading to more efficient transportation."
            ],
      },
      "Egypt": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Controlled by Mamluks until 1516, when it was taken over by the Ottomans. In 1798, Napoleon took control of Egypt for France but withdrew in 1801. The Ottomans wanted Egypt back so they sent a general Muhammad Ali to regain control. Muhammad took power as governor, still technically in the Ottoman Empire but fairly independent.",
                  "Muhammad Ali reformed Egypt and industrialized by taking land from Muslim religious institutions and imposing high cotton taxes that forced peasants to give up their land to the state. The government used this land to grow cotton.",
                  "Muhammad Ali also built a strong European-style military",
                  "England took power in 1882 during the Anglo-Egyptian War",
                  "Suez Canal" // more detail
            ],
            "Economy": ["Muhammad Ali used protective tariffs, making imports more expensive to encourage his people to buy domestic products instead of foreign things. Britain disliked this, so when Muhammad Ali's sons went to war against the Ottomans in an attempt to take over the Ottoman Empire, Britain supported the Ottoman Empire and defeated Egypt. They forced Egypt to stop their protective tariffs, then flooded the market so Egyptian markets couldn't compete. Egypt started to only export cotton and import British goods."],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": [""]
      },
      "British Raj": {
            "Environment": ["Grew cash crops for the British, leading to monocultures, or a lack of agricultural diversity, which left India vulnerable to natural disasters",
                  "Famines occurred partly due to export-oriented agriculture and inadequate relief."
            ],
            "Culture": [""],
            "Governance": ["1858-1947",
                  "The British officially took control of India after the Sepoy Rebellion in 1858, forming the British Raj and ending the rule of the British East India Company",
                  "Indian soldiers fought for Britain in both World Wars.",
                  "Nationalist movements led by figures like Mohandas Gandhi used nonviolent resistance to demand independence, achieved in 1947 with the partition into India and Pakistan"
            ],
            "Economy": ["Industrialized slowly, as the British didn't want to encourage Indian industrialization other than what would help them.",
                  "Many artisans were pushed out of business by the cheap British textiles",

            ],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": [""]
      },
      "Japan 1853-present": {
            "Environment": [""],
            "Culture": [""],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": [""]
      },
      "Template": {
            "Environment": [""],
            "Culture": [""],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": [""]
      },
      //more countries will go here
}
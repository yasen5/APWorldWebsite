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
            "Environment": [""],
            "Culture": [""],
            "Governance": ["Trying to retake the Holy Land (Jerusalem area) from the Muslims, as well as to stop Muslim expansion into Europe",
                  "There were several different crusades from 1095 to about 1270",
                  "The first crusade was the only big Christian victory. They took control of Jerusalem from 1099 to 1187"
            ],
            "Economy": [""],
            "Social": ["Younger sons of nobles often went to fight in the crusades due to primogeniture (only the oldest son would inherit anything"],
            "Technology": ["Increased contact and trade with the Middle East, spreading ideas and technology from the East to Europe, including paper, sugar, and gunpowder" // maybe culture or economic?
            ],
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire 1200-1806"]
      },
      "Black Death": {
            "Environment": ["Spread from China over the Silk Roads",
                  "Killed about 1/3 of Europe's population"
            ],
            "Culture": [""],
            "Governance": [""],
            "Economy": [""],
            "Social": ["Because there was a high demand for labor but so many people had died, serfs were able to gain more power, triggering the end of feudalism in Western Europe"],
            "Technology": [""],
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire 1200-1806"]
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
            applicableCountries: ["France 1200-1450", "England 1200-1450", "Holy Roman Empire 1200-1806"]
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
            "Environment": [],
            "Culture": [],
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
            "Environment": [""],
            "Culture": [""],
            "Governance": ["A war between Catholics and Protestants. It originally started in the Holy Roman Empire, and then it spread",
                  "It resulted in the Peace of Westphalia, where each area of the Holy Roman Empire could choose Roman Catholicism, Lutheranism, or Calvinism"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            applicableCountries: ["England 1450-1700", "France 1450-1700", "Holy Roman Empire 1450-1700", "Spain 1492-1750", "Netherlands 1450-1750"]
      },
      "Enlightenment": {
            "Environment": [],
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
            "Technology": [],
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
            "Culture": [],
            "Governance": [],
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
            "Environment": [],
            "Culture": [],
            "Governance": [],
            "Economy": [],
            "Social": [],
            "Technology": [],
            "Uncategorized": [ "Developed by Karl Marx (1818-1883), who wanted to replace capitalism with socialism",
                  "In 1848 Karl Marx and Freidrich Engels wrote the Commmunist Manifesto, detailing how capitalism produced a lot of money but left many in poverty. They predicted that the middle class would be eliminated so everyone would fall into one of two classes: the bourgeoisie (rich people who owned the means of production) and the proletariat (the working class), and that the proletariat would eventually overthrow the bourgeoisie to form communism"
            ],
            applicableCountries: []
      },
      "Imperialism": {
            "Environment": [],
            "Culture": ["Colonizers would force their culture, language, and religions on the people in their colonies"],
            "Governance": ["The British, French, and Dutch charter companies made treaties with rulers in India, East Africa, and the East Indies to set up ports and forts, which they used for spice trade and to form armies used to conquer the territory and make colonies"],
            "Economy": ["Countries wanted access to more raw materials (especially palm oil, gold, ivory, and diamonds from Africa) as well as new markets, so they made colonies"],
            "Social": [],
            "Technology": [],
            "Uncategorized": ["They justified imperialism using ideas like White Man's Burden (it's white people's responsibility to civilize other people) and Social Darwinism (the idea that white people were superior to other races)", // social? culture?
                  "Having colonies was a way to prove how powerful a nation was", // gov or social maybe idk  
            ],
            applicableCountries: []
      },
      "Berlin Conference 1885": {
            "Environment": [],
            "Culture": [],
            "Governance": ["As imperialism was rising, Europeans fought each other for control in Africa. Otto von Bismarck wanted to keep the peace between the European nations, so he organized the Berlin Conference from 1884-1885",
                  "In the Berlin Conference, the European powers met up to divide Africa peacefully",
                  "Africans had no say in the division, so the borders of the colonies often dividded up tribes into different colonies or grouped rival colonies in the same colony"
            ],
            "Economy": ["It allowed free movement of goods on major rivers"],
            "Social": [],
            "Technology": [],
            applicableCountries: []
      },
      "Great Depression 1929-1939": {
            "Environment": [],
            "Culture": [],
            "Governance": [],
            "Economy": ["Disrupted global economies",
                  "Germany was especially affected because ___"
            ],
            "Technology": [],
            applicableCountries: []
      },
}

export const countryNotes: CountryNotes = {
      "Seljuk Caliphate":{
            "Environment": [""],
            "Culture": [""],
            "Governance": ["1037-1194",
                  "Established state in the declining Abbasid Caliphate",
                  "Conquered Syria and Anatolia",
                  "Didn't collect much tax, and didn't invest in agriculture or infrastructure, leading to the decline of the House of Wisdom and the collapse of the canal system"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
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
            "Social": [],
            "Technology": [],
            "Uncategorized": ["Tribute to China in the form of champa rice"]
      },
      "Goryeo Dynasty": {
            "Environment": [],
            "Culture": ["Confucianism and Mahayana Buddhism spread from China",
                  "Neo-confucianism was adopted as the state ideology"
            ],
            "Governance": [],
            "Economy": [],
            "Social": [],
            "Technology": []
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
            "Environment": [""],
            "Culture": [""],
            "Governance": ["909-1171"],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
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
            "Environment": [""],
            "Culture": [""],
            "Governance": ["1336-1545,",
                  "Founded by two Hindu brothers from the Delhi Sultanate who had converted to Islam in order to rise up in the government. They were sent south to expand the Delhi Sultanate, but instead they established their own Hindu state",
                  "Eventually overthrown by small Muslim kingdoms"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
      },
      "Sinhala Dynasty": {
            "Environment": [""],
            "Culture": [""],
            "Governance": ["600bc to 1900ce"],
            "Economy": ["Imported cloths",
                  "Exported cinammon, pepper, cardamom, elaphants, and gems"
            ],
            "Social": [""],
            "Technology": [""]
      },
      "Khmer Empire": {
            "Environment": [""],
            "Culture": ["Was Hindu, then became Buddhist in the 12th or 13th century. This is reflected in the architecture (eg. Angkor Wat), as they preserved Hindu art alongside new Buddhist art"],
            "Governance": ["802 to 1431",
                  "Conquered by the Sukhothai Empire in 1431"
            ],
            "Economy": [""],
            "Social": [""],
            "Technology": ["There was too much water so they had to build really good irrigation and drainage. They built leeways to protect their buildings from caving in due to water damage."]
      },
      "Majapahit Empire": {
            "Environment": [""],
            "Culture": ["Muslim",
                  "Malacca was Muslim, as the ruler converted to Islam for better relations with Muslim traders, and because the traders would start families while they were waiting in Malacca for seasonal monsoon winds that would aid their journey home",
            ],
            "Governance": ["Malacca fell to the Portuguese in 1511"],
            "Economy": ["Malacca was one of the most important trading ports/cities in the Indian Ocean",
                  "Imported cloth, silver, and ivory",
                  "Exported pepper, nutmeg, and cloves" 
            ],
            "Social": [""],
            "Technology": [""]
      },
      "Mississippi Mound Builders": {
            "Environment": ["Had a very large population"],
            "Culture": ["Built large mounds (the largest of which was called Cahokia)"],
            "Governance": ["8th or 9th century to the 16th century",
            ],
            "Economy": [""],
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
      "Holy Roman Empire 1200-1806": {
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
            "Environment": [""],
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
      "Spanish New World Territory": {
            "Environment": [""],
            "Culture": [""],
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
            "Social": [""],
            "Technology": ["Developed the fluyt, a ship good for trade, used in the 16th nad 17th centuries"],
            "Uncategorized": ["Began exploring in order to find the Northwest Passage to the Indian Ocean",
                  "Henry Hudson claimed the Hudson River Valley and Manhattan for the Netherlands, founding New Amsterdam in 1609"
            ]
      },
      "Mongol Empire": {
            "Environment": [""],
            "Culture": ["Generally very religiously tolerant, and many religions were practiced. All Mongols had some elements of animism."],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": [""],
            "Uncategorized": ["Initially nomadic tribes who were eventually united by Genghis Khan",
            ]
      },
      "Template": {
            "Environment": [""],
            "Culture": [""],
            "Governance": [""],
            "Economy": [""],
            "Social": [""],
            "Technology": [""]
      },
      //more countries will go here
}
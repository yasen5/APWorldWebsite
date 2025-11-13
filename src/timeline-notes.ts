export interface TimelineNotes {
    [event: string] : {
        [section: string]: string[] | [number, number] | string;
        applicableCountries: string[];
        timePeriod: [number, number];
        emphasizedUnit: [number, number];
        theme: string;
    };
}

export const timelineNotes: TimelineNotes = {
    "4th Crusade": {
        timePeriod: [1202, 1204],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "France 1200-1450", "Holy Roman Empire 1200-1806"],
        description: ["The Christians paid Venice to take the soldiers to the Middle East, but they didn't pay Venice enough, so the Venetians made the soldiers sack Zara and Constantinople before letting them continue with the crusades"],
        theme: "governance"
    },
    "Mongol conquest" : {
        timePeriod: [1207, 1260],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Mongol Empire", "Golden Horde", "Il-Khanate", "Yuan Dynasty"],
        description: ["The Mongols, led by Genghis Khan began expanding their empire. They started by attacking the Jin Empire, then moved West to the Middle East.",
            "The Mongols sacked Baghdad in 1258, marking the end of the Abbasid Caliphate.",
            "The Mamluks defeated the Mongols in 1260, ending the Mongol conquest"
        ],
        causes: [""],
        effects: ["End of the Abbasid Caliphate"],
        theme: "governance"
    },
    "Magna Carta signed": {
        timePeriod: [1215, 1215],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450"],
        description: ["The English nobles forced King John to sign the Magna Carta, giving nobles the right to a jury trial before prison and ensuring the king had to consult them on scutage (where knights pay money instead of military service as tax)"],
        causes: ["King John had wanted to charge peasants and cities money, which the nobles did not approve of"],
        effects: [""],
        theme: "governance"
    },
    "Baghdad sacked" : {
        timePeriod: [1258, 1258],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Abbasid Caliphate", "Mongol Empire"],
        description: ["The Mongols sacked Baghdad, slaughtering the people, killing the last Abbasid Caliph, and destroying the House of Wisdom"],
        causes: [""],
        effects: ["End of the Abbasid Caliphate"],
        theme: "governance"
    },
    "English Parliament formed" : {
        timePeriod: [1265, 1265],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450"],
        description: ["The English nobles forced the King to make the Parliament, giving the nobles more power"],
        causes: [""],
        effects: ["Increased nobles' rights"],
        theme: "governance"
    },
    "Marco Polo's Book" : {
        timePeriod: [1295, 1295],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Yuan Dynasty"],
        description: ["Marco Polo's book, the Travels of Marco Polo, was published in 1295, detailing Marco Polo's travels along the Silk Roads to the Yuan Dynasty where he visited Kubilai Khan.",
            "Marco Polo described the Chinese cities, trade, and culture",
            "Marco Polo's book helped increase interest in the East"
        ],
        causes: [""],
        effects: ["Increased European interest in Asia"],
        theme: "culture"
    },
    "Little Ice Age" : {
        timePeriod: [1300, 1850],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "England 1450-1750", "France 1200-1450", "France 1450-1700", "Holy Roman Empire 1200-1806", "Ottoman Empire", "Il-Khanate", "Ming Dynasty", "Spain 1492-1750"],
        description: ["The world experienced cooling for 5 centuries, which made winters colder and shortened growing seasons, affecting agriculture"],
        causes: [""],
        effects: ["Less agricultural production led to limited urbanization",
            "In the Ming Dynasty, the decreased agricultural production led to famines"
        ],
        theme: "environment"
    },
    "Pax Mongolica" : {
        timePeriod: [1206, 1350],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Mongol Empire", "Golden Horde", "Il-Khanate", "Yuan Dynasty"],
        description: ["Once the Mongols had conquered territory, there was a period of relative peace and stability.",
            "The Mongols improved roads and protected them from robbers, fostering more trade and travel"
        ],
        causes: ["Mongol conquest"],
        effects: ["Increased trade"],
        theme: "governance" // econ?
    },
    "Mansa Musa's Pilgrimage" : {
        timePeriod: [1312, 1337],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Mali Empire"],
        description: ["Mansa Musa made an extravagant pilgrimage to Mecca, displaying Mali's wealth through bringing slaves and gold",
            "Built mosques and madrasas (boys' schools about Islam) along the way",
            "The gold Mansa Musa brought caused inflation and crashed economies"
        ],
        causes: ["Mansa Musa wanted to display Mali's wealth"],
        effects: ["Crashed economies",
            "Brought Mali fame"
        ],
        theme: "culture" //?
    },
    "Hundred Years' War" : {
        timePeriod: [1337, 1453],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "France 1200-1450"],
        description: ["France and Britain fought over territory",
            "England was winning in the beginning, but by the end they were pushed almost completely out of France",
            "Joan of Arc fought on the side of the French",
            "Saw increased usage of gunpowder as it spread from the East"
        ],
        causes: ["England wanted French territory"],
        effects: ["Increased nationalism over regionalism in France and England"],
        theme: "governance"
    },
    "Black Death" : {
        timePeriod: [1347, 1353],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "France 1200-1450", "Holy Roman Empire 1200-1806", "Venice"],
        description: ["The Black Death spread from China along the Silk Roads to the Middle East and Europe",
            "Almost 1/3 of the European population died"
        ],
        causes: ["The Silk Roads and Pax Mongolica allowed the plague to spread more easily"],
        effects: ["Caused the end of feudalism and serfdom. Since there were so few workers after so many deaths, the serfs were able to demand more rights.",
            "Led to urbanization as peasants migrated to cities for work"
        ],
        theme: "environment"
    },
    "Renaissance" : {
        timePeriod: [1400, 1600],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Venice", "France 1200-1450", "Holy Roman Empire 1200-1806", "Spain 1492-1750", "England 1200-1450"],
        description: ["A revival of interest in classical Greek and Roman arts. They still depicted Christian art, but began to depict Greek, Roman, and Pagan art as well",
            "The Gutenberg press, invented in 1439, allowed for more literacy",
            "Humanism, focusing on the individual instead of God, was created. This movement included more education and secular books",
            "Universities began to include humanities",
            "Vernacular (local languages) were used more as opposed to Latin, enabling more people to learn to read."
        ],
        causes: ["Increased contact with the East reexposed the Europeans to older ideas"],
        effects: ["Increased literacy rates"],
        theme: "culture"
    },
    "Zheng He voyages" : {
        timePeriod: [1403, 1424],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Ming Dynasty"],
        description: ["Zheng He, under Emperor Yongle, made 7 voyages around the Indian Ocean. They brought gifts to local rulers in exchange for tribute",
            "Brought exotic goods back to China, such as giraffes",
            "Exposed China to different religions",
            "Stopped because the voyages were too expensive and the emperors after Yongle did not support them because they believed China was self-sufficient."
        ],
        causes: ["Yongle wanted to show China's power"],
        effects: ["Exposed China to different religions"],
        theme: "governance"
    },
    "Gutenberg Printing Press invented" : {
        timePeriod: [1439, 1439],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Venice", "France 1200-1450", "Holy Roman Empire 1200-1806", "Spain 1492-1750", "England 1200-1450"],
        description: ["Johannes Gutenberg invented the movable type printing press. This allowed books to be printed easier and cheaper, increasing availability and decreasing costs of books, leading to increased literacy rates"],
        causes: [""],
        effects: ["Increased literacy rates"],
        theme: "technology"
    },
    "Sikhism founded" : {
        timePeriod: [1469, 1469],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Mughal Empire"],
        description: ["Sikhism is a monotheistic religion influenced by Hindu and Islam.",
            "Sikhism was initially tolerated until Aurangzeb killed the 9th guru"
        ],
        causes: [""],
        effects: [""],
        theme: "culture"
    },
    "Diaz sails around the Cape of Good Hope" : {
        timePeriod: [1488, 1488],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Portugal 1450-1750"],
        description: ["Bartholomew Diaz sailed around the Cape of Good Hope (Southern tip of Africa) into uncharted waters.",
            "He had to turn back due to crew mutinies"
        ],
        causes: ["Desire to find a new route to the Indian Ocean",
            "State sponsorship for explorers"
        ],
        effects: ["Spur further exploration to the Indian Ocean"],
        theme: "governance"
    },
    "End of the Inquisition" : {
        timePeriod: [1492, 1492],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Spain 1492-1750"],
        description: ["The Spanish Catholics drove out the remaining Muslims and Jews on the Iberian Peninsula. Portugal had already driven them out in 1249"],
        causes: [""],
        effects: [""],
        theme: "social"
    },
    "Christopher Columbus lands in America" : {
        timePeriod: [1492, 1492],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Spain 1492-1750"],
        description: ["Christopher Columbus had tried in 1485 and 1488 to get support from the Portuguese monarchs to sail West, but failed. He finally got support from Spanish Queen Isabella and King Ferdinand in 1492",
            "Used knowledge of winds to help them on their journey",
            "Landed on the island of Hispaniola, which was later called Saint Domingue and is now Haiti and the Dominican Republic",
            "Thought he had landed in the Indian Ocean"
        ],
        causes: ["Europe was looking for a different path to the Indian Ocean because Venice and the Ottoman Empire had monopolized trade going to the Indian Ocean"],
        effects: ["Interest in the Americas rose and people began colonizing it",
            "Columbian Exchange - the exchange of plants, animals, and diseases between the Old and New World. Led to massive population decrease among the Native Americans due to disease and massive population increase in the New World due to new foods",
            "Started the precedent of exploiting the natives"
        ],
        theme: "Environment, Governance, Economy"
    },
    "Treaty of Tordesillas" : {
        timePeriod: [1494, 1494],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Spain 1492-1750", "Portugal 1450-1750"],
        description: ["Spain and Portugal split the world with the Line of Demarcation. Any new territory discovered west of the line, including most of the Americas and the Philippines, was reserved for Spain, while any territory east of the line, including Africa and the Indian Ocean, was reserved for Portugal."],
        causes: ["Desire for territory in the New World and Indian Ocean for resources and trade"],
        effects: ["Established the precedent of European powers claiming territory without the inhabitants' input"],
        theme: "governance"
    },
    "Vasco Da Gama sails to India" : {
        timePeriod: [1498, 1498],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Portugal 1450-1750", "Delhi Sultanate"],
        description: ["Vasco Da Gama sailed to India and tried to establish trade with the Indians, but they rejected him",
            "He returned with weapons to force them to trade with him"
        ],
        causes: [""],
        effects: ["Established ports for trade in the Indian Ocean",
            "Began to take control in India"
        ],
        theme: "governance"
    },
    "Portuguese conquer Malacca" : {
        timePeriod: [1511, 1511],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Portugal 1450-1750", "Majapahit Empire"],
        description: ["The Portuguese took control of the Malacca, effectively ending the Majapahit Empire"],
        causes: ["The Portuguese wanted to expand their power and influence in the Indian Ocean to force trade"],
        effects: [""],
        theme: "governance"
    },
    "Battle of Chaldiran" : {
        timePeriod: [1514, 1514],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Ottoman Empire", "Safavid Empire"],
        description: ["The Ottomans defeated the Safavids, stopping their expansion and establishing the border between the two empires."],
        causes: [""],
        effects: ["Established the border between the Ottoman and Safavid Empire",
            "Stopped Safavid expansion"
        ],
        theme: "governance"
    },
    "Lutheranism created" : {
        timePeriod: [1517, 1517],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Holy Roman Empire 1200-1806"],
        description: ["Martin Luther wrote the 95 Theses detailing the Church's violations of biblical teachings. His complaints included indulgences, where people could pay to redeem themselves from sin, and simony, where chuch offices were sold to the younger sons of nobles. These were both practices that were put into place for the Church to gain more money. Additionally, Luther wanted the bible in the vernacular instead of only in Latin so it would be more accessible, and interpretations wouldn't be controlled purely by the church",
            "Lutheranism promoted literacy and gave women more religious equality by fostering the idea that women didn't need men as intermediaries",
            "Martin Luther was excommunicated in 1521",
            "Spread quickly because of the use of the printing press",
            "Luther aimed to convert political leaders by saying that their money was going to frivolous things such as St. Peter's Basilica, and taking advantage of the fact that political leaders didn't like sharing their power with the Pope",
            "Lutheranism became super popular and launched social revolutions"
        ],
        causes: ["The Catholic church was corrupt"],
        effects: ["Started the Protestant movement"],
        theme: "culture"
    },
    "Battle of Panipat" : {
        timePeriod: [1526, 1526],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Mughal Empire", "Delhi Sultanate"],
        description: ["The Mughal Empire fought the declining Delhi Sultanate. The Mughals were vastly outnumbered, and the Delhi Sultanate had war elephants, but the Mughals won because they had gunpowder weapons"],
        causes: [""],
        effects: ["Fall of the Delhi Sultanate, rise of the Mughal Empire"],
        theme: "governance"
    },
    "Calvinism founded" : {
        timePeriod: [1530, 1530],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["France 1450-1750"],
        description: ["John Calvin founded Calvinism, and wrote a book on it in 1536",
            "Calvinists believed in predestination, where God had already predetermined who would go to heaven. They thought that being predestined to go to heaven, or being one of the Elect, was shown through hard work and wealth, which led to a very strict lifestyle in order to prove to others that they were part of the Elect"],
        causes: ["Lutheranism opened the doors for the Protestant Reformation"],
        effects: [""],
        theme: "culture"
    },
    "Scientific Revolution" : {
        timePeriod: [1540, 1680],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1750", "France 1450-1750", "Holy Roman Empire 1200-1806", "Spain 1492-1750", "Portugal 1450-1750"],
        description: ["Started promoting thought based on reason instead of faith",
            "In 1620, Francis Bacon created the idea of empiricism, where one must collect evidence to back up a hypothesis",
            "Sir Isaac Newton made scientific discoveries based on ideas of the scientific revolution."
        ],
        causes: ["Renaissance"],
        effects: ["Enlightenment"],
        theme: "culture"
    },
    "Battle of Tondibi" : {
        timePeriod: [1591, 1591],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Morocco", "Songhai Kingdom"],
        description: [""],
        causes: [""],
        effects: [""],
        theme: "governance"
    },
    "Edict of Nantes" : {
        timePeriod: [1598, 1598],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["France 1450-1750"],
        description: ["King Henry IV of France (also known as Henry of Navarre) signed the Edict of Nantes, which gave Huguenots (French Protestants) more rights and religious tolerance",
            "The Edict was revoked by Louis XIV in 1685"
        ],
        causes: ["Rise of Lutheranism"],
        effects: [""],
        theme: "governance"
    },
    "Enlightenment" : {
        timePeriod: [1688, 1789],
        emphasizedUnit: [1750, 1900],
        applicableCountries: ["England 1750-1900", "France 1750-1920", "United States 1776-1900", "Spanish Territory", "Brazil", "Philippines", "Saint Domingue/Haiti"],
        description: ["Socialism, the idea where the public owns the means of production, was developed",
            "Adam Smith developed the idea of laissez-faire economics, where the government would not interfere with economic decisions. This was the foundation for capitalism and the free market. He believed that capitalism would protect against poverty better than mercantilism had",
            "Liberalism valued natural rights, a constitutional government, laissez-faire economics, and reductions to the money spent on the army and church. It was supported mainly by professionals and academics, as well as by the British Parliament",
            "Conservatism, generally supported by the ruling class, valued traditions and religion over new ideological theories",
            "Thomas Hobbes believed that humans were naturally bad, and that they had to give up their rights to the government in exchange for order",
            "John Locke, known as the Father of Liberalism, thought that people have natural rights (rights for all humans that couldn't be infringed upon by the government) to life, liberty, and the pursuit of property. He also believed that there was a social contract, where the government was obligated to protect its people's natural rights, and it was the responsibility of the people to revolt against the government if it was unjust. He developed the idea of tabula rasa, where people were born as a blank slate and are shaped by their environment and education, as opposed to the traditional belief that better ancestry would lead to more intelligence. This idea essentially went against the idea of absolute monarchy",
            "Voltaire believed in constitutional monarchies, religious freedom, and freedom of speech",
            "Jean-Jacques Rousseau developed the idea of the social contract after Locke and the new idea of the general will of the population, where decisions would be made based on the will of the majority. This was the start of democracy, and a big threat to monarchs",
            "Baron Montesquieu believed supported monarchies, but not absolute monarchies. He wanted to check the monarch's power, so he developed the idea of separating the executive, legislative, and judicial powers, as well as the idea of checks and balances. His ideas influenced the American and French constitutions",
            "Deism, the belief that God set natural laws in motion but does not interfere after, became prevalent among Enlightenment thinkers",
            "Atheism, the rejection of religious beliefs, became more common"],
        causes: ["Scientific Revolution"],
        effects: ["Revolutions like the American, French, Haitian, Philippine, and Latin American Revolutions",
            "Challenged church authority"
        ],
        theme: "culture"
    },
    "Japan isolationist" : {
        timePeriod: [1614, 1853],
        emphasizedUnit: [1750, 1900],
        applicableCountries: ["Japan 1200-1853"],
        description: ["The Shogun felt that the Europeans were spreading Christianity to use it as a tool to take over so they banned Christianity, ended all trade with all countries except for China and a limited amount with the Netherlands",
            "The shogunate tortured and killed Japanese Christians, as well as any Europeans",
            "Commodore Matthew Perry, from America, brought warships in 1853 to threaten Japan until they agreed to open to the West again"
        ],
        causes: ["Europeans arriving in Japan and spreading Christianity"],
        effects: ["Helped Japan retain its culture and internal stability",
            "Lack of modernization until Japan reopened"
        ],
        theme: "governance"
    },
        "Thirty Years' War" : {
        timePeriod: [1618, 1648],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1700",
            "France 1450-1700",
            "Holy Roman Empire 1200-1806",
            "Spain 1492-1750",
            "Netherlands 1450-1750"
        ],
        description: ["A war between Catholics and Protestants. It originally started in the Holy Roman Empire, and then it spread",
            "It resulted in the Peace of Westphalia, where each area of the Holy Roman Empire could choose Roman Catholicism, Lutheranism, or Calvinism"
        ],
        causes: ["The Protestant Reformation"],
        effects: ["The Peace of Westphalia"],
        theme: "governance"
    },
    "Gloucester County Rebellion" : {
        timePeriod: [1663, 1663],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["British Territory"],
        description: ["The first recorded slave revolt",
            "In Virginia, slaves wanted more freedom and better conditions, so they started planning a revolt",
            "They were betrayed by a servant and were killed before their plans went through"
        ],
        causes: ["Mistreatment of slaves"],
        effects: [""],
        theme: "governance"
    },
    "Bacon's Rebellion" : {
        timePeriod: [1676, 1676],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["British Territory"],
        description: ["The Virginia governor, William Berkeley, ran a corrupt regime, giving his supporters land grants.",
            "Freed indentured servants wanted land to have status and voting rights but there wasn't enough land. Nathaniel Bacon proposed expanding the colony onto Native land but the governor refused",
            "Nathaniel Bacon rallied indentured servants, as well as some slaves, to overthrow the governor and burn Jamestown. They were eventually overthrown and killed"
        ],
        causes: ["The Virginia colonial government was corrupt",
            "Indentured servants were unhappy because there wasn't enough room for them to get land once they were freed"
        ],
        effects: ["Decline of indentured servitude"],
        theme: "governance"
    },
    "Pueblo Revolt" : {
        timePeriod: [1680, 1680],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Spanish Territory"],
        description: ["The Spanish mistreated the native Pueblo and Apache in the American Southwest. They used the Encomienda System to extract agricultural resources and forced the natives to convert to Catholicism",
            "Unhappy, the native tribes banded together and coordinated to overthrow the Spanish settlers. They used knotted rope to coordinate the revolt, untying a knot every day until the revolt.",
            "The Pueblo successfully drove out the Spanish, burning churches, killing 400, and retaking their territory and religion for 12 years until the Spanish reconquered the area. This was one of the only example of a successful native revolt against European settlers"
        ],
        causes: ["Spanish mistreatment and exploitation of the natives"],
        effects: ["The Pueblo regained independence for 12 years",
            "Ensured more tolerance once the Spanish reconquered the area"
        ],
        theme: "governance"
    },
    "English Bill of Rights" : {
        timePeriod: [1689, 1689],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1750"],
        description: ["This checked the British monarch's power, ending divine right",
            "Increased individual liberties, such as the right to be tried before conviction",
            "Gave British Parliament a say in taxation and military"
        ],
        causes: ["The British monarch having too much power"],
        effects: ["Limited monarch's power",
            "Increased individuals' and parliament's power"
        ],
        theme: "governance"
    },
    "Tulip Period" : {
        timePeriod: [1718, 1730],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Ottoman Empire"],
        description: ["Dutch tulips became extremely popular in the Ottoman Empire. People would spend large amounts of money to buy them",
            "Elites would make tulip gardens and throw extravagant parties to show them off. Tortoises with candles on their backs were sometimes used as a lavish way to light the gardens"
        ],
        causes: [""],
        effects: [""],
        theme: "culture"
    },
    "Seven Years' War" : {
        timePeriod: [1754, 1763],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1750", "France 1450-1750"],
        description: ["Britain and France fought over territory. This war played out both in the Indian Ocean and in North America (known as the French and Indian War there, from 1756-1763)",
            "Britain won, driving France out of India and North America"
        ],
        causes: ["Competition over territory in India and North America"],
        effects: ["French were driven out of India and North America"],
        theme: "governance"
    },
    "World War II": {
        timePeriod: [1938, 1945],
        emphasizedUnit: [1900, 2000],
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
        description: [""],
        causes: [""],
        effects: [""],
        theme: "governance"
    },
}
// events will go here
// "Template" : {
//         timePeriod: [1, 1],
//         emphasizedUnit: [1, 1],
//         applicableCountries: [""],
//         description: [""],
//         causes: [""],
//         effects: [""],
//         theme: ""
//     },
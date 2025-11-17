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
       description: ["Morocco sent its army to the Songhai Empire try to take control of its gold fields.",
           "A lot of the Moroccan army died while crossing the Sahara",
           "The Songhai greatly outnumbered the Moroccans and had the advantage of war cattle",
           "However, the Songhai had gunpowder weapons which were much more effective and deadly. The weapons scared the cattle and turned them against the Songhai. This allowed the Moroccans to win",
           "The Moroccans required the Songhai to pay an annual tribute of slaves and gold"],
        causes: ["Morocco wanted access to Songhai gold fields"],
        effects: ["Decline of the Songhai Kingdom",
            "Strengthening of the Moroccan Empire with the annual tribute of slaves and gold"
        ],
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
        applicableCountries: ["England 1750-1900", "France 1750-1920", "United States 1776-1920", "Spanish Territory", "Brazil", "Philippines", "Saint Domingue/Haiti"],
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
    "Industrial Revolution" : {
       timePeriod: [1760, 1840],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["England 1750-Present"],
       description: ["England began industrializing, focusing on the textile industry. They shifted from the cottage industry, where families bought raw cotton and made cloth at home, to mass producing cloth in factories",
           "Essential inventions included the spinning jenny, allowing more than one thread to be spun at a time, the power loom, which used steam power to weave fabric more efficiently, and the water frame, allowing water power to power spinning wheels",
           "Other inventions included the steam engine in 1865, which allowed for steam locomotives, steam boats, and factories farther from water, and the Bessemer Process in 1856, which allowed steel to be produced cheaply"
       ],
       causes: ["Proximity to waterways, geographical distribution of coal and iron, urbanization, agricultural productivity, access to foreign resources, accumulation of capital, legal protection of private property, political stability"],
       effects: ["Urbanization",
           "Growth of the middle class, formation of the working class",
           "Pollution, resource depletion",
           "Reform movements, labor unions",
           "Consumerism, industrial capitalism"
       ],
       theme: "economy"
   },
   "American Revolution" : {
       timePeriod: [1776, 1783],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1920"],
       description: ["The "],
       causes: ["Englightenment ideas like consent of the governed, natural rights, and laissez-faire economics",
           "Increased taxation after the Seven Years' War"
       ],
       effects: ["American independence",
           "Inspired other revolutions like the French and Haitian revolution",
           "Did not affect women's, Native Americans', or African Americans' rights"
       ],
       theme: "governance"
   },
   "French Revolution" : {
       timePeriod: [1789, 1799],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["France 1750-1920"],
       description: ["The commoners stormed the Bastille on July 14, 1789. In October, they stormed Versailles and made the king make the monarchy constitutional (they didn't want to kill him, they only wanted him to make things better)",
           "Became the First French Republic (constitutional monarchy) in 1792. Monarch power was limited, and the National Assembly had a lot of power. They stopped feudalism and made the Declaration of the Rights of Man and Citizen. The King was unhappy with this new government and tried to veto a lot of things",
           "Eventually, the Jacobins, extreme revolutionaries, were elected. They wanted to end the monarchy, the church's power, and slavery, and killed anyone (including the king and queen) who were “against” the revolution (could have been for any reason) in the 1793 Reign of Terror.",
           "Ended when Napoleon took over in a coup d'état"
       ],
       causes: ["Unfair representation of the majority of the population in the Estates System",
           "Lost money from wars like the American Revolution and the Seven Years' War"
       ],
       effects: ["Inspired the Haitian Revolution"],
       theme: "governance"
   },
   "Haitian Revolution" : {
       timePeriod: [1791, 1804],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Saint Domingue/Haiti"],
       description: ["The revolution started in 1792 and continued to gain more people. Toussaint L'Ouverture, who became the leader of the revolution, joined the movement in 1794. They allied with the Spanish and then drove out the Spanish and British",
           "In 1801, Toussaint L'Ouverture established the Haitian government and constitution, creating equal rights and citizenship, and abolishing slavery and racism. However, he made himself the governor for life and gave himself all the power",
           "In 1804, Napoleon reinstated slavery and imprisoned Toussaint L'Ouverture. Haiti fought for independence because they didn't want slavery and gained full independence that year."
       ],
       causes: ["French and American revolutions",
           "Wanted more rights"
       ],
       effects: ["Haiti gained independence",
           "Other countries refused to acknowledge Haiti's independence",
           "Haiti had to pay large reparations to France, leading them to remain a very poor country"
       ],
       theme: "governance"
   },
   "Dutch East India Company depowered" : {
       timePeriod: [1799, 1799],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Netherlands 1450-1800"],
       description: ["The Dutch East India Company was corrupt and mismanaged, leading to them becoming bankrupt.",
           "When the company was declared bankrupt, the government depowered the company and took their possessions, including territories"
       ],
       causes: ["The VOC was mismanaged and corrupt, leading to bankruptcy"],
       effects: ["The Netherlands government took control of the VOC's possessions including the Dutch East Indies"],
       theme: "economy"
   },
   "Britain bans slave trade" : {
       timePeriod: [1807, 1807],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["England 1750-1900", "British Territory"],
       description: ["Britain banned slave trade in their territories. They also began to intercept ships carrying slaves and taking them to Sierra Leone, where the slaves would be freed"],
       causes: [""],
       effects: ["Decrease slave trade"],
       theme: "social, economy"
   },
   "United States bans slave trade" : {
       timePeriod: [1808, 1808],
       emphasizedUnit: [1750, 11900],
       applicableCountries: ["United States 1776-1920"],
       description: ["The United States banned international slave trade. However, domestic slave trade and slavery continued until 1865"],
       causes: [""],
       effects: ["Decrease slave trade",
           "Did not stop slavery or domestic slave trade within the United States"
       ],
       theme: "social, economy"
   },
   "Mexican Revolution" : {
       timePeriod: [1810, 1821],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Mexico 1885-Present", "Spain 1750-Present"],
       description: ["Delcared independence in 1810",
           "The revolution was led by Padre Miguel Hidalgo, who was very liberal. He was killed very quickly, then Iturbide led the revolution",
           "The creoles originally sided with the commoners against the peninsulares, but when Hidalgo's followers attacked creoles along with peninsulares, the creoles switched sides to side with the peninsulares",
           "The creoles switched sides again when the Spanish government stopped supporting the castas system. The creoles wanted to keep the castas system so they could remain at the top of the hierarchy"
       ],
       causes: ["Creoles wanted more rights and independence from Napoleon"],
       effects: ["Mexico gained independence as a republic"],
       theme: "governance"
   },
   "European suppression of democratic reforms" : {
       timePeriod: [1815, 1848],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["France 1750-1920", "England 1750-Present", "Spain 1750-Present"],
       description: ["European monarchies suppressed the ideas of democracy in order to retain power and prevent revolutions"],
       causes: ["Revolutions like the French Revolution that depowered the monarchies"],
       effects: [""],
       theme: "governance"
   },
   "Brazilian Revolution" : {
       timePeriod: [1822, 1822],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Brazil", "Portugal 1750-Present"],
       description: ["The Portuguese monarchy fled to Brazil when Napoleon was conquering the Iberian Peninsula",
           "The creoles liked having their own government in Brazil instead of a colonial government, so Prince Pedro stayed behind in Brazil when the rest of the royal family returned to Portugal",
           "Prince Pedro declared Brazil an independent monarchy and became the king of Brazil in 1822"
       ],
       causes: ["Enlightenment ideals",
           "Napoleon invaded Portugal"
       ],
       effects: ["Brazil gained independence",
           "Continuation of slavery until 1888"
       ],
       theme: "governance"
   },
   "Monroe Doctrine" : {
       timePeriod: [1823, 1823],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1920"],
       description: ["John Quincy Adams made a statement saying that European nations should not intervene in the Western Hemisphere, and the US would not interefere in European wars.",
           "European countries were still allowed to keep their colonies but could not retake the colonies that had already gained independence",
           "Allowed the United States to be the main power in the Americas",
           "The Roosevelt Corollary was added in 1904, saying that the United States had the duty to intervene if Latin American countries were unstable. This allowed them to dominate economically"
       ],
       causes: ["European countries were seeking more territory in the Americas and to retake their old Latin American colonies"],
       effects: ["Latin American countries could keep their independence",
           "The United States became the major power in the Western Hemisphere"
       ],
       theme: "governance"
   },
   "Greek Independence" : {
       timePeriod: [1827, 1827],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Greece", "Ottoman Empire"],
       description: ["The Greek declared independence from the Ottoman Empire with aid from the British, French, and Russians who wanted to weaken the Ottoman Empire"],
       causes: ["Greek nationalism"],
       effects: ["Weaken Ottoman Empire",
           "Other regions of the Ottoman Empire started wanting independence",
           "The Ottoman Empire made the Tanzimat reforms to suppress regional nationalism and promote Ottoman nationalism"
       ],
       theme: "governance"
   },
   "British bans slavery" : {
       timePeriod: [1833, 1833],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["England 1750-Present", "British Territory"],
       description: ["The British banned slavery, ending it in all of their colonies. However, exploitative measures were still used."],
       causes: [""],
       effects: ["Increased efforts to stop slavery in other countries by stopping slave ships and freeing the slaves"],
       theme: "social, economy"
   },
   "Tanzimat Reforms" : {
       timePeriod: [1839, 1876],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Ottoman Empire"],
       description: ["Promoted Ottoman nationalism and unity",
           "Tried to stop government corruption",
           "Made schools secular so the government, instead of religious officials, could control it",
           "Codified Ottoman laws, made penal code, and commercial code, which made foreign trade more attractive",
           "Had more, but not complete, religious equality",
           "Stopped by Sultan Abdulhamid in 1876. He was scared that the reforms would lead to rebellion, so stopped the reforms. This, however, made people more mad and led to the Armenian Genocide"
       ],
       causes: ["Increased regional nationalism, which could lead to independence"],
       effects: ["Increased religious tolerance",
           "Increased Ottoman Nationalism",
           "Armenian Genocide"
       ],
       theme: "governance"
   },
   "Opium Wars" : {
       timePeriod: [1839, 1860],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty", "England 1750-Present"],
       description: ["England wanted more Chinese goods but had nothing the Chinese wanted, so England began importing opium so the population would get addicted and China would need to trade their goods in exchange for more opium",
           "China asked England to stop selling them opium, but the British refused, so China declared war",
           "The First Opium War lasted from 1839 until the Treaty of Nanking in 1842. This gave the British an advantage, forcing free trade, giving the British Hong Kong, access to 4 more ports, extraterritorial rights (so British merchants didn't have to obey Chinese laws, allowing them to continue selling opium even though the government banned it), and first nation trading rights status",
           "In 1856, The Chinese searched a British ship, lowered its flag, and arrested its sailors, starting the Second Opium War",
           "The Second Opium War lasted from 1856 to 1860, until the Treaty of Tientsin. This gave the British more advantages, like being able to send foreign envoys to Beijing, open more ports, have more freedom of movement for Christian missionaries, gaining part of the Kowloon Peninsula, and legalizing opium"
       ],
       causes: ["The British wanted more economic advantages in China"],
       effects: ["Gave Britain and other Western countries more advantages and spheres of influence"],
       theme: "economic"
   },
   "Treaty of Waitangi" : {
       timePeriod: [1840, 1840],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory", "England 1750-Present"],
       description: ["This treaty established New Zealand as a colony and gave the native Maori property rights, although those were largely ignored by settlers"],
       causes: ["British imperialism"],
       effects: ["The Maori Wars were caused because the settlers ignored Maori property rights"],
       theme: "governance"
   },
   "Maori Wars" : {
       timePeriod: [1845, 1872],
       emphasizedUnit: [1845, 1851],
       applicableCountries: ["British Territory", "England 1750-Present"],
       description: ["The British settlers and Maori fought over territory and property rights",
           "Ended with British victory in 1846",
           "In 1850s, the Maori didn't want to sell their property, so the government responded with troops to pressure them to sell. This led to a second series of wars until 1872"
       ],
       causes: ["British imperialism"],
       effects: ["Maori lost most of their land",
           "Increased settler power"
       ],
       theme: "governance"
   },
   "Great Famine" : {
       timePeriod: [1845, 1852],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Ireland", "United States 1776-1920"],
       description: ["A blight decimated the potatoes in Ireland, causing massive famines and the deaths of about a million people",
           "An additional 3 million people migrated to the United States, England, Scotland, Canada, and Australia"
       ],
       causes: ["Reliance on potatoes"],
       effects: ["Emigration from Ireland"],
       theme: "environment"
   },
   "Mexican-American War" : {
       timePeriod: [1846, 1848],
       emphasizedUnit: [1, 1],
       applicableCountries: ["Mexico 1885-Present", "United States 1776-1920"],
       description: ["The United States provoked war with Mexico in order to gain more territory"],
       causes: ["The United States wanted Mexican territory in order to expand to the West Coast"],
       effects: ["Mexico lost 55% of its territory",
           "The United States gained California, Nevada, Utah, Arizona, New Mexico, and parts of Colorado, Wyoming, Oklahoma, and Kansas, as well as expanded Texan territory"
       ],
       theme: "governance"
   },
   "Communist Manifesto" : {
       timePeriod: [1848, 1848],
       emphasizedUnit: [1, 1],
       applicableCountries: [""],
       description: ["Karl Marx and Friedrich Engels wrote a manifesto promoting communism.",
           "They said that capitalism, while producing a lot of money, did nothing about poverty",
           "They predicted taht everyone would eventually fall into one of two classes, the Proletariat (the working class), and the Bourgeoisie (the upper class), with the middle class eliminated",
           "They thought the proletariat would eventually overthrow the bourgeoisie and form communism, where all the people owned the means of production, instead of just the wealthy, and class distinctions would not exist anymore",
           "They were wrong; the middle class ended up growing instead"
       ],
       causes: ["Increasing gap between classes due to the Industrial Revolution"],
       effects: ["Spread of communism"],
       theme: "culture"
   },
   "Taiping Rebellion" : {
       timePeriod: [1850, 1864],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty"],
       description: ["Hong Xiuquan was angry because he had failed the Civil Service Exam several times.",
           "He rallied others and started the Taiping Rebellion, rejecting the Qing Dynasty because they had failed to solve the population's problems, including the opium addictions and famines",
           "The rebellion ultimately failed, as the Qing Dynasty got support from Europeans, who wanted to ensure that the Qing Dynasty was weak but not overthrown"
       ],
       causes: ["Qing government's incompetence in solving issues like famines and opium addictions"],
       effects: ["Showed the weakness of the government"],
       theme: "governance"
   },
   "Opening of Japan" : {
       timePeriod: [1853, 1853],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Japan 1853-Present", "United States 1776-1920"],
       description: ["President Zachary Taylor sent Commodore Matthew Perry to reopen Japan from its isolationist policies",
           "Commodore Perry first arrived in 1852 with warships and threatened to burn a village to the ground if they didn't let him land. Instead of landing at Nagasaki, the only port open to foreigners, he landed in Edo, the capital",
           "Perry told the sick shogun that he had a year to decide whether to negotiate trade with the Americans",
           "Other countries, hearing about Perry's journey, began to request similar things, so Perry instead returned in 6 months with warships known as the Black Ships",
           "Japan signed the Treaty of Kanegawa, giving in to all of America's demands"
       ],
       causes: ["American economic imperialism, Manifest Destiny"],
       effects: ["End of Japanese isolationsim, beginning of modernization and industrialization"],
       theme: "governance"
   },
   "Xhosa Cattle Killing Movement" : {
       timePeriod: [1856, 1857],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory"],
       description: ["The Xhosa cattle were sick, and Nongqawuse, a teenage Xhosa, prophesied that if the Xhosa killed their cows and burned their crops, the spirits would restore them and drive the settlers away",
           "The Xhosa followed her orders, but it only led to a famine in which 40,000 people starved.",
           "The famine was worsened because the colonial government intentionally kept relief agencies away to weaken the Xhosa population and pressure them to work for the British as a means of getting money and food, and thus assimilating"
       ],
       causes: ["Cattle sickness",
           "Xhosa wanted the British settlers gone"
       ],
       effects: ["Weakened the Xhosa and forced them to assimilate"],
       theme: "culture"
   },
   "Sepoy Mutiny" : {
       timePeriod: [1857, 1857],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory", "England 1750-1900"],
       description: ["The British had armed forces in India called Sepoys, most of whom were Hindu or Muslim.",
           "The British began using pig and cow fat to grease rifle cartridges. This angered the sepoys because they had to bite the cartridges and it would go against their religions",
           "The British imprisoned the sepoys who refused to use these new cartridges, so the sepoys rebelled",
           "The sepoys were unable to defeat the British due to a lack of unity due to differing languages, the caste system, and a lack of nationalism. Additionally, the Sikhs sided with the British"
       ],
       causes: ["The British forced the sepoys to use animal fat catridges"],
       effects: ["Start of the British Raj",
           "Dismantling of the British East India Company, as the British government directly ruled India"
       ],
       theme: "governance"
   },
   "Self-Strengthening Movement" : {
       timePeriod: [1861, 1895],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty"],
       description: ["The government strengthened the military, trained artisans, and made a diplomatic corps as part of their effort to modernize",
           "They only added modern ideas to their traditions instead of fully reforming, so it was not as effective",
           "Conservatives really disliked the modernization"
       ],
       causes: ["Pressure to modernize"],
       effects: ["Some industrial reform, but showed Qing weakness"],
       theme: "governance"
   },
   "French-Mexican War" : {
       timePeriod: [1863, 1867],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Mexico 1885-Present"],
       description: ["In 1857 the Liberals, led by Benito Juaréz, made a new constitution. The conservatives disliked this and started a civil war. Juaréz borrowed heavily from Europe to win the war",
           "France had been wanting Mexico as a colony and used its debt as an excuse to invade, as well as the fact that the United States wouldn't intervene because they were engaged in their own civil war",
           "In 1863, the Mexican conservatives, with the support of Napoleon III, overthrew Juaréz. The French put the Austrian noble Archduke Maximillian as the emperor of Mexico, establishing a puppet government",
           "In 1867, the Mexicans drove the French out of Mexico with the help of the Americans (who had concluded their civil war), exiled Archduke Maximillian, and put Juaréz back in power",
           "Juaréz, though, went against his own constitudion and remained president for longer than was specified"
       ],
       causes: ["French imperialism",
           "Civil war in Mexico between liberals and conservatives"
       ],
       effects: ["France established a short-lived puppet emperor"],
       theme: "governance"
   },
   "US bans slavery" : {
       timePeriod: [1865, 1865],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1920"],
       description: ["The Emancipation Proclamation in 1863 freed slaves in Confederate territories, but the 13th Amendment freed slaves nationally"],
       causes: ["Civil War and abolitionist movement"],
       effects: ["Reconstruction"],
       theme: "social, economic"
   },
   "Seven Weeks' War" : {
       timePeriod: [1866, 1866],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Germany 1850-1920"],
       description: ["Otto von Bismarck tricked Austria into declaring war on Prussia",
           "He then called on other German states to help Prussia, creating a sense of German nationality that allowed him to unite the states as Germany"
       ],
       causes: ["Otto von Bismarck needed to unite German states to make Germany"],
       effects: ["German Unification"],
       theme: "governance"
   },
   "Meiji Restoration" : {
       timePeriod: [1868, 1868],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Japan 1853-Present"],
       description: ["Power was restored from the shogun to the emperor",
           "The Charter Oath was created, abolishing feudalism, instituting a constitutional monarchy, modernizing the military, establishing a new school system, and promoting industrialization",
           "Adopted Western technology like railroads and telegraphs",
           "Japanese culture was still influenced by western culture and adopted western clothing, hairstyles, and dances",
           "The government funded industrialization by funding factories that were then sold to zaibatsu, wealthy families controlling companies"
       ],
       causes: ["Opening of Japan",
           "Needed to modernize in order to protect their culture from the West",
       ],
       effects: ["Rapid modernization",
           "Japan became one of the leading industrial powers",
           "End of the Tokugawa Shogunate",
           "Public schools increased literacy"
       ],
       theme: "governance"
   },
   "Second Industrial Revolution" : {
       timePeriod: [1880, 1890],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1920", "Germany 1850-1920", "Japan 1853-Present", "France 1750-1920", "Russia 1380-1917"],
       description: ["Electronics were developed, with the first public power station in 1882, street lights and electric street cars in the 1890s",
           "The telephone was patented by Alexander Graham Bell in 1876",
           "The internal combustion engine was invented, which was essential for transportation developments like cars and airplanes",
           "Commercial oil wells were developed",
           "Synthetic dyes made textile production cheaper",
           "Fertilizer increased agricultural productivity",
           "Dynamite was used in mining and tunneling",
           "The Bessemer Process allowed steel to be mass produced. It was used in building bridges, machines, buildings, ships, and railroads because it was cheaper and stronger than iron",
           "Many medecines were developed, increasing lifespans"
       ],
       causes: ["Spread of the British Industrial Revolution and their technologies"],
       effects: ["Urbanization",
           "Growth of the middle class, formation of the working class",
           "Pollution, resource depletion",
           "Reform movements, labor unions",
           "Consumerism, industrial capitalism",
           "Shifts center of manufacturing from the Middle East and Asia to Europe"
       ],
       theme: "economy"
   },
   "First Boer War" : {
       timePeriod: [1880, 1881],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory", "Dutch Territory"],
       description: ["The Boers, Dutch settlers, fought the British over territory.",
           "Led to compromise"
       ],
       causes: ["British and Dutch competition over territory"],
       effects: ["Second Boer Wars"],
       theme: "governance"
   },
   "Berlin Conference" : {
       timePeriod: [1884, 1885],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Germany 1850-1920", "France 1750-1920", "Belgium", "England 1750-Present", "Portugal 1750-Present"],
       description: ["Otto von Bismarck wanted to ensure peace between European nations so they wouldn't be dragged into war, which could threaten the newly-formed Germany",
           "European powers met up to divide Africa peacefully between them",
           "Africans had no say, resulting in colonies that cut across tribal lines, often grouping rival tribes in the same colony and separating tribes between colonies",
           "Allowed King Leopold II to keep posession of the Congo",
           "Allowed free movement of goods on major rivers"
       ],
       causes: ["European imperialism and rivalries"],
       effects: ["Scramble for Africa",
           "Colonial borders cut across tribal lines"
       ],
       theme: "governance"
   },
   "Brazil bans slavery" : {
       timePeriod: [1888, 1888],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Brazil"],
       description: [""],
       causes: ["The Brazilian population wanted to keep slavery so it continued for much longer than other countries"],
       effects: ["The castas system still persisted"],
       theme: "social, economy"
   },
   "Ghost Dance movement" : {
       timePeriod: [1889, 1890],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1920"],
       description: ["The Northern Paiute Indians believed that ghost dance rituals would bring the dead back to overthrow the white settlers and restore the land",
           "The movement started in Nevada, and spread from the Sierra Nevadas to the Missouri River, Northern Texas to Canada",
           "The US army ended the movement with the Wounded Knee Massacre in 1890, where they killed 150-200 natives"
       ],
       causes: ["White settlers caused deforestation and irrigation, which reduced food sources like pine nuts, mussels, and fish"],
       effects: ["Last organized movement against white settlers"],
       theme: "culture"
   },
   "Philippine Revolution" : {
       timePeriod: [1896, 1898],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Spanish Territory"],
       description: ["Education was limited in the Philippines, so wealthy people would go to Europe for education, where they gained access to Enlightenment ideas. When they returned to the Philippines, they began publishing books about these Enlightenment ideas.",
           "One of these people, José Rizal, started the Propaganda Movement, which aimed for more autonomy, and was arrested and executed in 1896, sparking a revolutionary movement.",
           "At the same time, the Spanish were fighting the Spanish-American War (1898-1899). When the Spanish lost, they had to sell the Philippines, Puerto Rico, and Guam to the US. Then the Philippines fought the Philippine-American War for independence in 1899, but lost."
       ],
       causes: ["Enlightenment ideas"],
       effects: ["The Philippines did not gain independence"],
       theme: "governance"
   },
   "Spanish-American War" : {
       timePeriod: [1898, 1899],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Spain 1750-Present", "United States 1776-1920"],
       description: ["Cuba was fighting for independence from Spain, and the US decided to support them",
           "The United States won the war, giving Cuba nominal independence and buying the Philippines, Puerto Rico, and Guam from Spain"
       ],
       causes: ["The United States wanted to liberate Cuba"],
       effects: ["Cuba was technically independent but still occupied by the US",
           "The United States gained the Philippines, Puerto Rico, and Guam"
       ],
       theme: "governance"
   },
   "Hundred Days of Reform" : {
       timePeriod: [1899, 1899],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty"],
       description: ["The government tried to eliminate corruption in the government by stopping the Civil Service Exam and instituting a constitutional monarchy and parliament",
           "Established western industrial, commercial, and medical systems",
           "Started working on railroads and telegraph lines"
       ],
       causes: ["Efforts to modernize, continuation of the Self-Strengthening Movement"],
       effects: ["Reversed by Empress Dowager Cixi"],
       theme: "governance"
   },
   "Second Boer War" : {
       timePeriod: [1899, 1902],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory"],
       description: ["Fighting restarted after the discovery of diamonds and gold",
           "The British imprisoned the Boers in segregated concentration camps"
       ],
       causes: ["Discovery of diamonds and gold in South Africa"],
       effects: ["Union of South Africa"],
       theme: "governance"
   },
   "Philippine-American War" : {
       timePeriod: [1899, 1899],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Philippines", "United States 1776-1900"],
       description: ["The Philippines tried to fight for their independence from the US after trying to gain independence from Spain",
           "Used guerrilla warfare"
       ],
       causes: ["The Philippines had been trying to gain independence from the Spanish and then they were sold to the US after the Spanish-American War"],
       effects: ["The Philippines remained under American control"],
       theme: "governance"
   },
   "Boxer Rebellion" : {
       timePeriod: [1900, 1900],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty"],
       description: ["A group of anti-imperialists known as the Boxers attacked Christians and foreigners to protest foreign influence",
        "They were supported by the Empress Cixi",
        "The government called on the Europeans to help them defeat the Boxers",
        "Forced Empress Cixi to continue with the reforms"
       ],
       causes: ["Resentment about foreign influence",
        "Economic hardship"
       ],
       effects: ["Empress Cixi had to support reforms and remove the Civil Service Exam again"],
       theme: "governance"
   },
   "Yaa Asantewaa War" : {
       timePeriod: [1900, 1900],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Asante Empire", "British Territory", "England 1750-Present"],
       description: ["The British tried for a fifth time to take control of the Asante Empire by trying to get access to the Golden Stool",
        "The Asante queen, Yaa Asantewaa, tried to fight the British and prevent them from getting the Golden Stool",
        "The British won in in 1900 and exiled Yaa Asantewaa"
       ],
       causes: ["British Imperialism"],
       effects: ["British gained control of Asante and turned it into the Gold Coast colony"],
       theme: "governance"
   },
   "State takover of the Congo" : {
       timePeriod: [1908, 1908],
       emphasizedUnit: [1900, 2025],
       applicableCountries: ["Belgium"],
       description: ["Once the world knew about the humans rights violations taking plance in the Congo under King Leopold II, they called the Human Rights Commission in 1905",
        "The state government took control of the Congo from Leopold, but continued to pay him the profits from the colony"
       ],
       causes: ["Increased knowledge about the human rights violations being committed in the Congo"],
       effects: ["The state took control of the Congo",
        "Conditions did not improve much"
       ],
       theme: "governance"
   },
   "Second Mexican Revolution" : {
       timePeriod: [1910, 1910],
       emphasizedUnit: [1900, 2025],
       applicableCountries: ["Mexico 1885-Present"],
       description: ["Porfirio Díaz had been dictator since 1876. In 1910, he imprisoned his political opponent, liberal Francisco Madero",
        "Madero, along with Francisco \"Pancho\" Villa and Emiliano Zapata led a civil war against Díaz",
        "Díaz stepped down in 1910 and went into exile",
        "Madero was elected as president through a free election",
       ],
       causes: ["Porfirio Díaz's dictatorship and imprisonment of Francisco Madero"],
       effects: ["Political instability and violence lingered until 1930",
        "The government was more liberal and created a new constitution, although it was not followed until the 1930s"
       ],
       theme: "governance"
   },
   "World War I" : {
       timePeriod: [1914, 1918],
       emphasizedUnit: [1900, 2025],
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
        "Greece"
        ],
       description: [
        "In 1914, Gavrilo Princip, a member of a Serbian nationalist group called the Black Hand, assassinated the Austro-Hungarian Archduke Franz Ferdinand in protest of Austria-Hungary's control over Bosnia-Herzegovina",
        "In response to the assassination, the Austro-Hungarian government ordered the Serbian government to end the anti-Austrian anger but Serbia refused, leading to Austria-Hungary declaring war and starting World War I",
        "Once war had been declared, countries began to call on their alliances, dragging a bunch of countries into the war",
        "Germany made the Schlieffen Plan for a two front war - they would attack France and then Russia, since they figured France could mobilize faster than Russia",
        "New technology was developed, changing the nature of war. Developed trench warfare, where soldiers were in trenches all the time. Developed artillery shells. Trenches were placed just out of range of the other side's artillery shells, and between the trenches was no man's land. Poison gas was developed, and gas masks to go along with it. Machine guns made it easier to gain territory. Submarines were developed, and airplanes were used at first for reconnaissance but were developed for aerial combat. Tanks were developed by the British and gave them an advantage at the end of the war",
        "There was a stalemate on the Western front for the whole time. There was a lot of fighting but very little movement.",
        "On the Eastern Front, Germany was beating Russia since they had better weapons. In 1918, after the Russian Civil War, Russia surrendered to Germany, and Germany was able to redirect its energy to the Western Front",
        "This was the first total war, where nations put everything into winning the war. All the civilians, including colonies, had to help, whether it was through serving in the military, producing war materials in factories, or rationing food and supplies. Women weren't allowed to fight in most countries but they replaced soldiers' jobs and served as nurses, ambulance drivers, and switchboard operators. Countries used a lot of propaganda to influence their population.",
        "All the European powers except Germany used their colonies for manpower and supplies. Most colonial soldiers volunteered because they thought the colonial powers would give them more autonomy, but there was some coercion",
        "The US joined the war in 1918 because the Germans were attacking American civilian ships. The entrance of the US turned the tide of the war as they provided a bunch of supplies that the Germans didn't have",
        "The Allies won the war on November 11 1918",
        "The Big Four (Woodrow Wilson from the US, David Lloyd George from Britain, Georges Clemenceau from France, and Vittoria Orlando from Italy met up to make the peace treaty. Woodrow Wilson wanted to not severely punish or reward any countries, but Clemenceau disagreed because he wanted France to have protection from Germany. Wilson wanted to create the League of Nations, where all nations would convene to discuss conflicts and avoid tensions, and to allow conquered people under the Central Powers to have self-determination. The League of Nations was created and countries were given the illusion of self-determination while they were really under British or French control through the League of Nations mandates",
        "Made the 1919 Treaty of Versailles with Germany. Germany had to take blame for the war, pay reparations, give up their colonies, and restrict their military."
    ],
       causes: ["Militarism - European powers were competing for military dominance, so they kept large standing armies, developed military technology, and made extensive plans for mobilization (like the Schlieffen Plan)",
        "Alliances - European countries had many alliances promising to help each other if attacked. Prominent alliances that got called on during the civil war included the Triple Entente (France, Britain, Russia), and the Triple Alliance (Germany, Austria-Hungary, Italy)",
        "Imperialism - Europeans had taken all the territory there was and began fighting each other for colonies. Germany began to take colonies, and other countries felt threatened",
        "Nationalism - European countries wanted to prove that they were the best. Additionally, Serbia wanted self-determination",
       ],
       effects: ["The League of Nations was created",
        "Weakened European powers and facilitated the shift of power to the United States",
        "The strict demands of the Treaty of Versailles facilitated the rise of authoritarian regimes that led to World War II",
        "Collapse of the Ottoman Empire",
        "Led to the rise of fascism and communism"
       ],
       theme: "governance"
   },
   "Armenian Genocide" : {
       timePeriod: [1915, 1915],
       emphasizedUnit: [1900, 2025],
       applicableCountries: ["Armenia", "Ottoman Empire"],
       description: ["The Ottoman government claimed that the Armenians were supporting the Russian army (the Ottomans' enemy). They systematically deported, massacred, and starved the Armenians, leading to about 600,000 to 1.5 million deaths"],
       causes: ["End of the Tanzimat reforms, ending the limited religious freedom for the Christian Armenians"],
       effects: ["Hitler eventually modeled the Holocaust after the Armenian Genocide"],
       theme: "social"
   },
    "Russian Revolution and Civil War" : {
        timePeriod: [1917, 1921],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Soviet Union"],
        description: ["The Bolsheviks, led by Vladimir Lenin, took control of Russia and established a communist government in 1917",
            "Surrendered to Germany, ceding land to them",
            "The Bolsheviks fought for control against other communist groups as well as troops the United States sent to try to quell the communist revolution"
        ],
        causes: ["Incompetence of the Russian government to deal with the strain put on the country from taking part in World War I"],
        effects: ["Establishment of the Soviet Union"],
        theme: "governance"
    },
    "Great Depression" : {
        timePeriod: [1929, 1945],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["United States 1920-Present", "Germany 1920-1945", "England 1750-Present", "France 1920-Present", "British Territory", "French Territory"],
        description: ["In the US, everyone tried to sell stocks at the same time, so the value of the stocks plummeted. The stock market crashed in 1929 and started the Great Depression",
            "Germany was especially affected because they had inflation due to printing money to pay reparations after World War I",
            "International trade decreased because countries made strict tariffs to protect domestic jobs",
            "Japan recovered quickly by devaluing their currency, making domestic products cheaper than imports",
            "The US temporarily recovered by using Keynesian Economics through the New Deal, using government deficit spending to stimilate the economy. However, in 1937 Roosevelt felt that the government deficits were too big so he pulled back on the New Deal and the economy got worse again"
        ],
        causes: ["US stock market crashed",
            "Farms produced so much that the value of their products decreased",
            "France and Britain were having a hard time paying back loans because Germany was having a hard time paying their debts and the Soviet Union refused to pay pre-revolution debts",
        ],
        effects: ["Mass unemployment",
            "Ended after World War II",
            "Germans were angry about the Depression. This anger and discontentment in conjunction with the weakness of the Weimar Republic, led to the rise of the Nazis"
        ],
        theme: "economy"
    },
    "Salt March" : {
        timePeriod: [1930, 1930],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["British Territory"],
        description: ["Indians were unhappy about the British salt monopoly",
            "Mohandas (Mahatma) Gandhi led thousands of Indians to the Indian Ocean to pick up grains of salt in protest of the salt monopoly",
        ],
        causes: ["Discontent about the unfair economic policies put in place by the British government"],
        effects: ["Rise of nonviolent resistance to the British government in India"],
        theme: "governance"
    },
    "Ukraine Famine" : {
        timePeriod: [1932, 1933],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["USSR"],
        description: ["Ukraine resisted Stalin's forced collectivisation of farms, hiding and destroying crops that the Soviet government tried to collect",
            "Stalin stopped distributing food to Ukraine, leading to famine",
            "Somewhere from 5 to 10 million people died"
        ],
        causes: ["Anger about the collectivisation of farms and the 5 year plans"],
        effects: ["Millions of deaths"],
        theme: ""
    },
    "Spanish Civil War" : {
        timePeriod: [1936, 1939],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Spain 1750-Present"],
        description: ["The Popular Front (liberal) was elected to in 1936, but the military and Catholic church opposed them",
            "The fascist Nationalists fought against the Republicans/Loyalists (supporters of the Popular Front). The Nationalists were led by Francisco Franco and had support from Hitler, Mussolini and Portuguese Antonio Salazar, while the Republicans had the support of the Soviet Union, Britain, France, and the United States",
            "Foreign involvement in the war led to more violence, as seen in the German and Italian bombing of Guernica, the first time civilians were targeted by aerial bombing",
            "The Nationalists won the war in 1939 and established Francisco Franco as dictator in 1975"
        ],
        causes: ["Election of the liberal Popular Front",
            "Discontent of conservatives"
        ],
        effects: ["Francisco Franco's dictatorship from 1939 to 1975"],
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
    "Template" : {
        timePeriod: [1, 1],
        emphasizedUnit: [1900, 2025],
        applicableCountries: [""],
        description: [""],
        causes: [""],
        effects: [""],
        theme: ""
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
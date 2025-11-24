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
        applicableCountries: ["England 1200-1450", "France 1200-1450", "Holy Roman Empire 1200-1450"],
        description: ["The Christians paid Venice to take the soldiers to the Middle East, but they didn't pay Venice enough, so the Venetians made the soldiers sack Zara and Constantinople before letting them continue the Crusade"],
        causes: ["European Christians wanted to retake the Holy Land in the Middle East",
            "Venice wanted more economic and political power"
        ],
        effects: ["Weakened the Byzantine Empire"],
        theme: "governance"
    },
    "Mongol conquest" : {
        timePeriod: [1207, 1260],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Mongol Empire", "Golden Horde", "Il-Khanate", "Yuan Dynasty"],
        description: ["The Mongols, led by Genghis Khan, began expanding their empire. They started by attacking the Jin Empire, then moved westward to the Middle East.",
            "The Mongols sacked Baghdad in 1258, marking the end of the Abbasid Caliphate.",
            "The Mamluks defeated the Mongols in 1260, ending the Mongol advance"
        ],
        causes: ["Genghis Khan's ambition for expansion"],
        effects: ["End of the Abbasid Caliphate",
            "Pax Mongolica",
            "Spread of gunpowder weapons and other technology",
            "Mass population decrease in conquered regions"
        ],
        theme: "governance"
    },
    "Magna Carta signed": {
        timePeriod: [1215, 1215],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450"],
        description: ["The English nobles forced King John to sign the Magna Carta, giving nobles the right to a jury trial before prison and ensuring the king had to consult them on scutage (where knights pay money instead of military service as tax)"],
        causes: ["King John had attempted to charge peasants and cities extra money, which the nobles did not approve of"],
        effects: ["Limited the monarch's power and established the idea that the king was subject to the law"],
        theme: "governance"
    },
    "Baghdad sacked" : {
        timePeriod: [1258, 1258],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Abbasid Caliphate", "Mongol Empire"],
        description: ["The Mongols sacked Baghdad, slaughtering the people, killing the last Abbasid Caliph, and destroying the House of Wisdom"],
        causes: ["Mongol expansion into the Middle East"],
        effects: ["End of the Abbasid Caliphate",
            "Loss of the House of Wisdom"
        ],
        theme: "governance"
    },
    "English Parliament formed" : {
        timePeriod: [1265, 1265],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450"],
        description: ["The English nobles forced the King to form the Parliament, giving the nobles more power"],
        causes: ["Nobles wanted a council to limit monarch power"],
        effects: ["Increased nobles' rights",
            "Early development of representative government in Europe"
        ],
        theme: "governance"
    },
    "Marco Polo's Book" : {
        timePeriod: [1295, 1295],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Yuan Dynasty"],
        description: ["Marco Polo's book, the Travels of Marco Polo, was published in 1295, detailing Marco Polo's travels along the Silk Roads to the Yuan Dynasty where he visited Kublai Khan.",
            "Marco Polo described the Chinese cities, trade, and culture.",
            "Marco Polo's book helped increase interest in the East"
        ],
        causes: ["Pax Mongolica enabled long-distance travel"],
        effects: ["Increased European interest in Asia"],
        theme: "culture"
    },
    "Little Ice Age" : {
        timePeriod: [1300, 1850],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "England 1450-1750", "France 1200-1450", "France 1450-1750", "Holy Roman Empire 1200-1450", "Holy Roman Empire 1450-1806", "Ottoman Empire", "Il-Khanate", "Ming Dynasty", "Spain 1492-1750"],
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
        effects: ["Increased trade and spread of ideas, technologies, and diseases like the Black Death"],
        theme: "governance"
    },
    "Mansa Musa's Pilgrimage" : {
        timePeriod: [1312, 1337],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Mali Empire"],
        description: ["Mansa Musa made an extravagant pilgrimage to Mecca, displaying Mali's wealth by bringing slaves and gold",
            "Built mosques and madrasas (boys' schools teaching Islam) along the way",
            "The gold Mansa Musa brought caused inflation and crashed economies"
        ],
        causes: ["Mansa Musa wanted to display Mali's wealth",
            "Islamic tradition of pilgrimage to show their faith"
        ],
        effects: ["Crashed economies",
            "Brought Mali fame"],
        theme: "culture"
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
        effects: ["Increased nationalism over regionalism in France and England",
            "Marked the decline of medieval feudal armies and the rise of centralized states"
        ],
        theme: "governance"
    },
    "Black Death" : {
        timePeriod: [1347, 1353],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "France 1200-1450", "Holy Roman Empire 1200-1450", "Venice"],
        description: ["The Black Death spread from China along the Silk Roads to the Middle East and Europe",
            "Almost 1/3 of the European population died",
            "Weakened the authority of the Church due to its inability to stop the plague"
        ],
        causes: ["The Silk Roads and Pax Mongolica allowed the plague to spread more easily"],
        effects: ["Caused the end of feudalism and serfdom. Since there were so few workers after so many deaths, the serfs were able to demand more rights, such as increased wages.",
            "Led to urbanization as peasants migrated to cities for work"
        ],
        theme: "environment"
    },
    "Renaissance" : {
        timePeriod: [1400, 1600],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Venice", "France 1200-1450", "Holy Roman Empire 1200-1450", "Spain 1492-1750", "England 1200-1450"],
        description: ["A revival of interest in classical Greek and Roman arts. They still depicted Christian art, but began to depict Greek, Roman, and Pagan art as well",
            "The Gutenberg press, invented in 1439, allowed for more literacy",
            "Humanism, focusing on the individual instead of God, was created. This movement included more education and secular books",
            "Universities began to include humanities",
            "Vernacular (local languages) were used more as opposed to Latin, enabling more people to learn to read."
        ],
        causes: ["Increased contact with the East reexposed the Europeans to older ideas",
            "Wealth of from trade funded art"
        ],
        effects: ["Increased literacy rates",
            "Sparked the Scientific Revolution"
        ],
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
        effects: ["Exposed China to different religions",
            "Temporarily expanded the tribute system"
        ],
        theme: "governance"
    },
    "Gutenberg Printing Press invented" : {
        timePeriod: [1439, 1439],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Venice", "France 1200-1450", "Holy Roman Empire 1200-1450", "Spain 1492-1750", "England 1200-1450"],
        description: ["Johannes Gutenberg invented the movable type printing press. This allowed books to be printed easier and cheaper, increasing availability and decreasing costs of books, leading to increased literacy rates"],
        causes: ["Demand for books"],
        effects: ["Increased literacy"],
        theme: "technology"
    },
    "Sikhism founded" : {
        timePeriod: [1469, 1469],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Mughal Empire"],
        description: ["Sikhism is a monotheistic religion influenced by Hindu and Islam.",
            "Sikhism was initially tolerated until Aurangzeb killed the 9th guru"
        ],
        causes: ["Religious blending"],
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
        effects: ["Spurred further exploration to the Indian Ocean"],
        theme: "governance"
    },
    "End of the Inquisition" : {
        timePeriod: [1492, 1492],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["Spain 1492-1750"],
        description: ["The Spanish Catholics drove out the remaining Muslims and Jews on the Iberian Peninsula. Portugal had already driven them out in 1249",
            "Srengthenedd religious unity under Catholicism"
        ],
        causes: ["Desire for centralized religious authority"],
        effects: ["Muslims and Jews were driven out",
            "The Ottoman Empire took in Jews who had been expelled from the Iberian Peninsula"
        ],
        theme: "social"
    },
    "Christopher Columbus lands in America" : {
        timePeriod: [1492, 1492],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Spain 1492-1750"],
        description: ["Christopher Columbus had tried in 1485 and 1488 to get support from the Portuguese monarchs to sail west, but failed. He finally got support from Queen Isabella and King Ferdinand of Spain in 1492",
            "Used knowledge of Atlantic wind patterns to help him on his journey",
            "Landed on the island of Hispaniola, which was later called Saint Domingue and is now Haiti and the Dominican Republic",
            "Thought he had landed in the Indies"
        ],
        causes: ["Europe was looking for a different path to the Indian Ocean because Venice and the Ottoman Empire had monopolized trade going to the Indian Ocean"],
        effects: ["Interest in the Americas rose and people began colonizing it",
            "Columbian Exchange - the exchange of plants, animals, and diseases between the Old and New World. Led to massive population decline among the Native Americans due to disease and massive population increase in the Eastern Hemisphere due to new foods",
            "Started the precedent of exploiting the indigenous populations"
        ],
        theme: "Environment, Governance, Economy"
    },
    "Treaty of Tordesillas" : {
        timePeriod: [1494, 1494],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Spain 1492-1750", "Portugal 1450-1750"],
        description: ["Spain and Portugal split the world with the Line of Demarcation. Any new territory discovered west of the line, including most of the Americas and the Philippines, was reserved for Spain, while any territory east of the line, including Africa and the Indian Ocean, was reserved for Portugal."],
        causes: ["Desire for territory in the New World and Indian Ocean for resources and trade"],
        effects: ["Established the precedent of European powers claiming territory without the considering the inhabitants' sovereignty"],
        theme: "governance"
    },
    "Vasco Da Gama sails to India" : {
        timePeriod: [1498, 1498],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Portugal 1450-1750", "Delhi Sultanate"],
        description: ["Vasco Da Gama sailed to India and tried to establish trade with the Indian merchants, but they rejected him",
            "He returned with weapons to force trade relations"
        ],
        causes: ["Desire to break Venetian-Ottoman monopoly of Indian Ocean trade"],
        effects: ["Established Portuguese ports for trade in the Indian Ocean",
            "Began Portuguese control in India"
        ],
        theme: "governance"
    },
    "Portuguese conquer Malacca" : {
        timePeriod: [1511, 1511],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Portugal 1450-1750", "Majapahit Empire"],
        description: ["The Portuguese took control of Malacca, effectively ending the Majapahit Empire"],
        causes: ["The Portuguese wanted to expand their power and influence in the Indian Ocean to control maritime trade routes"],
        effects: ["Gave Portugal control of one of the most important choke points in Indian Ocean commerce"],
        theme: "governance"
    },
    "Battle of Chaldiran" : {
        timePeriod: [1514, 1514],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Ottoman Empire", "Safavid Empire"],
        description: ["The Ottomans defeated the Safavids, stopping their expansion and establishing the border between the two empires."],
        causes: ["Religious tension between the Sunni Ottomans and Shi'a Safavids",
            "Both empires were trying to expand"
        ],
        effects: ["Established the border between the Ottoman and Safavid Empire",
            "Stopped Safavid expansion"
        ],
        theme: "governance"
    },
    "Lutheranism created" : {
        timePeriod: [1517, 1517],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Holy Roman Empire 1450-1806"],
        description: ["Martin Luther wrote the 95 Theses detailing the Church's violations of biblical teachings. His complaints included indulgences, where people could pay to redeem themselves from sin, and simony, where chuch offices were sold to the younger sons of nobles. These were both practices intended to gain more money for the Church.",
            "Additionally, Luther wanted the Bible in the vernacular instead of only in Latin so it would be more accessible, and interpretations wouldn't be controlled purely by the church",
            "Lutheranism promoted literacy and gave women more religious equality by fostering the idea that women didn't need men as intermediaries",
            "Martin Luther was excommunicated in 1521",
            "Spread quickly because of the printing press",
            "Luther aimed to convert political leaders by saying that their money was going to frivolous things such as St. Peter's Basilica, and taking advantage of the fact that political leaders didn't like sharing their power with the Pope",
            "Lutheranism became popular and launched social revolutions"
        ],
        causes: ["The Catholic Church was corrupt"],
        effects: ["Started the Protestant Reformation"],
        theme: "culture"
    },
    "Battle of Panipat" : {
        timePeriod: [1526, 1526],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["Mughal Empire", "Delhi Sultanate"],
        description: ["The Mughal Empire fought the declining Delhi Sultanate. The Mughals were vastly outnumbered, and the Delhi Sultanate had war elephants, but the Mughals won because they had gunpowder weapons"],
        causes: ["Babur wanted to expand into North India"],
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
        effects: ["Led to the spread of Protestantism"],
        theme: "culture"
    },
    "Scientific Revolution" : {
        timePeriod: [1540, 1680],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1750", "France 1450-1750", "Holy Roman Empire 1450-1806", "Spain 1492-1750", "Portugal 1450-1750"],
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
           "However, the Moroccans had gunpowder weapons which were much more effective and deadly. The weapons scared the cattle and turned them against the Songhai. This allowed the Moroccans to win",
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
            "This was one of the first major state policies granting limited religious freedom in Europe",
            "The Edict was revoked by Louis XIV in 1685"
        ],
        causes: ["Rise of Lutheranism",
            "French wars of religion between Catholics nad Huguenots"
        ],
        effects: ["Temporary religious stability",
            "Revocation in 1685 sparked Huguenot migration to Enlgand and the Netherlands"
        ],
        theme: "governance"
    },
    "Enlightenment" : {
        timePeriod: [1688, 1789],
        emphasizedUnit: [1750, 1900],
        applicableCountries: ["England 1750-1900", "France 1750-1900", "United States 1776-1900", "Spanish Territory", "Brazil", "Philippines", "Saint Domingue/Haiti"],
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
        causes: ["Scientific Revolution",
            "The expansion of the printing press and rising literacy"
        ],
        effects: ["Revolutions like the American, French, Haitian, Philippine, and Latin American Revolutions",
            "Challenged monarchies and church authority",
            "Inspired constitutions"
        ],
        theme: "culture"
    },
    "Japan becomes isolationist" : {
        timePeriod: [1614, 1853],
        emphasizedUnit: [1750, 1900],
        applicableCountries: ["Japan 1200-1853"],
        description: ["The Shogun felt that the Europeans were spreading Christianity to use it as a tool to take over so they banned Christianity, ended all trade with all countries except for China and a limited amount with the Netherlands",
            "The shogunate tortured and killed Japanese Christians, as well as any Europeans",
            "Commodore Matthew Perry, from America, brought warships in 1853 to threaten Japan until they agreed to open to the West again"
        ],
        causes: ["Europeans arriving in Japan and spreading Christianity"],
        effects: ["Helped Japan retain its culture and internal stability",
            "Lack of modernization until Japan reopened. After Japan's reopening, it rapidly industrialized"
        ],
        theme: "governance"
    },
        "Thirty Years' War" : {
        timePeriod: [1618, 1648],
        emphasizedUnit: [1450, 1750],
        applicableCountries: ["England 1450-1700",
            "France 1450-1750",
            "Holy Roman Empire 1450-1806",
            "Spain 1492-1750",
            "Netherlands 1450-1750"
        ],
        description: ["A war between Catholics and Protestants. It originally started in the Holy Roman Empire, and then it spread",
            "It resulted in the Peace of Westphalia, where each area of the Holy Roman Empire could choose Roman Catholicism, Lutheranism, or Calvinism",
            "Weakened the Holy Roman Empire"
        ],
        causes: ["The Protestant Reformation"],
        effects: ["The Peace of Westphalia",
            "Strenghtened state sovereignty",
            "Reduced papal political influence"
        ],
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
        effects: ["Inreased fear among slaveowners and harsher control measures"],
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
        effects: ["Decline of indentured servitude and shift to racialized chattel slavery"],
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
            "Gave British Parliament a say in taxation and military",
            "Established a constitutional monarchy"
        ],
        causes: ["The British monarch having too much power",
            "The Glorious Revolution, where Queen Mary and King William of Orange took control of the throne"
        ],
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
        causes: ["Increased cultural exchange with Europe"],
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
        effects: ["French were driven out of India and North America",
            "Srengthened British global power"
        ],
        theme: "governance"
    },
    "Industrial Revolution" : {
       timePeriod: [1760, 1840],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["England 1750-1900"],
       description: ["England began industrializing, focusing on the textile industry. They shifted from the cottage industry, where families bought raw cotton and made cloth at home, to mass producing cloth in factories",
           "Essential inventions included the spinning jenny, allowing more than one thread to be spun at a time, the power loom, which used steam power to weave fabric more efficiently, and the water frame, allowing water power to power spinning wheels",
           "Other inventions included the steam engine in 1765, which allowed for steam locomotives, steam boats, and factories farther from water, and the Bessemer Process in 1856, which allowed steel to be produced cheaply"
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
       applicableCountries: ["United States 1776-1900"],
       description: ["The "],
       causes: ["Englightenment ideas like consent of the governed, natural rights, and republicanism",
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
       applicableCountries: ["France 1750-1900"],
       description: ["The commoners stormed the Bastille on July 14, 1789. In October, they stormed Versailles and made the king make the monarchy constitutional (they didn't want to kill him, they only wanted him to make things better)",
           "Became the First French Republic (with a constitutional monarchy) in 1792. Monarch power was limited, and the National Assembly had a lot of power. They stopped feudalism and made the Declaration of the Rights of Man and Citizen. The King was unhappy with this new government and tried to veto a lot of things",
           "Eventually, the Jacobins, extreme revolutionaries, were elected. They wanted to end the monarchy, the church's power, and slavery, and killed anyone (including the king and queen) who were “against” the revolution (could have been for any reason) in the 1793-1794 Reign of Terror.",
           "Ended when Napoleon took over in a coup d'état"
       ],
       causes: ["Unfair representation of the majority of the population in the Estates System",
           "Lost money from wars like the American Revolution and the Seven Years' War",
           "Food shortages"
       ],
       effects: ["Inspired the Haitian Revolution",
            "Spread nationalism and revolutionary ideas",
            "Led othe rise of Napoleon"
       ],
       theme: "governance"
   },
   "Haitian Revolution" : {
       timePeriod: [1791, 1804],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Saint Domingue/Haiti"],
       description: ["The revolution started in 1791 and continued to gain more people. Toussaint L'Ouverture, who became the leader of the revolution, joined the movement in 1794. They allied with the Spanish and then drove out the Spanish and British",
           "In 1801, Toussaint L'Ouverture established the Haitian government and constitution, creating equal rights and citizenship, and abolishing slavery and racism. However, he made himself the governor for life and gave himself all the power",
           "In 1804, Napoleon reinstated slavery and imprisoned Toussaint L'Ouverture. Haiti fought for independence because they didn't want slavery and gained full independence that year."
       ],
       causes: ["French and American revolutions",
           "Desire for more rights",
           "Plantation system and racial hierarchy"
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
       causes: ["Abolitionist pressure"],
       effects: ["Decrease in slave trade",
            "British naval patrols disrupted Atlantic slave networks"
       ],
       theme: "social, economy"
   },
   "United States bans slave trade" : {
       timePeriod: [1808, 1808],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1900"],
       description: ["The United States banned international slave trade. However, domestic slave trade and slavery continued until 1865"],
       causes: ["Abolitionist pressure"],
       effects: ["Decrease in slave trade",
           "Did not stop slavery or domestic slave trade within the United States"
       ],
       theme: "social, economy"
   },
   "Mexican Revolution" : {
       timePeriod: [1810, 1821],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Mexico 1821-1900", "Spain 1750-1900"],
       description: ["Declared independence in 1810",
           "The revolution was led by Padre Miguel Hidalgo, who was a very liberal priest. He was killed very quickly, then Agustín de Iturbide led the revolution",
           "The creoles originally sided with the commoners against the peninsulares, but when Hidalgo's followers attacked creoles along with peninsulares, the creoles switched sides to side with the peninsulares",
           "The creoles switched sides again when the Spanish government stopped supporting the castas system. The creoles wanted to keep the castas system so they could remain at the top of the hierarchy",
       ],
       causes: ["Creoles wanted more rights and independence from Napoleon",
            "Inspiration from Enlightenment ideals and other revolutions"
       ],
       effects: ["Mexico gained independence in 1821 as a republic",
            "Period of political instability followed"
       ],
       theme: "governance"
   },
   "European suppression of democratic reforms" : {
       timePeriod: [1815, 1848],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["France 1750-1900", "England 1750-1900", "Spain 1750-1900", "Portugal 1750-1900"],
       description: ["European monarchies suppressed the ideas of democracy in order to retain power and prevent revolutions",
        "Led by the Congress of Vienna (1815), which aimed to restore monarchies and maintain a conservative balance of power"
       ],
       causes: ["Revolutions like the French Revolution that depowered the monarchies",
        "Fear of democratization and liberalism"
       ],
       effects: ["A wave of democracy rose in 1949 due to frustration with conservtive suppression",
        "Helped maintain monarchies in many European countries"
       ],
       theme: "governance"
   },
   "Brazilian Revolution" : {
       timePeriod: [1822, 1822],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Brazil", "Portugal 1750-1900"],
       description: ["The Portuguese monarchy fled to Brazil when Napoleon was conquering the Iberian Peninsula",
           "The creoles liked having their own government in Brazil instead of a colonial government, so Prince Pedro stayed behind in Brazil when the rest of the royal family returned to Portugal",
           "Prince Pedro declared Brazil an independent monarchy and became the emperor of Brazil in 1822"
       ],
       causes: ["Enlightenment ideals",
           "Napoleon invaded Portugal",
           "Creole elites wanted autonomy from Portugal without disrupting the social hierarchy"
       ],
       effects: ["Brazil gained independence",
           "Continuation of slavery until 1888",
           "Maintained political stability by remaning a monarchy instead of a republic"
       ],
       theme: "governance"
   },
   "Monroe Doctrine" : {
       timePeriod: [1823, 1823],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1900"],
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
       description: ["The Greeks declared independence from the Ottoman Empire with aid from the British, French, and Russians who wanted to weaken the Ottoman Empire"],
       causes: ["Greek nationalism",
            "Weakening Ottoman control over the region"
       ],
       effects: ["Weakened the Ottoman Empire and marked the beginnning of its ddecline",
           "Other regions of the Ottoman Empire started wanting independence",
           "The Ottoman Empire made the Tanzimat reforms to suppress regional nationalism and promote Ottoman nationalism",
       ],
       theme: "governance"
   },
   "British bans slavery" : {
       timePeriod: [1833, 1833],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["England 1750-1900", "British Territory"],
       description: ["The British banned slavery, ending it in all of their colonies. However, exploitative measures were still used."],
       causes: ["Abolitionist pressure"],
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
           "Faced resistance from conservative elites",
           "Sultan Abdulhamid ended reforms in 1876. He was scared that the reforms would lead to rebellion, so stopped the reforms. This, however, made people more mad and led to the Armenian Genocide"
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
       applicableCountries: ["Qing Dynasty", "England 1750-1900"],
       description: ["England wanted more Chinese goods but had nothing the Chinese wanted, so Britain illegally imported opium to force trade dependency",
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
       applicableCountries: ["British Territory", "England 1750-1900"],
       description: ["This treaty established New Zealand as a colony and gave the native Maori property rights, although those were largely ignored by settlers"],
       causes: ["British imperialism"],
       effects: ["The Maori Wars were caused because the settlers ignored Maori property rights"],
       theme: "governance"
   },
   "Maori Wars" : {
       timePeriod: [1845, 1872],
       emphasizedUnit: [1845, 1851],
       applicableCountries: ["British Territory", "England 1750-1900"],
       description: ["The British settlers and Maori fought over territory and property rights",
           "Ended with British victory in 1846",
           "In 1850s, the Maori didn't want to sell their property, so the government responded with troops to pressure them to sell. This led to a second series of wars until 1872"
       ],
       causes: ["British imperialism",
        "Disregard for Maori land rights"
       ],
       effects: ["Maori lost most of their land",
           "Increased settler power"
       ],
       theme: "governance"
   },
   "Great Famine" : {
       timePeriod: [1845, 1852],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Ireland", "United States 1776-1900"],
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
       applicableCountries: ["Mexico 1821-1900", "United States 1776-1900"],
       description: ["The United States provoked war with Mexico in order to gain more territory"],
       causes: ["The United States wanted Mexican territory in order to expand to the West Coast",
        "Disputes over the border between Texas and Mexico"
       ],
       effects: ["Mexico lost 55% of its territory",
           "The United States gained California, Nevada, Utah, Arizona, New Mexico, and parts of Colorado, Wyoming, Oklahoma, and Kansas, as well as expanded Texan territory",
           "Intesified debates over slavery in newly accquired territory"
       ],
       theme: "governance"
   },
   "Communist Manifesto" : {
       timePeriod: [1848, 1848],
       emphasizedUnit: [1, 1],
       applicableCountries: [""],
       description: ["Karl Marx and Friedrich Engels wrote a manifesto promoting communism.",
           "They said that capitalism, while producing a lot of money, did nothing about poverty",
           "They predicted that everyone would eventually fall into one of two classes, the Proletariat (the working class), and the Bourgeoisie (the upper class), with the middle class eliminated",
           "They thought the proletariat would eventually overthrow the bourgeoisie and form communism, where all the people owned the means of production, instead of just the wealthy, and class distinctions would not exist anymore",
           "In reality, the middle class continued to grow, but Marxist ideas inspired later socialist and communist movements worldwide"
       ],
       causes: ["Increasing gap between classes due to the Industrial Revolution"],
       effects: ["Spread of communism",
        "In practice, the middle class continued to grow, but Marxist ideas inspired later socialist and communist movements worldwide"
       ],
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
       effects: ["Showed the weakness of the government",
        "Destabilized Southern China"
       ],
       theme: "governance"
   },
   "Opening of Japan" : {
       timePeriod: [1853, 1853],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Japan 1853-1900", "United States 1776-1900"],
       description: ["President Zachary Taylor sent Commodore Matthew Perry to reopen Japan from its isolationist policies",
           "Commodore Perry first arrived in 1852 with warships and threatened to burn a village to the ground if they didn't let him land. Instead of landing at Nagasaki, the only port open to foreigners, he landed in Edo, the capital",
           "Perry told the sick shogun that he had a year to decide whether to negotiate trade with the Americans",
           "Other countries, hearing about Perry's journey, began to request similar things, so Perry instead returned in 6 months with warships known as the Black Ships",
           "Japan signed the Treaty of Kanegawa, giving in to all of America's demands"
       ],
       causes: ["American economic imperialism, Manifest Destiny"],
       effects: ["End of Japanese isolationism", 
        "beginning of modernization and industrialization"],
       theme: "governance"
   },
   "Xhosa Cattle Killing Movement" : {
       timePeriod: [1856, 1857],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory"],
       description: ["The Xhosa cattle were sick, and Nongqawuse, a teenage Xhosa, prophesied that if the Xhosa killed their cows and burned their crops, the spirits would restore them and drive the settlers away",
           "The Xhosa followed her orders, but it only led to a famine in which 40,000 people starved.",
           "The famine was worsened by British colonial policies, which deliberately kept relief agencies away to weaken the Xhosa population and pressure them to work for the British as a means of getting money and food, and thus assimilating"
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
           "The rebellion failed due to internal divisions (language, caste, lack of nationalism), and Sikh groups allied with the British"
       ],
       causes: ["The British forced the sepoys to use animal fat catridges"],
       effects: ["Establishment of the British Raj",
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
       applicableCountries: ["Mexico 1885-1900"],
       description: ["In 1857 the Liberals, led by Benito Juaréz, made a new constitution. The conservatives disliked this and started a civil war. Juaréz borrowed heavily from Europe to win the war",
           "France had been wanting Mexico as a colony and used its debt as an excuse to invade, as well as the fact that the United States wouldn't intervene because they were engaged in their own civil war",
           "In 1863, the Mexican conservatives, with the support of Napoleon III, overthrew Juaréz. The French put the Austrian noble Archduke Maximillian as the emperor of Mexico, establishing a puppet government",
           "In 1867, the Mexicans drove the French out of Mexico with the help of the Americans (who had concluded their civil war), exiled Archduke Maximillian, and put Juaréz back in power",
           "Juárez extended his presidency beyond constitutional limits"
       ],
       causes: ["French imperialism",
           "Civil war in Mexico between liberals and conservatives"
       ],
       effects: ["France established a short-lived puppet emperor",
            "Reaffirmed Mexican sovereignty"
       ],
       theme: "governance"
   },
   "US bans slavery" : {
       timePeriod: [1865, 1865],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1900"],
       description: ["The Emancipation Proclamation in 1863 freed slaves in Confederate territories, but the 13th Amendment freed slaves nationally"],
       causes: ["Civil War and abolitionist movement"],
       effects: ["Reconstruction",
            "Legal abolition of slavery nationwide, but social and economic challenges persisted for freedpeople"
       ],
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
       applicableCountries: ["Japan 1853-1900"],
       description: ["Power was restored from the shogun to the emperor",
           "The Charter Oath was created, abolishing feudalism, instituting a constitutional monarchy, modernizing the military, establishing a new school system, and promoting industrialization",
           "Adopted Western technology like railroads and telegraphs",
           "Western culture influenced fashion, hairstyles, and social practices",
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
       applicableCountries: ["United States 1776-1900", "Germany 1850-1920", "Japan 1853-1900", "France 1750-1900", "Russia 1750-1917"],
       description: ["Electronics were developed, with the first public power station in 1882, street lights and electric street cars in the 1890s",
           "The telephone was patented by Alexander Graham Bell in 1876",
           "The internal combustion engine was invented, which was essential for transportation developments like cars and airplanes",
           "Commercial oil wells were developed",
           "Synthetic dyes made textile production cheaper",
           "Fertilizer increased agricultural productivity",
           "Dynamite was used in mining and tunneling",
           "The Bessemer Process allowed steel to be mass produced. It was used in building bridges, machines, buildings, ships, and railroads because it was cheaper and stronger than iron",
           "Medical advances increased lifespans and public health"
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
       applicableCountries: ["Germany 1850-1920", "France 1750-1900", "Belgium", "England 1750-1900", "Portugal 1750-1900"],
       description: ["Otto von Bismarck wanted to ensure peace between European nations so they wouldn't be dragged into war, which could threaten the newly-formed Germany",
           "European powers met up to divide Africa peacefully between them",
           "Africans had no say, resulting in colonies that cut across tribal lines, often grouping rival tribes in the same colony and separating tribes between colonies",
           "Allowed King Leopold II to keep posession of the Congo",
           "Allowed free movement of goods on major rivers"
       ],
       causes: ["European imperialism and rivalries"],
       effects: ["Scramble for Africa",
           "Colonial borders cut across tribal lines",
           "Set precedent for European domination and exploitation of Africa"
       ],
       theme: "governance"
   },
   "Brazil bans slavery" : {
       timePeriod: [1888, 1888],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Brazil"],
       description: [""],
       causes: ["The Brazilian population wanted to keep slavery so it continued for much longer than other countries"],
       effects: ["The castas system still persisted",
            "Economic dependency on wage labor and immigrant labor increased"
       ],
       theme: "social, economy"
   },
   "Ghost Dance movement" : {
       timePeriod: [1889, 1890],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["United States 1776-1900"],
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
       effects: ["The Philippines remained under US control",
        "Delayed independence and strengthened American imperial influence in the Pacific"
       ],
       theme: "governance"
   },
   "Spanish-American War" : {
       timePeriod: [1898, 1899],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Spain 1750-1900", "United States 1776-1900"],
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
           "Established Western-style industrial, commercial, and medical systems",
           "Initiated on railroads and telegraph construction"
       ],
       causes: ["Efforts to modernize; continuation of the Self-Strengthening Movement"],
       effects: ["Reversed by Empress Dowager Cixi"],
       theme: "governance"
   },
   "Second Boer War" : {
       timePeriod: [1899, 1902],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["British Territory"],
       description: ["Conflict restarted after the discovery of diamonds and gold in Boer territory",
           "The British imprisoned the Boers in segregated concentration camps"
       ],
       causes: ["Discovery of diamonds and gold in South Africa"],
       effects: ["Formation of the Union of South Africa"],
       theme: "governance"
   },
   "Philippine-American War" : {
       timePeriod: [1899, 1899],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Philippines", "United States 1776-1900"],
       description: ["The Philippines tried to fight for their independence from the US after trying to gain independence from Spain",
           "Filipino forces used guerrilla warfare"
       ],
       causes: ["Philippine efforts for independence from the Spanish",
        "Transfer to the US after the Spanish-American War"],
       effects: ["The Philippines remained under American control"],
       theme: "governance"
   },
   "Boxer Rebellion" : {
       timePeriod: [1900, 1900],
       emphasizedUnit: [1750, 1900],
       applicableCountries: ["Qing Dynasty"],
       description: ["A group of anti-imperialists known as the Boxers attacked Christians and foreigners to protest foreign influence",
        "They were supported by the Empress Cixi",
        "The government called on the Europeans to help defeat the Boxers",
        "Forced Empress Cixi to continue reforms"
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
       applicableCountries: ["Asante Empire", "British Territory", "England 1750-1900"],
       description: ["The British tried for a fifth time to take control of the Asante Empire by demanding the Golden Stool",
        "The Asante queen, Yaa Asantewaa, led resistance to protect the Golden Stool",
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
       applicableCountries: ["Mexico 1900-Present"],
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
        "Russia 1750-1917",
        "USSR",
        "United States 1900-Present",
        "France 1900-Present",
        "Italy",
        "England 1900-Present",
        "British Territory",
        "Japan 1900-Present",
        "Belgium",
        "Australia",
        "New Zealand",
        "French Territory",
        "Bulgaria",
        "Portugal 1900-Present",
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
       causes: ["End of the Tanzimat reforms, ending the limited protections for the Christian Armenians",
            "Suspicion that the Armenians would support Russia, the Ottoman's enemy"
       ],
       effects: ["Hitler eventually modeled the Holocaust after the Armenian Genocide",
        "Mass displacement of Armenian populations"
       ],
       theme: "social"
   },
    "Russian Revolution and Civil War" : {
        timePeriod: [1917, 1921],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["USSR"],
        description: ["The Bolsheviks, led by Vladimir Lenin, took control of Russia and established a communist government in 1917",
            "Surrendered to Germany, ceding land to them in the Treaty of Brest-Litovsk (1918)",
            "The Bolsheviks fought for control against other communist groups as well as troops the United States sent to try to quell the communist revolution"
        ],
        causes: ["Incompetence of the Russian government to deal with the strain put on the country from taking part in World War I"],
        effects: ["Establishment of the Soviet Union"],
        theme: "governance"
    },
    "Great Depression" : {
        timePeriod: [1929, 1945],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["United States 1900-Present", "Germany 1920-1945", "England 1900-Present", "France 1900-Present", "British Territory", "French Territory"],
        description: ["In the US, everyone tried to sell stocks at the same time, so the value of the stocks plummeted. The stock market crashed in 1929 and started the Great Depression",
            "Germany was especially affected because hyperinflation occured after printing money to pay reparations after World War I",
            "International trade decreased because countries made strict tariffs to protect domestic jobs",
            "Japan recovered quickly by devaluing their currency, making domestic products cheaper than imports",
            "The US temporarily recovered by using Keynesian Economics through the New Deal, using government deficit spending to stimulate the economy. However, in 1937 Roosevelt felt that the government deficits were too big so he pulled back on the New Deal and the economy got worse again"
        ],
        causes: ["US stock market crashed",
            "Farms produced so much that the value of their products decreased",
            "France and Britain were having a hard time paying back loans because Germany was having a hard time paying their debts and the Soviet Union refused to pay pre-revolution debts",
            "Bank failures and lack of financial regulation",
            "Global econommic interconnectedness throuhg war debts and reparations"
        ],
        effects: ["Mass unemployment",
            "Ended after World War II",
            "Germans were angry about the Depression. This anger and discontentment in conjunction with the weakness of the Weimar Republic, led to the rise of the Nazis",
            "Expansion of government welfare programs"
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
        causes: ["Discontent about the unfair economic policies put in place by the British government",
            "Desire to demonstrate the power of mass civil disobedience"
        ],
        effects: ["Rise of nonviolent resistance to the British government in India"],
        theme: "governance"
    },
    "Ukraine Famine" : {
        timePeriod: [1932, 1933],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["USSR"],
        description: ["Ukraine resisted Stalin's forced collectivisation of farms, hiding and destroying crops that the Soviet government tried to collect",
            "Stalin confiscated grain and sealed Ukraine's borders, stopping food distributing to Ukraine, leading to famine",
            "Somewhere from 5 to 10 million people died"
        ],
        causes: ["Anger about the collectivization of farms and the Five-Year Plans"],
        effects: ["Millions of deaths",
            "Strengthening of Stalin's control over agriculture"
        ],
        theme: "governance"
    },
    "Spanish Civil War" : {
        timePeriod: [1936, 1939],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Spain 1900-Present"],
        description: ["The Popular Front (liberal) was elected in 1936, but the military and Catholic church opposed them",
            "The fascist Nationalists fought against the Republicans/Loyalists (supporters of the Popular Front). The Nationalists were led by Francisco Franco and had support from Hitler, Mussolini and Portuguese Antonio Salazar, while the Republicans had the support of the Soviet Union, Britain, France, and the United States",
            "Foreign involvement in the war led to more violence, as seen in the German and Italian bombing of Guernica, the first time civilians were targeted by mass aerial bombing",
            "The Nationalists won the war in 1939 and established Francisco Franco as dictator until 1975"
        ],
        causes: ["Election of the liberal Popular Front",
            "Discontent of conservatives",
            "Polarization between left- and right- wing groups"
        ],
        effects: ["Francisco Franco's dictatorship from 1939 to 1975",
            "Allowed Hitler and Mussolini to test weapons and alliances for World War II"
        ],
        theme: "governance"
    },
    "World War II": {
        timePeriod: [1938, 1945],
        emphasizedUnit: [1900, 2000],
        applicableCountries: [
            "Germany 1920-1945",
            "Italy",
            "Japan 1900-Present",
            "Hungary",
            "Bulgaria",
            "Croatia",
            "England 1900-Present",
            "United States 1900-Present",
            "China",
            "France 1900-Present",
            "USSR",
            "Canada",
            "Australia",
            "New Zealand",
            "South Africa",
            "Poland",
        ],
        description: ["Axis Powers: Germany, Italy (Rome-Berlin Axis), Japan (Anti-Comintern Pact), Hungary, Romania, Bulgaria, Croatia",
            "Allies: Britain, USSR, China, US, France, Canada, Australia, New Zealand, South Africa, Poland",
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
            "The US developed the atomic bomb in 1945 and dropped ones on Hiroshima and Nagasaki, forcing Japan to unconditionally surrendered on September 2"
        ],
        causes: ["There was unrest in Germany, leading to the rise of the Nazi party and Hitler",
            "Hitler wanted to conquer the whole continent and began taking territory starting with Rhineland in 1936, and Czechoslovakia and Poland in 1939"
        ],
        effects: ["World War II was the bloodiest war in history. About 75 million people died, with about 2/3 of them being civilians",
            "Led to the creation of the UN since the League of Nations was ineffective. They made the Security Council, where members of 15 nations would meet to discuss conflicts. 5 members (US, Britain, France, USSR, China) were permanent while the other 10 rotated",
            "Gremany was split between the USSR, US, Britain, and France. The USSR's territory became East Germany, and the Western powers' territory became West Germany",
            "The USSR got control of Poland",
            "Europe became less influetial, solidifying the shift of power to the US",
        ],
        theme: "governance"
    },
    "First Indochina War" : {
        timePeriod: [1945, 1954],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["French Territory", "France 1900-Present", "United States 1900-Present"],
        description: ["Led by Ho Chi Minh",
            "Declared independence from France (who owned them as a colony) and Japan (who had occupied them during World War II) in 1945",
            "The US initially supported Vietnamese independence after World War II but switched to support the French in the 1950s due to fear of communism",
            "The Vietnamese won the war with the Battle of Dien Bien Phu in 1954, gaining independence",
        ],
        causes: ["Resistance to European imperialism, desire for independence"],
        effects: ["Vietnam was split into the North, which was communist and led by Ho Chi Minh, and the South, led by noncommunist Ngo Dinh Diem",
            "Vietnam War"
        ],
        theme: "governance"
    },
    "Indian and Pakistani independence" : {
        timePeriod: [1947, 1947],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["India", "Pakistan", "England 1900-Present"],
        description: ["The Indian National Congress was formed in 1885 by elite Hindus and Muslims trying to achieve independence",
            "Pushed more for independence after World War II",
            "Muhammad Ali Jinnah proposed the Two-State Solution to ensure that the Muslim minority wouldn't be overwhelmed by the Hindu majority",
            "Others, like Gandhi and Jawaharlal Nehru wanted to keep India united",
            "In 1946, the Royal Indian Navy revolted against Britain and showed them that it couldn't effectively rule India",
            "Negotiated independence in 1947",
            "Pakistan was created as a Muslim nation and India was created as a Hindu nation. Muslims in India migrated to Pakistan and Hindus in Pakistan moved to India",
            "The partition sparked massive communal violence"
        ],
        causes: ["Resistance to European imperialism, desire for independence"],
        effects: ["Migration of abount 12 million people moving to between countries",
            "Deaths of around a million people traveling between Pakistan and India",
            "Long term conflict over Kashmir"
        ],
        theme: "governance"
    },
    "Apartheid" : {
        timePeriod: [1948, 1994],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["South Africa"],
        description: ["In the Apartheid system, the white minority had all the privileges while people of color were severely restricted. For example, they could only live in certain areas, and needed passbooks (identity documents) to be in \"white\" areas, and mixed marriages were forbidden",
            "There were many protests against apartheid but they were suppressed",
            "In 1964, Nelson Mandela, the leader of the African National Congress, was imprisoned, sparking global anger. Other countries began urging divestment and economic sanctions, and the UN expelled South Africa in 1974.",
            "In 1989 F. W. de Klerk, the acting president, released Nelson Mandela and started negotiations",
            "Apartheid laws were repealed in the early 1990s, and Nelson Mandela became president in the first free election in 1994"
        ],
        causes: ["Racism and the desire to maintain white minority political and economic control"],
        effects: ["Racial violence",
            "Effort to reconcile after apartheid was ended with the Truth and Reconciliation Commission formed in 1996"
        ],
        theme: "social"
    },
    "Takeover of the Chinese Communist Party" : {
        timePeriod: [1949, 1949],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["China"],
        description: ["The Chinese Communist Party, controlled by Mao, and Chinese Nationalist Party, led by Sun Yat-sen and then Chiang Kai-shek, were fighting for power but temporarily allied to fight against Japan in World War II starting in 1937.",
            "After the war, they resumed fighting for control.",
            "In 1927, Chiang Kai-shek forced Mao to retreat in what was known as the Long March. They retreated 6000 over a year but eventually reassembled in 1935. This inspired the Chinese people so the Chinese Communist party gained more support",
            "In 1949, Mao defeated the Nationalists and established the People's Republic of China"
        ],
        causes: ["Fight for control over the Chinese government"],
        effects: ["Establishment of a Chinese communist government",
            "Nationalists retreat to Taiwan"
        ],
        theme: "governance"
    },
    "Korean War" : {
        timePeriod: [1950, 1953],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["North Korea", "South Korea", "China", "United States 1900-Present"],
        description: ["North Korea invaded South Korea in order to unite the two",
            "The United Nations supported the South to oppose the spread of communism, with most of the support coming from the United States",
            "The Soviet Union supported the North by supplying weapons and money, but not troops",
            "The South and their allies pushed the North Koreans out of South Korea. American General Douglas MacArthur continued to push the North towards the Chinese border",
            "China feared that their territory would be threatened by the South and UN armies, so they sent soldiers to support the North Koreans",
            "With the help of the Chinese soldiers, the North pushed the border back to where it had originally been before the war",
            "Ended with an armistice instead of a peace treaty"
        ],
        causes: ["Division of Korea",
            "The North wanted to reunite Korea",
            "Cold War tensions and the US policy of containment"
        ],
        effects: ["Stalemate",
            "Korea remained divided"
        ],
        theme: "governance"
    },
    "Egyptian coup" : {
        timePeriod: [1952, 1952],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Egypt"],
        description: ["General Gamal Abdel Nasser and Muhammad Naguib overthrew the Egyptian king and established the Republic of Egypt"],
        causes: ["Egyptian resentment of British military and political influence",
            "Desire for land reform, modernization, and more equality"
        ],
        effects: ["Naguib, then Nasser's presidency",
            "Socialist reforms and nationalization of industries and the Suez Canal",
            "Rise of pan-Arab nationalism"
        ],
        theme: "governance"
    },
    "Vietnam War" : {
        timePeriod: [1954, 1975],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Vietnam", "United States 1900-Present"],
        description: ["The country was split after independence, with the North led by Communist Ho Chi Minh, and the South led by noncommunist Ngo Dinh Diem",
            "Ngo Dinh Diem was unpopular and corrupt but supported by the US since he was anti-communist until a coup in 1963",
            "Some Southern Vietnamese supported the North by joining the Viet Cong",
            "President Johnson sent troops to support South Vietnam in 1964 because they were afraid that if Vietnam turned completely communist, that would trigger the spread of communism in Southeast Asia. By 1967, 365,000 Americans were fighting in Vietnam",
            "The Tet Offensive in 1968 shook American morale. The Viet Cong attacked the Americans on Tet (Lunar New Year) and succeeded in surprising US forces. They wanted to end the war that year because Ho Chi Minh was sick so they became more aggressive",
            "Ho Chi Minh died in 1969",
            "The US began pulling out of the war in 1971. By 1973, all their troops were withdrawn",
            "The US signed the Paris Peace Accords agreeing to withdraw from Vietnam as long as the North didn't attack the South",
            "1-2 million deaths from the Vietnam War",
            "In 1975, the North claimed that the South had attacked them and launched the Ho Chi Minh Campaign, conquering South Vietnam and uniting the North and South"
    ],
        causes: ["Ho Chi Minh wanted to unify Vietnam",
            "The United States wanted to prevent the spread of communism. They thought that if Vietnam became communist that all of Southeast Asia would follow"
        ],
        effects: ["Unification of Vietnam under a communist government",
            "Devestation of Vietnam",
            "Mass migration of Vietnamese"
        ],
        theme: "governance"
    },
    "Algerian War for Independence" : {
        timePeriod: [1954, 1962],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Algeria", "France 1900-Present"],
        description: ["The National Liberation Front led the war for independence. They had support from Egypt and other Arab countries",
            "Involved brutal guerrilla war and urban terrorism. Mainly Algerians died.",
            "Some French supported Algerian independence",
            "In 1958, Charles de Gaulle expanded presidential power to be able to give Algeria independence by bypassing the French National Assembly"
        ],
        causes: ["Growing nationalism and desire for independence after World War I",
            "The French put more restrictive laws in place"
        ],
        effects: ["Algerian independence",
            "Algerian migration to France, and resulting anti-immigrant sentiment",
            "Algerian political instability"
        ],
        theme: "governance"
    },
    "Ghana Independence" : {
        timePeriod: [1957, 1957],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Ghana", "England 1900-Present"],
        description: ["Britain agreed to negotiate independence for its Gold Coast colony",
            "Negotiations were led by the UN",
            "Gold Coast colony gained independence and became Ghana in 1957",
            "Ghana became the first sub-Saharan African colony to gain independence",
            "Kwame Nkrumah became the first president, but turned into a dictator until 1966"
        ],
        causes: ["Growing nationalism and desire for independence after World War I",],
        effects: ["Kwame Nkrumah's dictatorship",
            "Inspired other African independence movements"
        ],
        theme: "governance"
    },
    "Great Leap Forward" : {
        timePeriod: [1958, 1962],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["China"],
        description: ["China's leader, Mao Zedong wanted to rapidly industrialize China",
            "Farms were collectivized into communes so that more people could be dedicated to industrial work. Those who protested were set to reeducation camps or were killed",
            "Encouraged production of iron, even in homemade furnaces in people's backyards",
            "The 1958 harvest was really good, but drought and insects damaged the following years' harvests. This, combined with exaggerated figures from communes to the government, led to a famine that killed 20 million",
            "Even during the famine, Mao emphasized the necessity of exporting grain to show the world that communism was successful"
        ],
        causes: ["Mao wanted to turn China into an industrial power"],
        effects: ["Famine",
            "Decline of Mao's prestige and influence until the Cultural Revolution"
        ],
        theme: "economic"
    },
    "Cuban Missile Crisis" : {
        timePeriod: [1962, 1962],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Cuba", "United States 1900-Present", "USSR"],
        description: ["After the Bay of Pigs, Castro allied with the Soviet Union",
            "In 1962, the Soviets installed nuclear weapons into Cuba. These weapons could target every major American city with the exception of Seattle",
            "In response, the US blockaded Cuba from receiving more nuclear weapons",
            "In the end, the USSR agreed to withdraw its weapons as long as the US withdrew its weapons from Turkey and Greece"
        ],
        causes: ["Fidel Castro seized power in Cuba and redistributed its resources so Cuba was not under as much American control",
            "Kennedy backed a CIA coup called the Bay of Pigs that was attempted but failed. This caused Castro to further mistrust the US",
            "Soviet desire to counterbalance the US missiles in Turkey and Greece"
        ],
        effects: ["Creation of the hotline",
            "Nuclear deescalation"
        ],
        theme: "governance"
    },
    "Biafran Civil War" : {
        timePeriod: [1967, 1970],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Nigeria"],
        description: ["A bloody civil war (Nigerian Civil War or Biafran War) that left over one million civilians dead, in addition to military casualties.",
            "The secession was ultimately unsuccessful"
        ],
        causes: ["The Igbo minority felt that they weren't being represented by the Hausa-Fulani dominated government, so they created their own nation, Biafra, and attempted to secede.",
            "The Biafra territory held valuable oil resources that the Nigerian government wanted"
        ],
        effects: ["Biafran defeat",
            "Continued ethnic tensions in Nigeria"
        ],
        theme: "governance"
    },
    "Cultural Revolution" : {
        timePeriod: [1966, 1967],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["China"],
        description: ["Red Guards targeted people, especially intellectuals, government officials, and teachers, who were \"not revolutionary enough\" and sent them to reeducation camps where they had to do physical labor.",
            "This turned people against each other as they turned each other in.",
            "It also created social chaos and destroyed cultural heritage"
        ],
        causes: ["Mao regained power in China and wanted to reestablish support for communism and purge his political rivals"],
        effects: ["Mass persecution"],
        theme: "governance"
    },
    "Angolan Civil War" : {
        timePeriod: [1975, 2002],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Angola", "USSR", "Cuba", "United States 1900-Present", "South Africa", "China"],
        description: ["The Popular Movement for the Liberation of Angola (MPLA) represented the Mbundu tribe and had support from the USSR and Cuba",
            "The National Union for the Total Independence of Angola (UNITA) represented the Ovimbundu tribe and had support from the United States and South Africa",
            "The National Front for the Liberation of Angola (FNLA) represented the Bankongo tribe and had support from the United States, China, and the Democratic Republic of the Congo",
            "The three groups fought for control of Angola"
        ],
        causes: ["Rival tribes were in the same country and government",
            "Foreign intervention due to the Cold War"
        ],
        effects: ["Ended in MPLA (representing the Mbundu tribe) victory",
            "Long-term political instability"
        ],
        theme: "governance"
    },
    "Green Belt Movement created" : {
        timePeriod: [1977, 1977],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Kenya"],
        description: ["Wangari Maathai, a woman from Kenya, saw that women in her community were struggling with the environmental effects of colonization, so she founded the Green Belt Movement",
            "Focuses on empowering women while helping the environment",
            "The movement saw a lot of opposition from the government, as they saw the large gatherings of women as a threat to their control",
        ],
        causes: ["Environmental damage from colonization, including deforestation, soil exhaustion, and water scarcity"],
        effects: ["Millions of trees planted",
            "Empowerment of women"
        ],
        theme: "environment, social"
    },
    "Soviet-Afghan War" : {
        timePeriod: [1979, 1989],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Afghanistan", "USSR", "United States 1900-Present"],
        description: ["The Soviet Union invaded in 1979 to support the communist government from collapsing under rebel pressure",
            "The United States intervened to support the Mujahideen guerrilla troops who were trying to overthrow the communist government",
            "Gorbachev withdrew from the war from 1985-1989 because it was draining Soviet funds and morale",
            "The communist regime fell in 1992"
        ],
        causes: ["Threat to the communist government and the Soviets' promise to support it"],
        effects: ["Fall of the communist government in Afghanistan",
            "Rise of the Taliban",
            "Regional instability"
        ],
        theme: "governance"
    },
    "Contra War" : {
        timePeriod: [1981, 1989],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["Nicaragua", "United States 1900-Present", "USSR"],
        description: ["The Sandinistas, a socialist group, took down the Somoza dictatorship and took over the government in 1979. They emphasized liberation theology, land redistribution, and expanded educational and healthcare",
            "The US supported the Contras who tried to overthrow the Sandinistas in 1981, as the US disliked that socialists were coming to power",
            "In response to the US's actions, The Sandinistas turned to the Soviets for support",
            "The Contras used guerrilla tactics",
            "The Sandinistas limited civil rights and began conscripting soldiers during the war",
            "The 1989 Tela Accords demobilized both armies"
        ],
        causes: ["Takeover of the Sandinistas"],
        effects: ["The Sandinistas fell out of power in 1992"],
        theme: "governance"
    },
    "Fall of the Berlin Wall" : {
        timePeriod: [1989, 1989],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["East Germany", "West Germany"],
        description: ["The Berlin Wall had been built by the East German government (with Soviet backing) in 1961 to prevent the people of East Berlin from moving to West Berlin",
            "The Berlin Wall finally fell when East German authorities opened the border after mass protests"
        ],
        causes: ["Soviet control was weakening"],
        effects: ["Reunification of Germany in 1990",
            "End of the Cold War"
        ],
        theme: "governance"
    },
    "Tiananmen Square Massacre" : {
        timePeriod: [1989, 1989],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["China"],
        description: ["On June 4, 1989, theree was a big protest in Tiananmen Square, Beijing. People were demanding to see government officials to demand more political freedom.",
            "The government sent troops and tanks to subdue the protesters",
            "It's estimated that a few thousand civilians were killed, but the government covered up the event from the world and its own people."
        ],
        causes: ["Deng Xiaoping's economic reforms made people demand for political reforms"],
        effects: ["Mass arrests and censorship",
            "Increased government control"
        ],
        theme: "governance"
    },
    "Paris Climate Agreement" : {
        timePeriod: [2015, 2015],
        emphasizedUnit: [1900, 2025],
        applicableCountries: ["United States 1900-Present", "Russia 1991-Present", "France 1900-Present", "England 1900-Present", "Spain 1900-Present", "Portugal 1900-Present", "South Africa"],
        description: ["197 countries agreed to reduce carbon emissions so that the world does not exceed 1.5 degrees Celsius of warming above pre-industrial levels"],
        causes: ["Climate change, rising global temperatures, increased extreme weather events",],
        effects: ["Supported emission reductions",
            "Created a global framework for climate action"
        ],
        theme: "environment"
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
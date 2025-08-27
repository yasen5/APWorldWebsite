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

export const generalNotes: CountryNotes = {
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
            "Technology": ["With the new Somali saddle, camels could carry up to 600lbs"]
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
            "Technology":["Facilitated the spread of maritime technology, including lateen sails (triangular to allow wind to be caught from all directions), the stern rudder (allowed for better steering and maneuverability), the astrolabe, dhow ships, and the compass"]
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
            "Technology": []
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
            "Technology": []
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
            "Technology": []
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
            ]

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
            ]
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
                  "Railways and steamships improved transportation, linking industrial centers and ports. Urbanization accelerated as new industrial cities rapidly grew."],
            "Uncategorized": ["Countries that had money, natural resources, and water transportation (eg. US, Germany, France, Russia, and Japan) began to industrialize after Britain",
                  "Consumerism began to emerge in the middle class",
                  "Before the industrial revolution, families worked together at home on their farms, but after the industrial revolution, the whole family was separated to work in factories",]
      },
      "Communism": {
            "Environment": [],
            "Culture": [],
            "Governance": [],
            "Economy": [],
            "Social": [],
            "Technology": [],
            "Uncategorized": [ "Developed by Karl Marx (1818-1883)"]
      }
}

export const countryNotes: CountryNotes = {
      "Seljuk Caliphate":{
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["1037-1194",
                  "Established state in the declining Abbasid Caliphate",
                  "Conquered Syria and Anatolia",
                  "Didn't collect much tax, and didn't invest in agriculture or infrastructure, leading to the decline of the House of Wisdom and the collapse of the canal system"
            ],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
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
      "Rajput Kingdoms": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Delhi Sultanate": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Chola Dynasty": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Khmer Empire": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Srivijaya Empire": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Great Zimbabwe": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Swahili Coast": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Fatimid Caliphate": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["909-1171"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Ghana Empire": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Mali Empire": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Venice": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Byzantine Empire": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Sweden": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Denmark": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Holy Roman Empire": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Castilla": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Navarre": {
            "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Portugal": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "France": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Aragon": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      "Mayan city states": {
             "Environment": ["yay environment notes"],
            "Culture": ["yay culture notes"],
            "Governance": ["yay governance notes"],
            "Economy": ["yay economy notes"],
            "Social": ["yay social notes"],
            "Technology": ["yay technology notes"]
      },
      //more countries will go here
}
import Globalization from "../assets/globalization.png";
import Tech from "../assets/tech.jpg";
import GreenRevolution from "../assets/green-revolution.jpg";
import KnowledgeEconomy from "../assets/knowledge-economy.jpg";
import GlobalWarming from "../assets/global-warming.jpg";
import Health from "../assets/health.jpg";
import TradeOrganizations from "../assets/trade-organizations.jpg";
import MultinationalCorporations from "../assets/multinational-corporations.jpg";
import UnitedNations from "../assets/united-nations.jpg";



export interface Unit9Notes {
    [title: string]: {
        notes: string[];
        image: string;
    }
}

export const unit9Notes: Unit9Notes = {
    "Globalization": {
        notes: [
            "After the fall of the Soviet Union, Eastern European countries had access to free trade with capitalist countries",
            "In the early 1900s, the radio allowed for more communication",
            "Air travel allowed products to be shipped more efficiently (and cheaper)",
            "Social media and networking sites allowed people to share their experiences as well as spread knowledge about problems like racism",
	        "English is the most common second language because of the British Empire as well as the influence of American movies, research, and corporations.",
	        "Bollywood spread from India and became super popular",
            "Anime spread from Japan and became super popular",
            "Reggae emerged in the 1960s, and was popularized in the 1970s because of Bob Marley",
            "Kpop spread from Korea and became super popular",
            "The Olympic Games, established in 1896, promoted internationalism",
            "Many people resist globalization, because transnational/multinational corporations make it much harder for small local businesses to survive, and they often violate human rights and don’t prioritize the environment",
            "In 1999, Seattle protested the conditions that allowed transnational corporations to exploit people in the \"Battle of Seatte\"",
        ],
        image: Globalization
    },
    "Tech and Science Advances": {
        notes: [
            "Cars began to be used in the early 1900s",
            "Radios became more available in the early 1900s",
            "The Internet started to be used for communication in the late 1900s",
            "Air travel was developed",
            "Nuclear power plants along with other forms of clean energy were developed",
            "Many different advances in health and medicines were made (see health category)"
        ],
        image: Tech
    },
    "Green Revolution": {
        notes: [
            "This focused on increasing crop production as a possible long-term solution for world hunger",
            "Developed varieties of grains with resistances to pests, diseases, and drought, using crossbreeding and genetic engineering. However, there were concerns about genetically modified plants harming pollinating insects, as well as leading to a loss of plant varieties",
            "Increased deforestation to make room for land for agricultural use",
            "Promote use of fertilizer, irrigation, and pesticides",
            "The Green Revolution harmed small farmers who couldn't afford all the technology needed for more successful agricultural production",
            "The increase in mechanized equipment lowered the demand for jobs in farming",
            "Chemicals, such as from the pesticides, damaged the soil"
        ],
        image: GreenRevolution
    },
    "Knowledge Economies": {
        notes: [
            "Knowledge economies emerged, based on developing, sharing, and using information through technology, communication, innovation, and collaboration. They often involve investing in research, education, innovation, and technological infrastructure.",
            "As countries shift to knowledge economies, their industrial production often declines",
        ],
        image: KnowledgeEconomy
    },
    "Global Warming": {
        notes: [
            "Fossil fuels, like coal, oil, petroleum, and natural gas, are used for power, but they are non-renewable and bad for the environment.",
            "Clean/renewable energy has started to be developed, including energy from the sun, wind, tides, and geothermal sources. Nuclear power plants produce about 5% of the world's energy, but building of power plants started to decline in the 1980s because of accidents, radiation from leaks, and consequences from nuclear waste. Solar and wind power make up an additional 5% of global energy output.",
            "Deforestation is caused by an increasing need for land for agriculture due to the growing population.",
            "Harmful agricultural practices have led to soil erosion",
            "Urbanization has led to farmers using more intensive farming methods, and has led to more pollution",
            "Industrialization has led to increased demand for natural resources",
            "Greenhouse gases, like carbon dioxide and methane, which come from planes, cars, and factories among other things, prevent heat from escaping the atmosphere.",
            "The growing population has led to more demand for resources and to resource scarcity, including water scarcity. About 1 billion people don’t have access to clean drinking water.",
            "Skeptics of global warming have said that humans can’t influence the climate",
            "Many people don’t want the debate about global warming to be settled, especially if everyone agrees that global warming is happening, since action would then have to be taken, and they don’t want responsibility for contributing to climate change or to have to change their habits or lose money to fix it. As a result, some people have paid to keep the debate going",
            "Climate activism, through protests, civil disobedience, and strikes, have aimed to pressure leaders into taking action.",
            "The Green Belt Movement aims to protect the environment and wilderness areas",
            "The Kyoto Protocol in 1997 was the first international agreement to reduce carbon emissions.",
            "The Paris Agreement is an international agreement between 195 countries made in 2015 to keep carbon emissions from exceeding 1.5°C of warming",
        ],
        image: GlobalWarming
    },
    "Health": {
        notes: [
            "Alexander Fleming discovered penicillin in 1928. It was used a lot in World War II, and then spread for civilian use.",
            "Many diseases are still common, especially in developing countries, because of the conditions of poverty - bad housing, bad working conditions, contaminated water, less access to healthcare. For example, malaria is very common in tropical areas even though there are vaccines and preventative measures.",
            "Birth control was developed in the 1950s, and approved for use in 1960. This reshaped sexual practices, gender roles, family planning, and decreased fertility rates as women were having fewer children.",
            "Vaccines were first developed in 1796 but were only widely distributed and further developed after 1900. Vaccines helped manage diseases.",
            "The World Health Organization (WHO) was created to help deal with disease around the world",
            "Polio, because of the 1955 vaccine, and the 1961 oral vaccine, has been eliminated in most countries, but war, political unrest, and religious fundamentalism have made it hard for the vaccine to be administered to everyone around the world.",
            "Ebola epidemics emerged in the Congo in 1976, and in West Africa in 2014, where public health efforts contained and then ended the outbreak.",
            "HIV/AIDS has been a major problem since 1981. Treatments were developed in the 1990s, but they were very expensive, except for in Brazil, which made them free.",
            "Heart disease has become more common and associated with longevity, especially in urban areas.",
        ],
        image: Health
    },
    "Transnational Trade Organizations": {
        notes: [
            "Promote international trade and economic growth",
            "European Economic Community",
            "Mercosur in South America",
            "Association of Southeast Asian Nations (ASEAN)",
            "General Agreement on Tariffs and Trade (GATT) helps lift restrictive barriers on trade",
            "World Trade Organization replaced GATT in 1995, but it mostly represented corporate instead of public interests",
            "The World Fair Trade Organization, created in 1989, promoted fair trade, which includes fair prices, no child/forced labor, and protecting the environment, among other things",
            "The World Bank fights poverty by loaning money to countries for dams, roads, education, and disease prevention, but simultaneously damages the environment and local cultures",
            "The International Monetary Fund (IMF) was designed to help the economy by promoting stable currency exchange rates and giving short-term loans and economic advice, but many complain that the IMF doesn’t take countries’ needs into account and acts only to benefit wealthy countries.",
        ],
        image: TradeOrganizations
    },
    "Multinational Corporations": {
        notes: [
            "Microsoft, Google, Mahindra & Mahindra (based in India), Nestlé (based in Switzerland)",
            "Legally incorporated in one country but sell in other countries. They often have decentralized operations",
            "Often take advantage of knowledge and industrial economies, using designers and engineers from knowledge economies and low-wage workers from industrial economies"
        ],
        image: MultinationalCorporations
    },
    "United Nations": {
        notes: [
            "The General Assembly includes representatives from all the members and makes decisions about peace, security, admission of new members, and budget",
            "The Security Council, made up of 10 rotating members and 5 permanent members (US, France, Britain, China, USSR/Russia) makes decisions about conflicts. The permanent members have the most power and can veto any intervention",
            "The Secretariat, usually from a neutral country, deals with administration. They have to be approved by the permanent members of the Security Council",
            "Created the UN International Children’s Emergency Fund (UNICEF) in 1946 to provide for children after World War II. Since then, it has also helped children in disaster sites and developing countries",
            "Adopted the Universal Declaration of Human Rights in 1948, which included the right to freedom from slavery, torture, and degrading punishment, equality before the law, nationality, ownership of property individually or with others, freedom of thought, conscience, religion, opinion, and expression, equal pay for equal work, paid holidays and rest, rights for children born within and outside of marriage, and the right to adequate food, clothing, shelter, healthcare, and education",
            "The International Court of Justice deals with international law problems such as border disputes and treaty violations",
            "The UN offers food, medicines, and shelter to refugees through non-governmental organizations (NGOs) and the UN High Commissioner for Refugees (UNHCR)",
            "Adopted an international bill of rights for women, including the rights to vote and hold office, freely choose a spouse, have access to the same education as men, and access birth control and family planning resources, during the 1979 Convention on the Elimination of All Forms of Discrimination Against Women",
            "The UN Educational, Scientific and Cultural Organization (UNESCO) develops literacy, extends free education, and protects cultural and environmental sites.",
            "The UN has sent some peacekeeping forces out, but slow responses and their policy of not attacking unless attacked made their efforts less effective, as seen in the Rwandan and Bosnian Genocides. They did, however, help end civil wars in Mozambique, El Salvador,and Cambodia"
        ],
        image: UnitedNations
    },
//    "Title": {
//         notes: [""],
//         image: Globalization
//     },
    
}


export interface ValidComparison {
    timePeriod: [number, number],
    country1: string,
    country2: string,
    similarities?: string[],
    differences?: string[]
}

export const comparisons : ValidComparison[] = [
    {
        timePeriod: [1450, 1750],
        country1: "Ottoman Empire",
        country2: "Mughal Empire",
        similarities: [
            "Gunpowder empires using firearms to expand and maintain control",
            "Religious tolerance toward diverse subject populations",
            "Strong centralized rule under powerful monarchs"
        ],
        differences: [
            "Ottomans were primarily Sunni Muslim rulers of a Mediterranean empire, while Mughals ruled a largely Hindu population in South Asia",
            "The Ottomans developed a large naval presence, while the Mughals focused more on land-based control"
        ]
    },
    {
        timePeriod: [1450, 1750],
        country1: "Spain",
        country2: "Portugal",
        similarities: [
            "Early leaders in maritime exploration",
            "Established overseas colonial empires",
            "Used colonies to extract wealth through mercantilist policies"
        ],
        differences: [
            "Spain focused on large territorial empires in the Americas, while Portugal emphasized trade posts in Africa and Asia",
            "Spain relied heavily on silver mining, whereas Portugal focused more on spice and slave trades"
        ]
    },
    {
        timePeriod: [1750, 1900],
        country1: "Great Britain",
        country2: "Japan",
        similarities: [
            "Underwent rapid industrialization",
            "Expanded state power through modernization",
            "Used new technologies to strengthen military capabilities"
        ],
        differences: [
            "Britain industrialized gradually through private enterprise, while Japan industrialized rapidly through state-led reforms",
            "Britain already possessed a global empire, while Japan pursued imperial expansion later in the period"
        ]
    },
    {
        timePeriod: [1750, 1900],
        country1: "China (Qing Dynasty)",
        country2: "Ottoman Empire",
        similarities: [
            "Faced internal rebellions and external pressure from European powers",
            "Struggled to modernize traditional political and economic systems",
            "Lost territorial and economic sovereignty during the 19th century"
        ],
        differences: [
            "China experienced significant population growth that strained resources, while the Ottoman Empire faced ethnic nationalism",
            "Ottoman reforms were more centralized, whereas Qing reforms were uneven and resisted by elites"
        ]
    },
    {
        timePeriod: [1900, 2000],
        country1: "United States",
        country2: "Soviet Union",
        similarities: [
            "Emergence as global superpowers after World War II",
            "Engaged in ideological competition during the Cold War",
            "Invested heavily in military and technological development"
        ],
        differences: [
            "The United States promoted capitalism and democratic governance, while the Soviet Union promoted communism and one-party rule",
            "The U.S. economy was market-based, while the Soviet economy was centrally planned"
        ]
    } 
]
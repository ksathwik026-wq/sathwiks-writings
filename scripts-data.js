// Screenplay Portfolio Dataset Modules containing structural attributes mapping directly to DOM nodes
const SCREENPLAY_PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Veera Prathapam (The Fierce Reign)",
        genre: "action",
        format: "short film",
        pages: 8,
        status: "Shooting Script",
        market: "Telugu Cinema",
        readTime: 2,
        tropes: ["Mass Elevation", "Police", "Mining Syndicate"],
        hook: "High-octane commercial action entertainer.",
        plot: "A fierce state police officer discovers a vast illegal mining operation threatening a remote village. He single-handedly dismantles the syndicate using high-mass elevation fights, heavy vehicle chases, and explosive pre-interval face-offs.",
        characters: [
            { name: "VEERA PRATHAPAM", desc: "A ruthless, incorruptible state police officer who uses force to deliver instant justice." },
            { name: "KAALI", desc: "The tyrannical mining syndicate leader operating out of the remote forest fringes." }
        ],
        excerpt: `EXT. MINING QUARRY - DAY\n\(\nHeavy\) red dust chokes the blazing sun. Ten massive dump trucks block the exit.\n\(\nVEERA\) PRATHAPAM (30s), in a crisp, dust-streaked police uniform, steps out of a dark SUV. He doesn't look at the armed thugs scaling the rocky ridges. He pulls out a pack of matches.\n\(\nVEERA\n(calm, lighting a match)\nYou\) dug too deep into this soil. Now, the soil wants its tax.\n\(\nKAALI (40s), the mining syndicate leader, spits blood onto the ground and raises an iron rod.\n\nKAALI\nTax\)? In these hills, my word is the constitution!\n\(\nVeera drops the match into an open petrol trail leading directly behind the trucks.\n\nBOOM!\) An explosion rips through the perimeter. Dust clears. Veera advances.`
    },
    {
        id: 2,
        title: "Gongoora Chicken",
        genre: "comedy",
        format: "feature",
        pages: 88,
        status: "Final Draft",
        market: "Telugu Cinema",
        readTime: 12,
        tropes: ["Rural Feud", "Godavari Flavor", "Kitchen Chaos"],
        hook: "Hilarious, rural Godavari-district comedy.",
        plot: "Two rival restaurant owners in Bhimavaram feud over a secret, legendary recipe. Their hilarious ego clashes involve local political chaos, slapstick chase sequences, and a chaotic confusion drama featuring popular comedic actors.",
        characters: [
            { name: "SUBBA RAO", desc: "An aggressive, proud restaurant owner running Bhimavaram's legacy culinary enterprise." },
            { name: "ANJI", desc: "Subba Rao's well-meaning but exceptionally clumsy apprentice kitchen chef." }
        ],
        excerpt: `INT. SRI LAKSHMI RESTAURANT - KITCHEN - NIGHT\n\(\nSteam\) rises from a massive copper pot. SUBBA RAO (50s) tastes a spoonful of gravy. His eyes widen in panic.\n\(\nSUBBA RAO\nToo\) flat! Missing the spark! Who stole the secret spice pouch from the safe?\n\(\nANJI (20s), the clumsy assistant, drops a tray of plates.\n\nANJI\nSir... I saw the delivery boy from the 'Bhimavaram Spicy Hub' climbing our compound wall with a flashlight between his teeth.\n\nSUBBA RAO\n(grabbing a heavy wooden rolling pin)\nThat\) competitor thief! Assemble the kitchen staff. Tonight, we raid their pantry!`
    },
    {
        id: 3,
        title: "Vamsavruksham (The Family Tree)",
        genre: "drama",
        format: "feature",
        pages: 111,
        status: "Final Draft",
        market: "Pan-India",
        readTime: 15,
        tropes: ["Family Bonds", "Village Festival", "Emotional Reunion"],
        hook: "Heart-wrenching, sentimental family drama.",
        plot: "An aging patriarch attempts to reunite his three estranged sons for a traditional village festival. The narrative dives deep into brotherly bonds, sacrifices, and tear-jerking emotional confrontations that resonate deeply with Telugu family audiences.",
        characters: [
            { name: "RAGHAVAIAH", desc: "The frail, deeply sentimental patriarch who dreams of seeing his home filled with family again." },
            { name: "SURAIAH", desc: "Raghavaiah's blunt, realistic next-door neighbor and life-long village companion." }
        ],
        excerpt: `EXT. ANCESTRAL VILLAGE HOME - VERANDA - DAWN\n\(\nRAGHAVAIAH (72),\) thin, frail, but standing straight, looks out at an old, withered neem tree in the courtyard. He holds three unposted letters in his trembling hands.\n\(\nSURAIAH (68), his lifelong neighbor, walks up with a brass tumbler of coffee.\n\nSURAIAH\nThey\) won't come, Raghavaiah. Ten years is a long time for city luxury to erase village roots.\n\(\nRAGHAVAIAH\n(smiling faintly, voice cracking)\nThe\) branches can grow as far as they want, Suraiah. But when the storm approaches, they will remember the strength of the roots. They will return.`
    },
    {
        id: 4,
        title: "Garuda Puranam",
        genre: "fantasy",
        format: "feature",
        pages: 160,
        status: "First Draft",
        market: "Pan-India",
        readTime: 20,
        tropes: ["Socio-Fantasy", "Archaeology", "Ancient Mythos"],
        hook: "Socio-fantasy mythology epic with rich VFX.",
        plot: "A modern-day archaeologist accidentally unlocks a mystical amulet from the Satavahana era. He must embrace his divine lineage to stop an ancient evil sorcerer from plunging the modern world into eternal darkness.",
        characters: [
            { name: "ARJUN", desc: "A practical, scientifically-minded archaeologist who possesses a hidden mythological legacy." },
            { name: "THE SORCERER", desc: "An ancient dark force entombed for ages, seeking to harvest light from the modern age." }
        ],
        excerpt: `INT. UNDERGROUND EXCAVATION SITE - NIGHT\n\(\nDust\) falls from ancient stone pillars. ARJUN (28), wearing tactical gear, clears dirt away from a heavy stone vault inscribed with ancient Telugu scripts.\n\(\nHis brush reveals a golden amulet shaped like a falcon in flight.\n\nARJUN\n(breathing heavily)\nThis isn't Satavahana style... this predates known history.\n\nAs\) his bare finger touches the central ruby, the gold veins on the amulet flash neon blue. The ground violently shakes. A deep, primordial roar echoes through the cavern walls.`
    },
    {
        id: 5,
        title: "Rayalaseema Rakkasi",
        genre: "horror",
        format: "feature",
        pages: 88,
        status: "Final Draft",
        market: "Telugu Cinema",
        readTime: 11,
        tropes: ["Horror Comedy", "Faction Backdrop", "Haunted Fort"],
        hook: "Spine-chilling horror comedy with a faction backdrop.",
        plot: "A cowardly tech worker inherits a haunted, abandoned fort in Rayalaseema. He discovers the ghost is an ancient, vengeful queen who needs his help to exact revenge on the descendants of treacherous landlords.",
        characters: [
            { name: "KIRAN", desc: "An overly cautious, software-centric tech worker completely out of place in a rugged terrain." },
            { name: "QUEEN'S GHOST", desc: "The fiercely majestic, sword-wielding specter of an ancient royal sovereign." }
        ],
        excerpt: `INT. KONDAVEEDU FORT - MAIN HALL - MIDNIGHT\n\(\nKIRAN (24), wearing noise-canceling headphones and a modern tech backpack, shines his phone flashlight around crumbling pillars.\n\nAn eerie, metallic sound of anklets echoes: CHINK... CHINK...\n\nKIRAN\n(voice trembling)\nHello\)? Is there any high-speed Wi-Fi network here?\n\(\nA\) freezing blast of wind blows his phone out of his hand. It lands face up. On the screen reflection, a royal queen wearing heavy ancient jewelry is hovering right behind him.\n\(\nQUEEN'S GHOST\n(booming voice)\nKiran!\) You have inherited my land, now you inherit my blade!`
    },
    {
        id: 6,
        title: "Godavari Gattu Meeda (On the Banks of Godavari)",
        genre: "romance",
        format: "feature",
        pages: 44,
        status: "First Draft",
        market: "Regional Crossover",
        readTime: 6,
        tropes: ["Poetic Romance", "Musical Soundtrack", "Class Divide"],
        hook: "Poetic, musical love story.",
        plot: "A classical singer visiting her hometown falls in love with a local boatman. The film navigates their beautiful romance, caste-class divides, and features a soul-stirring soundtrack set against the scenic Konaseema landscape.",
        characters: [
            { name: "SEETHA", desc: "A highly trained, introspective Carnatic musician visiting from urban centers." },
            { name: "CHINNABABU", desc: "A poetic, deeply insightful local boatman intimately attuned to the river's paths." }
        ],
        excerpt: `EXT. GODAVARI RIVER - HOUSEBOAT - SUNSET\n\(\nThe\) water turns into liquid gold. SEET

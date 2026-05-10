// Global data module storing portfolio screenplay assets
const SCREENPLAY_PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Veera Prathapam (The Fierce Reign)",
        genre: "action",
        format: "short film",
        pages: 8,
        hook: "High-octane commercial action entertainer.",
        plot: "A fierce state police officer discovers a vast illegal mining operation threatening a remote village. He single-handedly dismantles the syndicate using high-mass elevation fights, heavy vehicle chases, and explosive pre-interval face-offs.",
        excerpt: `EXT. MINING QUARRY - DAY\n\nHeavy red dust chokes the blazing sun. Ten massive dump trucks block the exit.\n\nVEERA PRATHAPAM (30s), in a crisp, dust-streaked police uniform, steps out of a dark SUV. He doesn't look at the armed thugs scaling the rocky ridges. He pulls out a pack of matches.\n\nVEERA\n(calm, lighting a match)\nYou dug too deep into this soil. Now, the soil wants its tax.\n\nKAALI (40s), the mining syndicate leader, spits blood onto the ground and raises an iron rod.\n\nKAALI\nTax? In these hills, my word is the constitution!\n\nVeera drops the match into an open petrol trail leading directly behind the trucks.\n\nBOOM! An explosion rips through the perimeter. Dust clears. Veera advances.`
    },
    {
        id: 2,
        title: "Gongoora Chicken",
        genre: "comedy",
        format: "feature",
        pages: 88,
        hook: "Hilarious, rural Godavari-district comedy.",
        plot: "Two rival restaurant owners in Bhimavaram feud over a secret, legendary recipe. Their hilarious ego clashes involve local political chaos, slapstick chase sequences, and a chaotic confusion drama featuring popular comedic actors.",
        excerpt: `INT. SRI LAKSHMI RESTAURANT - KITCHEN - NIGHT\n\nSteam rises from a massive copper pot. SUBBA RAO (50s) tastes a spoonful of gravy. His eyes widen in panic.\n\nSUBBA RAO\nToo flat! Missing the spark! Who stole the secret spice pouch from the safe?\n\nANJI (20s), the clumsy assistant, drops a tray of plates.\n\nANJI\nSir... I saw the delivery boy from the 'Bhimavaram Spicy Hub' climbing our compound wall with a flashlight between his teeth.\n\nSUBBA RAO\n(grabbing a heavy wooden rolling pin)\nThat competitor thief! Assemble the kitchen staff. Tonight, we raid their pantry!`
    },
    {
        id: 3,
        title: "Vamsavruksham (The Family Tree)",
        genre: "drama",
        format: "feature",
        pages: 111,
        hook: "Heart-wrenching, sentimental family drama.",
        plot: "An aging patriarch attempts to reunite his three estranged sons for a traditional village festival. The narrative dives deep into brotherly bonds, sacrifices, and tear-jerking emotional confrontations that resonate deeply with Telugu family audiences.",
        excerpt: `EXT. ANCESTRAL VILLAGE HOME - VERANDA - DAWN\n\nRAGHAVAIAH (72), thin, frail, but standing straight, looks out at an old, withered neem tree in the courtyard. He holds three unposted letters in his trembling hands.\n\nSURAIAH (68), his lifelong neighbor, walks up with a brass tumbler of coffee.\n\nSURAIAH\nThey won't come, Raghavaiah. Ten years is a long time for city luxury to erase village roots.\n\nRAGHAVAIAH\n(smiling faintly, voice cracking)\nThe branches can grow as far as they want, Suraiah. But when the storm approaches, they will remember the strength of the roots. They will return.`
    },
    {
        id: 4,
        title: "Garuda Puranam",
        genre: "fantasy",
        format: "feature",
        pages: 160,
        hook: "Socio-fantasy mythology epic with rich VFX.",
        plot: "A modern-day archaeologist accidentally unlocks a mystical amulet from the Satavahana era. He must embrace his divine lineage to stop an ancient evil sorcerer from plunging the modern world into eternal darkness.",
        excerpt: `INT. UNDERGROUND EXCAVATION SITE - NIGHT\n\nDust falls from ancient stone pillars. ARJUN (28), wearing tactical gear, clears dirt away from a heavy stone vault inscribed with ancient Telugu scripts.\n\nHis brush reveals a golden amulet shaped like a falcon in flight.\n\nARJUN\n(breathing heavily)\nThis isn't Satavahana style... this predates known history.\n\nAs his bare finger touches the central ruby, the gold veins on the amulet flash neon blue. The ground violently shakes. A deep, primordial roar echoes through the cavern walls.`
    },
    {
        id: 5,
        title: "Rayalaseema Rakkasi",
        genre: "horror",
        format: "feature",
        pages: 88,
        hook: "Spine-chilling horror comedy with a faction backdrop.",
        plot: "A cowardly tech worker inherits a haunted, abandoned fort in Rayalaseema. He discovers the ghost is an ancient, vengeful queen who needs his help to exact revenge on the descendants of treacherous landlords.",
        excerpt: `INT. KONDAVEEDU FORT - MAIN HALL - MIDNIGHT\n\nKIRAN (24), wearing noise-canceling headphones and a modern tech backpack, shines his phone flashlight around crumbling pillars.\n\nAn eerie, metallic sound of anklets echoes: CHINK... CHINK...\n\nKIRAN\n(voice trembling)\nHello? Is there any high-speed Wi-Fi network here?\n\nA freezing blast of wind blows his phone out of his hand. It lands face up. On the screen reflection, a royal queen wearing heavy ancient jewelry is hovering right behind him.\n\nQUEEN'S GHOST\n(booming voice)\nKiran! You have inherited my land, now you inherit my blade!`
    },
    {
        id: 6,
        title: "Godavari Gattu Meeda (On the Banks of Godavari)",
        genre: "romance",
        format: "feature",
        pages: 44,
        hook: "Poetic, musical love story.",
        plot: "A classical singer visiting her hometown falls in love with a local boatman. The film navigates their beautiful romance, caste-class divides, and features a soul-stirring soundtrack set against the scenic Konaseema landscape.",
        excerpt: `EXT. GODAVARI RIVER - HOUSEBOAT - SUNSET\n\nThe water turns into liquid gold. SEETHA (22) sits on the edge of the boat, humming a complex Carnatic raga.\n\nCHINNABABU (25), rowing steadily, pauses his oars. He listens intently, completely captivated.\n\nCHINNABABU\nYour voice moves smoothly, like the river currents during monsoon, Amma.\n\nSEETHA\n(stops humming, blushes)\nYou understand music, Chinnababu?\n\nCHINNABABU\nI don't know notes, but I know when the river is happy. Your song makes the river completely still.`
    },
    {
        id: 7,
        title: "Yantra",
        genre: "sci-fi",
        format: "feature",
        pages: 188,
        hook: "High-concept sci-fi thriller with a mass hero twist.",
        plot: "A brilliant but eccentric Hyderabad scientist invents a device that can access a person's memories up to 24 hours after their death. A corrupt politician tries to steal it, leading to a high-tech cat-and-mouse game.",
        excerpt: `INT. HIGH-TECH LAB - HITEC CITY - NIGHT\n\nServer stacks hum loudly. DR. SHIVA (35) adjusts a futuristic silver headset attached to a deceased test subject.\n\nA holographic screen flickers to life, projecting blurry first-person visual footage from the dead man's final 2 hours.\n\nDR. SHIVA\n(typing rapidly)\nMemory synapse decoding complete. 94% visual rendering resolution achieved.\n\nSuddenly, the glass door shatters. Armed mercenaries step inside, led by a suit-wearing executive.\n\nMERCENARY LEAD\nHand over the drive, Doctor. Some dark corporate secrets belong in the grave.`
    },
    {
        id: 8,
        title: "Case No. 1999",
        genre: "thriller",
        format: "feature",
        pages: 111,
        hook: "Gritty, fast-paced investigative crime thriller.",
        plot: "A sharp, non-nonsense detective reopens a cold case involving a series of high-profile disappearances in Vizag. She uncovers a dark corporate conspiracy, racing against time as the killer targets her next.",
        excerpt: `INT. VIZAG POLICE HEADQUARTERS - RECORD ROOM - LATE NIGHT\n\nRain storms against windows. DETECTIVE ANANYA (32) pins a faded 1999 newspaper clipping onto a large corkboard map.\n\nRed strings link the shipping yard, a pharma company, and three missing victims.\n\nANANYA\n(to her partner)\nIt wasn't random drownings. Look at the chemistry logs. All three worked on the same shipping vessel.\n\nHer phone buzzes from an unknown number. She answers. Only heavy, rhythmic breathing can be heard.\n\nVOICE (OVER PHONE)\nYou are getting very close to the harbor, Detective. Check your trunk.`
    }
];

// Database housing script attributes and structured Hollywood excerpts for v2.0
const SCREENPLAY_PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Veera Prathapam (The Fierce Reign)",
        genre: "action",
        format: "short film",
        pages: 8,
        status: "Ready Script",
        industry: "Telugu Cinema",
        readTime: "2 mins",
        tags: ["MassElevation", "PoliceProcedural", "HighOctane"],
        hook: "High-octane commercial action entertainer.",
        plot: "A fierce state police officer discovers a vast illegal mining operation threatening a remote village. He single-handedly dismantles the syndicate using high-mass elevation fights, heavy vehicle chases, and explosive pre-interval face-offs.",
        pitchNotes: {
            shooting: "High-contrast lighting with ultra-slow-motion tracking shots during the match-strike sequence to create maximum mass elevation.",
            editing: "Fast-paced jump cuts during the explosion syncing directly with heavy punchy ambient sub-bass sound design designators."
        },
        characters: [
            { name: "Veera Prathapam", desc: "A stoic, uncompromising police officer carrying out a righteous crusade against corruption." },
            { name: "Kaali", desc: "An arrogant illegal mining kingpin who rules the rural borderlands through pure fear." }
        ],
        excerpt: `EXT. MINING QUARRY - DAY\n\nHeavy red dust chokes the blazing sun. Ten massive dump trucks block the exit.\n\nVEERA PRATHAPAM (30s), in a crisp, dust-streaked police uniform, steps out of a dark SUV. He doesn't look at the armed thugs scaling the rocky ridges. He pulls out a pack of matches.\n\nVEERA\n(calm, lighting a match)\nYou dug too deep into this soil. Now, the soil wants its tax.\n\nKAALI (40s), the mining syndicate leader, spits blood onto the ground and raises an iron rod.\n\nKAALI\nTax? In these hills, my word is the constitution!\n\nVeera drops the match into an open petrol trail leading directly behind the trucks.\n\nBOOM! An explosion rips through the perimeter. Dust clears. Veera advances.`
    },
    {
        id: 2,
        title: "Gongoora Chicken",
        genre: "comedy",
        format: "feature",
        pages: 88,
        status: "Final Draft",
        industry: "Telugu Cinema",
        readTime: "25 mins",
        tags: ["GodavariSlapstick", "FoodRivalry", "ChaosDrama"],
        hook: "Hilarious, rural Godavari-district comedy.",
        plot: "Two rival restaurant owners in Bhimavaram feud over a secret, legendary recipe. Their hilarious ego clashes involve local political chaos, slapstick chase sequences, and a chaotic confusion drama featuring popular comedic actors.",
        pitchNotes: {
            shooting: "Bright, saturated warm color grading to emphasize the spicy, rich textures of rural coastal Andhra food culture.",
            editing: "Lined editing pattern relies heavily on overlapping dialogue and whip pans to amplify situational confusion."
        },
        characters: [
            { name: "Subba Rao", desc: "Short-tempered, proud owner of Sri Lakshmi Restaurant who guards his kitchen like an army fort." },
            { name: "Anji", desc: "His clumsy, scatter-brained kitchen helper who accidentally creates half the cross-town problems." }
        ],
        excerpt: `INT. SRI LAKSHMI RESTAURANT - KITCHEN - NIGHT\n\nSteam rises from a massive copper pot. SUBBA RAO (50s) tastes a spoonful of gravy. His eyes widen in panic.\n\nSUBBA RAO\nToo flat! Missing the spark! Who stole the secret spice pouch from the safe?\n\nANJI (20s), the clumsy assistant, drops a tray of plates.\n\nANJI\nSir... I saw the delivery boy from the 'Bhimavaram Spicy Hub' climbing our compound wall with a flashlight between his teeth.\n\nSUBBA RAO\n(grabbing a heavy wooden rolling pin)\nThat competitor thief! Assemble the kitchen staff. Tonight, we raid their pantry!`
    },
    {
        id: 3,
        title: "Vamsavruksham (The Family Tree)",
        genre: "drama",
        format: "feature",
        pages: 111,
        status: "Ready Script",
        industry: "Telugu Cinema",
        readTime: "30 mins",
        tags: ["Sentimental", "FamilyBonds", "VillageFestival"],
        hook: "Heart-wrenching, sentimental family drama.",
        plot: "An aging patriarch attempts to reunite his three estranged sons for a traditional village festival. The narrative dives deep into brotherly bonds, sacrifices, and tear-jerking emotional confrontations that resonate deeply with Telugu family audiences.",
        pitchNotes: {
            shooting: "Soft, golden hour morning light falling through ancient architectural verandas to visually ground the theme of heritage.",
            editing: "Longer, lingering reaction shots allow raw emotional close-ups to build pacing without relying on background scores."
        },
        characters: [
            { name: "Raghavaiah", desc: "A resilient, soft-spoken elderly patriarch holding on tightly to eroding cultural roots." },
            { name: "Suraiah", desc: "His practical, pragmatic lifelong neighbor who acts as the voice of ground reality." }
        ],
        excerpt: `EXT. ANCESTRAL VILLAGE HOME - VERANDA - DAWN\n\nRAGHAVAIAH (72), thin, frail, but standing straight, looks out at an old, withered neem tree in the courtyard. He holds three unposted letters in his trembling hands.\n\nSURAIAH (68), his lifelong neighbor, walks up with a brass tumbler of coffee.\n\nSURAIAH\nThey won't come, Raghavaiah. Ten years is a long time for city luxury to erase village roots.\n\nRAGHAVAIAH\n(smiling faintly, voice cracking)\nThe branches can grow as far as they want, Suraiah. But when the storm approaches, they will remember the strength of the roots. They will return.`
    },
    {
        id: 4,
        title: "Garuda Puranam",
        genre: "fantasy",
        format: "feature",
        pages: 160,
        status: "First Draft",
        industry: "Pan-India",
        readTime: "45 mins",
        tags: ["Mythology", "VFXEpic", "AncientMystery"],
        hook: "Socio-fantasy mythology epic with rich VFX.",
        plot: "A modern-day archaeologist accidentally unlocks a mystical amulet from the Satavahana era. He must embrace his divine lineage to stop an ancient evil sorcerer from plunging the modern world into eternal darkness.",
        pitchNotes: {
            shooting: "Low-angle grand architectural vistas blending physical stone ruins with neon-blue mythological imagery mapping.",
            editing: "Cross-cutting style connecting structural motifs from historical flashbacks with modern-world archaeological events."
        },
        characters: [
            { name: "Arjun", desc: "A logical, sharp archaeologist who finds his rational world upended by divine phenomena." },
            { name: "Ancient Evil", desc: "A shadowy sorcerer trapped for millennia, hungry to reclaim dominion over modern infrastructure." }
        ],
        excerpt: `INT. UNDERGROUND EXCAVATION SITE - NIGHT\n\nDust falls from ancient stone pillars. ARJUN (28), wearing tactical gear, clears dirt away from a heavy stone vault inscribed with ancient Telugu scripts.\n\nHis brush reveals a golden amulet shaped like a falcon in flight.\n\nARJUN\n(breathing heavily)\nThis isn't Satavahana style... this predates known history.\n\nAs his bare finger touches the central ruby, the gold veins on the amulet flash neon blue. The ground violently shakes. A deep, primordial roar echoes through the cavern walls.`
    },
    {
        id: 5,
        title: "Rayalaseema Rakkasi",
        genre: "horror",
        format: "feature",
        pages: 88,
        status: "Final Draft",
        industry: "Telugu Cinema",
        readTime: "22 mins",
        tags: ["HorrorComedy", "FactionBackdrop", "HauntedFort"],
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
        status: "Ready Script",
        industry: "Telugu Cinema",
        readTime: "12 mins",
        tags: ["PoeticMusical", "KonaseemaVisuals", "ClassDivides"],
        hook: "Poetic

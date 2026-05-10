// Global production database storing expanded asset slates for Version 4.0
const SCREENPLAY_PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Veera Prathapam (The Fierce Reign)",
        genre: "action",
        format: "short film",
        pages: 8,
        status: "Ready to Shoot",
        industry: "Telugu Cinema (Mass Commercial)",
        readTime: "8 Minutes",
        formula: "Monster in the House / High-Mass Vigilante Justice",
        comps: "Brotherhood / Akhanda meets Krack",
        musicIdentity: "Thumping heavy bass percussion, high-pitched electronic nadaswaram themes, aggressive horn swells.",
        locations: { int: 2, ext: 6, total: 3 },
        metrics: {
            dayPct: 85,
            nightPct: 15,
            actionRatio: 75,
            dialogueRatio: 25,
            castDensity: "Mass Crowded Scenes",
            stuntLevel: "High-Octane Choreography",
            vfxDensity: "Practical Stunts + Enhancement",
            propDensity: "High Tactical/Weapons Complexity"
        },
        hook: "High-octane commercial action entertainer.",
        plot: "A fierce state police officer discovers a vast illegal mining operation threatening a remote village. He single-handedly dismantles the syndicate using high-mass elevation fights, heavy vehicle chases, and explosive pre-interval face-offs.",
        characters: [
            { name: "CI Veera Prathapam", castAge: "30-35", archetype: "Mass Vigilante Cop", desc: "A fierce, unforgiving circle inspector assigned to the Guntur rural sector. Unbreakable moral compass wrapped in physical aggression." },
            { name: "Mining Syndicate Kaali", castAge: "45-50", archetype: "Ruthless Landlord", desc: "The tyrannical boss running illegal bauxite mining loops through complete systemic fear and hired private mercenaries." }
        ],
        pitchNotes: {
            shooting: "Utilize low-angle handheld camera tracks tracking forward during hand-to-hand combat scenes. Implement wide anamorphics during high-speed vehicle chases over mining terrain to capture massive red dust clouds.",
            editing: "Smash-cut rhythmically on heavy fist impacts. Extend tracking shot length during elevation setups, utilizing rapid speed ramps (60fps slowing down to 24fps) to punctuate hero mass elevations."
        },
        storyboard: [
            { frame: 1, shot: "Extreme Close-Up (ECU) - Matches", transition: "SMASH CUT FROM LOGO", notes: "Veera's thumb strikes a rough match stick. The sudden flame bursts to life, illuminating half of his rugged face against pitch darkness." },
            { frame: 2, shot: "Low Angle Medium Wide (MCU) - Hero Entry", transition: "WHIP PAN TO LEFT", notes: "Camera tracks low to the gravel. Veera steps out from his dark SUV. Dust kicks around his police boots. Heavy red dust storm scales background." },
            { frame: 3, shot: "Wide Shot (WS) - Mining Quarry", transition: "CRANE UP HIGH", notes: "Ten massive orange dump trucks form an inescapable perimeter around the rural village boundary. Armored mercenaries scale the rocky hillsides." },
            { frame: 4, shot: "Tracking Action Shot - The Face-off", transition: "SLOW DISSOLVE TO ACCORDION", notes: "Veera drops the burning match onto a wet trail of leaked petrol. A wall of fire roars upward, splitting the screen in half as he advances into combat." }
        ],
        excerpt: `EXT. MINING QUARRY - DAY\n\nHeavy red dust chokes the blazing sun. Ten massive dump trucks block the exit.\n\nVEERA PRATHAPAM (30s), in a crisp, dust-streaked police uniform, steps out of a dark SUV. He doesn't look at the armed thugs scaling the rocky ridges. He pulls out a pack of matches.\n\nVEERA\n(calm, lighting a match)\nYou dug too deep into this soil. Now, the soil wants its tax.\n\nKAALI (40s), the mining syndicate leader, spits blood onto the ground and raises an iron rod.\n\nKAALI\nTax? In these hills, my word is the constitution!\n\nVeera drops the match into an open petrol trail leading directly behind the trucks.\n\nBOOM! An explosion rips through the perimeter. Dust clears. Veera advances.`
    },
    {
        id: 2,
        title: "Gongoora Chicken",
        genre: "comedy",
        format: "feature",
        pages: 88,
        status: "Final Draft Lock",
        industry: "Telugu Regional (Godavari Local Flavor)",
        readTime: "90 Minutes",
        formula: "Fool Triumphant / Absurdist Rivalry Comedy",
        comps: "Jathi Ratnalu meets Brochevarevarura",
        musicIdentity: "Whimsical mandolin plucking, rural Godavari folk dholaks, fast brass horn parodies.",
        locations: { int: 45, ext: 43, total: 14 },
        metrics: {
            dayPct: 60,
            nightPct: 40,
            actionRatio: 25,
            dialogueRatio: 75,
            castDensity: "Small Ensemble",
            stuntLevel: "Mild Slapstick Chase",
            vfxDensity: "None / Pure Color Grading Enhancement",
            propDensity: "High Restaurant/Kitchen Set Props"
        },
        hook: "Hilarious, rural Godavari-district comedy.",
        plot: "Two rival restaurant owners in Bhimavaram feud over a secret, legendary recipe. Their hilarious ego clashes involve local political chaos, slapstick chase sequences, and a chaotic confusion drama featuring popular comedic actors.",
        characters: [
            { name: "Subba Rao", castAge: "50-55", archetype: "Egoistic Restaurant Owner", desc: "Owner of Sri Lakshmi Restaurant. Short-tempered, proud, and obsessed with defending his culinary supremacy in town." },
            { name: "Anji", castAge: "20s", archetype: "Clumsy Sidekick Assistant", desc: "Subba Rao's well-meaning but incredibly accident-prone kitchen helper whose blunders constantly amplify the feud." }
        ],
        pitchNotes: {
            shooting: "Maintain bright, saturated high-key comedy lighting profiles. Utilize snap-zooms and fast whip-pans between character reaction faces to heighten the comedic tension during arguments.",
            editing: "Employ sharp dialogue overlaps and rapid reaction-shot crosscuts. Cut on comedic timing indicators like drops, breaks, or sudden changes in body language expression to secure jokes."
        },
        storyboard: [
            { frame: 1, shot: "Extreme Close-Up (ECU) - Spoon Taster", transition: "FAST CUT IN", notes: "Subba Rao tastes a glowing red gravy drop from a massive copper spoon. His eyes instantly bulge out in pure, comedic panic." },
            { frame: 2, shot: "Medium Close-Up (MCU) - Shock Reveal", transition: "SNAP ZOOM TO FACE", notes: "Anji stands trembling, holding an empty glass jar labeled 'Secret Spice Mixture' upside down. White flour covers his face." },
            { frame: 3, shot: "Wide Angle (WA) - Kitchen Havoc", transition: "PAN RIGHT QUICKLY", notes: "The entire kitchen staff scrambles over flying dough blocks, spinning rolling pins, and tumbling silver steel lunch boxes." },
            { frame: 4, shot: "Medium Tracking Shot - The Pantry Raid", transition: "CROSS DISSOLVE", notes: "Subba Rao, leading a pack of kitchen helpers carrying ladles and frying pans, steps out under a broken neon street sign to raid his competitor." }
        ],
        excerpt: `INT. SRI LAKSHMI RESTAURANT - KITCHEN - NIGHT\n\nSteam rises from a massive copper pot. SUBBA RAO (50s) tastes a spoonful of gravy. His eyes widen in panic.\n\nSUBBA RAO\nToo flat! Missing the spark! Who stole the secret spice pouch from the safe?\n\nANJI (20s), the clumsy assistant, drops a tray of plates.\n\nANJI\nSir... I saw the delivery boy from the 'Bhimavaram Spicy Hub' climbing our compound wall with a flashlight between his teeth.\n\nSUBBA RAO\n(grabbing a heavy wooden rolling pin)\nThat competitor thief! Assemble the kitchen staff. Tonight, we raid their pantry!`
    },
    {
        id: 3,
        title: "Vamsavruksham (The Family Tree)",
        genre: "drama",
        format: "feature",
        pages: 111,
        status: "Polish Phase",
        industry: "Telugu Cinema (Mainstream Sentiment)",
        readTime: "115 Minutes",
        formula: "Institutional Drama / Broken Family Reunion",
        comps: "Shatamanam Bhavati meets Seethamma Vakitlo Sirimalle Chettu",
        musicIdentity: "Soulful acoustic solo violin tracks, classical veena motifs, melancholy acoustic flute patterns.",
        locations: { int: 60, ext: 51, total: 6 },
        metrics: {
            dayPct: 70,
            nightPct: 30,
            actionRatio: 10,
            dialogueRatio: 90,
            castDensity: "Large Family Ensemble",
            stuntLevel: "None",
            vfxDensity: "None / Pure Natural Lighting profiles",
            propDensity: "Vintage Traditional Ancestral Decor"
        },
        hook: "Heart-wrenching, sentimental family drama.",
        plot: "An aging patriarch attempts to reunite his three estranged sons for a traditional village festival. The narrative dives deep into brotherly bonds, sacrifices, and tear-jerking emotional confrontations that resonate deeply with Telugu family audiences.",
        characters: [
            { name: "Raghavaiah", castAge: "70-75", archetype: "Aging Resilient Patriarch", desc: "A proud village elder hiding a terminal illness, determined to fuse his broken family tree branches back together before his passing." },
            { name: "Suraiah", castAge: "65-70", archetype: "Wise Lifelong Neighbor", desc: "Raghavaiah's best friend and realistic soundboard who observes the family dynamics with objective clarity." }
        ],
        pitchNotes: {
            shooting: "Utilize slow cinematic dollies and fixed tripod frameworks. Rely heavily on natural golden hour sunlight to bathe the ancestral veranda courtyard in warm, nostalgic hues.",
            editing: "Prioritize slow, emotional dissolves over sudden cuts. Hold lingering close-ups on actors' eyes during silent expressions of grief or unexpressed love to build performance depth."
        },
        storyboard: [
            { frame: 1, shot: "Static Close-Up (CU) - Faded Letters", transition: "FADE IN FROM BLACK", notes: "Raghavaiah's wrinkled hands hold three yellowed envelopes with unposted stamps under pale morning twilight." },
            { frame: 2, shot: "Tracking Shot - Courtyard Walk", transition: "SLOW DOLLY LEFT", notes: "Raghavaiah steps past a massive, ancient neem tree shedding its leaves across the clean terracotta tile veranda floor." },
            { frame: 3, shot: "Medium Two-Shot (M2S) - The Soundboard", transition: "MATCH CUT ON COFFEE CUP", notes: "Suraiah sets down a traditional brass coffee tumbler, looking at Raghavaiah with an expression of quiet concern." },
            { frame: 4, shot: "Extreme Wide Shot (EWS) - Village Horizon", transition: "FADE OUT SMOOTHLY", notes: "The sun rises over endless green paddy field tracts, silhouetting the massive ancestral house under an infinite open sky." }
        ],
        excerpt: `EXT. ANCESTRAL VILLAGE HOME - VERANDA - DAWN\n\nRAGHAVAIAH (72), thin, frail, but standing straight, looks out at an old, withered neem tree in the courtyard. He holds three unposted letters in his trembling hands.\n\nSURAIAH (68), his lifelong neighbor, walks up with a brass tumbler of coffee.\n\nSURAIAH\nThey won't come, Raghavaiah. Ten years is a long time for city luxury to erase village roots.\n\nRAGHAVAIAH\n(smiling faintly, voice cracking)\nThe branches can grow as far as they want, Suraiah. But when the storm approaches, they will remember the strength of the roots. They will return.`
    },
    {
        id: 4,
        title: "Garuda Puranam",
        genre: "fantasy",
        format: "feature",
        pages: 160,
        status: "Polish Phase",
        industry: "Pan-India (Socio-Fantasy Epic)",
        readTime: "165 Minutes",
        formula: "The Chosen One / Mythological Archaeological Quest",
        comps: "Karthikeya 2 meets Jagadeka Veerudu Athiloka Sundari",
        musicIdentity: "Chanting sanskrit chorus tracks, thunderous live orchestral strings, cinematic divine brass calls.",
        locations: { int: 40, ext: 120, total: 22 },
        metrics: {
            dayPct: 40,
            nightPct: 60,
            actionRatio: 60,
            dialogueRatio: 40,
            castDensity: "Massive Crowds + VFX Creatures",
            stuntLevel: "High Wire-Work Fantasy Elements",
            vfxDensity: "Heavy CGI Post-Production Integration",
            propDensity: "Ancient Mythology Artifacts / Relics"
        },
        hook: "Socio-fantasy mythology epic with rich VFX.",
        plot: "A modern-day archaeologist accidentally unlocks a mystical amulet from the Satavahana era. He must embrace his divine lineage to stop an ancient evil sorcerer from plunging the modern world into eternal darkness.",
        characters: [
            { name: "Arjun", castAge: "25-30", archetype: "Skeptic Archaeologist / Divine Descendant", desc: "A high-tech antiquities tracker who relies strictly on science until a personal connection to myth flips his understanding." }
        ],
        pitchNotes: {
            shooting: "Incorporate sweeping technocrane tracking trajectories and expansive drone elevations. Use specialized glowing lighting rigs to simulate neon blue ancient energy interactions on real sets.",
            editing: "Coordinate fast match-cuts that bridge ancient historical timeline flashbacks with modern action frames seamlessly. Utilize epic CGI scale transitions."
        },
        storyboard: [
            { frame: 1, shot: "Extreme Wide Shot (EWS) - Excavation", transition: "JUMP CUT IN", notes: "Floodlights cut through an expansive underground cave matrix, illuminating massive broken stone pillars from a lost era." },
            { frame: 2, shot: "Close-Up (CU) - The Relic Discovery", transition: "SLOW TIGHT ZOOM", notes: "Arjun sweeps a layer of loose silt off a golden falcon-shaped amulet. A massive blood-red ruby sits locked in its center." },
            { frame: 3, shot: "Medium Shot (MS) - Activation Glow", transition: "SMASH FLASH CUT", notes: "The moment Arjun's finger contacts the surface, neon blue light channels erupt outward, tracking along the wall carvings." },
            { frame: 4, shot: "Low Angle Tilt Up - The Threat Awakens", transition: "FAST PAN HIGHER", notes: "The entire subterranean vault cavern twists violently as a ancient deep roar shakes dust layers loose from above." }
        ],
        excerpt: `INT. UNDERGROUND EXCAVATION SITE - NIGHT\n\nDust falls from ancient stone pillars. ARJUN (28), wearing tactical gear, clears dirt away from a heavy stone vault inscribed with ancient Telugu scripts.\n\nHis brush reveals a golden amulet shaped like a falcon in flight.\n\nARJUN\n(breathing heavily)\nThis isn't Satavahana style... this predates known history.\n\nAs his bare finger touches the central ruby, the gold veins on the amulet flash neon blue. The ground violently shakes. A deep, primordial roar echoes through the cavern walls.`
    },
    {
        id: 5,
        title: "Rayalaseema Rakkasi",
        genre: "horror",
        format: "feature",
        pages: 88,
        status: "Polish Phase",
        industry: "Telugu Cinema (Regional Genre Bender)",
        readTime: "90 Minutes",
        formula: "Out of the Bottle / Faction Horror Comedy",
        comps: "Arundhati meets Prema Katha Chitram",
        musicIdentity: "Eerie high-pitched metallic friction, jumpscare orchestral hits mixed with upbeat comedic bass tracking.",
        locations: { int: 55, ext: 33, total: 4 },
        metrics: {
            dayPct: 20,
            nightPct: 80,
            actionRatio: 40,
            dialogueRatio: 60,
            castDensity: "Small Ensemble Group",
            stuntLevel: "Mild Chase & Levitation Stunts",
            vfxDensity: "Ghost Entity Practical Rigging + CGI Effects",
            propDensity: "Haunted Royal Faction Fort Assets"
        },
        hook: "Spine-chilling horror comedy with a faction backdrop.",
        plot: "A cowardly tech worker inherits a haunted, abandoned fort in Rayalaseema. He discovers the ghost is an ancient, vengeful queen who needs his help to exact revenge on the descendants of treacherous landlords.",
        characters: [
            { name: "Kiran", castAge: "24", archetype: "Cowardly Tech Worker", desc: "A modern software engineer dependent on tech gadgets, completely out of his comfort zone inside a historic faction zone." },
            { name: "Rayalaseema Rakkasi", castAge: "Dead (300+ yrs)", archetype: "Vengeful Warrior Queen Ghost", desc: "A powerful royal specter carrying ancient weapons, fiercely seeking justice through her terrified modern descendant." }
        ],
        pitchNotes: {
            shooting: "Contrast hyper-modern phone flashlight source illumination with dark shadows. Utilize low-angle rolling floor frames to tracking floating entities over ruined structures.",
            editing: "Build tension using silent intervals followed by sudden jumpscare sound cuts. Contrast slow dialogue setups with fast comedic pacing shifts."
        },
        storyboard: [
            { frame: 1, shot: "Wide Shot (WS) - The Abandoned Fort", transition: "FADE FROM GREY", notes: "Kiran steps through massive, rotting timber doors into a shadow-filled royal courtyard holding up a smartphone light." },
            { frame: 2, shot: "Extreme Close-Up (ECU) - Phone Interface", transition: "CUT IN TIGHT", notes: "The phone screen shows zero network connectivity status lines. The light beam flickers violently as cold fog rolls in." },
            { frame: 3, shot: "Over The Shoulder (OTS) - The Mirror Frame", transition: "SLOW PAN LEFT", notes: "Behind Kiran's oblivious shoulder profile, a royal queen wearing heavy gold ornaments hovers silently above floor level." },
            { frame: 4, shot: "Medium Close Shot (MCS) - The Encounter", transition: "SMASH CUT TO SCENE END", notes: "The smartphone drops out of frame. The queen's ghost extends an ancient steel sword right toward the lens." }
        ],
        excerpt: `INT. KONDAVEEDU FORT - MAIN HALL - MIDNIGHT\n\nKIRAN (24), wearing noise-canceling headphones and a modern tech backpack, shines his phone flashlight around crumbling pillars.\n\nAn eerie, metallic sound of anklets echoes: CHINK... CHINK...\n\nKIRAN\n(voice trembling)\nHello? Is there any high-speed Wi-Fi network here?\n\nA freezing blast of wind blows his phone out of his hand. It lands face up. On the screen reflection, a royal queen wearing heavy ancient jewelry is hovering right behind him.\n\nQUEEN'S GHOST\n(booming voice)\nKiran! You have inherited my land, now you inherit my blade!`
    },
    {
        id: 6,
        title: "Godavari Gattu Meeda (On the Banks of Godavari)",
        genre: "romance",
        format: "feature",
        pages: 44,
        status: "Polish Phase",
        industry: "Telugu Cinema (Poetic Art-House Feature)",
        readTime: "45 Minutes",
        formula: "Star-Crossed Lovers / Poetic Folk Musical",
        comps: "Uppena meets Godavari",
        musicIdentity: "Live acoustic slide guitars, traditional river folk choruses, soft flute accents.",
        locations: { int: 10, ext: 34, total: 5 },
        metrics: {
            dayPct: 90,
            nightPct: 10,
            actionRatio: 15,
            dialogueRatio: 85,
            castDensity: "Minimalist / Village Locals",
            stuntLevel: "None / Boat Navigation Actions",
            vfxDensity: "None / Specialized Sunset Color Grading",
            propDensity: "Traditional Country Boats & Fishing Nets"
        },
        hook: "Poetic, musical love story.",
        plot: "A classical singer visiting her hometown falls in love with a local boatman. The film navigates their beautiful romance, caste-class divides, and features a soul-stirring soundtrack set against the scenic Konaseema landscape.",
        characters: [
            { name: "Seetha", castAge: "22", archetype: "Classical Carnatic Singer", desc: "A refined urban musician returning to her roots, possessing deep emotional vulnerability expressed through her melodies." },
            { name: "Chinnababu", castAge: "25", archetype: "Poetic Local Boatman", desc: "A grounded country boat navigator who understands the river's moods, interpreting life through ancient local boat songs." }
        ],
        pitchNotes: {
            shooting: "Utilize wide anamorphic lenses mounted on stabilizer rigs over floating platforms. Shoot strictly during magic hour to capture golden light reflecting off river ripples.",
            editing: "Establish a smooth, slow editing cadence that matches the rhythmic movement of water currents. Let song tracks play out with minimal cross-cutting disruptions."
        },
        storyboard: [
            { frame: 1, shot: "Extreme Wide Shot (EWS) - Liquid Gold", transition: "FADE IN WITH FLUTE", notes: "A single country timber boat glides across an expansive stretch of the Godavari river under a brilliant crimson sunset sky." },
            { frame: 2, shot: "Medium Close Shot (MCS) - The Vocalist", transition: "SLOW TRACK RIGHT", notes: "Seetha sits on the wooden boat edge, her eyes closed as she hums a raga, tracking her hand patterns along the surface water lines." },
            { frame: 3, shot: "Close-Up (CU) - The Boatman", transition: "SOFT FOCUS SHIFT", notes: "Chinnababu rests his hands on his weather-beaten timber oars, listening with complete artistic absorption." },
            { frame: 4, shot: "Wide Angle Horizon (WA) - Konaseema Rails", transition: "SLOW FADE OUT TO BLACK", notes: "The boat passes underneath a cluster of leaning coconut palm profiles as twilight blankets the delta village landscape." }
        ],
        excerpt: `EXT. GODAVARI RIVER - HOUSEBOARD - SUNSET\n\nThe water turns into liquid gold. SEETHA (22) sits on the edge of the boat, humming a complex Carnatic raga.\n\nCHINNABABU (25), rowing steadily, pauses his oars. He listens intently, completely captivated.\n\nCHINNABABU\nYour voice moves smoothly, like the river currents during monsoon, Amma.\n\nSEETHA\n(stops humming, blushes)\nYou understand music, Chinnababu?\n\nCHINNABABU\nI don't know notes, but I know when the river is happy. Your song makes the river completely still.`
    },
    {
        id: 7,
        title: "Yantra",
        genre: "sci-fi",
        format: "feature",
        pages: 188,
        status: "Polish Phase",
        industry: "Pan-India (High-Concept Sci-Fi Epic)",
        readTime: "190 Minutes",
        formula: "The Sorcerer's Apprentice / Tech Thriller Cyberpunk",
        comps: "Inception meets Robo / 24",
        musicIdentity: "Industrial synthwave lines, low electronic bass hums, techno glitch beats mixed with dramatic horns.",
        locations: { int: 110, ext: 78, total: 18 },
        metrics: {
            dayPct: 30,
            nightPct: 70,
            actionRatio: 50,
            dialogueRatio: 50,
            castDensity: "Ensemble + High Tech Lab Extras",
            stuntLevel: "Medium Tech Chase Action Sequences",
            vfxDensity: "Heavy Holographic Interface VFX Panels",
            propDensity: "Futuristic Lab Servers & Neuro-Headsets"
        },
        hook: "High-concept sci-fi thriller with a mass hero twist.",
        plot: "A brilliant but eccentric Hyderabad scientist invents a device that can access a person's memories up to 24 hours after their death. A corrupt politician tries to steal it, leading to a high-tech cat-and-mouse game.",
        characters: [
            { name: "Dr. Shiva", castAge: "35", archetype: "Eccentric High-Tech Neuro-Scientist", desc: "A brilliant cybernetics designer obsessed with death memory retrieval loops, walking a fine line between genius and madness." }
        ],
        pitchNotes: {
            shooting: "Utilize clinical cold blue studio lighting profiles inside lab locations. Employ high-speed robotic camera rigs to create precise digital pans across technological equipment layouts.",
            editing: "Incorporate rapid glitches and digital overlay frames inside memory projection cuts. Construct high-pacing sequences during corporate infiltration set pieces."
        },
        storyboard: [
            { frame: 1, shot: "Medium Close Shot (MCS) - Neuro Server Lab", transition: "SMASH FLASH ON", notes: "Dr. Shiva stands inside a dark server environment. Multi-colored processor light bands cast patterns over his protective eyewear." },
            { frame: 2, shot: "Extreme Close-Up (ECU) - Memory Interface", transition: "ZOOM INTO MONITOR", notes: "A silver neuro-link helmet terminal locks onto a subject. Holographic code patterns begin calculating across glass screens." },
            { frame: 3, shot: "Wide Holographic Pan (WP) - Memory Render", transition: "GLITCH WAVE EFFECT", notes: "A blurry, semi-transparent 3D projection map displaying the last 2 hours of a murder victim's life materializes mid-air." },
            { frame: 4, shot: "Dramatic Low Angle - The Threat Steps In", transition: "CUT TO SHADOW LAYER", notes: "The armored lab security glass barriers shatter inward. Mercenaries carrying automatic weapons step through the smoke screen." },
        ],
        excerpt: `INT. HIGH-TECH LAB - HITEC CITY - NIGHT\n\nServer stacks hum loudly. DR. SHIVA (35) adjusts a futuristic silver headset attached to a deceased test subject.\n\nA holographic screen flickers to life, projecting blurry first-person visual footage from the dead man's final 2 hours.\n\nDR. SHIVA\n(typing rapidly)\nMemory synapse decoding complete. 94% visual rendering resolution achieved.\n\nSuddenly, the glass door shatters. Armed mercenaries step inside, led by a suit-wearing executive.\n\nMERCENARY LEAD\nHand over the drive, Doctor. Some dark corporate secrets belong in the grave.`
    },
    {
        id: 8,
        title: "Case No. 1999",
        genre: "thriller",
        format: "feature",
        pages: 111,
        status: "Polish Phase",
        industry: "Telugu Cinema (Neo-Noir Crime Slate)",
        readTime: "115 Minutes",
        formula: "Whodunit / Neo-Noir Investigative Procedural",
        comps: "Vettiyaayan meets HIT / Dhuruvangal Pathinaaru",
        musicIdentity: "Ticking clock percussion loops, low double bass notes, dark ambient jazz trumpet echoes.",
        locations: { int: 70, ext: 41, total: 15 },
        metrics: {
            dayPct: 10,
            nightPct: 90,
            actionRatio: 35,
            dialogueRatio: 65,
            castDensity: "Ensemble / Interrogation Units",
            stuntLevel: "Tactical Cornering & Close Combat Actions",
            vfxDensity: "Minimalist / High Contrast Rain & Shadow Adjustments",
            propDensity: "Investigative Evidence Boards & Old Case Files"
        },
        hook: "Gritty, fast-paced investigative crime thriller.",
        plot: "A sharp, non-nonsense detective reopens a cold case involving a series of high-profile disappearances in Vizag. She uncovers a dark corporate conspiracy, racing against time as the killer targets her next.",
        characters: [
            { name: "Detective Ananya", castAge: "32", archetype: "No-Nonsense Crime Investigator", desc: "An analytical, emotionally isolated police detective specializing in cold cases, driven by a personal obsession with justice." }
        ],
        pitchNotes: {
            shooting: "Utilize highly stylized low-key lighting profiles with deep chiaroscuro shadow separations. Shoot through wet windows or glass surfaces to create a claustrophobic, rain-soaked noir aesthetic.",
            editing: "Employ tight, rhythmic cuts during investigative sequences. Juxtapose intense interrogation frames with quiet, methodical scene transitions to maintain suspense."
        },
        storyboard: [
            { frame: 1, shot: "Medium Close Shot (MCS) - Evidence Map", transition: "FADE FROM SHADOW", notes: "Detective Ananya tracks a thick red line across a cork evidence board linking faded 1999 shipping shipyard logs to corporate maps." },
            { frame: 2, shot: "Close-Up (CU) - Rain Against Pane", transition: "FOCUS SHIFT TO BACKGROUND", notes: "Heavy rain rolls down the office window glass pane. Outside, the distant industrial harbor crane configurations sit under dark fog." },
            { frame: 3, shot: "Low Angle Close (LAC) - Phone Interface", transition: "SUDDEN SOUND JUMP", notes: "An old smartphone slips across a metal desk surface, vibrating continuously. The screen reads: 'UNKNOWN SENDER CALLING'." },
            { frame: 4, shot: "Wide Shot (WS) - The Threat Vector", transition: "SMASH CUT TO BLACK", notes: "Ananya steps toward her car trunk in a dimly lit underground parking structure. A dark silhouette shifts in the background shadows." }
        ],
        excerpt: `INT. VIZAG POLICE HEADQUARTERS - RECORD ROOM - LATE NIGHT\n\nRain storms against windows. DETECTIVE ANANYA (32) pins a faded 1999 newspaper clipping onto a large corkboard map.\n\nRed strings link the shipping yard, a pharma company, and three missing victims.\n\nANANYA\n(to her partner)\nIt wasn't random drownings. Look at the chemistry logs. All three worked on the same shipping vessel.\n\nHer phone buzzes from an unknown number. She answers. Only heavy, rhythmic breathing can be heard.\n\nVOICE (OVER PHONE)\nYou are getting very close to the harbor, Detective. Check your trunk.`
    }
];

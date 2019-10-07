const initState = {
  posts: [
    {
      id: "1",
      title: "Meet the Penguin!",
      body:
        "Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic flightless birds. They live almost exclusively in the SouthernHemisphere, with only one species, the Galapagos penguin, found north ofthe equator. Highly adapted for life in the water, penguins havecountershaded dark and white plumage, and their wings have evolved intoflippers. Most penguins feed on krill, fish, squid and other forms ofsea life which they catch while swimming underwater. They spend roughlyhalf of their lives on land and the other half in the sea."
    },
    {
      id: "2",
      title: "Meet the Doggo!",
      body:
        "The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species)[5] is a member of the genus Canis (canines), which forms part of the wolf-like canids,[6] and is the most widely abundant terrestrial carnivore.[7][8][9][10][11] The dog and the extant gray wolf are sister taxa[12][13][14] as modern wolves are not closely related to the wolves that were first domesticated,[13][14] which implies that the direct ancestor of the dog is extinct.[15] The dog was the first species to be domesticated[14][16] and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.[17] Their long association with humans has led dogs to be uniquely attuned to human behavior[18] and they are able to thrive on a starch-rich diet that would be inadequate for other canid species.[19] Dogs vary widely in shape, size and colors.[20] They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of \"man's best friend\"."
    },
    {
      id: "3",
      title: "Meet the Parrot!",
      body:
        "Parrots, also known as psittacines /ˈsɪtəsaɪnz/,[1][2] are birds of the roughly 393 species in 92 genera that make up the order Psittaciformes, found in most tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea (\"true\" parrots), the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). Parrots have a generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. The greatest diversity of parrots is in South America and Australasia.Characteristic features of parrots include a strong, curved bill, an upright stance, strong legs, and clawed zygodactyl feet. Many parrots are vividly coloured, and some are multi-coloured. Most parrots exhibit little or no sexual dimorphism in the visual spectrum. They form the most variably sized bird order in terms of length. The most important components of most parrots' diets are seeds, nuts, fruit, buds, and other plant material. A few species sometimes eat animals and carrion, while the lories and lorikeets are specialised for feeding on floral nectar and soft fruits. Almost all parrots nest in tree hollows (or nest boxes in captivity), and lay white eggs from which hatch altricial (helpless) young.Parrots, along with ravens, crows, jays, and magpies, are among the most intelligent birds, and the ability of some species to imitate human voices enhances their popularity as pets. Trapping wild parrots for the pet trade, as well as hunting, habitat loss, and competition from invasive species, has diminished wild populations, with parrots being subjected to more exploitation than any other group of birds. Measures taken to conserve the habitats of some high-profile charismatic species have also protected many of the less charismatic species living in the same ecosystems."
    },
    {
      id: "4",
			title: "Meet the Panda!",
			body: "The giant panda (Ailuropoda melanoleuca; Chinese: 大熊猫; pinyin: dà xióng māo),[4] also known as panda bear or simply panda, is a bear[5] native to south central China.[1] It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body. The name \"giant panda\" is sometimes used to distinguish it from the red panda. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.[6] Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.[7][8]The giant panda lives in a few mountain ranges in central China, mainly in Sichuan, but also in neighbouring Shaanxi and Gansu.[9] As a result of farming, deforestation, and other development, the giant panda has been driven out of the lowland areas where it once lived.The giant panda is a conservation-reliant vulnerable species.[10][11] A 2007 report showed 239 pandas living in captivity inside China and another 27 outside the country.[12] As of December 2014, 49 giant pandas lived in captivity outside China, living in 18 zoos in 13 different countries.[13] Wild population estimates vary; one estimate shows that there are about 1,590 individuals living in the wild,[12] while a 2006 study via DNA analysis estimated that this figure could be as high as 2,000 to 3,000.[14] Some reports also show that the number of giant pandas in the wild is on the rise.[15] In March 2015, conservation news site Mongabay stated that the wild giant panda population had increased by 268, or 16.8%, to 1,864.[16] In 2016, the IUCN reclassified the species from \"endangered\" to \"vulnerable\".[11]While the dragon has often served as China's national symbol, internationally the giant panda has often filled this role. As such, it is becoming widely used within China in international contexts, for example, appearing since 1982 on gold panda bullion coins and as one of the five Fuwa mascots of the Beijing Olympics.",
    }
	],
	comments: [
		{
			post_id: "4",
			com_id: "1",
			author: "Admin",
			body: "I love pandas so much!!!"
		},
		{
			post_id: "4",
			com_id: "2",
			author: "Admin2",
			body: "I love pandas so much!!!2"
		}
	]
};

const rootReducer = (state = initState, action) => {
	if(action.type === "ADD_COMMENT"){
		let newComments = state.comments;
		newComments.push(action.commentValues)
		console.log("action.commentValues IS", action.commentValues)
		return{
			...state,
			comments: newComments
		}
	}
	console.log(state.comments);
	return state;
	
};

export default rootReducer;

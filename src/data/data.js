const data = [
    {
      companyName: "Blue Nest Beef",
      category: ["food"],
      desc: "'Better beef with a bigger purpose. Of course our beef is 100% grassfed, but it’s more than that.'",
      subCategories: ["ACR certified", "100% grassfed", "American"],
      url: "https://bluenestbeef.com/"
    },
    {
      companyName: "Pact",
      category: ["clothing"],
      desc: "'Our mission is to build Earth's Favorite(TM) Clothing Company'",
      subCategories: ["women", "men", "kids", "organic"],
      url: "https://wearpact.com"
    },
    {
      companyName: "Thought",
      category: ["clothing"],
      desc: "'We’re committed to considered design, responsible sourcing, and fostering change. What drives us is our mission to live more thoughtfully – something we hope to inspire you to do too.'",
      subCategories: ["women", "men", "organic"],
      url: "https://www.wearethought.com/"
    },
    {
      companyName: "Organic Basics",
      category: ["clothing"],
      desc: "'The fashion industry is a dirty bastard. So we put sustainable thinking at the center of everything - that means we only choose fabrics that care for our environment and we only ever partner with factories that care about their impact, too. When we say sustainability is our core mission we don’t mean that sustainability is nice to have - we mean that it’s the only way we act'",
      subCategories: ["women", "men", "organic"],
      url: "https://us.organicbasics.com/"
    },
    {
      companyName: "Outer Known",
      category: ["clothing"],
      desc: "'When I finished my former sponsorship to start Outerknown, I challenged my partners to create a pioneering new company that made great clothes with a radical commitment to sustainability.'",
      subCategories: ["men", "women", "fair trade certified", "organic", "recycled materials"],
      url: "https://www.outerknown.com/"
    },
    {
      companyName: "Alternative Apparel",
      category: ["clothing"],
      desc: "'Always striving to do more to lessen our impact. We’ve refocused our forward-thinking Alternative Eco® collection to include even more eco fabrics as we continue our efforts to #DoGoodFeelGood.'",
      subCategories: ["men", "women", "recycled materials"],
      url: "https://www.alternativeapparel.com/"
    },
    {
      companyName: "Eco Collective",
      category: ["homeGoods", "beauty"],
      desc: "'Mission: We are a one-stop shop offering sustainable alternatives to everyday essentials. We believe in living with a zero waste mindset, and we're building a collective of people who believe in it too.'",
      subCategories: [],
      url: "https://www.ecocollective.com/"
    },
    {
      companyName: "Naadam",
      category: ["clothing"],
      desc: "'Committed to transparency, ethical practices, cultural preservation and environmental sustainability. '",
      subCategories: [],
      url: "https://naadam.co/"
    },
    {
      companyName: "Reformation",
      category: ["clothing"],
      desc: "'Reformation’s design mission is to make effortless silhouettes that celebrate the feminine figure. The design process starts with us thinking about what we really want to wear right now. We source the most beautiful and sustainable fabrics possible to bring those designs to life quickly.'",
      subCategories: ["women", "sustainable materials", "carbon-neutral practices"],
      url: "https://www.thereformation.com/"
    },
    {
      companyName: "Eco Vibe",
      category: ["clothing", "homeGoods"],
      desc: "'Established in 2010, EcoVibe is the collaboration of the combined visions of Leonard and Andrea Allen, aka 'Len and Dre'. ECO: Focused on the environment and sustainable, ethical practices. VIBE: The feeling, the style, the look, the energy, and the experience. We take time and care to consider where and how things are made, who makes them and what they are made out of.'",
      subCategories: ["women", "men", "local designers", "donate sales", "recycled materials"],
      url: "https://www.thereformation.com/"
    },
    {
      companyName: "West Elm",
      category: ["homeGoods"],
      desc: "'More than half of our wood furniture is sustainably sourced. Fair trade certified. Locally made, organic, handcrafted, and certified non-toxic products.'",
      subCategories: ["organic", "sustainable sourcing", "fair trade certified", "donate sales"],
      url: "https://www.westelm.com/"
    },
    {
      companyName: "Cuyana",
      category: ["clothing"],
      desc: "'We treat our wardrobes as disposable. Americans buy on average 68 items of clothing a year. A UK study showed that each garment is worn just seven times before being discarded. We are using more resources than ever before in producing over 100 billion garments a year worldwide - double what was produced in 2000. Sixty percent of discarded garments end up in incinerators or landfills within a year of being produced. We don’t need more clothes. Our landfills don’t need more clothes. We need fewer, better things. In pursuit of this goal, we commit to create products responsibly, enable you to maximize their wear, and provide a way to recycle every product through second life programs.'",
      subCategories: ["women"],
      url: "https://www.cuyana.com/"
    },
    {
      companyName: "Amour Vert",
      category: ["clothing"],
      desc: "'Our sustainable practices address all aspects of our business operations and the full lifecycle of the garment: the fibers and production processes used, how workers are treated, how it gets to the consumer, and finally—whether it can be recycled or is forced into a landfill.'",
      subCategories: ["women"],
      url: "https://amourvert.com/"
    },
    {
      companyName: "Threads 4 Thought",
      category: ["clothing"],
      desc: "'We founded Threads 4 Thought in 2006, with the understanding that every time you buy a product or support a brand, you’re casting a vote with your wallet. These choices (or votes) determine the spread and success of each brand’s ethical and moral standards. With that in mind, we decided to create a product that leaves an innately smaller impact on our environment, supports in-need communities, and assists in changing the narrative and understanding of ethical standards within the fashion industry.'",
      subCategories: ["women", "men", "kids"],
      url: "https://www.threads4thought.com/"
    },
    {
      companyName: "Yay For Earth",
      category: ["beauty"],
      desc: "'YayForEarth's mission is simply all in the title. To give props to an earth that gives us EVERYTHING.​ Every single thing we purchase and invite into our lives is sourced from nature and our planet earth deserves all the credit.​'",
      subCategories: [],
      url: "https://yayforearth.com/"
    },
    {
      companyName: "Loli",
      category: ["beauty"],
      desc: `'The inspiration for LOLI or ‘Living Organic Loving Ingredients’, came to me the moment I realized the beauty industry needs to be stirred up. Peel back a beauty label far enough, and you’ll see that it’s lost its connection to what really nourishes us – food – and in its place is a blend of 95% water, preservatives and synthetics.
              \n But it wasn’t always this way. From Cleopatra to the Arawak Indians of Jamaica’s Blue Mountains (my homeland), powerful beauty remedies began with superfood ingredients, freshly harvested and customized. It’s time to bring this wisdom back. Our products start with the purest, most potent, food-grade ingredients, hand-selected and responsibly sourced. Let your intuition guide you. Blend a beauty ritual all your own. Together let’s ‘stir up beauty’ and make a conscious change.'`,
      subCategories: [],
      url: "https://lolibeauty.com/"
    },
    {
      companyName: "Sweet Earth Foods",
      category: ["food"],
      desc: `We nourish lives by making smart food choices that honor and sustain the land, cultivate curious mind and palate, and sustain a healthy body.`,
      subCategories: [],
      url: "https://www.sweetearthfoods.com/"
    },
    {
      companyName: "Organic Valley",
      category: ["food"],
      desc: `Socially, economically, environmentally: sustainability never settles. Bringing the best organic products to market in ways that do the most good.`,
      subCategories: [],
      url: "https://www.organicvalley.coop/"
    },
  ];

export default data;
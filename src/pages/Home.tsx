import { useEffect } from 'react'
import './Home.css'

export default function Home() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What happens at the end of Daredevil Born Again Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Season 2 finale sees Daredevil teaming up with Jessica Jones and the Punisher to push back against Kingpin\'s martial law. Bullseye, who spent the season struggling with his violent nature, takes a shot at Wilson Fisk with a sniper rifle but ends up hitting Buck Cashman instead. The ending sets up a clear path forward for Season 3, with the resistance fully formed and Fisk\'s grip on the city starting to crack.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Jessica Jones appear in Daredevil Born Again Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Krysten Ritter returns as Jessica Jones starting in Episode 6. She\'s been living in the suburbs raising a daughter, and her powers have clearly taken a hit. Fisk\'s people come for her at home, which drags her back into the fight. She teams up with Matt to raid an AVTF weapons cache, and by the finale she\'s standing alongside Daredevil and Punisher as part of the resistance.'
        }
      },
      {
        '@type': 'Question',
        name: 'When does Daredevil Born Again Season 3 come out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marvel has already greenlit Season 3, with filming expected to start sometime in 2026. No official release date has been announced yet, but based on the production timeline of previous seasons, a late 2027 premiere on Disney+ seems like the safest bet.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does Born Again compare to the Netflix Daredevil series?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Born Again on Disney+ carries a TV-14 rating compared to the Netflix series\' TV-MA, so the violence and language are dialed back a notch. That said, Season 2 finds a much better balance than Season 1 did. The bigger difference is the MCU connectivity \u2014 Born Again is fully embedded in the larger universe, with characters like Jessica Jones and the Punisher crossing over, while the Netflix show largely stayed in its own lane.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Bullseye get a redemption arc in Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wilson Bethel\'s Bullseye gets one of the most complex arcs of the season. Dex is trying to find some kind of balance after everything he\'s done, but his idea of atonement is messy and violent. He takes a shot at Kingpin in the finale, and earlier he saves Governor McCaffrey from an assassination attempt. Whether this counts as "redemption" is up for debate \u2014 he\'s not exactly a hero, but he\'s not the pure villain he was either.'
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-red-600 tracking-tight">MCU Guide</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#ending" className="hover:text-red-400 transition-colors">Ending</a>
              <a href="#jessica-jones" className="hover:text-red-400 transition-colors">Jessica Jones</a>
              <a href="#kingpin" className="hover:text-red-400 transition-colors">Kingpin</a>
              <a href="#season-3" className="hover:text-red-400 transition-colors">Season 3</a>
              <a href="#comparison" className="hover:text-red-400 transition-colors">Comparison</a>
              <a href="#bullseye" className="hover:text-red-400 transition-colors">Bullseye</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative border-b border-neutral-800">
          <div className="absolute inset-0 overflow-hidden">
            <img src="/images/8_Daredevil_Born_Again_season_2_release.png" alt="Daredevil Born Again Season 2" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-red-700 text-white rounded-full">Season 2</span>
              <span className="px-3 py-1 text-xs font-semibold bg-neutral-800 text-neutral-300 rounded-full">Disney+</span>
              <span className="px-3 py-1 text-xs font-semibold bg-neutral-800 text-neutral-300 rounded-full">Marvel Studios</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Daredevil Born Again <span className="text-red-600">Season 2</span>: Complete Guide
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Season 2 dropped in March 2026 and hit harder than the first. 
              Kingpin's running New York as mayor, Daredevil's back in the suit, 
              Jessica Jones finally shows up, and Bullseye's walking a razor-thin line 
              between villain and something else. Here's everything that went down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-500">
              <span>Last updated May 2026</span>
              <span className="text-neutral-700">|</span>
              <span>Full spoilers ahead</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <section className="border-b border-neutral-800 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-lg font-semibold mb-4 text-neutral-300">What's Inside</h2>
            <nav>
              <ol className="grid md:grid-cols-2 gap-3 text-sm">
                <li><a href="#ending" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">01</span><span className="group-hover:text-red-400 transition-colors">Season 2 Ending Explained</span></a></li>
                <li><a href="#jessica-jones" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">02</span><span className="group-hover:text-red-400 transition-colors">Jessica Jones Returns</span></a></li>
                <li><a href="#kingpin" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">03</span><span className="group-hover:text-red-400 transition-colors">Kingpin as Mayor</span></a></li>
                <li><a href="#season-3" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">04</span><span className="group-hover:text-red-400 transition-colors">Season 3 Release Date</span></a></li>
                <li><a href="#comparison" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">05</span><span className="group-hover:text-red-400 transition-colors">Born Again vs Netflix</span></a></li>
                <li><a href="#bullseye" className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-800 transition-colors group"><span className="text-red-600 font-bold">06</span><span className="group-hover:text-red-400 transition-colors">Bullseye's Redemption Arc</span></a></li>
              </ol>
            </nav>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 py-12">

          {/* Where Season 1 Left Off - Context */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Where Season 1 Left Off</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Before we get into Season 2, let's remember how Season 1 ended. Wilson Fisk won the mayoral election. 
                  Not "stole" or "rigged" — he actually won, fair and square, running on an anti-vigilante platform 
                  that resonated with New Yorkers tired of masked heroes tearing up their city.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  In the finale, "Straight to Hell," Fisk pulled the trigger on his endgame. He declared martial law, 
                  shut down the city's power grid, and unleashed his Anti-Vigilante Task Force (AVTF) to hunt down 
                  anyone wearing a mask. Daredevil was back in the red suit, but he was basically fighting a losing 
                  battle against the full force of the city government.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Meanwhile, Vanessa Fisk murdered Adam (the guy she'd been having an affair with while Wilson was 
                  recovering from being shot by Maya Lopez), and the Fisks' marriage somehow survived the whole mess. 
                  It was a dark ending, and it set the stage perfectly for what Season 2 would deliver.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800">
                <img src="/images/3_Daredevil_Born_Again_Proves_It_s.png" alt="Wilson Fisk as Mayor of New York City" className="w-full object-cover" />
                <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Vincent D'Onofrio as Mayor Wilson Fisk in Daredevil Born Again Season 1</p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* Section 1: Season 2 Ending Explained */}
          <article id="ending" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Daredevil Born Again Season 2 Ending Explained" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Season 2 Finale</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Daredevil Born Again Season 2 Ending Explained
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                The Season 2 finale brings together Daredevil, Jessica Jones, and the Punisher for an 
                explosive confrontation with Kingpin's forces. Here's exactly what happened and what it means.
              </p>
            </header>

            <div className="rounded-xl overflow-hidden border border-neutral-800 mb-8">
              <img src="/images/1_Daredevil_Born_Again_Season_2_Finale.png" alt="Daredevil, Karen Page and Jessica Jones in the Season 2 finale" className="w-full object-cover" />
              <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Daredevil stands with his allies in the Season 2 finale</p>
            </div>

            <div className="prose-content" itemProp="articleBody">
              <h3>The Setup: Martial Law in New York</h3>
              <p>
                Season 2 picks up six months after Fisk shut down the city's power and declared all vigilantes 
                public enemies. Things are bad. The AVTF — Fisk's private army of cops wearing skull patches — 
                has been running wild through the streets, rounding up anyone they suspect of being a masked hero. 
                Hector Ayala, the original White Tiger, was already killed in Season 1. His niece Angela del Toro 
                has taken up the mantle, and she's squarely in Fisk's crosshairs.
              </p>
              <p>
                Matt Murdock, meanwhile, has been operating as Daredevil again, but it's rough going when the 
                mayor has essentially legalized the hunting of superheroes. His law firm is struggling, his 
                relationship with Kirsten McDuffie is strained, and Heather Glenn — his ex who now works as 
                Fisk's Mental Health Commissioner — is caught in the middle of everything.
              </p>

              <h3>The Finale: Bringing the Fight to Fisk</h3>
              <p>
                The finale pulls together threads from across all eight episodes. Jessica Jones, who initially 
                wanted nothing to do with the fight (she's got a daughter to protect), gets pulled in after 
                Fisk's goons show up at her suburban home. The Punisher, who had been operating in the shadows 
                for most of the season, finally steps into the light. And Bullseye — well, we'll get to him in 
                his own section, but he plays a pivotal role here too.
              </p>
              <p>
                The climax isn't just a fistfight (though there's plenty of that). It's about the resistance 
                finally getting organized. Daredevil, Jessica Jones, and Punisher standing together marks the 
                first real threat to Fisk's control since he took office. The image of the three of them, 
                backed by Karen Page and the other allies they've gathered, is the moment where it becomes 
                clear: Fisk might have the city government, but he doesn't have the streets.
              </p>

              <h3>Bullseye's Sniper Shot</h3>
              <p>
                One of the most talked-about moments of the finale comes when Bullseye sets up with a sniper 
                rifle and takes a shot at Wilson Fisk as he's leaving the courthouse. Wilson Bethel confirmed 
                in interviews that Dex was aiming for Fisk — "if anybody is deserving of Bullseye's bullet, 
                it's Kingpin at this point." But Buck Cashman, Fisk's loyal fixer, steps in front of the shot 
                and takes the bullet instead.
              </p>
              <p>
                It's a messy, morally complicated moment — exactly what this show does best. Bullseye isn't 
                suddenly a good guy because he's shooting at the villain. He's a violent man doing violent 
                things, and the show doesn't let us forget that even when his targets "deserve it."
              </p>

              <h3>What the Ending Sets Up for Season 3</h3>
              <p>
                The finale leaves Fisk wounded but not defeated. His grip on the city is cracking — the 
                public is starting to turn against his methods, and the resistance is now an organized force 
                rather than isolated vigilantes. Season 3 has already been confirmed, and the groundwork is 
                clearly laid for an all-out war for the soul of New York City.
              </p>
              <p>
                Also worth noting: the Swordsman (Tony Dalton) shows up in the finale, connecting the street-level 
                MCU to the larger world in ways that could pay off down the line.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* Section 2: Jessica Jones */}
          <article id="jessica-jones" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Jessica Jones Returns in Daredevil Born Again Season 2" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Character Return</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Jessica Jones Returns in Season 2 — What You Need to Know
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                Krysten Ritter is back as Jessica Jones, and her return doesn't disappoint. 
                She shows up in Episode 6 and immediately makes her presence felt.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden border border-neutral-800">
                <img src="/images/4_Daredevil_Born_Again_Season_2_Adds.png" alt="Krysten Ritter as Jessica Jones getting out of a taxi" className="w-full object-cover" />
                <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Krysten Ritter returns as Jessica Jones</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800">
                <img src="/images/7_Daredevil_Born_Again_Ritter_on_Jessica.png" alt="Jessica Jones in action" className="w-full object-cover" />
                <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Jessica Jones back in the fight</p>
              </div>
            </div>

            <div className="prose-content" itemProp="articleBody">
              <h3>Where Has Jessica Been?</h3>
              <p>
                When we catch up with Jessica, she's not in New York. She's living in the suburbs, raising a 
                daughter, and trying her hardest to stay out of the superhero business. It's a smart choice 
                for the character — Jessica was never the type to actively seek out hero work, and the show 
                respects that. She's pulled back in not by some grand calling, but because Fisk's Anti-Vigilante 
                Task Force comes knocking on her door.
              </p>
              <p>
                The show doesn't give us a complete rundown of everything she's been up to since her Netflix 
                series ended, and honestly, it doesn't need to. We know she's been trying to build a normal 
                life. We know it hasn't been easy. And we know that when someone threatens her home and her 
                kid, she responds exactly how you'd expect: by punching through the problem.
              </p>

              <h3>Her Powers Are Different Now</h3>
              <p>
                Here's an interesting detail that's easy to miss: Jessica's powers aren't what they used to be. 
                She's got more injuries than she should have after taking down Fisk's goons, and Matt notices 
                it when they reunite on a rooftop. She's still superhumanly strong, but something's changed. 
                Whether it's age, trauma, or something else entirely, the show is hinting that Jessica's 
                abilities have diminished from what we saw in her solo series.
              </p>
              <p>
                This adds a layer of vulnerability to her character that makes her scenes more compelling. 
                She can't just brute-force her way through every problem anymore. She's got to be smarter, 
                more careful — especially now that she has a child to think about.
              </p>

              <h3>Teaming Up With Daredevil</h3>
              <p>
                Jessica and Matt's reunion happens on a rooftop, because of course it does. She doesn't want 
                to get involved — keeps saying she's doing this for her daughter, that she can't afford to 
                take risks. But she also knows she's one of the few people who can actually do something about 
                Fisk. So she agrees to help Matt raid an AVTF weapons cache.
              </p>
              <p>
                Their dynamic is exactly what fans wanted. She's sarcastic, he's earnest, and they play off 
                each other perfectly. By the finale, she's standing alongside Daredevil and Punisher as part 
                of the resistance. She's not "back" as a full-time superhero, but she's definitely back in 
                the fight.
              </p>

              <h3>What This Means for Jessica's Future</h3>
              <p>
                Krysten Ritter has said she knew about this return for over two years, which suggests Marvel 
                has been planning something for the character. Whether that's a solo series on Disney+, 
                appearances in other street-level shows, or something else entirely, her presence in Born 
                Again Season 2 opens the door for all of it. Mike Colter has been dropping hints about 
                Luke Cage returning too, so we might be looking at a full Defenders reunion sooner rather 
                than later.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* Section 3: Kingpin Mayor */}
          <article id="kingpin" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Kingpin Mayor Storyline in Daredevil Born Again" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Villain Analysis</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Kingpin as Mayor: How Fisk Took Over New York
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                Wilson Fisk's mayoral storyline is the backbone of Born Again. 
                Vincent D'Onofrio delivers a performance that makes you understand 
                why people voted for a known crime lord.
              </p>
            </header>

            <div className="rounded-xl overflow-hidden border border-neutral-800 mb-8">
              <img src="/images/2_Kingpin_s_New_Task_Force_In_Daredevil.png" alt="Kingpin with his Anti-Vigilante Task Force" className="w-full object-cover" />
              <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Fisk and his Anti-Vigilante Task Force (AVTF)</p>
            </div>

            <div className="prose-content" itemProp="articleBody">
              <h3>From Crime Lord to Mayor</h3>
              <p>
                Fisk's political rise started in the back half of Season 1. After Maya Lopez shot him in the 
                face — an injury that required months of recovery — he came back different. Not better, exactly, 
                but different. He started talking about "fixing" New York. About law and order. About the danger 
                vigilantes posed to ordinary people. And a lot of voters bought it.
              </p>
              <p>
                The show doesn't pretend this is unrealistic. Fisk's campaign messaging — that masked heroes 
                destroy property, endanger civilians, and operate above the law — isn't wrong. That's what 
                makes him such a compelling villain. He's not lying to the public; he's telling a selective 
                truth and using it to consolidate power. When he wins the election, it's because people 
                actually agree with him.
              </p>

              <h3>The Anti-Vigilante Task Force</h3>
              <p>
                Once in office, Fisk wastes no time building his personal army. The AVTF — Anti-Vigilante 
                Task Force — is made up of NYPD officers who wear Punisher-style skull patches and answer 
                directly to Fisk rather than the police commissioner. They're not just cops; they're enforcers 
                who operate with near-total impunity.
              </p>
              <p>
                The AVTF is one of the most chilling elements of the show because it's so grounded in reality. 
                We've all seen what happens when law enforcement gets politicized, when certain groups get 
                designated as "enemy combatants" and the rules of engagement get thrown out the window. Born 
                Again takes that real-world anxiety and dramatizes it through the lens of superhero fiction, 
                and it works disturbingly well.
              </p>

              <h3>Fisk's Political Enemies</h3>
              <p>
                Season 2 introduces Governor Marge McCaffrey (played by Lili Taylor), who becomes Fisk's 
                primary political opponent. She sees through his act and isn't afraid to challenge him publicly. 
                Their rivalry drives much of the political drama in Season 2, and it adds another layer to 
                Fisk's character — he's not just fighting vigilantes in alleys; he's fighting a political 
                war against someone who actually knows how government works.
              </p>
              <p>
                Then there's Mr. Charles (Matthew Lillard), a new antagonist who operates on the political 
                stage with influence that rivals Fisk's own. The showrunners have described him as "as 
                influential, in many ways, as Fisk is," which suggests the power dynamics in New York are 
                about to get a lot more complicated.
              </p>

              <h3>The Marriage at the Center of It All</h3>
              <p>
                None of Fisk's political maneuvering works without Vanessa. Ayelet Zurer plays her with a 
                cold elegance that makes the character fascinating to watch. Their relationship survived 
                Vanessa's affair with Adam, but not cleanly — Wilson had Adam imprisoned in their basement 
                before Vanessa ultimately killed him. It's twisted, dysfunctional, and weirdly compelling. 
                These two genuinely love each other, and that love is rooted in shared darkness.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* Section 4: Season 3 */}
          <article id="season-3" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Daredevil Born Again Season 3 Release Date and Predictions" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Future Updates</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Daredevil Born Again Season 3: Everything We Know
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                Season 3 is already greenlit. Here's what we know about the release window, 
                returning cast, and where the story might go next.
              </p>
            </header>

            <div className="prose-content" itemProp="articleBody">
              <h3>Release Date: When Can We Expect It?</h3>
              <p>
                Marvel confirmed Season 3 was happening before Season 2 even premiered. Filming is expected 
                to begin in 2026, which means we're probably looking at a late 2027 release on Disney+. 
                That's a long wait, but given the production quality of the first two seasons, it's worth 
                taking the time to get it right.
              </p>
              <p>
                For reference: Season 1 premiered March 2025. Season 2 hit March 2026. If they stick to 
                that yearly cadence, we'd be looking at March 2027. But with filming not starting until 
                2026, late 2027 might be more realistic. We'll update this as soon as Marvel makes it official.
              </p>

              <h3>Confirmed Returning Cast</h3>
              <p>
                Charlie Cox and Vincent D'Onofrio are obviously coming back — they're the heart of this 
                show, and it's hard to imagine it continuing without them. Beyond the two leads, here's 
                who we expect to see:
              </p>
              <ul>
                <li><strong>Deborah Ann Woll</strong> as Karen Page — she's been the moral center of the series and her investigative journalism played a huge role in Season 2</li>
                <li><strong>Wilson Bethel</strong> as Bullseye — his arc is far from over after that finale</li>
                <li><strong>Margarita Levieva</strong> as Heather Glenn — caught between Matt and Fisk, her story has plenty of room to grow</li>
                <li><strong>Krysten Ritter</strong> as Jessica Jones — her return in Season 2 was too successful to be a one-off</li>
                <li><strong>Elden Henson</strong> as Foggy Nelson — confirmed to appear, likely in flashbacks given what happened in the pilot</li>
                <li><strong>Tony Dalton</strong> as Swordsman — his appearance in the Season 2 finale sets him up for a bigger role</li>
              </ul>

              <h3>Where Could the Story Go?</h3>
              <p>
                Season 2 ended with the resistance fully formed — Daredevil, Jessica Jones, and Punisher 
                standing together against Fisk's regime. Season 3 will almost certainly be about that 
                conflict coming to a head. We're talking open warfare in the streets of New York, with 
                Fisk's AVTF on one side and the vigilantes on the other.
              </p>
              <p>
                The showrunners have also teased that the "Shadowland" storyline from the comics could 
                be on the table. In that arc, Matt Murdock takes control of the Hand ninja clan and 
                establishes a fortress in Hell's Kitchen. It's a dark storyline that would push the 
                character into morally questionable territory — exactly the kind of thing this show 
                excels at exploring.
              </p>

              <h3>Could We See More Netflix Characters?</h3>
              <p>
                With Jessica Jones officially in the fold, the door is wide open for other Netflix 
                characters to make the jump. Mike Colter has been dropping not-so-subtle hints about 
                Luke Cage returning. Finn Jones' Iron Fist is another possibility, though that character 
                has more baggage. And Jon Bernthal's Punisher already showed up in Season 2, so his 
                return in Season 3 feels like a safe bet.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* Section 5: Comparison */}
          <article id="comparison" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Daredevil Born Again vs Netflix Original Comparison" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Comparison</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Born Again vs Netflix: How Do They Compare?
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                The Disney+ revival had big shoes to fill. Two seasons in, here's how Born Again 
                stacks up against the Netflix original that started it all.
              </p>
            </header>

            <div className="rounded-xl overflow-hidden border border-neutral-800 mb-8">
              <img src="/images/7_Daredevil_Born_Again_Showrunner_Confirms.png" alt="Daredevil in his iconic red suit" className="w-full object-cover" />
              <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Daredevil in the updated red suit for Born Again</p>
            </div>

            <div className="prose-content" itemProp="articleBody">
              <h3>The Rating Difference: TV-MA vs TV-14</h3>
              <p>
                Let's address the elephant in the room. The Netflix Daredevil was rated TV-MA. Born Again 
                is TV-14. That means less graphic violence, less profanity, and generally less of the gritty 
                edge that defined the original. Season 1 of Born Again struggled with this — there were 
                moments that felt like they were pulling punches, and fans noticed.
              </p>
              <p>
                Season 2 finds a much better balance. The action is still intense, the stakes still feel 
                real, and the show doesn't shy away from dark themes. It's not as brutal as the Netflix 
                version, but it's closer than you might expect from a Disney+ show. The fight choreography 
                is excellent, and the hallway fight tradition continues (though no single-take hallway 
                scene has quite matched the original yet).
              </p>

              <h3>Episodic Count: 13 vs 9</h3>
              <p>
                The Netflix series had 13 episodes per season, which sometimes led to pacing issues — 
                let's be honest, there were episodes that felt like filler. Born Again trims that to 9 
                episodes in Season 1 and 8 in Season 2, and the tighter structure benefits the storytelling. 
                Every episode matters. There's no fat to trim.
              </p>

              <h3>Budget and Production Value</h3>
              <p>
                Born Again reportedly has a budget of $10-15 million per episode, compared to roughly 
                $3-4 million for the Netflix version. You can see the difference on screen. The cinematography 
                is more cinematic, the visual effects more polished, and the overall presentation feels 
                bigger. The downside is that occasionally it feels a little too polished — the Netflix 
                series' rougher aesthetic matched its subject matter in a way that the Disney+ version 
                sometimes misses.
              </p>

              <h3>MCU Integration</h3>
              <p>
                This is the biggest structural difference. The Netflix Daredevil existed in its own 
                bubble. There were vague references to "the incident" (the Battle of New York from the 
                first Avengers movie) and occasional name-drops, but it was largely self-contained. Born 
                Again is fully embedded in the MCU.
              </p>
              <p>
                That means cameos from characters like Jessica Jones and the Punisher aren't just 
                fan-service — they're building toward something larger. Yusuf Khan (Ms. Marvel's father) 
                showed up in Season 1. The Swordsman appeared in the Season 2 finale. This is a show 
                that knows it's part of a bigger universe, for better and occasionally for worse.
              </p>

              <h3>The Core Remains the Same</h3>
              <p>
                At the end of the day, what made the Netflix series work is still present in Born Again. 
                Charlie Cox is still giving the definitive performance as Matt Murdock. Vincent D'Onofrio 
                is still terrifying and weirdly sympathetic as Wilson Fisk. The relationship between 
                these two characters — the hero and villain who understand each other better than anyone 
                else — remains the driving force of the entire franchise. As long as that's true, Born 
                Again will be worth watching, regardless of which streaming service it's on.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* Section 6: Bullseye */}
          <article id="bullseye" className="mb-16 scroll-mt-20" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Bullseye Redemption Arc in Daredevil Born Again Season 2" />
            <header className="mb-8">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Character Arc</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" itemProp="name">
                Bullseye's Redemption Arc: Can a Killer Change?
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                Wilson Bethel's Bullseye gets the most complex arc of Season 2. 
                It's not a clean redemption story — and that's exactly why it works.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden border border-neutral-800">
                <img src="/images/6_Daredevil_Born_Again_Will_Bullseye.png" alt="Wilson Bethel as Bullseye" className="w-full object-cover" />
                <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Wilson Bethel as Benjamin "Dex" Poindexter</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800">
                <img src="/images/9_Wilson_Bethel_Teases_A_New_Dex_for.png" alt="Bullseye vs Daredevil fight scene" className="w-full object-cover" />
                <p className="p-3 text-xs text-neutral-500 bg-neutral-900">Bullseye faces off against Daredevil</p>
              </div>
            </div>

            <div className="prose-content" itemProp="articleBody">
              <h3>Where We Left Dex</h3>
              <p>
                At the end of Netflix's Daredevil Season 3, Benjamin Poindexter was in bad shape. His 
                spine was shattered during his fight with Daredevil, and he was undergoing experimental 
                surgery. Born Again picks up with him having survived, but changed. He's been through 
                psychiatric care. He's been trying to manage his violent impulses. And he's struggling 
                with what he did — most notably, killing Foggy Nelson in the very first episode of 
                Born Again Season 1.
              </p>

              <h3>"A New Dex"</h3>
              <p>
                Wilson Bethel has described Season 2 as featuring "a new Dex," and that's accurate. 
                This isn't the same unhinged killer we saw in the Netflix series. He's more controlled, 
                more self-aware, and genuinely trying to find a different path. But the key word is 
                "trying." The show never lets us forget that Dex is a deeply damaged person whose 
                instinctive response to problems is violence.
              </p>
              <p>
                His relationship with Heather Glenn — Fisk's Mental Health Commissioner, who also 
                happens to be Matt's ex-girlfriend — adds another layer of complexity. She's trying 
                to help him, and he seems to genuinely want that help. But their interactions are 
                fraught with tension because we know what Dex is capable of, and so does she.
              </p>

              <h3>The Morally Gray Middle Ground</h3>
              <p>
                What makes Bullseye's arc in Season 2 so compelling is that it refuses to give us 
                easy answers. Dex does genuinely heroic things. He saves Governor McCaffrey from an 
                assassination attempt. He takes a shot at Kingpin — the man responsible for so much 
                of the city's suffering. But he also does terrible things, and his motivations are 
                always messy.
              </p>
              <p>
                When he takes that sniper shot at Fisk in the finale, it's not framed as a heroic 
                moment. It's framed as what it is: an attempted assassination. That Fisk "deserves it" 
                doesn't make it right. That Buck Cashman takes the bullet instead makes it even more 
                complicated. Dex isn't a hero in this moment. He's a violent man doing violent things, 
                and the show has the courage to let that stand without tidy moral resolution.
              </p>

              <h3>What Bethel Says About the Character</h3>
              <p>
                In interviews after the Season 2 finale, Wilson Bethel made it clear that he sees 
                Bullseye's arc as being about "settling scores" rather than traditional heroism. 
                He confirmed that Dex was aiming for Fisk, not performing some calculated act of 
                sacrifice. This is personal for Bullseye. Kingpin is "the most deserving of 
                Bullseye's bullet," and that's what drives him.
              </p>
              <p>
                It's worth noting that Bethel also teased "a new Dex" for Season 3, suggesting that 
                whatever evolution we saw in Season 2 is just the beginning. Whether that means 
                Bullseye moves closer to heroism or slides back into full villainy remains to be seen. 
                Given the quality of the writing so far, either direction would feel earned.
              </p>
            </div>
          </article>

          <hr className="border-neutral-800 my-12" />

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">People Also Ask</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">What happens at the end of Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  The finale brings Daredevil, Jessica Jones, and the Punisher together as a resistance against Kingpin's martial law. Bullseye takes a sniper shot at Fisk but hits Buck Cashman instead. The ending sets up Season 3 as an all-out war for control of New York City.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">When does Jessica Jones appear in Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Krysten Ritter's Jessica Jones first appears in Episode 6. She's been living in the suburbs raising a daughter, but Fisk's Anti-Vigilante Task Force comes for her at home, forcing her back into the fight. By the finale, she's standing alongside Daredevil and Punisher.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Is there going to be a Season 3?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes. Marvel greenlit Season 3 before Season 2 even premiered. Filming is expected to start in 2026, with a likely release in late 2027. Charlie Cox, Vincent D'Onofrio, and the main cast are expected to return.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Does Punisher appear in Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes. Jon Bernthal returns as Frank Castle / The Punisher. He operates in the shadows for much of the season before stepping into the light for the finale, where he stands alongside Daredevil and Jessica Jones as part of the resistance against Fisk.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Is Foggy really dead?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Foggy Nelson was killed by Bullseye in the very first episode of Born Again Season 1. However, Elden Henson is confirmed to appear in Season 2, likely in flashback sequences. Matt Murdock filmed a 2015 flashback scene for Season 2, and Foggy will presumably be part of that. The show hasn't pulled a fake-out — as far as we know, Foggy is dead in the present timeline.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Does Bullseye become a hero in Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Not exactly. Bullseye's arc is more complicated than a simple hero turn. He does heroic things — saving Governor McCaffrey, taking a shot at Kingpin — but his motivations are personal rather than altruistic. The show deliberately avoids giving him a clean redemption. He's in a morally gray space, and that's where the character is most interesting.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Who is Mr. Charles?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Mr. Charles is played by Matthew Lillard (Scooby-Doo, Five Nights at Freddy's). He's a new antagonist who operates on the political stage with influence that rivals Fisk's own. Marvel's Brad Winderbaum described him as "as influential, in many ways, as Fisk is," suggesting he's a major power player in New York's political landscape.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">How does Born Again connect to the Netflix shows?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Born Again is a continuation of the Netflix series in the sense that Charlie Cox and Vincent D'Onofrio play the same characters. Foggy's death and the events of Daredevil Season 3 are referenced. However, the show exists in the main MCU continuity now, with characters like Jessica Jones crossing over from the Netflix universe. Think of it as a soft reboot — same characters, new continuity rules.
                </div>
              </details>
            </div>
          </section>

          {/* Quick Facts */}
          <aside className="mb-16 bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Daredevil Born Again Season 2 — Quick Facts</h2>
            <dl className="grid md:grid-cols-2 gap-4">
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Premiere Date</dt><dd className="font-semibold">March 24, 2026</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Episodes</dt><dd className="font-semibold">8 Episodes</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Streaming On</dt><dd className="font-semibold">Disney+</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Showrunner</dt><dd className="font-semibold">Dario Scardapane</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Main Cast</dt><dd className="font-semibold">Charlie Cox, Vincent D'Onofrio, Krysten Ritter</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">New Additions</dt><dd className="font-semibold">Matthew Lillard, Lili Taylor, Tony Dalton</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Rating</dt><dd className="font-semibold">TV-14</dd></div>
              <div><dt className="text-neutral-500 text-sm uppercase tracking-wider">Season 3 Status</dt><dd className="font-semibold text-green-400">Greenlit</dd></div>
            </dl>
          </aside>

          {/* Related Articles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#ending" className="block p-5 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-red-800 transition-colors group">
                <span className="text-red-600 text-xs font-semibold uppercase">Season 2</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-red-400 transition-colors">Season 2 Ending Explained</h3>
                <p className="text-neutral-500 text-sm mt-2">The finale breakdown and what it sets up next</p>
              </a>
              <a href="#jessica-jones" className="block p-5 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-red-800 transition-colors group">
                <span className="text-red-600 text-xs font-semibold uppercase">Characters</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-red-400 transition-colors">Jessica Jones Returns</h3>
                <p className="text-neutral-500 text-sm mt-2">Krysten Ritter is back and she's not happy about it</p>
              </a>
              <a href="#kingpin" className="block p-5 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-red-800 transition-colors group">
                <span className="text-red-600 text-xs font-semibold uppercase">Villains</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-red-400 transition-colors">Kingpin as Mayor</h3>
                <p className="text-neutral-500 text-sm mt-2">How Wilson Fisk took control of New York City</p>
              </a>
              <a href="#bullseye" className="block p-5 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-red-800 transition-colors group">
                <span className="text-red-600 text-xs font-semibold uppercase">Character Arc</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-red-400 transition-colors">Bullseye's Redemption</h3>
                <p className="text-neutral-500 text-sm mt-2">Can a killer actually change? Season 2 says it's complicated</p>
              </a>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-3">MCU Guide</h3>
                <p className="text-neutral-500 text-sm">In-depth coverage of Marvel's street-level heroes. No fluff, just what you need to know.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Jump To</h4>
                <nav className="space-y-2 text-sm">
                  <a href="#ending" className="block text-neutral-500 hover:text-red-400 transition-colors">Ending Explained</a>
                  <a href="#jessica-jones" className="block text-neutral-500 hover:text-red-400 transition-colors">Jessica Jones</a>
                  <a href="#kingpin" className="block text-neutral-500 hover:text-red-400 transition-colors">Kingpin as Mayor</a>
                  <a href="#bullseye" className="block text-neutral-500 hover:text-red-400 transition-colors">Bullseye Arc</a>
                </nav>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Daredevil</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Kingpin</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Bullseye</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Jessica Jones</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Punisher</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Disney Plus</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">Marvel</span>
                  <span className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">MCU</span>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-800 pt-8 text-center text-neutral-600 text-sm">
              <p>MCU Guide is an independent fan site, not affiliated with Marvel Studios or Disney.</p>
              <p className="mt-2">All trademarks belong to their respective owners. Major spoilers for Daredevil Born Ahead.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
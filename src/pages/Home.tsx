import { useEffect } from 'react'
import './Home.css'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
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

    // Load Adsterra Social Bar
    const script = document.createElement('script')
    script.src = 'https://pl29359434.profitablecpmratenetwork.com/36/ab/a1/36aba132a22df76c201f1f3ee8435952.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
      // Clean up script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is Daredevil Born Again Season 2 coming out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daredevil Born Again Season 2 premiered on March 24, 2026 on Disney+. All 8 episodes are now streaming. The season released weekly from March through May 2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will there be a Season 2 of Daredevil Born Again?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Season 2 has already been released and is streaming on Disney+ now. Season 3 is also confirmed and greenlit for production in 2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many episodes in Daredevil Born Again Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daredevil Born Again Season 2 has 8 episodes total, released weekly on Disney+ from March 24 to May 5, 2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will the Punisher be in Daredevil Born Again Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Jon Bernthal returns as Frank Castle/The Punisher in Season 2. He joins forces with Daredevil and Jessica Jones to fight against Kingpin\'s regime.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will Jessica Jones be in Daredevil Born Again Season 2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Krysten Ritter returns as Jessica Jones starting in Episode 6 titled "Requiem." She teams up with Matt Murdock to take down Fisk\'s weapons cache.'
        }
      },
      {
        '@type': 'Question',
        name: 'When does Daredevil Born Again Season 3 come out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Season 3 is confirmed and greenlit. Filming begins in 2026 with an expected release in late 2027 on Disney+.'
        }
      }
    ]
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Daredevil Born Again Season 2: Complete Episode Guide & Ending Explained',
    description: 'When does Daredevil Born Again Season 2 come out? Complete guide to all 8 episodes, cast, ending explained, and Season 3 release date. Jessica Jones, Punisher, and Bullseye return.',
    image: '/images/8_Daredevil_Born_Again_season_2_release.png',
    datePublished: '2026-03-24',
    dateModified: '2026-05-06',
    author: {
      '@type': 'Organization',
      name: 'MCU Guide'
    }
  }

  const tvSeriesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name: 'Daredevil: Born Again',
    alternateName: 'Daredevil Born Again',
    description: 'Matt Murdock returns as Daredevil to fight Wilson Fisk who has become Mayor of New York City.',
    numberOfSeasons: 2,
    numberOfEpisodes: 8,
    containsSeason: {
      '@type': 'TVSeason',
      seasonNumber: 2,
      numberOfEpisodes: 8,
      datePublished: '2026-03-24'
    },
    actor: [
      { '@type': 'Person', name: 'Charlie Cox' },
      { '@type': 'Person', name: 'Vincent D\'Onofrio' },
      { '@type': 'Person', name: 'Deborah Ann Woll' },
      { '@type': 'Person', name: 'Krysten Ritter' },
      { '@type': 'Person', name: 'Jon Bernthal' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tvSeriesJsonLd) }} />

      <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-neutral-950/98 backdrop-blur-md border-b border-neutral-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <img src="/favicon.svg" alt="MCU Guide" className="h-10 w-10 group-hover:scale-110 transition-transform" />
              </a>
              <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                <a href="#episodes" className="hover:text-red-400 transition-colors">Episodes</a>
                <a href="#ending" className="hover:text-red-400 transition-colors">Ending</a>
                <a href="#jessica-jones" className="hover:text-red-400 transition-colors">Jessica Jones</a>
                <a href="#kingpin" className="hover:text-red-400 transition-colors">Kingpin</a>
                <a href="#season-3" className="hover:text-red-400 transition-colors">Season 3</a>
                <a href="#faq" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">FAQ</a>
              </div>
              <button className="lg:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative border-b border-neutral-800 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/8_Daredevil_Born_Again_season_2_release.png"
              alt="Daredevil Born Again Season 2"
              className="w-full h-full object-cover opacity-15 scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/85 to-neutral-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-4 py-1.5 text-xs font-bold bg-red-600 text-white rounded-full uppercase tracking-wide">Season 2</span>
                <span className="px-4 py-1.5 text-xs font-semibold bg-neutral-800 text-neutral-200 rounded-full">Disney+</span>
                <span className="px-4 py-1.5 text-xs font-semibold bg-neutral-800 text-neutral-200 rounded-full">8 Episodes</span>
                <span className="px-4 py-1.5 text-xs font-semibold bg-green-900/30 text-green-400 border border-green-800 rounded-full">Now Streaming</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                Daredevil Born Again <span className="text-red-600 block md:inline">Season 2</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-4 leading-relaxed font-medium">
                Season 2 dropped in March 2026 and hit harder than the first.
              </p>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                Kingpin's running New York as mayor, Daredevil's back in the red suit,
                Jessica Jones finally shows up, and the Punisher joins the fight.
                Here's everything that went down in all 8 episodes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#episodes" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  View Episode Guide
                </a>
                <a href="#faq" className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-lg transition-all border border-neutral-700">
                  Common Questions
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Last updated May 6, 2026
                </span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Full spoilers ahead
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <section className="border-b border-neutral-800 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <h2 className="text-2xl font-bold text-neutral-200">What's Inside</h2>
            </div>
            <nav>
              <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li>
                  <a href="#episodes" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">01</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">Complete Episode Guide</span>
                  </a>
                </li>
                <li>
                  <a href="#ending" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">02</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">Season 2 Ending Explained</span>
                  </a>
                </li>
                <li>
                  <a href="#jessica-jones" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">03</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">Jessica Jones Returns</span>
                  </a>
                </li>
                <li>
                  <a href="#kingpin" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">04</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">Kingpin as Mayor</span>
                  </a>
                </li>
                <li>
                  <a href="#season-3" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">05</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">Season 3 Release Date</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-700 hover:bg-neutral-900 transition-all group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600/20 text-red-500 font-black text-lg rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">06</span>
                    <span className="flex-1 font-semibold group-hover:text-red-400 transition-colors">FAQ & Questions</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 py-16">

          {/* Episode Guide Section */}
          <section id="episodes" className="mb-16 scroll-mt-20">
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Season 2 Episodes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              Complete Episode Guide
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              All 8 episodes of Daredevil: Born Again Season 2, with detailed breakdowns of key plot points,
              character developments, and major reveals.
            </p>

            <div className="space-y-6">
              {/* Episode 1 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">01</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">The Northern Star</h3>
                    <p className="text-sm text-neutral-500">Air Date: March 24, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">Wilson Fisk is firmly entrenched as Mayor. Matt infiltrates a weapons smuggling operation while a mysterious CIA operative arrives in New York.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>The season opens with Wilson Fisk firmly entrenched as Mayor of New York, having transformed the city into a police state under his "Safer Streets Initiative." Matt Murdock is in hiding but has rekindled his romantic relationship with Karen Page, continuing to operate as Daredevil from the shadows.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>The Ship Heist:</strong> Matt infiltrates a freighter called the Northern Star on the East River, discovering Fisk is smuggling military-grade weapons. He sinks the ship, exposing Fisk's illegal arms operation to the public.</li>
                      <li><strong>The CIA Enters:</strong> A mysterious man named Mr. Charles (Matthew Lillard), claiming to be a CIA representative from Washington D.C., arrives in New York. He meets directly with Fisk and uses his connection to CIA Director Valentina Allegra de Fontaine to shut down investigations by the State Attorney General and Deputy Mayor against Fisk.</li>
                      <li><strong>Bullseye's Rescue:</strong> The Anti-Vigilante Task Force (AVTF) raids Cherry's apartment, subdues Matt, and unmasks him. Before they can execute him, Dex (Bullseye) snipes every AVTF agent from a distance, leaving a knife engraved with "You're welcome."</li>
                      <li><strong>Heather's Descent:</strong> Dr. Heather Glenn, suffering from severe PTSD after the Muse attack in Season 1, begins hallucinating. She accepts Fisk's appointment to run the city's mental health department and falsifies psychiatric evaluations for prisoners like Swordsman (Jacques Duquesne) to aid Fisk's political persecution.</li>
                      <li><strong>The Hacker War:</strong> BB Urich produces a pro-Fisk show called The BB Report while secretly feeding intelligence to Karen. Meanwhile, a mysterious hacker hijacks the broadcast to mock Fisk with an animated "Mayor Kingpin" caricature.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      The season premiere wastes no time establishing the new status quo. Fisk isn't hiding anymore. He's the mayor, he's got federal backing, and he's turned New York into his personal police state. Matt's reduced to guerrilla tactics, which is exactly where Fisk wants him—desperate, isolated, and easy to paint as a terrorist.
                    </p>
                    <p>
                      Matthew Lillard's Mr. Charles is the real curveball here. He's not just some CIA suit—he's got Valentina Allegra de Fontaine on speed dial, which means Fisk's corruption goes way beyond city hall. The show's connecting dots to the wider MCU, but it's doing it smart. This isn't a cameo for cameo's sake. It's showing us that the rot goes all the way to the top.
                    </p>
                    <p>
                      Then there's Bullseye saving Matt's life. That knife with "You're welcome" carved into it? Chef's kiss. Dex isn't playing hero. He's playing a sick game where only he gets to kill Daredevil. It's possessive, it's twisted, and it sets up the most interesting dynamic of the season. Wilson Bethel's performance here is unhinged in the best way.
                    </p>
                    <p>
                      Heather Glenn's storyline is the slow-burn horror of the season. She's not evil—she's broken. That Muse mask she keeps holding? It's not a trophy. It's a mirror. Every time she looks at it, she's seeing the person she's becoming. By the time she accepts Fisk's job offer, you know she's already lost.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 2 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">02</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">Shoot the Moon</h3>
                    <p className="text-sm text-neutral-500">Air Date: March 31, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">Fisk tightens his grip on the city. Matt and Karen attempt to build a resistance network as trust becomes a dangerous currency.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>Fisk tightens his grip on the city, forcing Matt and Karen to attempt building a resistance network. However, trust becomes a dangerous currency as old enemies resurface and new alliances are tested.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Cherry in the Hospital:</strong> Cherry suffers a heart attack after being beaten by the AVTF. Bullseye later massacres an AVTF hit squad inside the hospital elevator to prevent them from finishing the job.</li>
                      <li><strong>Fisk's Propaganda:</strong> Fisk publicly declares Matt Murdock a hero who once saved his life, reframing him as a victim of Bullseye rather than a vigilante. "Hero" posters of Matt appear across the city, effectively baiting him to reveal himself.</li>
                      <li><strong>Dex's Confession:</strong> Dex enters a church seeking absolution. Blue light flashes around him—a visual manifestation of his fractured psyche adopting a "superhero" delusion, confirming his full transformation into the comic-book Bullseye persona.</li>
                      <li><strong>The Grocery Store Raid:</strong> AVTF agents indiscriminately arrest civilians in a grocery store. Soledad, Angela del Toro's aunt, is arrested for "assaulting an officer" when she tries to intervene. Upon learning this, Assistant DA Kristen McDuffie gives Angela Hector Ayala's White Tiger suit and equipment.</li>
                      <li><strong>A Spy in the AVTF:</strong> Matt and Karen interrogate a captured young AVTF member, discovering he is a sympathizer who infiltrated the task force voluntarily. He provides a keycard to the vigilante prison.</li>
                      <li><strong>BB's Secret Revealed:</strong> It is revealed that BB Urich is the creator of the anti-Fisk "Phisk" hack videos, avenging her uncle Ben Urich's murder by Fisk.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      Fisk calling Matt Murdock a hero is the most devious move of the season. He's not lying—Matt did save his life once. But by plastering Matt's face all over the city as a "victim," Fisk's forcing him into an impossible corner. Stay silent and let Fisk control the narrative, or come forward and admit you're Daredevil. Either way, Fisk wins.
                    </p>
                    <p>
                      That hospital elevator scene with Bullseye is brutal. He's not protecting Cherry out of the goodness of his heart. He's eliminating anyone who tries to kill Matt because in Dex's fractured mind, that's his job. The church confession scene drives it home—those blue light flashes aren't just stylistic. They're showing us Dex constructing a superhero identity to justify his violence. He's not a killer anymore. He's a "protector." It's delusional and terrifying.
                    </p>
                    <p>
                      White Tiger's origin hits different because it's not about destiny or great power. Angela del Toro puts on that suit because she's pissed. Her aunt got arrested for standing up to fascist cops, and the system won't do anything about it. So she takes matters into her own hands. That's a more honest superhero origin than most of what Marvel's been putting out.
                    </p>
                    <p>
                      BB Urich being the "Phisk" hacker is perfect. She's using Fisk's own propaganda machine against him, turning his broadcast into a joke. It's guerrilla media warfare, and it's the kind of resistance that actually works in the real world. She's not punching bad guys—she's changing minds. That's her uncle Ben's legacy, updated for the digital age.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 3 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">03</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">The Scales & The Sword</h3>
                    <p className="text-sm text-neutral-500">Air Date: March 31, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">A new threat emerges and the balance of power shifts. Matt leads a daring prison break to free illegally detained vigilantes.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>A new threat emerges, and the balance of power shifts. Matt is forced to confront whether simple resistance is enough to dismantle a system specifically designed to crush opposition.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Heather's Breakdown:</strong> Heather continues to hold onto the Muse's mask and has a tense conversation with Kristen McDuffie about Matt and vigilantism, showing her deteriorating mental state.</li>
                      <li><strong>The Prison Break:</strong> Matt recruits former partner Kirsten McDuffie to help infiltrate the vigilante prison using her prior access. Karen coordinates via walkie-talkie while Angela, now in the White Tiger suit, joins the mission armed.</li>
                      <li><strong>Swordsman Joins:</strong> Jacques Duquesne (Swordsman) is either exonerated or convicted through Fisk's manipulation (sources vary), and subsequently joins the resistance. Matt, Karen, Angela, and Swordsman storm the prison to free illegally held vigilantes and innocent civilians.</li>
                      <li><strong>The Northern Star Explodes:</strong> The rescue team successfully evacuates the prisoners in a van, but Fisk orders the destruction of the Northern Star wreckage. He blames the explosion on the "terrorists" they just rescued, doubling down on martial law.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      The title "The Scales & The Sword" is about the choice between justice and violence. Matt's spent his whole career trying to use the law—the scales—to take down Fisk. But when the law itself is corrupted, when judges and prosecutors are in Fisk's pocket, what's left? The sword. This prison break is Matt admitting that legal channels are dead.
                    </p>
                    <p>
                      The team dynamic here is messy in the best way. Matt's the idealist, Karen's the strategist, Angela's running on pure rage, and Swordsman's just in it for himself. They're not the Avengers. They're a bunch of desperate people with conflicting motivations, and that tension makes every scene crackle. You're never sure if they're going to pull it off or fall apart.
                    </p>
                    <p>
                      Fisk blowing up the Northern Star wreckage and blaming it on "terrorists" is straight out of the authoritarian playbook. He's not just destroying evidence—he's creating a narrative. The public sees an explosion, sees Fisk pointing at the "vigilantes," and they believe him. That's how propaganda works. It doesn't matter what's true. It matters what people think is true.
                    </p>
                    <p>
                      Heather's conversation with Kristen about Matt is where you see how far gone she is. She's not just traumatized—she's resentful. She blames Matt for not saving her, for not being there, for choosing everyone else over her. That Muse mask isn't just sitting on her shelf anymore. She's talking to it. She's becoming it.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 4 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">04</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">Gloves Off</h3>
                    <p className="text-sm text-neutral-500">Air Date: April 7, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">Bullseye fully embraces his villain identity. Daredevil and Bullseye face off in a spectacular fight that leaves Fisk wounded.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>Bullseye is truly "unleashed," and the emotional and political stakes deepen as personal histories collide with present-day conflicts. The episode explores the cost of vengeance.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Bullseye Unleashed:</strong> Dex fully embraces his comic-book supervillain identity, donning his mask and displaying a "new level of insanity." His morning routine and current plans are revealed in chilling detail.</li>
                      <li><strong>Fisk's Boxing Match:</strong> Fisk participates in a charity boxing match and publicly beats his opponent until the man is carried out on a stretcher, openly demonstrating his violent nature to the city.</li>
                      <li><strong>Swordsman Bails:</strong> Swordsman ducks out at a critical moment, creating a fracture in Matt's alliance when he is needed most.</li>
                      <li><strong>Major Action Sequences:</strong> Daredevil faces off against Bullseye in a spectacular fight, while Daredevil and Swordsman also showcase their respective combat abilities in separate sequences.</li>
                      <li><strong>Fisk is Wounded:</strong> A massive battle at the end of the episode leaves Fisk physically changed, potentially altering his capabilities and setting up future conflicts.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      "Gloves Off" is a boxing term for when you stop following the rules and just start swinging. That's exactly what happens here. Bullseye puts on the mask and stops pretending he's anything other than a killer. Fisk beats a man half to death on live television and the crowd cheers. Matt's forced to watch his moral code crumble in real time.
                    </p>
                    <p>
                      Dex's morning routine is one of the creepiest sequences of the season. He's making breakfast, brushing his teeth, doing normal human things—but the camera work and the score tell you something's deeply wrong. When he puts on that mask, it's not a disguise. It's the real him. The face underneath is the lie. That's a hell of a character beat.
                    </p>
                    <p>
                      Fisk's charity boxing match is a masterclass in public manipulation. He's not hiding his violence anymore—he's celebrating it. And the city loves him for it. They see "strength" and "passion" where they should see brutality. That's how fascism works. It makes cruelty look like courage.
                    </p>
                    <p>
                      Swordsman bailing when things get hot is the reality check Matt needed. Not everyone's in this for the cause. Some people are just mercenaries, and when the risk outweighs the reward, they're gone. It's a betrayal, sure, but it's also honest. Swordsman never pretended to be a hero.
                    </p>
                    <p>
                      The Daredevil vs. Bullseye fight is everything you want from these two. Matt's fighting defensively, trying to subdue without killing. Dex is going for the throat every single time. It's not just a physical fight—it's a philosophical one. Can you beat someone who has no limits when you've imposed limits on yourself? Matt doesn't have an answer yet.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 5 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">05</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">The Grand Design</h3>
                    <p className="text-sm text-neutral-500">Air Date: April 14, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">The resistance takes shape but internal fractures threaten stability. Extensive flashbacks connect past with present.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>The resistance begins to take shape, but internal fractures threaten its stability. The episode uses extensive flashbacks to connect the past with the present, questioning whether history is doomed to repeat itself.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Flashback Narrative:</strong> The story uses extensive flashbacks showing how Fisk met Vanessa and how Matt's relationship with Foggy developed, connecting past with present.</li>
                      <li><strong>Vanessa's Critical Condition:</strong> After Bullseye's attack in Episode 4, Vanessa is fighting for her life in the hospital while Fisk waits by her side.</li>
                      <li><strong>AVTF Escalation:</strong> The Anti-Vigilante Task Force intensifies its manhunt for both Daredevil and Bullseye, escalating the city's tension to a breaking point.</li>
                      <li><strong>Leadership Tested:</strong> Matt is forced to reconsider what leadership means in a city defined by fear. The resistance members clash over differing motivations and past decisions.</li>
                      <li><strong>The Scariest Kingpin Yet:</strong> This episode establishes what may be "the most terrifying version of Kingpin we have ever seen," as Fisk's brutality reaches unprecedented levels.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      "The Grand Design" reveals that none of this was improvised. Fisk's been playing chess while everyone else was playing checkers. The flashbacks show us how he laid the groundwork years ago—every alliance, every betrayal, every public statement was part of a larger plan. He didn't stumble into power. He engineered it.
                    </p>
                    <p>
                      Vanessa's in danger this episode, and that's when you see the real Kingpin. Not the politician, not the crime lord—the man who will burn the entire city down if it means keeping his wife safe. Vincent D'Onofrio plays it with this quiet intensity that's more frightening than any shouting match. When Fisk is calm, that's when you should be scared.
                    </p>
                    <p>
                      Matt's leadership crisis is the emotional core here. He's used to working alone, making his own calls, living with his own consequences. Now he's got people depending on him, and they're not all on the same page. Karen questions his methods. Angela questions his morals. The resistance is fracturing before it's even fully formed, and Matt doesn't know how to hold it together.
                    </p>
                    <p>
                      The "scariest Kingpin yet" isn't about physical threat. It's about legitimacy. When a tyrant has to hide, you can fight him. When a tyrant is the mayor, when he's got the law on his side, when half the city genuinely supports him—how do you fight that? Fisk isn't just powerful. He's right, according to the system. That's what makes him terrifying.
                    </p>
                    <p>
                      The flashbacks cutting into the present-day action create this sense of inevitability. We're watching history repeat itself. Matt and Fisk have done this dance before, and they'll do it again. The question isn't whether Matt can beat Fisk. It's whether he can break the cycle.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 6 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">06</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">Requiem</h3>
                    <p className="text-sm text-neutral-500">Air Date: April 21, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">Vanessa Fisk dies. Jessica Jones makes her surprise return from the suburbs. The resistance moves from underground operations to open street protests.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>The consequences of earlier choices begin to surface, alliances are reshaped, and priorities shift. Vanessa Fisk dies from her injuries, leaving Wilson Fisk in mourning. The surprise return of Jessica Jones injects new energy and cynicism into the resistance.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Vanessa's Death:</strong> Vanessa Fisk dies from the injuries sustained in Bullseye's attack. Fisk, dressed in all white while others wear black, attends her funeral and leaves a rose on her casket.</li>
                      <li><strong>Jessica Jones Returns:</strong> Krysten Ritter reprises her role as Jessica Jones. She's been living in the suburbs raising a daughter named Danielle when AVTF agents raid her home, forcing her back into the fight. She teams up with Matt to raid an AVTF weapons cache.</li>
                      <li><strong>The Moral Debate:</strong> Matt's unwavering no-kill code leads to a heated argument with Karen over the definitions of justice and survival in a fascist-controlled city.</li>
                      <li><strong>Fisk is Damaged:</strong> Fisk's operation suffers an "irreversible blow" with Vanessa's death, and cracks begin to appear in his empire as he spirals into grief.</li>
                      <li><strong>Street Uprising:</strong> The resistance moves from underground operations to open street protests, as public defiance against Fisk's rule becomes visible across the city.</li>
                      <li><strong>First Major Confrontation:</strong> Kingpin and Daredevil engage in their first significant physical confrontation in a long time, raising the personal stakes between them.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      Vanessa's death is the emotional gut-punch of the season. Fisk dressed in all white at the funeral while everyone else wears black is a striking visual choice—he's mourning, but he's also setting himself apart, refusing to conform even in grief. That single rose on the casket is the most vulnerable we've ever seen him.
                    </p>
                    <p>
                      Jessica Jones showing up is the shot in the arm this season needed. She tried to get out. Moved to the suburbs, changed her life, raised a kid named Danielle. But Fisk's goons came knocking anyway, because in this world, there's no such thing as neutral. You're either with the regime or you're a target. Jessica chose her side the moment they threatened her family.
                    </p>
                    <p>
                      The chemistry between Jessica and Matt is electric. She's all cynicism and dark humor, he's all Catholic guilt and moral absolutes. They shouldn't work together, but they do, because underneath the banter, they're both people who can't walk away from a fight even when they should. Krysten Ritter slides back into the role like she never left. That warehouse fight against the AVTF is pure fan service in the best way.
                    </p>
                    <p>
                      Matt and Karen's argument about the no-kill rule is the conversation the show's been building toward all season. Karen's not wrong—in a city where the law is a weapon in Fisk's hands, moral purity is a luxury. But Matt's not wrong either—the moment he starts killing, he becomes what he's fighting against. There's no easy answer, and the show doesn't pretend there is.
                    </p>
                    <p>
                      The street protests mark a turning point. This isn't just a few masked vigilantes anymore. It's a movement. Regular people are standing up, and that's what Fisk can't control. He can arrest Daredevil, he can shut down the media, but he can't arrest an entire city. The resistance is going public, and that changes everything.
                    </p>
                    <p>
                      Fisk without Vanessa is a different animal. She was his anchor, his reason for wanting power in the first place. Now she's gone, and you can see him unraveling. When Matt and Fisk finally throw down, it's not just a fight. It's personal. Fisk tells Matt that New York chose him, that the people want what he's offering. And the worst part? He's not entirely wrong. That's the gut punch. Matt's not just fighting a villain. He's fighting a democratically elected official who genuinely has popular support.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 7 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">07</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">The Hateful Darkness</h3>
                    <p className="text-sm text-neutral-500">Air Date: April 28, 2026</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">Matt returns to the courtroom. Bullseye saves the Governor. Matt forgives Dex for murdering Foggy Nelson.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>Matt returns to the courtroom as a lawyer to defend Karen. Fisk's control faces its most direct challenge, and the battle for narrative control becomes the true war. This is the emotional climax before the finale.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>Matt Returns to Court:</strong> Matt triumphantly returns as a lawyer, appearing in court as part of Karen's defense team, announcing to all of New York that Matt Murdock is alive.</li>
                      <li><strong>Daniel Blake's Death:</strong> Daniel Blake (Michael Gandolfini) is executed by Buck with a gunshot to the head for refusing to betray BB Urich and withholding information from Fisk. It is one of the season's most tragic sacrifices.</li>
                      <li><strong>The Governor's Assassination Attempt:</strong> Fisk sends an assassin to kill the Governor, but Dex (Bullseye) intervenes and saves the Governor's life by killing the assassin with a thrown knife. This marks Bullseye's complex evolution from villain to anti-hero.</li>
                      <li><strong>Matt Forgives Bullseye:</strong> Matt tracks down Dex and forgives him for murdering Foggy Nelson, Father Lantom, and Ray Nadeem. However, Matt makes it clear: "Forgiveness does not mean forgetting," and he still hates Dex for what he did.</li>
                      <li><strong>Heather's Cruelty:</strong> Heather visits Karen in prison and, in a grossly unprofessional manner, refuses to answer questions about her relationship with Vanessa while prying into Karen's personal life. She cruelly implies Karen may have been abused by her deceased brother Kevin. Karen's calm rebuttal causes Heather to snap and slap the handcuffed Karen across the face.</li>
                      <li><strong>Matt Shot Again:</strong> In a recurring season tradition, Matt is shot in the leg shortly before the finale, mirroring his gunshot wound at the end of Season 1.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      Matt returning to the courtroom is the show coming full circle. He's not Daredevil here—he's Matt Murdock, attorney at law, using the system one more time even though the system's been weaponized against him. It's either incredibly brave or incredibly naive, and the episode never quite tells you which.
                    </p>
                    <p>
                      Daniel Blake's execution is brutal and sudden. Buck just shoots him in the head, no ceremony, no last words. It's a reminder that this isn't a comic book where villains monologue. This is a regime that kills people for not cooperating, and it does it efficiently. Michael Gandolfini plays Blake's final moments with this quiet dignity that makes it hurt even more.
                    </p>
                    <p>
                      Bullseye saving the Governor is the most Bullseye thing possible. He's not doing it because he's good now. He's doing it because in his fractured mind, this is what "heroes" do. He's playing a role, and the fact that it results in something heroic is almost accidental. The show refuses to give him a clean redemption, and that's the right call.
                    </p>
                    <p>
                      Matt forgiving Dex is the emotional climax of their arc. "Forgiveness does not mean forgetting" is such a perfect line because it acknowledges the complexity. Matt can forgive Dex for killing Foggy and still hate him for it. Both things can be true. It's messy and human and exactly what this show does best.
                    </p>
                    <p>
                      Heather slapping Karen in that prison cell is the moment she crosses the line. She's not a victim anymore. She's an abuser. She's using her position to inflict pain on someone who can't fight back, and she's enjoying it. That smile when she looks at the Muse mask later? That's not possession. That's choice. She's becoming the villain willingly.
                    </p>
                  </div>
                </div>
              </details>

              {/* Episode 8 */}
              <details className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <summary className="flex items-start gap-4 p-6 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-900/30 border border-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">08</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">The Southern Cross</h3>
                    <p className="text-sm text-neutral-500">Air Date: May 5, 2026 • Season Finale</p>
                    <p className="text-neutral-400 mt-2 line-clamp-2">The courtroom showdown. Bullseye's final shot. Matt offers Fisk redemption. Multiple character arcs reach their conclusions.</p>
                  </div>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-neutral-800">
                  <div className="prose-content">
                    <h4>Overview</h4>
                    <p>All season-long conflicts reach their climax. The final showdown between Matt and Fisk occurs not in the streets, but in a courtroom. Yet the true war is over narrative control and the soul of New York City.</p>

                    <h4>Key Plot Points</h4>
                    <ul>
                      <li><strong>The Courtroom Showdown:</strong> Matt Murdock faces Mayor Wilson Fisk in court as a lawyer, not as Daredevil facing Kingpin. Fisk takes the stand as a witness in the most unexpected twist of the season.</li>
                      <li><strong>Bullseye's Final Shot:</strong> Bullseye attempts to assassinate Fisk in the courtroom, but Buck takes the bullet for him, dying in the process.</li>
                      <li><strong>Fisk's Broadcast Meltdown:</strong> Fisk appears on television to deliver a speech inciting insurrection among his supporters. However, BB and Angela (White Tiger) hack the broadcast, exposing Fisk's true nature to the entire city.</li>
                      <li><strong>Matt's Grace:</strong> Matt appears in his Daredevil suit and offers Fisk a deal—a chance at redemption. He tells Fisk, "You are better than this." Fisk roars, "Is that your punishment?!" but ultimately accepts Matt's grace, ending his reign of terror.</li>
                      <li><strong>Matt's Arrest:</strong> In the aftermath, Matt is arrested at his and Karen's "old spot" and walks into prison in an orange jumpsuit. Cole North and Powell (former AVTF members) are already inside, but Cole nods at Matt, implying he will be an ally in prison.</li>
                    </ul>

                    <h4>Character Fates</h4>
                    <ul>
                      <li>Matt and Karen exchange "I love you" before being separated.</li>
                      <li>BB receives her uncle Ben Urich's box of press clippings and is welcomed to a new job at the New York Bulletin by Editor-in-Chief Mitchell Ellison.</li>
                      <li>Jessica Jones returns home to her daughter Danielle.</li>
                      <li>Mr. Charles (using the alias Mr. Robertson) flies away with Bullseye, arranging black ops work for Dex overseas.</li>
                      <li>Fisk goes into exile, his reign as mayor ended.</li>
                      <li>Matt is arrested and walks into prison in an orange jumpsuit. Cole North and Powell (former AVTF members) are already inside, but Cole nods at Matt, implying he will be an ally in prison.</li>
                    </ul>

                    <h4>Episode Analysis</h4>
                    <p>
                      The finale doesn't give you the fight you expect. Matt and Fisk's showdown happens in a courtroom, not a rooftop. It's Matt Murdock vs. Mayor Fisk, lawyer vs. politician, and that's so much more interesting than another hallway brawl. The pen really is mightier than the fist here, and it's a bold choice that pays off.
                    </p>
                    <p>
                      Bullseye taking that shot at Fisk in the courtroom is chaos incarnate. Buck diving in front of the bullet is the only genuinely selfless thing anyone in Fisk's orbit does all season. He dies for a man who probably doesn't deserve it, and that's tragedy in its purest form.
                    </p>
                    <p>
                      BB and Angela hacking Fisk's broadcast is the resistance finally winning the narrative war. Fisk's been controlling the story all season, but in this moment, they take it back. They show the city who he really is, and for once, the truth cuts through the propaganda. It's a small victory, but it's the one that matters most.
                    </p>
                    <p>
                      Matt offering Fisk redemption is either the most Christ-like thing he's ever done or the most foolish. "You are better than this" is a hell of a thing to say to a man who's spent the entire season proving he's not. But that's Matt—he believes in redemption even when it's unearned. Fisk's response, "Is that your punishment?!" is perfect. Being offered grace when you don't want it is its own kind of torture.
                    </p>
                    <p>
                      The biggest twist comes when Matt reveals his secret identity to the public, pulling off his mask in front of everyone. It's a calculated move to disrupt the cycle of violence and corruption. Then he willingly walks into prison, where former AVTF members Cole North and Powell are already incarcerated. Cole's nod suggests Matt will have allies inside, setting up Season 3's prison storyline.
                    </p>
                    <p>
                      Jessica Jones going home to her daughter Danielle provides a quieter ending for her arc. She fought, she survived, and now she gets to go back to the life she was trying to protect. Bullseye heading off with Mr. Charles for black ops work means he's about to become even more dangerous on a global scale.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <hr className="border-neutral-800 my-12" />

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
                When is Daredevil Born Again Season 3 Coming Out?
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed" itemProp="description">
                Is there going to be a Season 3? Yes! When will Daredevil Born Again Season 3 come out?
                Season 3 is already greenlit and filming begins in 2026. Here's everything we know about
                the release window, returning cast, and where the story might go next.
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
                  <span className="font-semibold text-lg pr-4">When is Daredevil Born Again Season 2 coming out?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Daredevil Born Again Season 2 premiered on March 24, 2026 on Disney+. When does Season 2 of Daredevil Born Again come out? It's already streaming now with all 8 episodes available. The season released with a weekly episode schedule from March through May 2026.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will there be a Season 2 of Daredevil Born Again?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes! Is there a Season 2 of Daredevil Born Again? Absolutely. Season 2 was renewed and has already been released. Will Daredevil Born Again have a Season 2? It does—and it's streaming on Disney+ right now. Has Daredevil Born Again been renewed for Season 2? Yes, and Season 3 is also confirmed.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">How many episodes in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Daredevil Born Again Season 2 has 8 episodes total. The season ran from March 24 to May 5, 2026, with new episodes releasing weekly on Tuesdays. Episodes 2 and 3 were released together as a double drop on March 31.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will the Punisher be in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes, the Punisher appears in Season 2. Is Punisher in Daredevil Born Again Season 2? Jon Bernthal returns as Frank Castle/Punisher and joins forces with Daredevil and Jessica Jones to fight against Kingpin's regime. Will Jon Bernthal be in Daredevil Born Again Season 2? Yes, he's back.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will Jessica Jones be in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes! Krysten Ritter returns as Jessica Jones in Episode 6 titled "Requiem." She's been living in the suburbs with her daughter Danielle when the AVTF raids her home, forcing her back into action. Jessica teams up with Matt Murdock to take down Fisk's weapons cache.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will Foggy be in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Foggy Nelson (Elden Henson) appears in flashbacks throughout Season 2, particularly in Episode 5 "The Grand Design." Is Foggy in Daredevil Born Again Season 2? Yes, but primarily through memories as Matt reflects on their friendship and Foggy's death in Season 1.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will the Defenders be in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Season 2 brings back Jessica Jones and hints at Luke Cage's return. While not a full Defenders reunion, the season sets up the team for Season 3. Daredevil, Jessica Jones, and Punisher form a resistance by the finale, laying groundwork for a larger team-up.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">What happens at the end of Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  The Season 2 finale features a courtroom showdown between Matt and Fisk. Bullseye attempts to assassinate Fisk but Buck takes the bullet. Matt reveals his identity as Daredevil publicly and offers Fisk redemption. Matt is arrested and sent to prison, setting up Season 3's storyline.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">When does Daredevil Born Again Season 2 start filming?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Daredevil Born Again Season 2 finished filming in 2025. Is Daredevil Born Again Season 2 filming? No, filming wrapped before the March 2026 premiere. Season 3 is expected to begin production in 2026.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Will Luke Cage be in Daredevil Born Again Season 2?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Luke Cage does not appear in Season 2, though there are hints at his return. Mike Colter has been spotted on set for Season 3, suggesting Luke Cage will reunite with Jessica Jones in the next season.
                </div>
              </details>

              <details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors">
                  <span className="font-semibold text-lg pr-4">Is there going to be a Daredevil Born Again Season 3?</span>
                  <span className="text-red-600 text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="p-5 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800">
                  Yes! Season 3 is confirmed and greenlit. When will Daredevil Born Again Season 3 come out? Expected release is late 2027. Filming begins in 2026 with Charlie Cox, Vincent D'Onofrio, and the main cast returning. The Defenders reunion is also teased for Season 3.
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
        <footer className="border-t border-neutral-800 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img src="/logo.svg" alt="MCU Guide Logo" className="h-14 w-auto mb-4" />
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Your complete source for Daredevil Born Again Season 2 coverage. Episode guides, character analysis, and Season 3 news.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-neutral-200">Quick Links</h4>
                <nav className="space-y-3 text-sm">
                  <a href="#episodes" className="block text-neutral-400 hover:text-red-400 transition-colors">Episode Guide</a>
                  <a href="#ending" className="block text-neutral-400 hover:text-red-400 transition-colors">Ending Explained</a>
                  <a href="#jessica-jones" className="block text-neutral-400 hover:text-red-400 transition-colors">Jessica Jones Return</a>
                  <a href="#season-3" className="block text-neutral-400 hover:text-red-400 transition-colors">Season 3 News</a>
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">FAQ</a>
                </nav>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-neutral-200">Popular Questions</h4>
                <nav className="space-y-3 text-sm">
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">When is Season 2?</a>
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">Will Punisher appear?</a>
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">Jessica Jones return?</a>
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">Season 3 release date?</a>
                  <a href="#faq" className="block text-neutral-400 hover:text-red-400 transition-colors">How many episodes?</a>
                </nav>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-neutral-200">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Daredevil Season 2</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Kingpin Mayor</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Bullseye</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Jessica Jones</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Punisher</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Disney+</span>
                  <span className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 transition-colors cursor-default">Marvel MCU</span>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                <p>© 2026 MCU Guide. Independent fan site, not affiliated with Marvel Studios or Disney.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-red-400 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-red-400 transition-colors">Terms</a>
                  <a href="#" className="hover:text-red-400 transition-colors">Contact</a>
                </div>
              </div>
              <p className="mt-4 text-center text-neutral-600 text-xs">
                All trademarks and copyrights belong to their respective owners. Contains major spoilers for Daredevil: Born Again Season 2.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
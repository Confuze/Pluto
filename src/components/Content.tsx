import rocket from "/rocket.svg"
import noise from "/noise.webp"
import base1 from "/ai_base.webp"
import base2 from "/ai_base2.webp"

function Content() {
  return (
    <div className="text-white">
      <img src={noise} className="opacity-50 fixed left-0 top-0 w-full h-full z-[50] pointer-events-none"/>
      <section className="w-full h-[100vh] relative px-24 py-36">
        <header className="w-2/5">
          <h1 className="font-bold text-9xl">Pluton.</h1>
          <h2 className="text-3xl">Może nie planeta, ale za to szansa na ekscytującą wycieczkę poza ziemią.</h2>
          <a href="#main" className="text-4xl bg-white text-black py-4 text-center block w-full rounded-md mt-4">Dowiedz się więcej o podróżach</a>
        </header>
        <img src={rocket} className="absolute left-0 bottom-0 w-1/2 pointer-events-none"></img>
      </section>
      <section id="main" className="py-8 ml-auto mr-12 w-2/5 text-lg">
        <main>
          <h3>Biuro podróży wstęp</h3>
          <p>
            Witajcie, podróżnicy kosmiczni, na tej niezwykłej wyprawie w głąb tajemniczego wszechświata! Oto Biuuro
            Podróży Kosmicznych "LOV" – miejsce, gdzie marzenia odkrywania kosmicznych sekretów stają się
            rzeczywistością. Dziś zapraszamy Was do eksploracji fascynującego świata Plutona, tej odległej i
            niezwykłej planety karłowatej.<br />
            Pragniemy Was zachęcić do odkrywania niezliczonych możliwości, jakie kryją się na Plutonie. Czy
            zastanawialiście się kiedyś, jak łatwo byłoby podnieść coś ważącego 100 kg? Na Ziemi, gdzie grawitacja
            trzyma nas mocno na ziemi, byłoby to niemożliwe. Ale na Plutonie, gdzie przyspieszenie grawitacyjne
            wynosi zaledwie 0,62 m/s^2, podnoszenie ciężarów staje się łatwiejsze niż kiedykolwiek wcześniej.
            Zobaczcie sami, jak te astronomiczne warunki mogą zmienić naszą perspektywę!<br/>
            Jeśli jesteście ciekawi, dlaczego warto wybrać się w podróż na Plutona, zajrzyjcie do zakładki "Dlaczego
            Pluton?" (kliknij tutaj), gdzie czekają na Was fascynujące fakty i argumenty, przekonujące dlaczego ta
            podróż może być jednym z najbardziej porywających doświadczeń w Waszym życiu!
            Razem w głąb kosmicznej nieznanej ruszajmy w podróż, gotowi na spotkanie z tajemniczym Plutonem!
          </p>
          <h3>Dlaczego Pluton?</h3>
          <p>
            Nasza firma poprzez współpracę z innymi korporacjami takimi jak spaceV, czy Nanosoft oraz młodym,
            aspirującym zespołem pełnym energii i ambitnych ludzi miała wystarczające fundusze, by zebrać dane na
            temat najróżniejszych planet, księżyców oraz planet karłowatych z naszej galaktyki i wykorzystać je, by
            znaleść najlepsze miejsce do zamieszkaniania. Na podstawie wielu badań, latach pracy, niezliczonych
            analizach preferencji, zdołaliśmy wyliczyć, że Pluton jest tym miejscem.<br />
            Poprzez Przeprowadzenie się na Pluton będziecie mieli okazje stworzyć razem nowe, lepsze
            społeczeństwo, gdzie nie ma podziałów na kultury, za to jest jeden, prominentny cel: rozwinięcocesów, ktie naszych
            horyzontów i przekracznie granic możliwego. Będą mogli również Państwo oddychać świeżym
            powietrzem i cieszyć się światem bez śmieci: za pomocą syntetycznych roślin, licznych minerałów z Ziemi
            i wiedzy ekspertów od wystroju wnętrz, storzyliśmy kilka wielkich hal rozmiarów stadionów olipijskich z
            habitatami naśladującymi ziemskie. Chcecie więcej powodów? Oto one!<br />
            Rozwój Zaawansowanych Technologii:<br />
            Pluton to jedna z najbardziej ekstremalnych lokalizacji w Układzie Słonecznym. Przygotowanie się do
            życia na tej planecie karłowatej wymagało od nas opracowania zaawansowanych technologii
            przystosowujących się do skrajnych warunków. Takie innowacje obejmują systemy utrzymania życia,
            które radzą sobie z ekstremalnymi temperaturami i promieniowaniem kosmicznym.<br />
            Przykładowe wyzwania technologiczne, które pokonaliśmy obejmują:<br />
            <ul>
              <li>Opracowanie materiałów odpornych na niskie temperatury i promieniowanie UV.</li>
              <li>Tworzenie zaawansowanych systemów ochrony przed mikrometeoroidami i pyłami kosmicznymi.</li>
              <li>Rozwinięcie efektywnych systemów źródeł energii, uwzględniając niską ilość światła słonecznego docierającego na Plutona.</li>
              <li>Opracowanie syntetycznych roślin, które dostarczają tlen do naszych stacji</li>
            </ul>
            Dalsze badania nad tymi technologiami przynoszą korzyści nie tylko dla przyszłych mieszkańców Plutona,
            ale również dla rozwoju technologii przystosowawczych na Ziemi, w tym w dziedzinie ekologii i
            zrównoważonego rozwoju.
          </p>
          <h3>Eksploracja Kosmosu</h3>
          Podróż na Plutona to nie tylko docieranie do nowej planety, ale także szansa na poszerzenie naszej
          wiedzy o kosmosie. Badania naukowe przeprowadzone na Plutonie przyczyniają się do lepszego
          zrozumienia procesów geologicznych i ewolucji planet karłowatych.<br />
          Badania te obejmują:<br />
          <ul>
            <li>Analizę składu chemicznego atmosfery Plutona i jego powierzchni.</li>
            <li>Obserwacje warunków meteorologicznych i sezonowych na tej odległej planecie.</li>
            <li>Dokładne pomiary topografii, które pomogą zrozumieć strukturę wewnętrzną Plutona.</li>
          </ul>
          Takie badania pomogą rozwijać naszą wiedzę na temat powstawania i ewolucji ciał niebieskich w naszym
          Układzie Słonecznym, co może mieć zastosowanie w szerszym kontekście astrofizycznym.<br />
          <h3>Korzyści Ekonomiczne</h3>
          W kontekście korzyści ekonomicznych, podróż na Plutona może otworzyć nowe rynki i szanse dla
          przemysłu kosmicznego. Prace nad technologiami związanymi z eksploracją i życiem na Plutonie mogą
          znaleźć zastosowanie w innych misjach kosmicznych, a także w rozwoju nowych technologii na Ziemi.<br />
          Przykładowe obszary korzyści ekonomicznych to:<br />
          <ul>
            <li>Rozwój zaawansowanych technologii transportu kosmicznego.</li>
            <li>Możliwość eksploatacji surowców i minerałów na Plutonie, które mogą być cenne dla przemysłu na Ziemi.</li>
            <li>Tworzenie nowych rynków dla technologii związanych z przystosowaniem się do warunków kosmicznych.</li>
          </ul>
          <h3>Dostęp do Surowców</h3>
          Pluton jest obiektem bogatym w surowce i minerały, a ich zbadanie może dostarczyć wartościowych
          informacji na temat składu chemicznego tej planety. Możliwość pozyskania i wykorzystania tych zasobów
          może znacząco wpłynąć na globalne źródła surowców.<br />
          Przykładowe surowce to:<br />
          <ul>
            <li>Azot, metan i inne związki chemiczne obecne na powierzchni Plutona. Metan dla przykładu można wykorzystywać jako paliwo, a azot można by było sprzedawać na ziemię do walki z globalnym ociepleniem</li>
            <li>Minerały i pierwiastki, które mogą być użyteczne w produkcji nowoczesnych technologii.</li>
          </ul>
          <h3>Kulturowe Odkrycia</h3>
          Podróż na Plutona to także szansa na tworzenie nowych społeczności i kultur, które dostosują się do
          warunków tej planety. Zmiany kulturowe i wartości mogą wpływać na rozwój społeczny i interakcje
          między przyszłymi mieszkańcami Plutona.<br />
          Badania kulturowe mogą obejmować:<br />
          <ul>
            <li>Analizę adaptacji społeczności do warunków życia na Plutonie.</li>
            <li>Śledzenie ewolucji tradycji i wartości kulturowych w nowym środowisku.</li>
            <li>Ocena wpływu warunków życia na rozwój sztuki, muzyki i literatury na Plutonie.</li>
          </ul>
          <h3>Poszerzanie Horyzontów Artystycznych</h3>
          Pluton, jako nieodkryta karta do kreacji, stwarza unikalną przestrzeń dla artystów, aby wyrazić swoją
          wizję świata kosmicznego. Ten obszar artystyczny może prowadzić do nowych form sztuki i inspiracji na
          Ziemi.<br />
          Przykładowe wyzwania artystyczne to:<br />
          <ul>
            <li>Tworzenie dzieł sztuki inspirowanych krajobrazem i atmosferą Plutona.</li>
            <li>Integracja elementów kultury Plutona z tradycjami sztuki na Ziemi.</li>
            <li>Uczestnictwo w projekcie międzyplanetarnym, łączącym artystów z obu planet.</li>
          </ul>
          Podróż na Plutona to nie tylko krok w nieznane, ale także skok w przyszłość badań naukowych,
          technologicznych i kulturowych. "LOV" jako biuro podróży zobowiązuje się nie tylko do zapewnienia
          bezpiecznej podróży, ale także do wspierania badań naukowych, które przyczynią się do rozwoju i
          ulepszenia naszej cywilizacji.<br />
          <h3>Jak wygląda Pluton</h3>
          Pluton, choć zdegradowany do roli planety karłowatej, pozostaje fascynującym obiektem
          astronomicznym pełnym tajemniczych aspektów. Jego charakterystyczne cechy, od gór po atmosferę,
          stanowią ciekawy temat do zgłębiania, uwydatniając niezwykłość tej odległej krainy kosmicznej.
          Początkowo traktowany jako dziewiąta planeta, Pluton podlegał zmianie statusu w 2006 roku, co
          wzbudziło wiele kontrowersji. Jednak jego złożona struktura i fascynujące cechy geologiczne przyciągają
          uwagę naukowców.<br />
          Na powierzchni Plutona występują imponujące góry, osiągające wysokość nawet 3500 metrów. To
          wyzwanie dla naukowców, ponieważ skład chemiczny materiałów pokrywających powierzchnię oraz
          mechanizmy ich formowania mogą rzucić światło na historię i rozwój tej odległej planety karłowatej.
          Atmosfera Plutona, choć rzadka, kryje w sobie tajemnice. Zbudowana z azotu, metanu i tlenku węgla,
          jest dynamicznym obszarem, gdzie mgła zjonizowanego metanu i azotu prowadzi do powstawania
          złożonych molekuł, tworzących zewnętrzną warstwę lotnych lodów. Ten proces, opisujący śnieżenie na
          powierzchni, kształtuje charakterystyczny czerwonawy odcień Plutona.<br />
          Interesującą cechą powierzchni jest obszar o nazwie Tombaugh Regio, w kształcie serca, wolny od
          kraterów meteoroidowych, co sugeruje relatywnie młody wiek geologiczny. Sonda New Horizons odkryła
          również obszar o nazwie "Sputnik Planum", pozbawiony kraterów, co wskazuje na jego młodociany
          charakter i możliwe procesy geologiczne nadal kształtujące tę część Plutona.<br />
          Intrygujące są także formacje lodowe, takie jak grzbiety przypominające skórę węża, czy ciemniejsze
          obszary na powierzchni, takie jak region w kształcie serca, pokryty lodem tlenku węgla. Te różnice w
          składzie chemicznym i strukturze geologicznej sugerują złożoność procesów, które kształtują Plutona.<br />
          Dodatkowo, orbita Plutona, silnie eliptyczna i położona w odległej części Układu Słonecznego, dostarcza
          informacji o jego historii i oddziaływaniach z innymi ciałami niebieskimi. To unikalne położenie orbitalne
          daje nam szansę na zrozumienie, jakie czynniki wpływały na ewolucję tej planety karłowatej.<br />
          W kontekście kosmicznego sąsiedztwa, pięć księżyców Plutona, z Charonem na czele, wzbogacają tę
          opowieść. Charon, będący niemal połową rozmiaru Plutona, tworzy z nim układ podwójny, co jest
          rzadkim zjawiskiem wśród planet i ich księżyców.<br />
          Podsumowując, Pluton to fascynujący obiekt, który, choć utracił swój pierwotny status planety, nadal
          pozostaje obszarem intensywnego zainteresowania naukowego. Jego cechy charakterystyczne, od
          geologii po atmosferę, stanowią wyjątkową układankę, której rozwikłanie może dostarczyć nam
          kluczowych informacji na temat historii i ewolucji obiektów w naszym Układzie Słonecznym.<br />
          <figure className="my-4">
            <div className="flex gap-4 w-full h-[40vh]">
              <img src={base1} alt="Przykładowe zdjęcie bazy na plutonie" className="rounded-md object-cover w-1/2" />
              <img src={base2} alt="Przykładowe zdjęcie bazy na plutonie" className="rounded-md object-cover w-1/2" />
            </div>
            <figcaption className="text-center">Przykładowe zdjęcia baz na plutonie wygenerowane przez model AI</figcaption>
          </figure>
          <h3>Ile zajmie podroz na Pluton?</h3>
          Zanim odpowiemy na pytanie, jak długo zajmie podróż na Pluton, musimy przedstawić kilka
          podstawowych faktów, aby zrozumieć, dlaczego ten proces tyle trwa.<br />
          Odległość pomiędzy Ziemią a Plutonem zmienia się w zależności od ich pozycji orbitalnej:
          4.28 miliardów km, gdy są najbliżej siebie,<br />
          7.5 miliardów km, gdy są po przeciwnych stronach słońca,<br />
          5.89 miliardów km, to średnia odległość obliczona z powyższych.<br />
          Największa prędkość osiągnięta przez rakietę przewożącą ludzi (Apollo 10) wynosi 39,428 km/h w
          odniesieniu do Ziemi.<br />
          W historii ludzkości była jedna misja na Pluton wykonana przez NASA, a sondę nazywano NEW
          HORIZONS. Dotarła ona do swojego celu w 9 latach, 5 miesiącach i 25 dniach. Warto zauważyć, że
          nowoczesne sondy często korzystają z technik asysty grawitacyjnej, które pozwalają im na zwiększenie
          prędkości, przyspieszając tym samym podróż.<br />
          Teraz, stosując największą prędkość osiągniętą przez Apollo 10, możemy obliczyć czas podróży dla
          różnych odległości:<br />
          Najbliżej: 4.28 miliardów km / 39,428 km/h = około 108,552 lat<br />
          Najdalej: 7.5 miliardów km / 39,428 km/h = około 190,220 lat<br />
          Średnia: 5.89 miliardów km / 39,428 km/h = około 149,386 lat<br />
          Oczywiście te obliczenia są bardzo przybliżone i nie uwzględniają wielu czynników, takich jak zmiana
          prędkości w trakcie podróży czy techniki asysty grawitacyjnej. Na szczęście dzięki rozbudowanej
          technologii kriogenicznej nie odczują Państwo upływu czasu, a podczas Państwa snu nowe technologie
          będą odkrywane, przez co ludzkość będzie się ciągle rozwijać.<br />
          Dokładne oszacowanie kosztów hipotetycznej misji załogowej na Plutona jest wyjątkowo trudne z
          powodu licznych czynników wpływających na taką przedsięwzięcie. Niemniej jednak, spróbujemy
          uwzględnić aspekty, aby bardziej skrupulatnie zbliżyć się do szacunkowej kwoty.<br />
          Koszty Komunikacji: Ze względu na ogromną odległość między Ziemią a Plutonem, koszty utrzymania
          nieprzerwanej komunikacji z załogą mogą być znaczące. To obejmuje zarówno technologie
          komunikacyjne na statku, jak i infrastrukturę na Ziemi. Szacowane koszty mogą sięgać setek milionów
          dolarów.<br />
          Rozwój Technologii Awaryjnych: Konieczne jest uwzględnienie dodatkowych nakładów na rozwój i
          implementację zaawansowanych technologii awaryjnych, które mogą być niezbędne w przypadku
          sytuacji krytycznych. Koszty tych środków bezpieczeństwa mogą być trudne do precyzyjnego
          oszacowania, ale powinny być uwzględnione w analizie.<br />
          Wpływ na Załogę: Długotrwała misja w przestrzeni kosmicznej może wywoływać skomplikowane skutki
          zdrowotne u załogi. Koszty związane z monitoringiem zdrowia astronautów, dostosowaniem do
          warunków mikrograwitacyjnych i ewentualnymi problemami medycznymi powinny być wliczone w
          ogólny koszt misji.<br />
          Wzrost Kosztów Projektu w Czasie: Ze względu na długi czas realizacji misji, musimy wziąć pod uwagę
          potencjalny wzrost kosztów związanych z ewolucją technologii, zmianami w planach misji oraz rosnącymi
          wymaganiami bezpieczeństwa, co może prowadzić do dodatkowych wydatków w kolejnych latach.
          Podsumowując, uwzględniając te dodatkowe elementy, ogólne szacunkowe koszty hipotetycznej misji
          załogowej na Plutona mogłyby przekroczyć zakres kilkudziesięciu miliardów dolarów. Jednak precyzyjne
          oszacowanie pozostaje nadal trudne, a finalna kwota zależałaby od bardziej szczegółowych planów,
          zaawansowanych technologii i rozwiązań, które byłyby dostępne w chwili realizacji takiej misji.<br />
          <h3>BIBLIOGRAFIA</h3>
          <ul>
            <li>Businessinsider. (2017). Elon Musk wydał miliard dolarów na rakiety wielokrotnego użytku. Jak szybko ta
          inwestycja się zwróci? [online] Available at:
          https://businessinsider.com.pl/technologie/nowe-technologie/ile-kosztuje-rakieta-spacex-wielokrotnego
          -uzytku/h6h1jtz [Accessed 17 Oct. 2023].</li>
            <li>Charles Q. Choi (2017). Dwarf Planet Pluto: Facts About the Icy Former Planet. [online] Space.com.
          Available at: https://www.space.com/43-pluto-the-ninth-planet-that-was-a-dwarf.html [Accessed 20
          Oct. 2023].</li>
            <li>CORDIS | European Commission. (n.d.). Sztucznie wyhodowane rośliny mogą stać się ekologicznymi
          fabrykami chemicznymi przyszłości. [online] Available at:
          https://cordis.europa.eu/article/id/430709-engineered-plants-could-be-green-chemical-factories-of-the-
          future/pl [Accessed 20 Oct. 2023].
          cosmosmagazine.com. (2022). Can Human Bodies Really Be Cryogenically frozen? [online] Available at:
          https://cosmosmagazine.com/news/can-human-bodies-really-be-cryogenically-frozen/ [Accessed 19 Oct.
          2023].</li>
            <li>Hadhazy, A. (2015). How fast could humans travel safely through space? [online] Bbc.com. Available at:
          https://www.bbc.com/future/article/20150809-how-fast-could-humans-travel-safely-through-space
          [Accessed 19 Oct. 2023].</li>
            <li>How Long Does It Take to Get to Pluto? - Universe Today. [online] Universe Today. Available at:
          https://www.universetoday.com/119264/how-long-does-it-take-to-get-to-pluto/ [Accessed 20 Oct.
          2023].</li>
            <li>https://www.facebook.com/spacecom (2015). What Would It Be Like to Live on Pluto? [online]
          Space.com. Available at: https://www.space.com/28971-how-to-live-on-pluto.html [Accessed 20 Oct.
          2023].Nola Taylor Redd (2017).</li>
            <li>How Long Does It Take to Get to Mars? [online] Space.com. Available at:
          https://www.space.com/24701-how-long-does-it-take-to-get-to-mars.html [Accessed 17 Oct. 2023].</li>
            <li>Osman, J. (n.d.). What’s the Fastest Speed a Human Has Ever Experienced? [online]
          www.sciencefocus.com. Available at:
          https://www.sciencefocus.com/science/whats-the-fastest-speed-a-human-has-ever-experienced
          [Accessed 20 Oct. 2023].</li>
            <li>Perkowski, R. (2023). How much does 1 space rocket cost? [online] TS2 SPACE. Available at:
          https://ts2.space/en/how-much-does-1-space-rocket-cost/#gsc.tab=0 [Accessed 15 Oct. 2023].</li>
            <li>SpaceX (2023). Starship. [online] SpaceX. Available at: https://www.spacex.com/vehicles/starship/
          [Accessed 21 Oct. 2023].</li>
            <li>The Nine Planets. (2020). How Far Is Pluto from Earth? | Time Taken, KM & Distance. [online] Available
          at: https://nineplanets.org/questions/how-far-is-pluto-from-earth/ [Accessed 26 Oct. 2023].</li>
            <li>Urban, R. (2023). How Much Does Rocket Fuel Really Cost? [online] Space Impulse. Available at:
          https://spaceimpulse.com/2023/06/13/how-much-does-rocket-fuel-cost/ [Accessed 17 Oct. 2023].</li>
            <li>Wessels, W. (2022). How Fast Rockets Must Travel To Reach Space And Go Beyond. [online] Headed For
          Space. Available at: https://headedforspace.com/how-fast-rockets-travel/ [Accessed 20 Oct. 2023].</li>
          </ul>
          W niektórych artykułach nie było napisanych Imion ludzi, którzy napisali artykuły lub nie było daty, kiedy
          ten artykuł powstał
        </main>
        <footer className="font-bold text-xl text-center mt-4">Autorzy pracy: Paweł Marchwiak, Aleksander Dubicki, Julian Stefurak, Miłosz Ulatowski, Jan Suchanek, Filip Szafrański</footer>
      </section>
    </div>
  )
}

export default Content;

const flat1 = {
  isFavourite: true,
  title: "Piękne mieszkanie w samym centrum krzyków",
  price: 630000,
  media: [
    {
      type: "image",
      uri: "https://bi.im-g.pl/im/75/71/14/z21434741V,Dzieki-duzym-przeszkleniom-i-loggiom-mieszkancy-bu.jpg",
    },
    // { Video is still not working
    //   type: "video",
    //   uri: "https://www.youtube.com/embed/Ynr4o0eOjdg",
    // },
    {
      type: "image",
      uri: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL21lZGlhLmRvbXkucGwvaW1nL3pkamVjaWEvbzEyMDkzMC9hL28xMjA5MzBfbXNfMjJfMy5qcGcjdj0xXzE5Nzc2MTkzODA=/618/280/4/mieszkanie-na-sprzedaz-wroclaw-krzyki-62-m.jpg",
    },
    {
      type: "image",
      uri: "https://imganuncios.mitula.net/medium/mieszkanie_36_m_wroc_aw_3660045608817679903.jpg",
    },

  ],
  details: {
    marketType: "Rynek pierwotny",
    numberOfRooms: 4,
    surface: 92.23,
    constructionYear: 2021,
  },
  description: "Bardzo interesujący apartament o powierzchni 92 m2, w którym mieści się pokój dzienny z wydzielonym, przysłoniętym aneksem kuchennym, dwiema sypialniami, łazienką, holem. Do mieszkania przynależy ogródek, do którego wychodzi się wprost z pokoju dziennego lub z sypialni gospodarzy. Ogród to ogromna zaleta mieszkania, jego powierzchnia (w zależności od mieszkania 105 – 114 m2) jest spora i pozwala zorganizować przestrzeń do zabawy dla dzieci, wypoczynkową a nawet uprawiać zioła i warzywa na własny użytek. Część ogrodu jest zadaszona, dzięki czemu korzystać z niego można nawet przy gorszej pogodzie. Co ważne, ogród jest osłonięty przed wzrokiem przechodniów i pozwala właścicielom zachować pełnię prywatności.\n" +
    "\n" +
    "Pokój dzienny łączy się z aneksem kuchennym, jednak nie jest to otwarta przestrzeń. Dzięki temu rozwiązaniu kuchnia staje się praktycznie osobnym pomieszczeniem. Do aneksu kuchennego przylega niewielkie pomieszczenie gospodarcze o powierzchni 2,57 m2, które pełnić może funkcję schowka, suszarni, a nawet spiżarni. Sam pokój dzienny jest tak przestronny, że wykreować w nim można zarówno jadalnię, jak przestrzeń do wypoczynku i domowe biuro. Hol obejmujący 10 m2 daje możliwość postawienia w nim garderoby, stanowi też naturalne przedłużenie salonu, gdyż obie powierzchnie łączy dość szerokie przejście. Ustawna łazienka i sypialnie dopełniają wizerunku mieszkania. Jest ono idealną propozycją dla rodziny z jednym lub dwójką dzieci.",
  contact: {
    phoneNumber: "563 231 213",
    email: "super.flat@gmail.com",
  },
  location: {
    city: "Wrocław",
    district: "Krzyki",
    coordinates: {
      latitude: 51.075649,
      longitude: 17.066338,
    },
  },
};


const flat2 = {
  isFavourite: false,
  title: "Przytulne mieszkanko na krzykach",
  price: 423000,
  media: [
    {
      type: "image",
      uri: "data:image/jpeg;base64,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",
    },
    {
      type: "image",
      uri: "https://bi.im-g.pl/im/43/a4/13/z20596291V,Mieszkania-przy-ul--Wiwulskiego---Vitoria-Park.jpg",
    },
    {
      type: "image",
      uri: "https://a.allegroimg.com/s512/11f333/22c95b2b4f61b2be7097c1aa3812/Mieszkanie-Wroclaw-Psie-Pole-Rozanka-56-m2",
    },

  ],
  details: {
    marketType: "Rynek wtórny",
    numberOfRooms: 3,
    surface: 52.23,
    constructionYear: 2011,
  },
  description: "Bardzo interesujący apartament o powierzchni 92 m2, w którym mieści się pokój dzienny z wydzielonym, przysłoniętym aneksem kuchennym, dwiema sypialniami, łazienką, holem. Do mieszkania przynależy ogródek, do którego wychodzi się wprost z pokoju dziennego lub z sypialni gospodarzy. Ogród to ogromna zaleta mieszkania, jego powierzchnia (w zależności od mieszkania 105 – 114 m2) jest spora i pozwala zorganizować przestrzeń do zabawy dla dzieci, wypoczynkową a nawet uprawiać zioła i warzywa na własny użytek. Część ogrodu jest zadaszona, dzięki czemu korzystać z niego można nawet przy gorszej pogodzie. Co ważne, ogród jest osłonięty przed wzrokiem przechodniów i pozwala właścicielom zachować pełnię prywatności.\n" +
    "\n" +
    "Pokój dzienny łączy się z aneksem kuchennym, jednak nie jest to otwarta przestrzeń. Dzięki temu rozwiązaniu kuchnia staje się praktycznie osobnym pomieszczeniem. Do aneksu kuchennego przylega niewielkie pomieszczenie gospodarcze o powierzchni 2,57 m2, które pełnić może funkcję schowka, suszarni, a nawet spiżarni. Sam pokój dzienny jest tak przestronny, że wykreować w nim można zarówno jadalnię, jak przestrzeń do wypoczynku i domowe biuro. Hol obejmujący 10 m2 daje możliwość postawienia w nim garderoby, stanowi też naturalne przedłużenie salonu, gdyż obie powierzchnie łączy dość szerokie przejście. Ustawna łazienka i sypialnie dopełniają wizerunku mieszkania. Jest ono idealną propozycją dla rodziny z jednym lub dwójką dzieci.",
  contact: {
    phoneNumber: "777 231 213",
    email: "super.flat2@gmail.com",
  },
  location: {
    city: "Wrocław",
    district: "Krzyki",
    coordinates: {
      latitude: 51.077649,
      longitude: 17.099338,
    },
  },
};

const flat3 = {
  isFavourite: false,
  title: "Mieszkanie w samym cetrum Wrocławia",
  price: 523000,
  media: [
    {
      type: "image",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPKlxzLnmstlAaHwoy22jIkTKDOCTNbdOMg&usqp=CAU",
    },
    {
      type: "image",
      uri: "https://thumbs.img-sprzedajemy.pl/1000x901c/e5/02/f4/wroclaw-gajowicka-mieszkanie-2-pokoje-z-balkonem-dolnoslaskie-sprzedam-538986681.jpg",
    },
  ],
  details: {
    marketType: "Rynek wtórny",
    numberOfRooms: 2,
    surface: 41.93,
    constructionYear: 2014,
  },
  description: "Bardzo interesujący apartament o powierzchni 92 m2, w którym mieści się pokój dzienny z wydzielonym, przysłoniętym aneksem kuchennym, dwiema sypialniami, łazienką, holem. Do mieszkania przynależy ogródek, do którego wychodzi się wprost z pokoju dziennego lub z sypialni gospodarzy. Ogród to ogromna zaleta mieszkania, jego powierzchnia (w zależności od mieszkania 105 – 114 m2) jest spora i pozwala zorganizować przestrzeń do zabawy dla dzieci, wypoczynkową a nawet uprawiać zioła i warzywa na własny użytek. Część ogrodu jest zadaszona, dzięki czemu korzystać z niego można nawet przy gorszej pogodzie. Co ważne, ogród jest osłonięty przed wzrokiem przechodniów i pozwala właścicielom zachować pełnię prywatności.\n" +
    "\n" +
    "Pokój dzienny łączy się z aneksem kuchennym, jednak nie jest to otwarta przestrzeń. Dzięki temu rozwiązaniu kuchnia staje się praktycznie osobnym pomieszczeniem. Do aneksu kuchennego przylega niewielkie pomieszczenie gospodarcze o powierzchni 2,57 m2, które pełnić może funkcję schowka, suszarni, a nawet spiżarni. Sam pokój dzienny jest tak przestronny, że wykreować w nim można zarówno jadalnię, jak przestrzeń do wypoczynku i domowe biuro. Hol obejmujący 10 m2 daje możliwość postawienia w nim garderoby, stanowi też naturalne przedłużenie salonu, gdyż obie powierzchnie łączy dość szerokie przejście. Ustawna łazienka i sypialnie dopełniają wizerunku mieszkania. Jest ono idealną propozycją dla rodziny z jednym lub dwójką dzieci.",
  contact: {
    phoneNumber: "777 231 213",
    email: "super.flat2@gmail.com",
  },
  location: {
    city: "Wrocław",
    district: "Śródmieście",
    coordinates: {
      latitude: 51.097649,
      longitude: 17.099338,
    },
  },
};

const flat4 = {
  isFavourite: false,
  title: "Interesujące mieszkanei dla studentów",
  price: 523000,
  media: [
    {
      type: "image",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnP1xXqLlCQV25JV3FbFtvNdoL1TlhTOxWYw&usqp=CAU",
    },
    {
      type: "image",
      uri: "https://i.st-nieruchomosci-online.pl/gt8yhbc/mieszkanie-wroclaw.jpg",
    },

  ],
  details: {
    marketType: "Rynek wtórny",
    numberOfRooms: 3,
    surface: 48.45,
    constructionYear: 2012,
  },
  description: "Bardzo interesujący apartament o powierzchni 92 m2, w którym mieści się pokój dzienny z wydzielonym, przysłoniętym aneksem kuchennym, dwiema sypialniami, łazienką, holem. Do mieszkania przynależy ogródek, do którego wychodzi się wprost z pokoju dziennego lub z sypialni gospodarzy. Ogród to ogromna zaleta mieszkania, jego powierzchnia (w zależności od mieszkania 105 – 114 m2) jest spora i pozwala zorganizować przestrzeń do zabawy dla dzieci, wypoczynkową a nawet uprawiać zioła i warzywa na własny użytek. Część ogrodu jest zadaszona, dzięki czemu korzystać z niego można nawet przy gorszej pogodzie. Co ważne, ogród jest osłonięty przed wzrokiem przechodniów i pozwala właścicielom zachować pełnię prywatności.\n" +
    "\n" +
    "Pokój dzienny łączy się z aneksem kuchennym, jednak nie jest to otwarta przestrzeń. Dzięki temu rozwiązaniu kuchnia staje się praktycznie osobnym pomieszczeniem. Do aneksu kuchennego przylega niewielkie pomieszczenie gospodarcze o powierzchni 2,57 m2, które pełnić może funkcję schowka, suszarni, a nawet spiżarni. Sam pokój dzienny jest tak przestronny, że wykreować w nim można zarówno jadalnię, jak przestrzeń do wypoczynku i domowe biuro. Hol obejmujący 10 m2 daje możliwość postawienia w nim garderoby, stanowi też naturalne przedłużenie salonu, gdyż obie powierzchnie łączy dość szerokie przejście. Ustawna łazienka i sypialnie dopełniają wizerunku mieszkania. Jest ono idealną propozycją dla rodziny z jednym lub dwójką dzieci.",
  contact: {
    phoneNumber: "777 231 213",
    email: "super.flat2@gmail.com",
  },
  location: {
    city: "Wrocław",
    district: "Śródmieście",
    coordinates: {
      latitude: 51.067649,
      longitude: 17.059338,
    },
  },
};


export const allFlats = [
  flat1,
  flat2,
  flat3,
  flat4,
];

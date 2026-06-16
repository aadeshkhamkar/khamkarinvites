export type Lang = "en" | "mr";

type Bi = { en: string; mr: string };

export interface StoryItem {
  title: Bi;
  date: Bi;
  text: Bi;
  image1?: string;
  image2?: string;
}

export interface EventItem {
  name: Bi;
  date: Bi;
  time: Bi;
  venue: Bi;
}

export const content = {
  surname: { en: "Khamkar Family", mr: "खामकर परिवार" } as Bi,
  invocation: { en: "॥ Shubh Vivah ॥", mr: "॥ शुभ विवाह ॥" } as Bi,
  groom: { en: "Akshay", mr: "अक्षय" } as Bi,
  bride: { en: "Aarti", mr: "आरती" } as Bi,
  and: { en: "&", mr: "आणि" } as Bi,
  invite: {
    en: "Request the honour of your presence at their wedding celebration",
    mr: "त्यांच्या विवाह सोहळ्यास आपण सहकुटुंब सहपरिवार उपस्थित राहावे ही विनंती",
  } as Bi,
  openInvitation: { en: "Open Invitation", mr: "निमंत्रण उघडा" } as Bi,

  nav: {
    couple: { en: "Couple", mr: "जोडपे" } as Bi,
    story: { en: "Our Story", mr: "आमची कहाणी" } as Bi,
    date: { en: "The Date", mr: "मुहूर्त" } as Bi,
    events: { en: "Events", mr: "कार्यक्रम" } as Bi,
    venue: { en: "Venue", mr: "स्थळ" } as Bi,
    gallery: { en: "Gallery", mr: "क्षणचित्रे" } as Bi,
    rsvp: { en: "RSVP", mr: "उपस्थिती" } as Bi,
  },

  couple: {
    title: { en: "The Couple", mr: "वधू व वर" } as Bi,
    subtitle: { en: "Two souls, one journey", mr: "दोन जीव, एक प्रवास" } as Bi,
    brideRole: { en: "The Bride", mr: "वधू" } as Bi,
    groomRole: { en: "The Groom", mr: "वर" } as Bi,
    brideName: { en: "Aarti Khamkar", mr: "आरती खामकर" } as Bi,
    groomName: { en: "Akshay Gawali", mr: "अक्षय गवळी" } as Bi,
    brideDesc: {
      en: "Daughter of Mr. Gorakh & Mrs. Aasha Khamkar. Graceful, kind-hearted, and full of light.",
      mr: "श्री. गोरख व सौ. आशा यांची कन्या. प्रेमळ, सुस्वभावी आणि तेजस्वी.",
    } as Bi,
    groomDesc: {
      en: "Son of Mr. Sahebrao and Mrs. Sindhubai Gawali. Warm, devoted, and forever caring.",
      mr: "श्री. साहेबराव व सौ. सिंधुबाई गवळी यांचा सुपुत्र. प्रेमळ, समर्पित आणि सदैव काळजी घेणारा.",
    } as Bi,
  },

  story: {
    title: { en: "Invitation from Khamkar Family", mr: "खामकर कुटुंबीयांकडून निमंत्रण" } as Bi,
    subtitle: {
      en: "With love and blessings",
      mr: "स्नेह आणि आशीर्वादाने",
    } as Bi,

    items: [
      {
        title: { en: "Bride's Family Invitation", mr: "वधूचे कुटुंब निमंत्रण" },
        date: { en: "", mr: "" },
        text: {
          en: "Khamkar Family invite you and your family to the wedding ceremony of our beloved Aarti and Akshay.\n\nMay all your blessings and affection make this day even more special.",
          mr: "खामकर परिवार आपणास सहकुटुंब आमच्या लाड्या आरती व अक्षय यांच्या विवाह सोहळ्यास आमंत्रित करतात.\n\nआपणा सर्वांचे आशीर्वाद व स्नेह या दिवसाला अधिक विशेष करून देईल.",
        },
        image1: "invite-1.jpeg",
        image2: "invite-2.jpeg",
      },
    ] as StoryItem[],
  },

  reveal: {
    title: { en: "Save The Date", mr: "मुहूर्त" } as Bi,
    instruction: {
      en: "Scratch the golden seal to reveal",
      mr: "मुहूर्त पाहण्यासाठी सोनेरी आवरण खरवडा",
    } as Bi,
    dateLabel: { en: "Wedding Date", mr: "विवाह दिनांक" } as Bi,
    date: { en: "Thursday, 9th July 2026", mr: "गुरूवार, ९ जुलै २०२६" } as Bi,
    muhuratLabel: { en: "Shubh Muhurat", mr: "शुभ मुहूर्त" } as Bi,
    muhurat: { en: "12:15 PM", mr: "दुपारी १२:१५" } as Bi,
    message: {
      en: "With hearts full of joy, we invite you to share in our happiness.",
      mr: "आनंदाने भरलेल्या हृदयाने, आम्ही आपणास आमच्या आनंदात सहभागी होण्यासाठी आमंत्रित करतो.",
    } as Bi,
    revealed: { en: "Beautifully revealed", mr: "मुहूर्त उघडला" } as Bi,
  },

  events: {
    title: { en: "Wedding Events", mr: "विवाह कार्यक्रम" } as Bi,
    subtitle: {
      en: "Celebrate every ceremony with us",
      mr: "प्रत्येक विधीत आमच्यासोबत आनंद साजरा करा",
    } as Bi,
    items: [
      {
        name: { en: "Haldi ", mr: "हळद" },
        date: { en: "8 Jul 2026", mr: "८ जुलै २०२६" },
        time: { en: "7:00 PM", mr: "सायंकाळी ७:००" },
        venue: { en: "At Home", mr: "राहत्या घरी" },
      },
      {
        name: { en: "Wedding Ceremony", mr: "विवाह सोहळा" },
        date: { en: "9 Jul 2026", mr: "९ जुलै २०२६" },
        time: { en: "12:15 PM", mr: "दुपारी १२:१५" },
        venue: {
          en: "Shivalay Mangal Karyalay, Pimpri Kolandar, Shrigonda, Ahilyanagar",
          mr: "शिवालय मंगल कार्यालय, पिंपरी कोलंदर, श्रीगोंदा, अहिल्यानगर",
        },
      },
    ] as EventItem[],
  },

  venue: {
    title: { en: "The Venue", mr: "विवाह स्थळ" } as Bi,
    subtitle: { en: "Where forever begins", mr: "जिथे आयुष्याची सुरुवात होते" } as Bi,
    name: { en: "Shivalay Mangal Karyalay", mr: "शिवालय मंगल कार्यालय" } as Bi,
    address: {
      en: "Pimpri Kolandar, Shrigonda, Ahilyanagar, Maharashtra",
      mr: "पिंपरी कोलंदर, श्रीगोंदा, अहिल्यानगर, महाराष्ट्र",
    } as Bi,
    directions: { en: "Get Directions", mr: "मार्ग पहा" } as Bi,
  },

  gallery: {
    title: { en: "Pre-Wedding Gallery", mr: "लग्नपूर्व क्षणचित्रे" } as Bi,
    subtitle: { en: "Moments to cherish forever", mr: "कायम जपून ठेवण्यासारखे क्षण" } as Bi,
  },

  family: {
    title: { en: "With Best Compliments", mr: "सस्नेह निमंत्रण" } as Bi,
    subtitle: { en: "From the families", mr: "उभय कुटुंबीयांकडून" } as Bi,
    brideFamily: { en: "Khamkar Family", mr: "खामकर परिवार" } as Bi,
    groomFamily: { en: "Gawali Family", mr: "गवळी परिवार" } as Bi,

    brideNames: {
      en: "Mr. Gorakh & Mrs. Aasha Khamkar and family",
      mr: "श्री. गोरख व सौ. आशा खामकर व परिवार",
    } as Bi,
    groomNames: {
      en: "Mr. Sahebrao and Mrs. Sindhubai Gawali and family",
      mr: "श्री. साहेबराव व सौ. सिंधुबाई गवळी व परिवार",
    } as Bi,
    brideMsg: {
      en: "Your love and blessings will make this celebration truly complete. We await you warmly.",
      mr: "आपल्या स्नेह व आशीर्वादाने हा सोहळा परिपूर्ण होईल. आपल्या स्वागतास आम्ही आतुर आहोत.",
    } as Bi,
    groomMsg: {
      en: "It is our heartfelt pleasure to invite you to grace this joyous occasion with your presence and blessings.",
      mr: "या आनंदसोहळ्यास आपण सहकुटुंब उपस्थित राहून आशीर्वाद द्यावेत ही नम्र विनंती.",
    } as Bi,
  },

  // rsvp: {
  //   title: { en: "Will You Join Us?", mr: "आपण याल का?" } as Bi,
  //   subtitle: { en: "Kindly confirm your presence", mr: "कृपया आपली उपस्थिती कळवा" } as Bi,
  //   name: { en: "Your Name", mr: "आपले नाव" } as Bi,
  //   phone: { en: "Contact Number", mr: "संपर्क क्रमांक" } as Bi,
  //   guests: { en: "Number of Guests", mr: "पाहुण्यांची संख्या" } as Bi,
  //   message: { en: "Your Message / Blessings", mr: "आपला संदेश / आशीर्वाद" } as Bi,
  //   submit: { en: "Send RSVP", mr: "उपस्थिती पाठवा" } as Bi,
  //   success: { en: "Thank you! Your RSVP has been received.", mr: "धन्यवाद! आपली उपस्थिती नोंदवली गेली आहे." } as Bi,
  // },

  footer: {
    love: { en: "With Love,", mr: "स्नेहपूर्वक," } as Bi,
    family: { en: "Khamkar Family", mr: "खामकर परिवार" } as Bi,
    date: { en: "9 . 7 . 2026", mr: "९ . ७ . २०२६" } as Bi,
    thanks: {
      en: "Thank You For Being Part Of Our Celebration",
      mr: "आमच्या आनंदसोहळ्याचा भाग झाल्याबद्दल मनःपूर्वक आभार",
    } as Bi,
  },
} as const;

export const MAP_QUERY = "Shivalay+Mangal+Karyalay+Pimpri+Kolandar+Shrigonda+Ahilyanagar";
export const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

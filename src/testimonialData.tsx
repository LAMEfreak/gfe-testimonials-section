import thumbnail from "./assets/profile-thumbnail.jpg";
import thumbnail1 from "./assets/profile-thumbnail_1.jpg";
import thumbnail2 from "./assets/profile-thumbnail_2.jpg";
import thumbnail3 from "./assets/profile-thumbnail_3.jpg";
import thumbnail4 from "./assets/profile-thumbnail_4.jpg";
import thumbnail5 from "./assets/profile-thumbnail_5.jpg";
import thumbnail6 from "./assets/profile-thumbnail_6.jpg";
import thumbnail7 from "./assets/profile-thumbnail_7.jpg";
import thumbnail8 from "./assets/profile-thumbnail_8.jpg";

export interface Testimonial {
  avatarImg: string;
  username: string;
  userHandle: string;
  cardMessage: string;
}

export const testimonials: Testimonial[] = [
  {
    avatarImg: thumbnail,
    username: "Sarah Dole",
    userHandle: "@sarahdole",
    cardMessage:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    avatarImg: thumbnail1,
    username: "John Appleseed",
    userHandle: "@johnaseed",
    cardMessage:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
  },
  {
    avatarImg: thumbnail2,
    username: "Jean Gray",
    userHandle: "@jeniic",
    cardMessage:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
  },
  {
    avatarImg: thumbnail3,
    username: "Jake Johnson",
    userHandle: "@jakejohnshon",
    cardMessage:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
  },
  {
    avatarImg: thumbnail4,
    username: "Igor Stravinsky",
    userHandle: "@igorstrav",
    cardMessage:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
  },
  {
    avatarImg: thumbnail5,
    username: "Declan Rice",
    userHandle: "@jeniic",
    cardMessage:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
  },
  {
    avatarImg: thumbnail6,
    username: "Marcus Thompson",
    userHandle: "@mthompson",
    cardMessage:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
  },
  {
    avatarImg: thumbnail7,
    username: "Oliver Neverloved",
    userHandle: "@olivernever",
    cardMessage:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
  },
  {
    avatarImg: thumbnail8,
    username: "Mark Dennis",
    userHandle: "@marked",
    cardMessage:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
  },
];

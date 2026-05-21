export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  ageRange: string;
  category: string;
  amazonQuery: string;
}

export const BOOKS: Book[] = [
  // --- Science & Nature ---
  {
    id: 1,
    title: "Ada Twist, Scientist",
    author: "Andrea Beaty",
    description:
      "Ada has a passion for science and asking questions. A celebration of curiosity, perseverance, and the scientific method.",
    ageRange: "3–7",
    category: "Science",
    amazonQuery: "Ada+Twist+Scientist+Andrea+Beaty",
  },
  {
    id: 2,
    title: "Rosie Revere, Engineer",
    author: "Andrea Beaty",
    description:
      "Rosie dreams of becoming a great engineer. A story about invention, failure, and trying again.",
    ageRange: "3–7",
    category: "Engineering",
    amazonQuery: "Rosie+Revere+Engineer+Andrea+Beaty",
  },
  {
    id: 3,
    title: "Iggy Peck, Architect",
    author: "Andrea Beaty",
    description:
      "Iggy has been building since he was two. A fun story about following your passion for architecture and design.",
    ageRange: "3–7",
    category: "Engineering",
    amazonQuery: "Iggy+Peck+Architect+Andrea+Beaty",
  },
  {
    id: 4,
    title: "The Most Magnificent Thing",
    author: "Ashley Spires",
    description:
      "A girl sets out to make the most magnificent thing, but it's not as easy as she thought. A story about creative perseverance.",
    ageRange: "3–7",
    category: "Engineering",
    amazonQuery: "Most+Magnificent+Thing+Ashley+Spires",
  },
  {
    id: 5,
    title: "Hello, World! Solar System",
    author: "Jill McDonald",
    description:
      "Bright, colorful introduction to the solar system for the youngest readers. Perfect first science book.",
    ageRange: "1–4",
    category: "Science",
    amazonQuery: "Hello+World+Solar+System+Jill+McDonald",
  },
  {
    id: 6,
    title: "Hello, World! Ocean Life",
    author: "Jill McDonald",
    description:
      "Explore the wonders of the ocean — from whales to coral reefs — in this board book for little ones.",
    ageRange: "1–4",
    category: "Nature",
    amazonQuery: "Hello+World+Ocean+Life+Jill+McDonald",
  },
  {
    id: 7,
    title: "Hello, World! Weather",
    author: "Jill McDonald",
    description:
      "Rain, snow, sunshine, and wind — a colorful introduction to weather for toddlers.",
    ageRange: "1–4",
    category: "Science",
    amazonQuery: "Hello+World+Weather+Jill+McDonald",
  },
  {
    id: 8,
    title: "Hello, World! Dinosaurs",
    author: "Jill McDonald",
    description:
      "Meet T. Rex, Triceratops, and more in this vibrant board book about dinosaurs.",
    ageRange: "1–4",
    category: "Science",
    amazonQuery: "Hello+World+Dinosaurs+Jill+McDonald",
  },
  {
    id: 9,
    title: "Hello, World! Birds",
    author: "Jill McDonald",
    description:
      "Discover robins, owls, penguins, and more in this colorful introduction to our feathered friends.",
    ageRange: "1–4",
    category: "Nature",
    amazonQuery: "Hello+World+Birds+Jill+McDonald",
  },
  {
    id: 10,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    description:
      "A timeless classic about a caterpillar's journey through food and transformation into a butterfly.",
    ageRange: "1–5",
    category: "Nature",
    amazonQuery: "Very+Hungry+Caterpillar+Eric+Carle",
  },
  {
    id: 11,
    title: "A Seed Is Sleepy",
    author: "Dianna Hutts Aston",
    description:
      "Gorgeous illustrations and lyrical text explore the fascinating world of seeds.",
    ageRange: "3–7",
    category: "Nature",
    amazonQuery: "Seed+Is+Sleepy+Dianna+Hutts+Aston",
  },
  {
    id: 12,
    title: "An Egg Is Quiet",
    author: "Dianna Hutts Aston",
    description:
      "Beautiful exploration of the many shapes, sizes, and colors of eggs from across the animal kingdom.",
    ageRange: "3–7",
    category: "Nature",
    amazonQuery: "Egg+Is+Quiet+Dianna+Hutts+Aston",
  },
  {
    id: 13,
    title: "A Rock Is Lively",
    author: "Dianna Hutts Aston",
    description:
      "From fossils to meteorites, this stunning book celebrates the world of rocks and geology.",
    ageRange: "3–7",
    category: "Science",
    amazonQuery: "Rock+Is+Lively+Dianna+Hutts+Aston",
  },
  {
    id: 14,
    title: "What Do You Do With an Idea?",
    author: "Kobi Yamada",
    description:
      "A child has an idea and nurtures it. A beautiful story about creativity, confidence, and changing the world.",
    ageRange: "3–7",
    category: "Curiosity",
    amazonQuery: "What+Do+You+Do+With+Idea+Kobi+Yamada",
  },
  {
    id: 15,
    title: "What Do You Do With a Problem?",
    author: "Kobi Yamada",
    description:
      "A child faces a problem and discovers that inside every problem is an opportunity.",
    ageRange: "3–7",
    category: "Curiosity",
    amazonQuery: "What+Do+You+Do+With+Problem+Kobi+Yamada",
  },
  {
    id: 16,
    title: "Women in Science",
    author: "Rachel Ignotofsky",
    description:
      "Profiles of 50 fearless women who changed the world through science. Beautifully illustrated.",
    ageRange: "4–8",
    category: "Science",
    amazonQuery: "Women+in+Science+Rachel+Ignotofsky",
  },

  // --- Math & Counting ---
  {
    id: 17,
    title: "Bathtime Mathtime",
    author: "Danica McKellar",
    description:
      "Counting, shapes, and patterns — all during bath time! Makes math feel like play.",
    ageRange: "1–4",
    category: "Math",
    amazonQuery: "Bathtime+Mathtime+Danica+McKellar",
  },
  {
    id: 18,
    title: "Goodnight, Numbers",
    author: "Danica McKellar",
    description:
      "A bedtime counting book that weaves numbers into a cozy goodnight routine.",
    ageRange: "1–4",
    category: "Math",
    amazonQuery: "Goodnight+Numbers+Danica+McKellar",
  },
  {
    id: 19,
    title: "Ten Magic Butterflies",
    author: "Danica McKellar",
    description:
      "Ten flower friends want to become butterflies, exploring number bonds and addition in a magical story.",
    ageRange: "2–5",
    category: "Math",
    amazonQuery: "Ten+Magic+Butterflies+Danica+McKellar",
  },
  {
    id: 20,
    title: "The Very Hungry Caterpillar's 123",
    author: "Eric Carle",
    description:
      "Learn to count with Eric Carle's beloved caterpillar in this bright board book.",
    ageRange: "1–3",
    category: "Math",
    amazonQuery: "Very+Hungry+Caterpillar+123+Eric+Carle",
  },
  {
    id: 21,
    title: "How Many Bugs?",
    author: "Agnese Baruzzi",
    description:
      "A fun lift-the-flap counting book filled with colorful insects. Great for little hands.",
    ageRange: "1–4",
    category: "Math",
    amazonQuery: "How+Many+Bugs+Agnese+Baruzzi",
  },
  {
    id: 22,
    title: "Mouse Shapes",
    author: "Ellen Stoll Walsh",
    description:
      "Three clever mice use shapes to outsmart a cat. A playful introduction to geometry.",
    ageRange: "2–5",
    category: "Math",
    amazonQuery: "Mouse+Shapes+Ellen+Stoll+Walsh",
  },
  {
    id: 23,
    title: "Not a Box",
    author: "Antoinette Portis",
    description:
      "A box is never just a box — it's a race car, a robot suit, a pirate ship! Celebrates imagination.",
    ageRange: "2–5",
    category: "Curiosity",
    amazonQuery: "Not+a+Box+Antoinette+Portis",
  },
  {
    id: 24,
    title: "Not a Stick",
    author: "Antoinette Portis",
    description:
      "A stick becomes a sword, a fishing rod, a paintbrush. Simple, clever, and endlessly imaginative.",
    ageRange: "2–5",
    category: "Curiosity",
    amazonQuery: "Not+a+Stick+Antoinette+Portis",
  },
  {
    id: 25,
    title: "How Much Is a Million?",
    author: "David M. Schwartz",
    description:
      "What does a million really look like? A mind-expanding book about big numbers.",
    ageRange: "4–8",
    category: "Math",
    amazonQuery: "How+Much+Is+Million+David+Schwartz",
  },
  {
    id: 26,
    title: "Shape by Shape",
    author: "Suse MacDonald",
    description:
      "Shapes transform piece by piece into a dinosaur — a clever puzzle book for toddlers.",
    ageRange: "2–5",
    category: "Math",
    amazonQuery: "Shape+by+Shape+Suse+MacDonald",
  },

  // --- Engineering & Building ---
  {
    id: 27,
    title: "If I Built a Car",
    author: "Chris Van Dusen",
    description:
      "Jack dreams up the most amazing car ever, with a pool, a snack bar, and jet engines!",
    ageRange: "3–7",
    category: "Engineering",
    amazonQuery: "If+I+Built+Car+Chris+Van+Dusen",
  },
  {
    id: 28,
    title: "If I Built a House",
    author: "Chris Van Dusen",
    description:
      "Jack designs his dream house with a racetrack, a flying room, and more. Inventive and fun.",
    ageRange: "3–7",
    category: "Engineering",
    amazonQuery: "If+I+Built+House+Chris+Van+Dusen",
  },
  {
    id: 29,
    title: "Goodnight, Goodnight, Construction Site",
    author: "Sherri Duskey Rinker",
    description:
      "Trucks wind down after a long day of building. A beloved bedtime story for vehicle-loving kids.",
    ageRange: "1–5",
    category: "Engineering",
    amazonQuery: "Goodnight+Goodnight+Construction+Site",
  },
  {
    id: 30,
    title: "Mighty, Mighty Construction Site",
    author: "Sherri Duskey Rinker",
    description:
      "The construction crew is back with new friends and new machines to build something mighty!",
    ageRange: "1–5",
    category: "Engineering",
    amazonQuery: "Mighty+Mighty+Construction+Site+Rinker",
  },
  {
    id: 31,
    title: "Baby Loves Structural Engineering!",
    author: "Ruth Spiro",
    description:
      "Introduces engineering concepts through stacking blocks. Science for the very youngest.",
    ageRange: "0–3",
    category: "Engineering",
    amazonQuery: "Baby+Loves+Structural+Engineering+Ruth+Spiro",
  },
  {
    id: 32,
    title: "Baby Loves Coding!",
    author: "Ruth Spiro",
    description:
      "Toddler-friendly introduction to coding concepts: sequences, patterns, and instructions.",
    ageRange: "0–3",
    category: "Coding",
    amazonQuery: "Baby+Loves+Coding+Ruth+Spiro",
  },
  {
    id: 33,
    title: "Baby Loves Gravity!",
    author: "Ruth Spiro",
    description:
      "Why do things fall down? A playful board book exploring gravity for babies and toddlers.",
    ageRange: "0–3",
    category: "Science",
    amazonQuery: "Baby+Loves+Gravity+Ruth+Spiro",
  },
  {
    id: 34,
    title: "Baby Loves Green Energy!",
    author: "Ruth Spiro",
    description:
      "Introduces solar and wind power with bright illustrations. STEM concepts made accessible.",
    ageRange: "0–3",
    category: "Science",
    amazonQuery: "Baby+Loves+Green+Energy+Ruth+Spiro",
  },
  {
    id: 35,
    title: "Baby Loves Quarks!",
    author: "Ruth Spiro",
    description:
      "What is everything made of? A charming introduction to atoms and quarks for little ones.",
    ageRange: "0–3",
    category: "Science",
    amazonQuery: "Baby+Loves+Quarks+Ruth+Spiro",
  },

  // --- Exploration & Curiosity ---
  {
    id: 36,
    title: "The Dot",
    author: "Peter H. Reynolds",
    description:
      'Vashti thinks she can\'t draw. Her teacher says "Just make a mark." A powerful story about creative confidence.',
    ageRange: "3–7",
    category: "Curiosity",
    amazonQuery: "The+Dot+Peter+Reynolds",
  },
  {
    id: 37,
    title: "Going Places",
    author: "Peter H. Reynolds",
    description:
      "Everyone gets the same go-cart kit, but one girl builds something entirely different. Celebrates originality.",
    ageRange: "3–7",
    category: "Curiosity",
    amazonQuery: "Going+Places+Peter+Reynolds",
  },
  {
    id: 38,
    title: "The Giving Tree",
    author: "Shel Silverstein",
    description:
      "A tree gives everything to a boy she loves. A timeless story about generosity and love.",
    ageRange: "3–8",
    category: "Curiosity",
    amazonQuery: "Giving+Tree+Shel+Silverstein",
  },
  {
    id: 39,
    title: "Never Smile at a Monkey",
    author: "Steve Jenkins",
    description:
      "Fascinating and surprising animal facts about dangerous creatures. Stunning collage illustrations.",
    ageRange: "3–7",
    category: "Nature",
    amazonQuery: "Never+Smile+Monkey+Steve+Jenkins",
  },
  {
    id: 40,
    title: "How Does a Butterfly Grow?",
    author: "DK",
    description:
      "Follow the life cycle of a butterfly with beautiful photographs and simple text.",
    ageRange: "2–5",
    category: "Nature",
    amazonQuery: "How+Does+Butterfly+Grow+DK",
  },
  {
    id: 41,
    title: "Robots, Robots Everywhere!",
    author: "Sue Fliess",
    description:
      "Robots at home, in space, and underwater! A fun rhyming book about technology and robotics.",
    ageRange: "2–5",
    category: "Coding",
    amazonQuery: "Robots+Robots+Everywhere+Sue+Fliess",
  },
  {
    id: 42,
    title: "Touch & Learn: Things that Go",
    author: "Becky Davies",
    description:
      "Textured pages and bright pictures of vehicles — cars, trains, planes, and more. Great for sensory play.",
    ageRange: "1–3",
    category: "Engineering",
    amazonQuery: "Touch+Learn+Things+That+Go+Becky+Davies",
  },
];

export const CATEGORIES = [
  "All",
  "Science",
  "Nature",
  "Math",
  "Engineering",
  "Coding",
  "Curiosity",
];

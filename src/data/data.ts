export const faqData = [
  {
    title: "Item 1",
    content:
      "Lorem ipsum dolor amet gastropub church-key gentrify actually tacos. Vegan taxidermy freegan before they sold out kickstarter copper mug iceland selvage blog prism. 8-bit vice drinking vinegar stumptown locavore. Microdosing unicorn typewriter sartorial cornhole. Man bun venmo cronut wolf shaman offal truffaut. Chillwave vinyl pug distillery adaptogen man bun tofu retro hammock kogi tbh jean shorts organic. Craft beer vinyl etsy, portland microdosing chicharrones lumbersexual crucifix cronut gentrify four loko tousled fingerstache.",
  },
  {
    title: "Item 2",
    content:
      "Slow-carb knausgaard health goth kombucha tousled four loko. Messenger bag cronut +1, four loko williamsburg you probably haven't heard of them bicycle rights taiyaki ramps squid vaporware. Green juice typewriter master cleanse distillery viral wayfarers asymmetrical quinoa health goth semiotics succulents kinfolk pork belly shaman. Cronut salvia farm-to-table kickstarter shaman cloud bread echo park.",
  },
  {
    title: "Item 3",
    content:
      "Health goth humblebrag live-edge meggings pork belly actually ugh kombucha banh mi plaid etsy waistcoat. Hammock celiac crucifix tousled, dreamcatcher tbh truffaut direct trade cliche synth hot chicken palo santo pork belly man bun retro. Art party +1 live-edge occupy iceland selfies beard fanny pack godard 90's messenger bag. Bushwick irony umami woke. Kale chips raw denim austin, food truck flexitarian 90's deep v. Locavore green juice cold-pressed hexagon copper mug vegan sriracha man bun la croix photo booth forage. Succulents migas irony hella mumblecore keytar waistcoat aesthetic cornhole shabby chic tumblr semiotics readymade.",
  },
  {
    title: "Item 4",
    content:
      "Tbh next level subway tile ennui cloud bread. Master cleanse vaporware food truck, authentic distillery meggings ugh activated charcoal iceland gastropub fam. Raw denim direct trade pinterest keytar fam echo park wolf four dollar toast glossier kitsch taiyaki 8-bit austin. Brunch pinterest raw denim banh mi, bushwick organic artisan synth poutine man bun scenester. Occupy chartreuse food truck banh mi affogato shaman.",
  },
  {
    title: "Item 5",
    content:
      "Aesthetic tofu dreamcatcher lumbersexual jianbing poke PBR&B kogi heirloom. Sartorial artisan synth tacos vegan bushwick, lomo thundercats VHS disrupt bespoke scenester. Copper mug taiyaki occupy, coloring book drinking vinegar taxidermy direct trade intelligentsia quinoa raw denim succulents. Dreamcatcher copper mug fanny pack yuccie art party hoodie, ugh portland.",
  },
  {
    title: "Item 6",
    content: "Oh. You need a little dummy text for your mockup? How quaint.",
  },
];

export const url = "http://localhost:8000/api";
export const contactUrl = "http://localhost:8000/contact";
export const packagesUri = "http://localhost:8000/packages";
export const invoiceUrl = "http://localhost:8000/createInvoice";
export const paymentUri = "http://localhost:8000/payment";
export const countriesList = [
  { value: "IRL", label: "אירלנד" },
  { value: "CH", label: "שוויץ" },
  { value: "RO", label: "רומניה" },
];
export const packages = [
  {
    name: "package1", // string
    countries: ["IRL", "RO", "SUE"], //string[] However, to display we would need to map the code names onto display names. so optionally:
    countriesData: [
      { value: "IRL", label: "אירלנד" },
      { value: "CH", label: "שוויץ" },
      { value: "RO", label: "רומניה" },
    ],
    gb: 9, //number
  },
  {
    name: "package2",
    countries: ["CH", "IRL"],
  },
  {
    name: "package3",
    countries: ["RO", "IRL", "IL"],
  },
];

export const hebrewVersion = {
  email: "אמייל",
  name: "",
  sim: "מספר הטלפון",
};

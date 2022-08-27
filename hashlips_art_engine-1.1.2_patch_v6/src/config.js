const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "This is a practice NFT collection by JAVSWB Studios, this shouldn't be taken seriously and nothing on here should be bought with real ETH. I am a JR blockchain developer trying to understand the ecosystem crypto has.";
const baseUri = "ipfs://Qmepom3rLQdygoN3bKPMJCqiezPJ95xvGnhKeHfzhTyYzJ"; // to update base uri then we will update this and run
// node utils/update_info.js to change the baseURI that point to the ipfs

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,  // this is how we are creating the collection itself. If we have enough folders in the layers then we can have a lot come out of this program
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
  // {
  //   growEditionSizeTo: 20, // or 12 for rarity to this part of the NFT,  // will need to grow the addition size to 20 after the first 10 
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Eyeball" },
  //     { name: "Eye color" },
  //     { name: "Iris" },
  //     { name: "Shine" },
  //     { name: "Bottom lid gold" }, // will run program separately with more art in variation. 
  //     { name: "Top lid gold" }, // will have gold lids instead of the traditional purple.
  //   ],
  // },
];

const shuffleLayerConfigurations = false; // to get a mixture of images between renders when we mint the NFT's

const debugLogs = false;

const format = { // format the png size to portrait or landscape 
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = { // background can be changed if there is no background put in the layers
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {}; // can put extra medatata as in artist or extra data that fits the opensea standard

const rarityDelimiter = "#"; // different delimiter in the rarity rate. in the files we have # before the rarity rate

const uniqueDnaTorrance = 10000;

const preview = {// done from utilities preview
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

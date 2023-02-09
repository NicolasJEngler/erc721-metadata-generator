import fs from 'fs';

for (let index = 1; index <= 500; index++) {
  const metadata = {
    "token_id": index,
    "name": `NFT #${index}`,
    "description": "This is a generic description for the NFT metadata generator.",
    "image": `ipfs://InputYourCIDHere/${index}.png`,
    "animation_url": `ipfs://InputYourCIDHere/${index}.mp4`,
    "attributes": [
      {
        "trait_type": "Edition",
        "value": `#${index}`
      }
    ]
  }
  
  fs.writeFile(`metadata/${index}`, JSON.stringify(metadata), (err) => {
    if (err)
      console.log(err);
    else {
      console.log('File written successfully');
    }
  });
}
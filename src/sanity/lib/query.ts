import { defineQuery } from "next-sanity";


// export const allProducts = defineQuery(

//     `*[_type=="product"]{
//         _id,
//           status,
//           productName,
//           category,
//           description,
//           colors,
//           price,
//           inventory,
//           "imageUrl" : image.asset->url
          
          
//     }`

// )




////////////////////////////////// testing /////////////

export const allProducts = defineQuery( `
  *[_type == "product"]{
    _id,
    productName,
    description,
    price,
    status,
    category,
    "imageUrl": image.asset->url,
    slug,
  }
`)

export const singleProductQuery = defineQuery( `
  *[_type == "product" && _id == $id][0]{
    _id,
    productName,
    description,
    price,
    status,
    category,
    "imageUrl": image.asset->url,
    slug,
  }
`)

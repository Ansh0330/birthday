import React from "react";
import DomeGallery from "./DomeGallery";

const images = [
  "https://ik.imagekit.io/ansh3003/dome/6bbb4afc-303d-4f0d-bbec-a205758fbb78.jpg?updatedAt=1761557271971",
  "https://ik.imagekit.io/ansh3003/dome/2e9483fa-431c-44d3-9350-70ec0ab608ec.jpg?updatedAt=1761557271943",
  "https://ik.imagekit.io/ansh3003/dome/3e2d3cb0-e435-4c35-8a3c-8ef90ffefb11.jpg?updatedAt=1761557271904",
  "https://ik.imagekit.io/ansh3003/dome/242d9e3d-ccd2-4738-bd75-535cf6cc7b93.jpg?updatedAt=1761557271941",
  "https://ik.imagekit.io/ansh3003/dome/29245ab5-6afd-48cf-ab7e-df595a937c59.jpg?updatedAt=1761557271839",
  "https://ik.imagekit.io/ansh3003/dome/951d2c69-839b-4511-b1db-77c54cf37505.jpg?updatedAt=1761557271846",
  "https://ik.imagekit.io/ansh3003/dome/b6ffee1b-de79-4f91-868e-6d0832c2c29d.jpg?updatedAt=1761557271795",
  "https://ik.imagekit.io/ansh3003/dome/c5f6b0fe-002d-461e-8019-6235e0f54379.jpg?updatedAt=1761557271730",
  "https://ik.imagekit.io/ansh3003/dome/c348d75d-77f2-4e77-b4a2-01cf47837826.jpg?updatedAt=1761557271732",
  "https://ik.imagekit.io/ansh3003/dome/037378a1-5e27-4f17-9e15-aed6e0fd64ba.JPG?updatedAt=1761557271619",
  "https://ik.imagekit.io/ansh3003/dome/2cb6b322-63d9-47a1-9a4c-c528fb7681ea.JPG?updatedAt=1761557271539",
  "https://ik.imagekit.io/ansh3003/dome/69c2ff94-4830-4152-b22a-003e1ace8c41.JPG?updatedAt=1761557271573",
  "https://ik.imagekit.io/ansh3003/dome/33718bd6-9b61-4783-82ff-07a35d1d976b.JPG?updatedAt=1761557271474",
  "https://ik.imagekit.io/ansh3003/dome/eff4a4a8-5638-4da2-b4a4-a63c06d0acee.JPG?updatedAt=1761557271439",
  "https://ik.imagekit.io/ansh3003/dome/b9ee3220-5fd3-4fd3-b980-188ee746022e.JPG?updatedAt=1761557271433",
  "https://ik.imagekit.io/ansh3003/dome/IMG_6811.JPG?updatedAt=1761557271425",
  "https://ik.imagekit.io/ansh3003/dome/d4e443c0-8773-408a-adb7-dd48f4156661.JPG?updatedAt=1761557271369",
  "https://ik.imagekit.io/ansh3003/dome/4fdb06a5-a4c9-4569-a68a-29d533307f6b.jpg?updatedAt=1761557271134",
  "https://ik.imagekit.io/ansh3003/dome/bd2e3100-cd3c-4d52-9ccd-98c58c53f7cf.JPG?updatedAt=1761558656746",
  "https://ik.imagekit.io/ansh3003/dome/IMG_3875.JPG?updatedAt=1761558656781",
  "https://ik.imagekit.io/ansh3003/dome/79D404EC-A95B-48A2-9C74-7D52022F2535%202.JPEG?updatedAt=1761558657202",
  "https://ik.imagekit.io/ansh3003/dome/3A895BFC-EB6D-4883-99F4-2F07FC3D58B9.JPG?updatedAt=1761558657215",
  "https://ik.imagekit.io/ansh3003/dome/IMG_7727.JPG?updatedAt=1761558657399",
  "https://ik.imagekit.io/ansh3003/dome/4D0DE288-EA26-4AD0-BAA6-6A1539C928DE.JPG?updatedAt=1761558657393",
  "https://ik.imagekit.io/ansh3003/dome/D2AC4D10-7F6F-420F-B196-661252F4C32C.JPG?updatedAt=1761558657346",
  "https://ik.imagekit.io/ansh3003/dome/IMG_3462.JPG?updatedAt=1761558657358",
  "https://ik.imagekit.io/ansh3003/dome/IMG_2652.JPG?updatedAt=1761558657373",
  "https://ik.imagekit.io/ansh3003/dome/DCE81395-2667-48AE-BC8D-7F245D61F7D9.JPEG?updatedAt=1761558657372",
  "https://ik.imagekit.io/ansh3003/dome/6EAFE17D-46FB-4AB0-9EC3-CA360C143784.JPG?updatedAt=1761558657375",
  "https://ik.imagekit.io/ansh3003/dome/IMG_4922.JPG?updatedAt=1761558657376",
  "https://ik.imagekit.io/ansh3003/dome/99B98682-7008-4FEB-904D-1C986A6ABCB5.JPEG?updatedAt=1761558657377",
  "https://ik.imagekit.io/ansh3003/dome/7E276F27-556A-4885-B396-658C1A30810A.JPG?updatedAt=1761558657469",
];

const DomeSection = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1 className="text-6xl font-bold text-center mt-10 mb-8 bg-gradient-to-r from-white via-pink-100 to-rose-50 bg-clip-text text-transparent tracking-wide">
        A Gallery of Your Graces
      </h1>

      <DomeGallery grayscale={false} images={images} segments={30} fit={1} openedImageHeight="600px" />
    </div>
  );
};

export default DomeSection;

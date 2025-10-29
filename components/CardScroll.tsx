import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";

export const CardScroll = () => {
  const customCards = [
    {
      id: "project-1",
      image: "https://ik.imagekit.io/ansh3003/dome/33718bd6-9b61-4783-82ff-07a35d1d976b.JPG?updatedAt=1761557271474",
      alt: "Project 1",
    },
    {
      id: "project-2",
      image: "https://ik.imagekit.io/ansh3003/dome/9b0e8337-5992-48c4-a8a9-b8bb9c82c65d.JPG?updatedAt=1761557271053",
      alt: "Project 2",
    },
    {
      id: "project-3",
      image: "https://ik.imagekit.io/ansh3003/dome/b9ee3220-5fd3-4fd3-b980-188ee746022e.JPG?updatedAt=1761557271433",
      alt: "Project 3",
    },
  ];

  return (
    <div className="h-screen w-full bg-gray-900 ">
      <StickyCard002
        cards={customCards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div>
    
  );
};

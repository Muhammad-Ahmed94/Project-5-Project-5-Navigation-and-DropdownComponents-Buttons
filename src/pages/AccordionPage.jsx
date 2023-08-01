import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Shopify",
      content: "E-commerce platform for buying and selling products",
    },
    {
      id: "2",
      label: "YouTube",
      content: "A E-Media platform to create and watch content",
    },
    {
      id: "3",
      label: "Instagram",
      content:
        "A E-Media platform to create and watch short form content and posts",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;

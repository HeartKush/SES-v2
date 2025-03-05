import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import "./card.css";
const App = ({ picturesObject }) => {
  return (
    <div className="flex w-full md:w-7/8 flex-col">
      <Tabs
        color="slate-950"
        aria-label="Options"
        classNames={{
          tabList:
            "border-b border-divider flex-wrap mx-auto gap-0 bg-neutral-100 w-full lg:w-1/2 lg:flex-nowrap",
          cursor: "bg-blue-950",
          panel: "w-1/2 mx-auto",
          base: "",
          tab: "h-10",
          tabContent: "text-slate-950",
        }}
      >
        {Object.entries(picturesObject).map(([tabKey, pictures]) => (
          <Tab className="text-lg text-black"  key={tabKey} title={tabKey}>
            <Card className="bg-transparent shadow-none pt-4">
              <CardBody className="flex-row flex-wrap justify-evenly gap-5">
                {pictures.map((picture) => (
                  <div
                    className="shake-vertical card-container  hover:animate-none"
                    key={picture.alt}
                  >
                    <div className="card">
                      <div className="front-content">
                        <img src={picture.src} alt={picture.alt} />
                      </div>
                      <div className="content px-5 py-4">
                        <p className="heading text-center">{picture.title}</p>
                        <p className="text sm:text-lg text-slate-950 2xl:text-lg">
                          {picture.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;

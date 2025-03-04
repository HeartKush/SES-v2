import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import "./card.css"
const App = ({ picturesObject }) => {
  return (
    <div className="flex w-full md:w-7/8 flex-col">
      <Tabs
        color=""
        aria-label="Options"
        classNames={{
          tabList:
            "border-b border-divider flex-wrap mx-auto gap-0 bg-slate-500/10 w-full lg:w-fit lg:flex-nowrap",
          cursor: "bg-[#03a9f4]",
          panel: "",
          base: "",
          tab: "w-1/2 h-10" 
        }}
      >
        {Object.entries(picturesObject).map(([tabKey, pictures], index) => (
          <Tab className="text-lg !text-black" key={index}  title={tabKey}>
            <Card className="bg-transparent !text-black shadow-none lg:w-4/6 mx-auto">
              <CardBody className="flex-row flex-wrap justify-evenly gap-5">
                
                {pictures.map((picture, pictureIndex) => (
                  <div class="shake-vertical card-container" key={pictureIndex}>
                    <div class="card">
                      <div class="front-content">
                        <img src={picture.src} alt={picture.alt} />
                      </div>
                      <div class="content px-5 py-2">
                        <p class="heading text-center">{picture.title}</p>
                        <p class="text sm:text-lg text-white 2xl:text-lg">{picture.description}</p>
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

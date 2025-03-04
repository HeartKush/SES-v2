import { Card, CardHeader,CardFooter, Image, Chip, Avatar } from "@nextui-org/react";
const App = ({ projectsObject }) => {
    if (!projectsObject) {
        return <div>No hay proyectos disponibles</div>;
    }
    const renderCard = (project, index) => {
        const cardSizes = [
            "w-full h-[300px] col-span-12 sm:col-span-5",
            "w-full h-[300px] col-span-12 sm:col-span-7",
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
            "w-full h-[300px] col-span-12 sm:col-span-7",
            "w-full h-[300px] col-span-12 sm:col-span-5",
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
            "col-span-12 sm:col-span-4 h-[300px]",
        ];
        const cardSize = cardSizes[index % cardSizes.length];
        return (
            <Card key={index} className={`shadow-md shadow-fuchsia-500/20 ${cardSize}`} isPressable onPressEnd={() => window.open(project.href, '_blank')}>
                <CardHeader className="absolute z-10 top-1 flex-col items-start gap-2">
                    <Chip
                        key={index}
                        variant="bordered"
                        classNames={{
                            base: "border-none bg-slate-700/90",
                            content: "drop-shadow shadow-black text-white",
                        }}
                    >
                        {project.title}
                    </Chip>
                </CardHeader>
                <Image
                    removeWrapper
                    alt={project.alt}
                    className={`z-0 w-full h-full ${project.className}`}
                    src={project.src}
                />
                <CardFooter className="absolute bottom-0 z-10 gap-1 flex justify-end flex-wrap-reverse">
                    {project.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            variant="bordered"
                            classNames={{
                                base: "border-none bg-fuchsia-700/90",
                                content: "drop-shadow shadow-black text-white",
                            }}
                            avatar={
                                <Avatar
                                    tabIndex={undefined}
                                    name={tag.name}
                                    src={tag.src}
                                    alt={tag.alt}
                                />
                            }
                        >
                            {tag.name}
                        </Chip>
                    ))}
                </CardFooter>
            </Card>
    );
    };

    return (

        <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {projectsObject.map((project, index) => renderCard(project, index))}
        </div>
    );
};

export default App;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Avatar, Card, CardFooter, CardHeader, Chip, Image} from "@nextui-org/react";
import { Pagination } from 'swiper/modules';

const Slider = ({ projectsObject }) => {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="w-full"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log(projectsObject)}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {projectsObject.map((project, index) => (
                <SwiperSlide key={`slide-${index}`}>
                    <Card key={`card-${index}`} className={`shadow-md shadow-fuchsia-500/20 col-span-12 sm:col-span-4 h-[300px]`}  isPressable={false} onPressEnd={() => window.open(project.href, '_blank')}>
                        <CardHeader className="absolute z-10 top-1 flex-col items-start gap-2">
                            <Chip
                                key={`chip-${index}`}
                                variant="bordered"
                                classNames={{
                                    base: "border-none bg-slate-700/90",
                                    content: "drop-shadow shadow-black text-white flex items-center",
                                }}
                            >
                                <a className="flex items-center" href={project.href} target="_blank">
                                    {project.title}
                                    <Avatar
                                        src={project.icon}
                                        classNames={{
                                            base: "bg-transparent",
                                            img: "text-black/80 w-[20px]",
                                        }}
                                    />
                                </a>


                            </Chip>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt={project.alt}
                            className={`z-0 w-full h-full ${project.className}`}
                            src={project.src}
                        />
                        <CardFooter className="absolute bottom-0 z-10 gap-4 flex justify-end">
                            {project.tags.map((tag, tagIndex) => (
                                <Avatar
                                    key={`avatar-${index}-${tagIndex}`}
                                    isBordered color="secondary"
                                    size="sm"
                                    tabIndex={undefined}
                                    name={tag.name}
                                    src={tag.src}
                                    alt={tag.alt}
                                />
                            ))}
                        </CardFooter>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;

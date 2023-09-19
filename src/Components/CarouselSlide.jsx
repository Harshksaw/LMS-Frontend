

export default function CarouselSlide({image , title , description , slideNumber, totalSlides}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">

    <div className="flex flex-row items-center justify-center gap-4 px-[25%]">
        <div><img src={image} className="w-90 rounded-full border-2 border-gray-400" /></div>
        <p className="text-xl text-gray-200">
            {description}
        </p>
        <h3 className="absolute flex flex-row justify-between transform -translate-y-1/2 left-10 top-2 text-yellow-300 "> {title}</h3>
        <div className="absolute w-[90%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${(slideNumber ==1 ? totalSlides :(slideNumber - 1))}`} className="btn btn-circle">
                ❮
            </a>
            <a href= {`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle">
                ❯
            </a>
        </div>
    </div>
</div>
  )
}

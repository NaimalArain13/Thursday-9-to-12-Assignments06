import TestimonialCard, { TestimonialsProps } from "@/components/testimonials";

export default function Testimonials() {
    const testimonials: TestimonialsProps[] = [
        {
            description: "The courses provided here are simply amazing! I learned so much about web development and felt fully supported throughout my journey.",
            image: "/images/team1.svg",
            name: "James Neduku",
            designation: "Software Developer"
        },
        {
            description: "I really appreciated the hands-on projects and the personalized feedback from instructors. It helped me gain real-world skills.",
            image: "/images/team3.svg",
            name: "Erick Kipkemboi",
            designation: "Scrum Master"
        },
        {
            description: "The UI/UX design course was a game-changer for me. I now have the confidence to work on my own design projects, thanks to the guidance and resources provided.",
            image: "/images/team6 (2).svg",
            name: "Stephen Karubo",
            designation: "UI/UX Designer"
        },
    ];

    return (
        <div className="flex w-full max-w-[1280px] bg-secondary flex-col min-h-screen items-center gap-y-4 py-12 ">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-center block sm:hidden">
                    What Our Students Say
                </h1>
                <h1 className="text-4xl font-bold mb-4 text-center hidden sm:block">
                    Customer Testimonials
                </h1>
            </div>
            <p className="text-gray-600 mb-10 max-w-xl text-center mx-auto">
                Hear from some of our amazing students who have transformed their careers through our courses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-8  max-w-6xl ">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
}

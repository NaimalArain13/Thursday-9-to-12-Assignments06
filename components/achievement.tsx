import React from "react";

function Achievements() {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-7">
          <h1 className="text-2xl md:text-[48px] font-bold">Our Achivements</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl">+200</h1>
              <p className="text-gray-600 mt-2">Courses</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl">50K</h1>
              <p className="text-gray-600 mt-2">Mentors</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl">370K</h1>
              <p className="text-gray-600 mt-2">Students</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl">100+</h1>
              <p className="text-gray-600 mt-2">Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

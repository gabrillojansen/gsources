import React from 'react'

export const Banner = () => {
  return (
    <div className="w-full p-16 bg-[--hero-bg] text-center md:text-left">
        <div>
            <div className="mb-8">
                <h1 className="text-5xl font-extrabold text-[--hero-title]">Gsources</h1>
            </div>
            <div>
                <p className="text-[--hero-description] font-semibold">Enhance your web design skills for free. Explore our curated collection of <br />
                templates, assets, tutorials, and expert insights. Unlock your creativity and <br />
                design without limits!</p>
            </div>
        </div>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";


export default function Skill(){
    const [skillData, setSkill] = useState("");

    useEffect (() => {
        sanityClient
        .fetch(`*[_type == "skill"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
        )
        .then((data) => setSkill(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="h1 text-5xl flex justify-center cursive">My Skills</h1>
                <h2 className="h2 text-lg text-gray-600 flex justify-center mb-12"><br />Check out my Technical Skills</h2>
                <div className="skills-div grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillData && skillData.map((skill, index) => (
                    <article>
                        <span className="skills-span block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                            <img 
                            src={skill.mainImage.asset.url}
                            alt={skill.mainImage.alt}
                            className="w-full h-full rounded-r object-contain absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="skills-title rounded">{skill.title}</h3>
                            </span>
                        </span>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
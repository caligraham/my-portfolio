import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import aboutMe from "../aboutme.jpg"

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);
    if (!author) return <div>Loading....</div>;
    return (
        <main>
            <img />
            <div>
                <section>
                    <img />
                    <div>
                        <h1></h1>
                        <div>
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
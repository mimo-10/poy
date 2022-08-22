let data = {
    works: [
        ["project title", "Project info eg type, skills, technology", 3.6, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.9, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.1, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.2, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.2, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.8, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.8, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.6, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 3, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 3.5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 3.3, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480", "https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at dis parturient montes, nascetur ridiculus mus.", ["https://picsum.photos/680/480"]],
        ["project title", "Project info eg type, skills, technology", 4.5, "Add a longer description of your project here. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. mus.", ["https://picsum.photos/680/480"]],
    ],
    about: {
        description: "Add a brief introduction here.Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        education: ["Qualification title (2016)", "BA (Getting It Done), University of Life, Earth (2013)", "Graduate Cert IV, School of Hard Knocks, Earth (2010)"],
        skills: [
            ["Skill with graph component", "To publish, you’ll need to set the graph values, then detach the Figma component instance and flatten the ellipse value layer.", 4.8],
            ["Flattened graph vector", "This one has had the graph detached and its value ellipsis flattened (CMD+E) so it can render the vector image correctly when we publish.", 3.8],
            ["Flex wrap within card", "Each card is a uniquely-named Buzzy layout component with flex wrap turned on, and its text column is another uniquely-named Buzzy layout component with a max width defined.", 4.9]
        ],
        history: [
            ["2016+", "Company name"],
            ["2014-2016", "Whitford, Whitford and Wimplethorpe"],
            ["2011-2014", "Acme Corp"],
            ["2010-2011", "Freelance / contracting"]
        ],
        info : [
            ["12", "years work exprience"],
            ["110+", "completed projects"],
            ["60+", "happy customers"]
        ]
    }
}

function updateData(store) {
    return (data = store);
}


export {
    data,
    updateData}

